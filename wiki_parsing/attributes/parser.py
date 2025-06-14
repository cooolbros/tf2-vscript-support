import re

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    for match in re.finditer(r'"name"[ \t]*(".+?")', input.read()):
        output.write(match.group(1) + ",\n")