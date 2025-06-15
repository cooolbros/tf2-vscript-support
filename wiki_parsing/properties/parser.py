import re
from sortedcontainers import SortedDict

kind_to_file = {
    "integer": open("output/integer.txt", "w"),
    "float": open("output/float.txt", "w"),
    "string": open("output/string.txt", "w"),
    "bool": open("output/boolean.txt", "w"),
    "instance": open("output/entity.txt", "w"),
    "vector": open("output/vector.txt", "w"),

    "integer_array": open("output/integer_array.txt", "w"),
    "float_array": open("output/float_array.txt", "w"),
    "string_array": open("output/string_array.txt", "w"),
    "bool_array": open("output/boolean_array.txt", "w"),
    "instance_array": open("output/entity_array.txt", "w"),
    "vector_array": open("output/vector_array.txt", "w"),
}

with open("properties.txt", "r") as input:
    properties = SortedDict()

    for line in input:
        property_match = re.match(r"(\S+): (\w+)", line)
        if property_match:
            properties[property_match.group(1)] = property_match.group(2)

    for property, type in properties.items():
        property = property.replace('"', '\\"')
        kind_to_file[type].write(f'"{property}",\n')

        # It's possible to access the 0th element of an array with a single value fetch function
        if type.endswith("array"):
            kind_to_file[type[:-6]].write(f'"{property}",\n')

for file in kind_to_file.values():
    file.close()