import { CompletionItem, CompletionItemKind, CompletionItemTag, InsertTextFormat, MarkupKind, Position, TextDocumentPositionParams, TextEdit } from 'vscode-languageserver';
import { Range, TextDocument } from 'vscode-languageserver-textdocument';
import { documents, getDocumentSettings, documentInfo } from './server';
import { Token, TokenIterator, TokenKind, globals } from 'squirrel';
import { StringParam } from 'squirrel/src/globals';

function convertOffsetsToRange(document: TextDocument, start: number, end: number): Range {
	return {
		start: document.positionAt(start),
		end: document.positionAt(end)
	}
}

enum DocKind {
	Keywords,
	Methods,
	DeprecatedMethods,
	Functions,
	DeprecatedFunctions,
	Events,
	BuiltInConstants,
	BuiltInVariables,
	InstancesMethods,
	InstancesVariables,
	DocSnippets
}

const docKindToDocs = new Map<DocKind, globals.Docs>([
	[DocKind.Methods, globals.methods],
	[DocKind.DeprecatedMethods, globals.deprecatedMethods],
	[DocKind.Functions, globals.functions],
	[DocKind.DeprecatedFunctions, globals.deprecatedFunctions],
	[DocKind.Events, globals.events],
	[DocKind.BuiltInConstants, globals.builtInConstants],
	[DocKind.BuiltInVariables, globals.builtInVariables],
	[DocKind.InstancesMethods, globals.otherMethods],
	[DocKind.InstancesVariables, globals.otherVariables],
	[DocKind.DocSnippets, globals.docSnippets]
]);

type CompletionCache = {
	modifyRange?: Range;
	searchResult: {
		token: Token | null;
		index: number;
	}
}

const completionCache = new Map<string, CompletionCache>();

export async function onCompletionHandler(params: TextDocumentPositionParams): Promise<CompletionItem[]> {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return [];
	}

	const settings = await getDocumentSettings(document.uri);
	if (!settings.enableCompletions) {
		return [];
	}

	const info = documentInfo.get(document.uri);
	if (!info) {
		return [];
	}
	const lexer = info.lexer;
	
	const position = params.position;
	const offset = document.offsetAt(position);

	const result = lexer.findTokenAtPosition(offset - 1);


	const cache: CompletionCache = {
		searchResult: result
	}
	completionCache.set(document.uri, cache);


	if (result.token) {
		const kind = result.token.kind;
		if (kind === TokenKind.LINE_COMMENT || kind === TokenKind.BLOCK_COMMENT) {
			return [];
		}

		if (kind === TokenKind.DOC) {
			const items: CompletionItem[] = [];
			addCompletionItems(document.uri, items, DocKind.DocSnippets, CompletionItemKind.Snippet);
			return items;
		}
		
		if ((kind === TokenKind.STRING || kind === TokenKind.VERBATIM_STRING) && result.token.end != offset) {
			const iterator = new TokenIterator(lexer.getTokens(), result.index - 1);
			const items = stringCompletion(document.uri, result.token.value, iterator);
			if (items) {
				cache.modifyRange = convertOffsetsToRange(document, result.token.start, result.token.end);
				return items;
			}
		}
	}

	const items: CompletionItem[] = [];
	
	const iterator = new TokenIterator(lexer.getTokens(), result.index);

	const kind = declarationKind(iterator);
	if (kind === TokenKind.LOCAL) {
		return [{
			label: "function",
			kind: CompletionItemKind.Keyword,
			data: { uri: document.uri }
		}];
	} else if (kind === TokenKind.FUNCTION) {
		return [{
			label: "constructor",
			kind: CompletionItemKind.Keyword,
			data: { uri: document.uri }
		}];
	} else if (kind) {
		return [];
	}

	iterator.setIndex(result.index);

	const dotRange = getDotRange(iterator, offset);

	if (dotRange) {
		const name = iterator.readIdentity(false);
		if (name) {
			const methods = globals.instancesMethods.get(name);
			if (methods) {
				addCompletionItems(document.uri, items, DocKind.InstancesMethods, CompletionItemKind.Method, methods);
				return items;
			}

			const variables = globals.instancesVariables.get(name);
			if (variables) {
				addCompletionItems(document.uri, items, DocKind.InstancesVariables, CompletionItemKind.EnumMember, variables);
				return items;
			}

			// If we have not found this instance name in our saved completions then we assume it has every other method
			addCompletionItems(document.uri, items, DocKind.Methods, CompletionItemKind.Method);
			addCompletionItems(document.uri, items, DocKind.Events, CompletionItemKind.Event);
			addCompletionItems(document.uri, items, DocKind.DeprecatedMethods, CompletionItemKind.Method);

			return items;
		}
		// No name but a dot means that we're searching for a shortcut
		// If the last symbol was closing paranthesis it means that we have a method call which could return an entity
		// Or we've possibly done table/class accessing with []

		const lastToken = iterator.next();
		if (!lastToken || lastToken.kind !== TokenKind.RIGHT_ROUND && lastToken.kind !== TokenKind.RIGHT_SQUARE) {
			addCompletionItems(document.uri, items, DocKind.InstancesMethods, CompletionItemKind.Method);
			addCompletionItems(document.uri, items, DocKind.InstancesVariables, CompletionItemKind.EnumMember);
			cache.modifyRange = convertOffsetsToRange(document, dotRange.start, dotRange.end);

			return items;
		}

		addCompletionItems(document.uri, items, DocKind.Methods, CompletionItemKind.Method);
		addCompletionItems(document.uri, items, DocKind.Events, CompletionItemKind.Event);
		addCompletionItems(document.uri, items, DocKind.DeprecatedMethods, CompletionItemKind.Method);

		return items;
	}


	addCompletionItems(document.uri, items, DocKind.Functions, CompletionItemKind.Function);
	addCompletionItems(document.uri, items, DocKind.Events, CompletionItemKind.Event);
	addCompletionItems(document.uri, items, DocKind.DeprecatedFunctions, CompletionItemKind.Function);

	addCompletionItems(document.uri, items, DocKind.BuiltInConstants, CompletionItemKind.Constant);
	addCompletionItems(document.uri, items, DocKind.BuiltInVariables, CompletionItemKind.Variable);

	// It's possible to rescope your methods so that they appear as global functions
	// In this case we always stick to show available methods which are bound to instances
	addCompletionItems(document.uri, items, DocKind.InstancesMethods, CompletionItemKind.Method);
	addCompletionItems(document.uri, items, DocKind.InstancesVariables, CompletionItemKind.EnumMember);

	addPlainCompletionItems(document.uri, items, CompletionItemKind.Keyword, globals.keywords);

	return items;
}

function addPlainCompletionItems(uri: string, items: CompletionItem[], completionItemKind: CompletionItemKind, docs: Set<string>) {
	for (const item of docs) {
		items.push({
			label: item,
			kind: completionItemKind,
			data: {
				uri
			}
		});
	}
}

function addCompletionItems(uri: string, items: CompletionItem[], docKind: DocKind, completionItemKind: CompletionItemKind, docs?: globals.Docs): void {
	if (!docs) {
		docs = docKindToDocs.get(docKind);
		if (!docs) {
			return;
		}
	}

	const tags: CompletionItemTag[] = [];
	if (docKind === DocKind.DeprecatedFunctions || docKind === DocKind.DeprecatedMethods) {
		tags.push(CompletionItemTag.Deprecated);
	}

	for (const label of docs.keys()) {
		items.push({
			label: label,
			kind: completionItemKind,
			tags: tags,
			data: {
				uri,
				docKind
			}
		});
	}
}

function addStringDelimiterCompletions(uri: string, items: CompletionItem[], value: string, stringKind: StringParam, delimiter: string): void {
	const delimiterIndex = value.lastIndexOf(delimiter);
	if (delimiterIndex === -1) {
		addPlainCompletionItems(uri, items, CompletionItemKind.Value, globals.stringCompletions[stringKind]);
		return;
	}

	const cutValue = value.slice(0, delimiterIndex + 1);
	for (const item of globals.stringCompletions[stringKind]) {
		if (item.startsWith(cutValue)) {
			items.push({
				label: item.slice(cutValue.length),
				kind: CompletionItemKind.Value,
				data: { uri }
			});
		}
	}
}

function addStringCompletionItems(uri: string, items: CompletionItem[], value: string, stringKind: StringParam): void {
	if (value.length === 0) {
		addPlainCompletionItems(uri, items, CompletionItemKind.Value, globals.stringCompletions[stringKind]);
		return;
	}

	if (stringKind === StringParam.MODEL || stringKind === StringParam.SOUND) {
		addStringDelimiterCompletions(uri, items, value, stringKind, '/');
	}
	
	if (StringParam[stringKind].endsWith("PROPERTY")) {
		addStringDelimiterCompletions(uri, items, value, stringKind, '.');
	}
}

function stringCompletion(uri: string, value: string, iterator: TokenIterator): CompletionItem[] | null {
	if (!iterator.hasPrevious()) {
		return null;
	}

	const token = iterator.previous();
	if (token.kind !== TokenKind.COMMA) {
		if (token.kind !== TokenKind.LEFT_ROUND) {
			return null;
		}

		const doc = iterator.findMethodDoc();
		if (!doc) {
			return null;
		}

		const stringKind = doc[0];
		if (stringKind === undefined) {
			return null;
		}

		const items: CompletionItem[] = [];
		addStringCompletionItems(uri, items, value, stringKind);
		
		return items;
	}

	const paramCount = readParamCount(iterator);

	const doc = iterator.findMethodDoc();
	if (!doc) {
		return null;
	}

	const stringKind = doc[paramCount + 1];
	if (stringKind === undefined) {
		return null;
	}

	const items: CompletionItem[] = [];
	addStringCompletionItems(uri, items, value, stringKind);

	return items;
}

function declarationKind(iterator: TokenIterator): TokenKind | null {
	if (!iterator.hasPrevious()) {
		return null;
	}

	let token = iterator.previous();
	if (token.kind === TokenKind.LOCAL || token.kind === TokenKind.CONST || token.kind === TokenKind.FUNCTION) {
		return token.kind;
	}
	
	if (token.kind !== TokenKind.IDENTIFIER || !iterator.hasPrevious()) {
		return null;
	}

	token = iterator.previous();

	if (token.kind === TokenKind.LOCAL || token.kind === TokenKind.CONST || token.kind === TokenKind.FUNCTION) {
		return token.kind;
	}

	return null;
}

function readParamCount(iterator: TokenIterator): number {
	let depth = 1;
	let paramCount = 0;
	
	while (iterator.hasPrevious()) {
		const token = iterator.previous();
		switch (token.kind) {
		case TokenKind.RIGHT_ROUND:
		case TokenKind.RIGHT_CURLY:
		case TokenKind.RIGHT_SQUARE:
			depth++;
			break;
		case TokenKind.LEFT_CURLY:
		case TokenKind.LEFT_SQUARE:
			depth--;
			if (depth === 0) {
				return -1;
			}
			break;
		case TokenKind.LEFT_ROUND:
			depth--;
			if (depth === 0) {
				return paramCount;
			}
			break;
		case TokenKind.COMMA:
			if (depth === 1) {
				paramCount++;
			}
			break;
		}
	}

	return -1;
}

function getDotRange(iterator: TokenIterator, offset: number): { start: number, end: number } | null {
	if (!iterator.hasPrevious()) {
		return null;
	}

	let token = iterator.previous();
	if (token.kind === TokenKind.DOT) {
		return { start: token.start, end: offset };
	}
	if (token.kind !== TokenKind.IDENTIFIER) {
		return null;
	}

	if (!iterator.hasPrevious()) {
		return null;
	}

	const end = token.start;
	token = iterator.previous();
	if (token.kind === TokenKind.DOT) {
		return { start: token.start, end };
	}

	return null;
}








const noSpaceKeywords = new Set<string>([
	"base",
	"break",
	"case",
	"constructor",
	"continue",
	"default",
	"false",
	"false",
	"return",
	"this",
	"true",
	"null"
]);

const paranthesisKeywords = new Set<string>([
	"if",
	"for",
	"while",
	"foreach",
	"switch",
	"function",
	"constructor"
]);

// Checks whether the function is used as a statement or as an expression
function functionParanthesis(document: TextDocument): boolean {
	const info = documentInfo.get(document.uri);
	if (!info) {
		return false;
	}
	const lexer = info.lexer;

	const result = completionCache.get(document.uri)!.searchResult;
	const iterator = new TokenIterator(lexer.getTokens(), result.index);

	if (!iterator.hasPrevious()) {
		return false;
	}

	let token = iterator.previous();

	if (token.kind === TokenKind.IDENTIFIER || token.kind === TokenKind.FUNCTION) {
		if (!iterator.hasPrevious()) {
			return false;
		}
		
		token = iterator.previous();
	} 

	if (token.kind === TokenKind.SEMICOLON || token.kind === TokenKind.LINE_FEED) {
		return false;
	}

	return true;
}

export async function onCompletionResolveHandler(item: CompletionItem): Promise<CompletionItem> {
	const document = documents.get(item.data.uri);
	if (!document) {
		return item;
	}

	if (item.kind === CompletionItemKind.Keyword) {
		item.insertText = item.label;
		if (!noSpaceKeywords.has(item.label)) {
			item.insertText += " ";
		}
		
		if (item.label === "function" && !functionParanthesis(document)) {
			return item;
		}

		const settings = await getDocumentSettings(document.uri);
		if (settings.completionAutoParantheses && paranthesisKeywords.has(item.label)) {
			item.insertText += "($0)";
			item.insertTextFormat = InsertTextFormat.Snippet;
		}

		return item;
	}

	if (item.kind === CompletionItemKind.Value) {
		/*
		const range = completionCache.get(document.uri)!;
		
		item.insertText = `"${item.label.replaceAll('"', '\\"')}"`;
		const startingQuote = {
			start: range.start,
			end: {
				line: range.start.line,
				character: range.start.character + 1
			}
		}
		const endQuote = {
			start: {
				line: range.end.line,
				character: range.end.character - 1
			},
			end: range.end
		}
		item.additionalTextEdits = [
			TextEdit.del(startingQuote),
			TextEdit.del(endQuote)
		]
		*/
		item.insertText = item.label.replaceAll('"', '\\"');
		
		let snippet_id = 0;
		item.insertText = item.insertText.replace(/\d+/g, (match) => `\${${snippet_id++}:${match}}`);
		if (snippet_id != 0) {
			item.insertTextFormat = InsertTextFormat.Snippet;
		} else {
			item.command = {
				command: 'cursorMove',
				title: 'Move Cursor',
				arguments: [{ to: 'right', by: 'character', value: 1 }]
			}
		}
		
		return item;
	}

	const doc = docKindToDocs.get(item.data.docKind)?.get(item.label);
	if (!doc) {
		return item;
	}

	item.detail = doc.detail;
	if (doc.desc) {
		item.documentation = {
			kind: MarkupKind.Markdown,
			value: doc.desc
		};
	}

	if (item.kind === CompletionItemKind.Snippet && doc.snippet) {
		item.insertText = item.label + " " + doc.snippet;
		item.insertTextFormat = InsertTextFormat.Snippet;
		return item;
	}

	const dotRange = completionCache.get(document.uri)!.modifyRange;
	if (dotRange) {
		item.additionalTextEdits = [
			TextEdit.insert(dotRange.start, doc.append!),
			TextEdit.del(dotRange),
		];
	}

	const settings = await getDocumentSettings(document.uri);
	if (!settings.completionAutoParantheses ||
		item.kind !== CompletionItemKind.Function &&
		item.kind !== CompletionItemKind.Method
	) {
		return item;
	}
	
	const open = item.detail.indexOf('(');
	const close = item.detail.lastIndexOf(')');
	// If close + 2 is further than open it means we have no parameters
	// E.g GetListenServerHost() -> GetListenServerHost )( 
	if (close < open + 2) {
		item.insertText = item.label + "()";
		return item;
	}

	item.insertText = item.label + "($0)";
	item.insertTextFormat = InsertTextFormat.Snippet;
	item.command = {
		title: "Trigger Parameter Hints",
		command: "editor.action.triggerParameterHints"
	};

	return item;
}