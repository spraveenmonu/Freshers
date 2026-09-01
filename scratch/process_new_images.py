"""Process all new images for the restructured slide deck."""
from PIL import Image
import os, shutil

os.makedirs("assets/images/speakers", exist_ok=True)
os.makedirs("assets/images/departments", exist_ok=True)

TARGET = 1024

def center_square_crop(im):
    w, h = im.size
    sq = min(w, h)
    left = (w - sq) // 2
    top = (h - sq) // 2
    return im.crop((left, top, left + sq, top + sq))

def save_both(im, base_path):
    im.save(base_path, "PNG", quality=95)
    im.save(base_path.replace(".png", ".webp"), "WEBP", quality=95)
    print(f"Saved {base_path} ({im.size[0]}x{im.size[1]})")

# 1. Nancy - HOD AI&DS
im = Image.open("Screenshots/Nancy.jpeg")
im = center_square_crop(im)
im = im.resize((TARGET, TARGET), Image.Resampling.LANCZOS)
save_both(im, "assets/images/speakers/nancy_aids.png")

# 2. Freshers Day Flyer
im = Image.open("Screenshots/special.jpeg")
im.save("assets/images/departments/freshers_flyer.png", "PNG", quality=95)
im.save("assets/images/departments/freshers_flyer.webp", "WEBP", quality=95)
print(f"Saved freshers_flyer ({im.size[0]}x{im.size[1]})")

# 3. IIST Visit photo
im = Image.open("Screenshots/visit.jpeg")
im.save("assets/images/departments/aids_visit.png", "PNG", quality=95)
im.save("assets/images/departments/aids_visit.webp", "WEBP", quality=95)
print(f"Saved aids_visit ({im.size[0]}x{im.size[1]})")

# 4. AI&DS activity images
aids_dir = "Screenshots/AI&DS"
if os.path.exists(aids_dir):
    files = sorted(os.listdir(aids_dir))
    for i, f in enumerate(files):
        if f.lower().endswith(('.jpeg', '.jpg', '.png')):
            fpath = os.path.join(aids_dir, f)
            im = Image.open(fpath)
            out = f"assets/images/departments/aids_activity_{i+1}.png"
            im.save(out, "PNG", quality=95)
            im.save(out.replace(".png", ".webp"), "WEBP", quality=95)
            print(f"Saved {out} ({im.size[0]}x{im.size[1]})")

print("\nAll images processed!")
