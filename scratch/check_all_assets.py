import os, re

with open('js/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image paths
imgs = re.findall(r'[\"\'](assets/[^\"\']+|Screenshots/[^\"\']+|scratch/[^\"\']+)[\"\']', content)
print(f"Total image references found in app.js: {len(imgs)}")

missing = []
for p in set(imgs):
    if not os.path.exists(p):
        missing.append(p)

if missing:
    print(f"MISSING ({len(missing)}):")
    for m in missing:
        print("  -", m)
else:
    print("ALL image paths in app.js exist and are verified valid!")
