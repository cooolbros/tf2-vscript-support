import re

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    for line in input:
        match = re.search(r"\s*(\w+)", line)
        if not match:
            continue

        output.write(f'"{match.group(1)}",\n')
