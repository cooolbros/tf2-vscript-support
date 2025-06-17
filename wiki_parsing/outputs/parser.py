import re
from sortedcontainers import SortedSet


with open("../shared/datamaps.txt", "r") as input, open("output.txt", "w") as output:
    outputs = SortedSet()

    for match in re.finditer(r"\s*- \w* \(Offset \d+\) \(Save|Key|Output\)\(0 Bytes\) - (\w+)", input.read()):
        if match.group(1) is not None:
            outputs.add(match.group(1))

    for out in outputs:
        output.write(f'"{out}",\n')