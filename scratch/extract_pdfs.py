import pypdf
import os
import sys

def process(pdf_path, prefix):
    print(f"Processing {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    lines = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        lines.append(f"=== PAGE {i+1} ===")
        lines.append(text)
        for j, img in enumerate(page.images):
            out_img = f"Screenshots/{prefix}_p{i+1}_img{j+1}_{img.name}"
            with open(out_img, "wb") as f_img:
                f_img.write(img.data)
            lines.append(f"Saved image: {out_img}")
    
    with open(f"scratch/{prefix}_text.txt", "w", encoding="utf-8") as f_out:
        f_out.write("\n".join(lines))
    print(f"Saved scratch/{prefix}_text.txt")

process("Screenshots/Civil hod.pdf", "civil_hod")
process("Screenshots/civil banner pdf.pdf", "civil_banner")
process("Screenshots/Janma B Dept - AI-DS.pdf", "janma")
