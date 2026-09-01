import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

slides = []
for i, line in enumerate(lines):
    m = re.search(r'id:\s*"([^"]+)"', line)
    if m:
        slides.append((m.group(1), i+1))

print(f"Total slides: {len(slides)}")
for idx, (sid, line_num) in enumerate(slides):
    print(f"Slide {idx:02d} (line {line_num}): {sid}")
