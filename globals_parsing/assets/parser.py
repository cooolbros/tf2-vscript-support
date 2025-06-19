import os
import re

import vpk
from sortedcontainers import SortedSet
import valvepcf

sound_exts = {'.wav', '.mp3'}
model_exts = {'.mdl'}
particle_exts = {'.pcf'}
texture_exts = {'.vtf'}

sounds = SortedSet()
models = SortedSet()
particles = SortedSet()
textures = SortedSet()
sound_scripts = SortedSet()


output_dir = "output/pcf_files"
tf_dir = 'D:/Program Files/Steam/steamapps/common/Team Fortress 2'
dir_vpk_files = []
target_dirs = ['tf', 'hl']

for subdir in target_dirs:
    full_subdir_path = os.path.join(tf_dir, subdir)
    if not os.path.exists(full_subdir_path):
        continue

    dir_vpk_files += [os.path.join(full_subdir_path, f) for f in os.listdir(full_subdir_path) if f.endswith('dir.vpk')]

def cut_prefix(path, prefix):
    if path.startswith(prefix):
        return path[len(prefix):]

    return path

temp_pcf = "temp.pcf"

for vpk_file in dir_vpk_files:
    with vpk.open(vpk_file) as archive:
        for filepath in archive:
            ext = os.path.splitext(filepath)[1].lower()
            if ext in sound_exts:
                sounds.add(cut_prefix(filepath, "sound/"))
            elif ext in model_exts:
                models.add(filepath)
            elif ext in particle_exts:
                data = archive[filepath].read()
                with open(temp_pcf, 'wb') as out:
                    out.write(data)

                pcf = valvepcf.Pcf(temp_pcf)
                for system in pcf.systems:
                    particles.add(system._name)
            elif ext in texture_exts:
                textures.add(cut_prefix(filepath, "materials/"))
            elif filepath.lower().startswith("scripts/game_sounds") and filepath.endswith(".txt"):
                content = archive[filepath].read().decode(errors='ignore')
                names = re.findall(r'^"([^"]+)"\s*\{', content, flags=re.MULTILINE)
                sound_scripts.update(names)

with open("output/sounds.txt", 'w') as output:
    for path in sounds:
        output.write(f'"{path}",\n')

with open("output/models.txt", 'w') as output:
    for path in models:
        output.write(f'"{path}",\n')

with open("output/particles.txt", 'w') as output:
    for path in particles:
        output.write(f'"{path}",\n')

with open("output/textures.txt", 'w') as output:
    for path in textures:
        output.write(f'"{path}",\n')

with open("output/sound_scripts.txt", 'w') as output:
    for path in sound_scripts:
        output.write(f'"{path}",\n')


