import re

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    for match in re.finditer(r"([a-z_]+)]]", input.read()):
        output.write(f'"{match.group(1)}",\n')