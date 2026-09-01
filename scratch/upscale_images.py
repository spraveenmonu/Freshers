"""
Upscale ALL speaker .png images to 1024x1024 for higher quality presentation.
Re-crop odd-sized ones from originals where possible.
"""
from PIL import Image
import os

SPEAKER_DIR = "assets/images/speakers"
TARGET = 1024

# Map of files that need re-cropping from higher-res originals
RECROPS = {
    "dyana_flora.png": {
        "src": "Screenshots/Dyana flora.jpeg",
        "crop_mode": "center_square"  
    },
    "uma_selvi.png": {
        "src": "assets/images/departments/image2.png",
        "crop_mode": "center_square"
    },
}

def center_square_crop(im):
    w, h = im.size
    sq = min(w, h)
    left = (w - sq) // 2
    top = (h - sq) // 2
    return im.crop((left, top, left + sq, top + sq))

# First handle the re-crops from originals
for fname, info in RECROPS.items():
    src_path = info["src"]
    out_path = os.path.join(SPEAKER_DIR, fname)
    if os.path.exists(src_path):
        im = Image.open(src_path)
        im = center_square_crop(im)
        im = im.resize((TARGET, TARGET), Image.Resampling.LANCZOS)
        im.save(out_path, "PNG", quality=95)
        webp_path = out_path.replace(".png", ".webp")
        im.save(webp_path, "WEBP", quality=95)
        print(f"Re-cropped {fname} from {src_path}: {im.size}")
    else:
        print(f"WARNING: Source not found for {fname}: {src_path}")

# Now upscale ALL remaining .png files to 1024x1024
for fname in sorted(os.listdir(SPEAKER_DIR)):
    if not fname.endswith(".png"):
        continue
    # Skip raw/test files
    if "raw" in fname or "test" in fname or "cropped" in fname:
        continue
    
    fpath = os.path.join(SPEAKER_DIR, fname)
    im = Image.open(fpath)
    w, h = im.size
    
    if w >= TARGET and h >= TARGET:
        # Already large enough, skip
        continue
    
    # Upscale to TARGET x TARGET
    im = im.resize((TARGET, TARGET), Image.Resampling.LANCZOS)
    im.save(fpath, "PNG", quality=95)
    webp_path = fpath.replace(".png", ".webp")
    im.save(webp_path, "WEBP", quality=95)
    print(f"Upscaled {fname}: {w}x{h} -> {TARGET}x{TARGET}")

print("\nDone! All speaker images are now 1024x1024.")
