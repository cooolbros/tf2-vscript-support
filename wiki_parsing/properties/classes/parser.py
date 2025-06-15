import re

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    classes = {}
    for line in input:
        class_match = re.match(r"(\w+) - (\w+)", line)
        if not class_match:
            continue

        cpp_class = class_match.group(1)
        if cpp_class in classes:
            continue

        classname = class_match.group(2)
        classes[cpp_class] = classname

    for classname in classes.values():
        output.write(f'\t"{classname}",\n')
