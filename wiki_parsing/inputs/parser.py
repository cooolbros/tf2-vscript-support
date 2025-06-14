import re

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    inputs = set()

    for match in re.finditer(r"Input(\w+)", input.read()):
        inputs.add(match.group(1))

    for input in inputs:
        output.write(f'"{input}",\n')