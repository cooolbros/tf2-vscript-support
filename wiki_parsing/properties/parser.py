import re

kind_to_file = {
    "integer": open("integer.txt", "w"),
    "float": open("float.txt", "w"),
    "string": open("string.txt", "w"),
    "boolean": open("boolean.txt", "w"),
    "entity": open("entity.txt", "w"),
    "vector": open("vector.txt", "w"),
    "integer_array": open("integer_array.txt", "w"),
    "float_array": open("float_array.txt", "w"),
    "string_array": open("string_array.txt", "w"),
    "boolean_array": open("boolean_array.txt", "w"),
    "entity_array": open("entity_array.txt", "w"),
    "vector_array": open("vector_array.txt", "w"),
    "unsorted": open("unsorted.txt", "w"),
    "unsorted_array": open("unsorted_array.txt", "w")
}

kind_to_file["3"] = kind_to_file["vector"]

def kind_from_name(name):
    if any(name.startswith(s) for s in ["m_h", "m_next"]):
        return "entity"

    if any(name.startswith(s) for s in ["m_b", "b"]):
        return "boolean"

    if any(name.startswith(s) for s in ["m_s", "m_S", "m_isz", "m_psz"]):
        return "string"

    if name.startswith("m_fl"):
        return "float"

    if any(name.startswith(s) for s in ["m_i", "m_n", "m_u", "m_f", "m_af", "i", "n", "u", "f"]):
        return "integer"


    if any(name.startswith(s) for s in ["m_v", "v"]):
        return "vector"

    return "unsorted"

properties = {}
with open("../netprops.txt", "r") as input:
    previous_indent = 0
    append_text = ""

    for line in input:
        indent_match = re.match(r" *", line)
        new_indent = len(indent_match.group(0))

        for i in range(0, previous_indent - new_indent):
            last_dot = append_text.rfind(".")
            if last_dot == -1:
                break

            new_last_dot = append_text.rfind(".", 0, last_dot)
            if new_last_dot == -1:
                append_text = ""
                break


            append_text = append_text[0:new_last_dot + 1]

        previous_indent = new_indent

        table_match = re.match(r' *Table: (\w+) \(offset (\d+)\)', line)
        if table_match:
            if table_match.group(2) != '0':
                append_text += table_match.group(1) + '.'
            continue

        member_match = re.match(r' *Member: (\w+) \(offset \d+\) \(type (\w+)\) \(bits (\d+)\)', line)
        if member_match:
            name = member_match.group(1)
            kind = member_match.group(2)
            if kind == "array":
                kind = kind_from_name(name) + "_array"
            elif kind == "integer":
                bits = member_match.group(3)
                if bits == '21':
                    kind = "entity"
                elif bits == '1':
                    kind = "boolean"


            if re.match(r'^\d+$', name):
                properties[append_text[:-1]] = kind + "_array"
                continue

            properties[append_text + name] = kind


untyped_properties = {}
with open("../datamaps.txt", "r") as input:
    previous_indent = 0
    append_text = ""

    for line in input:
        indent_match = re.match(r"( *)(?: Sub-Class|-)", line)
        if not indent_match:
            continue

        new_indent = len(indent_match.group(1))

        for i in range(0, previous_indent - new_indent):
            last_dot = append_text.rfind(".")
            if last_dot == -1:
                break

            new_last_dot = append_text.rfind(".", 0, last_dot)
            if new_last_dot == -1:
                append_text = ""
                break

            append_text = append_text[0:new_last_dot + 1]

        previous_indent = new_indent

        table_match = re.match(r' *Sub-Class Table \(\d Deep\): (\w+)', line)
        if table_match:
            previous_indent += 1
            append_text += table_match.group(1) + '.'
            continue

        member_match = re.match(r'\s*- (\S+)', line)
        if member_match:
            name = member_match.group(1)
            if name[0].isupper():
                continue

            # outputs
            if name.lower().startswith("m_on"):
                continue

            item = append_text + name

            if item in properties:
                continue

            kind = kind_from_name(name)
            untyped_properties[item] = kind


for property, type in properties.items():
    output = kind_to_file[type]
    output.write(f'"{property}",\n')

for property, type in untyped_properties.items():
    output = kind_to_file[type]
    output.write(f'"{property}",\n')
