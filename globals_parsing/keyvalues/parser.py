import re
from sortedcontainers import SortedDict

kind_to_file = {
    "integer": open("output/number.txt", "w"),
    "string": open("output/string.txt", "w"),
    "vector": open("output/vector.txt", "w")
}
kind_to_file["float"] = kind_to_file["integer"]
kind_to_file["bool"] = kind_to_file["integer"]

properties = {}
with open("../shared/properties.txt", "r") as input:
    for line in input:
        property_match = re.match(r"(\S+): (\w+)", line)
        if property_match:
            properties[property_match.group(1)] = property_match.group(2)

keyvalues = SortedDict([
    ("rendercolor", "vector"),
    ("renderamt", "integer"),
    ("disableshadows", "bool"),
    ("mins", "vector"),
    ("maxs", "vector"),
    ("disablereceiveshadows", "bool"),
    ("nodamageforces", "bool"),
    # ("angle", "float"),
    ("angles", "vector"),
    ("origin", "vector"),
    ("targetname", "string")
])

with open("../shared/datamaps.txt", "r") as input:
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

        member_match = re.match(r"\s*- (\S+) \(Offset \d+\) \((\S+)\)\(\d+ Bytes\) - (\S+)", line)
        if not member_match:
            continue

        if member_match.group(2).find("Input") != -1 or member_match.group(2).find("Output") != -1:
            continue

        keyvalue = member_match.group(3)
        if keyvalue in keyvalues:
            continue

        property = append_text + member_match.group(1)
        if property not in properties:
            print(property)
            continue

        kind = properties[property]
        kind = kind.replace("_array", "")

        # targetname
        if kind == "instance":
            kind = "string"

        keyvalues[keyvalue] = kind

    for keyvalue, kind in keyvalues.items():
        kind_to_file[kind].write(f'"{keyvalue}",\n')


for file in kind_to_file.values():
    file.close()