import re
import os

with open('js/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r':\s*"((?:assets|Screenshots)/[^"]+)"', content)
unique = set(matches)
print(f"Total matched assets: {len(unique)}")

missing = []
for m in sorted(unique):
    if not os.path.exists(m):
        missing.append(m)
        print(f"MISSING: {m}")
    else:
        print(f"OK: {m}")

print(f"\nResult: {len(missing)} missing files.")
