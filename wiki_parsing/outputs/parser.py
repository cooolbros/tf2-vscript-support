import re

with open("../datamaps.txt", "r") as input, open("output.txt", "w") as output:
    # using dict instead of the set to preserve order
    inputs = {}

    for match in re.finditer(r"m_(On\w+)", input.read(), re.IGNORECASE):
        inputs[match.group(1)] = 0

    for item in inputs.keys():
        output.write(f'"{item}",\n')