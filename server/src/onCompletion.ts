import { CompletionItem, CompletionItemKind, CompletionItemTag, InsertTextFormat, MarkupKind, TextDocumentPositionParams, TextEdit } from 'vscode-languageserver';
import { Range, TextDocument } from 'vscode-languageserver-textdocument';
import { documents, getDocumentSettings, documentInfo } from './server';
import { TokenIterator, TokenKind, globals } from 'squirrel';
import { StringParam } from 'squirrel/src/globals';

enum ItemKind {
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

const itemKindToDocs = new Map<ItemKind, globals.Docs>([
	[ItemKind.Methods, globals.methods],
	[ItemKind.DeprecatedMethods, globals.deprecatedMethods],
	[ItemKind.Functions, globals.functions],
	[ItemKind.DeprecatedFunctions, globals.deprecatedFunctions],
	[ItemKind.Events, globals.events],
	[ItemKind.BuiltInConstants, globals.builtInConstants],
	[ItemKind.BuiltInVariables, globals.builtInVariables],
	[ItemKind.InstancesMethods, globals.otherMethods],
	[ItemKind.InstancesVariables, globals.otherVariables],
	[ItemKind.DocSnippets, globals.docSnippets]
]);

// track the document the completion items were added in to later use it in resolve
let document: TextDocument | undefined;
let dotRange: Range | undefined;
let shortCut = false;

export async function onCompletionHandler(params: TextDocumentPositionParams): Promise<CompletionItem[]> {
	document = documents.get(params.textDocument.uri);
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
	const { lexer } = info;

	const position = params.position;
	const offset = document.offsetAt(position) - 1;

	const result = lexer.findTokenAtPosition(offset);
	if (result.token) {
		const kind = result.token.kind;
		if (kind === TokenKind.LINE_COMMENT || kind === TokenKind.BLOCK_COMMENT) {
			return [];
		}

		if (kind === TokenKind.DOC) {
			const items: CompletionItem[] = [];
			addCompletionItems(items, ItemKind.DocSnippets, CompletionItemKind.Snippet);
			return items;
		}
		
		if (kind === TokenKind.STRING || kind === TokenKind.VERBATIM_STRING) {
			const iterator = new TokenIterator(lexer.getTokens(), result.index - 1);
			const items = stringCompletion(result.token.value, iterator);
			if (items) {
				return items;
			}
		}
	}

	const items: CompletionItem[] = [];
	
	const iterator = new TokenIterator(lexer.getTokens(), result.index);
	if (checkForDeclaration(iterator)) {
		return [];
	}
	iterator.setIndex(result.index);

	const range = getDotRange(iterator);
	shortCut = false;

	if (range) {
		dotRange = {
			start: document.positionAt(range.start),
			end: document.positionAt(range.end)
		};
		const name = iterator.readIdentity(false);
		if (name) {
			const methods = globals.instancesMethods.get(name);
			if (methods) {
				addCompletionItems(items, ItemKind.InstancesMethods, CompletionItemKind.Method, methods);
				return items;
			}

			const variables = globals.instancesVariables.get(name);
			if (variables) {
				addCompletionItems(items, ItemKind.InstancesVariables, CompletionItemKind.EnumMember, variables);
				return items;
			}

			// If we have not found this instance name in our saved completions then we assume it has every other method
			addCompletionItems(items, ItemKind.Methods, CompletionItemKind.Method);
			addCompletionItems(items, ItemKind.Events, CompletionItemKind.Event);
			addCompletionItems(items, ItemKind.DeprecatedMethods, CompletionItemKind.Method);

			return items;
		}
		// No name but a dot means that we're searching for a shortcut
		// If the last symbol was closing paranthesis it means that we have a method call which could return an entity
		// Or we've possibly done table/class accessing with []

		const lastToken = iterator.next();
		if (!lastToken || lastToken.kind !== TokenKind.RIGHT_ROUND && lastToken.kind !== TokenKind.RIGHT_SQUARE) {
			shortCut = true;
			addCompletionItems(items, ItemKind.InstancesMethods, CompletionItemKind.Method);
			addCompletionItems(items, ItemKind.InstancesVariables, CompletionItemKind.EnumMember);

			return items;
		}

		addCompletionItems(items, ItemKind.Methods, CompletionItemKind.Method);
		addCompletionItems(items, ItemKind.Events, CompletionItemKind.Event);
		addCompletionItems(items, ItemKind.DeprecatedMethods, CompletionItemKind.Method);

		return items;
	}


	addCompletionItems(items, ItemKind.Functions, CompletionItemKind.Function);
	addCompletionItems(items, ItemKind.Events, CompletionItemKind.Event);
	addCompletionItems(items, ItemKind.DeprecatedFunctions, CompletionItemKind.Function);

	addCompletionItems(items, ItemKind.BuiltInConstants, CompletionItemKind.Constant);
	addCompletionItems(items, ItemKind.BuiltInVariables, CompletionItemKind.Variable);

	// It's possible to rescope your methods so that they appear as global functions
	// In this case we always stick to show available methods which are bound to instances
	addCompletionItems(items, ItemKind.InstancesMethods, CompletionItemKind.Method);
	addCompletionItems(items, ItemKind.InstancesVariables, CompletionItemKind.EnumMember);

	addPlainCompletionItems(items, CompletionItemKind.Keyword, globals.keywords);

	return items;
}

function addPlainCompletionItems(items: CompletionItem[], completionItemKind: CompletionItemKind, docs: Set<string>) {
	for (const item of docs) {
		items.push({
			label: item,
			kind: completionItemKind,
		});
	}
}

function addCompletionItems(items: CompletionItem[], itemKind: ItemKind, completionItemKind: CompletionItemKind, docs?: globals.Docs): void {
	if (!docs) {
		docs = itemKindToDocs.get(itemKind);
		if (!docs) {
			return;
		}
	}

	const tags: CompletionItemTag[] = [];
	if (itemKind === ItemKind.DeprecatedFunctions || itemKind === ItemKind.DeprecatedMethods) {
		tags.push(CompletionItemTag.Deprecated);
	}

	for (const label of docs.keys()) {
		items.push({
			label: label,
			kind: completionItemKind,
			tags: tags,
			data: itemKind,
		});
	}
}

function addStringCompletionItems(items: CompletionItem[], value: string, stringKind: StringParam): void {
	if (value.length === 0) {
		addPlainCompletionItems(items, CompletionItemKind.Value, globals.stringCompletions[stringKind]);
		return;
	}

	const dot = value.lastIndexOf('.');
	if (dot === -1) {
		addPlainCompletionItems(items, CompletionItemKind.Value, globals.stringCompletions[stringKind]);
		return;
	}
	
	const cutValue = value.slice(0, dot + 1);
	for (const item of globals.stringCompletions[stringKind]) {
		if (item.startsWith(cutValue)) {
			items.push({
				label: item.slice(cutValue.length),
				kind: CompletionItemKind.Value,
			});
		}
	}
}

function stringCompletion(value: string, iterator: TokenIterator): CompletionItem[] | null {
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
		addStringCompletionItems(items, value, stringKind);
		
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
	addStringCompletionItems(items, value, stringKind);

	return items;
}

function checkForDeclaration(iterator: TokenIterator): boolean {
	if (!iterator.hasPrevious()) {
		return false;
	}

	let token = iterator.previous();
	if (token.kind === TokenKind.LOCAL || token.kind === TokenKind.CONST || token.kind === TokenKind.FUNCTION) {
		return true;
	}
	
	if (token.kind !== TokenKind.IDENTIFIER || !iterator.hasPrevious()) {
		return false;
	}

	token = iterator.previous();

	return token.kind === TokenKind.LOCAL || token.kind === TokenKind.CONST || token.kind === TokenKind.FUNCTION;
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

function getDotRange(iterator: TokenIterator): { start: number, end: number } | undefined {
	if (!iterator.hasPrevious()) {
		return;
	}

	let token = iterator.previous();
	if (token.kind === TokenKind.DOT) {
		return { start: token.start, end: token.end };
	}
	if (token.kind !== TokenKind.IDENTIFIER) {
		return;
	}

	if (!iterator.hasPrevious()) {
		return;
	}

	const end = token.start;
	token = iterator.previous();
	if (token.kind === TokenKind.DOT) {
		return { start: token.start, end };
	}

	return;
}

const noSpaceKeywords = new Set<string>([
	"base",
	"break",
	"case",
	"constructor",
	"continue",
	"default",
	"false",
	"function",
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
	"switch"
]);

export async function onCompletionResolveHandler(item: CompletionItem): Promise<CompletionItem> {
	if (!document) {
		return item;
	}

	
	if (item.kind === CompletionItemKind.Keyword) {
		if (noSpaceKeywords.has(item.label)) {
			return item;
		}

		item.insertText = item.label + " ";

		const settings = await getDocumentSettings(document.uri);
		if (settings.completionAutoParantheses && paranthesisKeywords.has(item.label)) {
			item.insertText += "($0)";
			item.insertTextFormat = InsertTextFormat.Snippet;
		}

		return item;
	}

	if (item.kind === CompletionItemKind.Value) {
		item.command = {
			command: 'cursorMove',
			title: 'Move Cursor',
			arguments: [{ to: 'right', by: 'character', value: 1 }]
		};

		return item;
	}

	const doc = itemKindToDocs.get(item.data)?.get(item.label);
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

	if (shortCut && dotRange) {
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