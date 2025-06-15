import re

with open("../datamaps.txt", "r") as input, open("output.txt", "w") as output:
    # using dict instead of the set to preserve order
    inputs = {}

    for match in re.finditer(r"\s*- \w* \(Offset \d+\) \(Save|Key|Output\)\(0 Bytes\) - (\w+)", input.read()):
        inputs[match.group(1)] = 0

    for item in inputs.keys():
        if item is not None:
            output.write(f'"{item}",\n')