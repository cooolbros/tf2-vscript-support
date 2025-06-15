import re
from sortedcontainers import SortedSet


with open("input.txt", "r") as input, open("output.txt", "w") as output:
    entities = SortedSet()

    for match in re.finditer(r"([a-z_]+)]]", input.read()):
        entities.add(match.group(1))

    for entity in entities:
        output.write(f'"{entity}",\n')