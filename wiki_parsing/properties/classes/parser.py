import re
from sortedcontainers import SortedSet

with open("input.txt", "r") as input, open("output.txt", "w") as output:
    set = SortedSet()

    for line in input:
        class_match = re.match(r"\w+ - (\w+)", line)
        if not class_match:
            continue

        set.add(class_match.group(1))

    for classname in set:
        output.write(f'\t"{classname}",\n')
