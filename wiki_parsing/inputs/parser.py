import re
from sortedcontainers import SortedSet


with open("../datamaps.txt", "r") as input, open("output.txt", "w") as output:
    inputs = SortedSet()

    for match in re.finditer(r"\w* \(Offset \d+\) \(Input\)\(0 Bytes\) - (\w+)", input.read()):
        inputs.add(match.group(1))

    for item in inputs:
        output.write(f'"{item}",\n')