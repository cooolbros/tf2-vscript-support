import re
from sortedcontainers import SortedSet

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    attributes = SortedSet()

    for match in re.finditer(r'"name"[ \t]*(".+?")', input.read()):
        attributes.add(match.group(1))

    for attribute in attributes:
        output.write(attribute + ",\n")