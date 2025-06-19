
import os
import vpk
from sortedcontainers import SortedSet

sound_exts = {'.wav', '.mp3'}
model_exts = {'.mdl'}
particle_exts = {'.pcf'}
texture_exts = {'.vtf'}

sounds = SortedSet()
models = SortedSet()
particles = SortedSet()
textures = SortedSet()

tf_dir = 'D:/Program Files/Steam/steamapps/common/Team Fortress 2'
dir_vpk_files = []
for root, dirs, files in os.walk(tf_dir):
    for f in files:
        if f.endswith('dir.vpk'):
            full_path = os.path.join(root, f)
            dir_vpk_files.append(full_path)

def cut_prefix(path, prefix):
    if path.startswith(prefix):
        return path[len(prefix):]

    return path

for vpk_file in dir_vpk_files:
    with vpk.open(vpk_file) as archive:
        for filepath in archive:
            ext = os.path.splitext(filepath)[1].lower()
            if ext in sound_exts:
                sounds.add(cut_prefix(filepath, "sound/"))
            elif ext in model_exts:
                models.add(filepath)
            elif ext in particle_exts:
                # Only file names for the particles
                particles.add(os.path.basename(filepath)[:-4])
            elif ext in texture_exts:
                textures.add(cut_prefix(filepath, "materials/"))

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
