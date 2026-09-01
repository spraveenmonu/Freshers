import pymupdf
import os

def dump_pdf(pdf_path, prefix):
    doc = pymupdf.open(pdf_path)
    output_lines = [f"=== {pdf_path} (Pages: {len(doc)}) ==="]
    for i, page in enumerate(doc):
        text = page.get_text()
        output_lines.append(f"--- Page {i+1} Text ---")
        output_lines.append(text)
        
        # Render high-res page
        pix = page.get_pixmap(dpi=200)
        out_png = f"scratch/{prefix}_page_{i+1}.png"
        pix.save(out_png)
        output_lines.append(f"Saved rendered page: {out_png}")
        
        # Extract embedded images
        image_list = page.get_images(full=True)
        for img_idx, img_info in enumerate(image_list):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            out_img = f"scratch/{prefix}_p{i+1}_img{img_idx+1}.{image_ext}"
            with open(out_img, "wb") as f_img:
                f_img.write(image_bytes)
            output_lines.append(f"Extracted image {out_img} (dims: {base_image['width']}x{base_image['height']})")

    with open(f"scratch/{prefix}_dump.txt", "w", encoding="utf-8") as f_out:
        f_out.write("\n".join(output_lines))
    print(f"Successfully processed {pdf_path}")

os.makedirs("scratch", exist_ok=True)
dump_pdf("Screenshots/Civil hod.pdf", "civil_hod")
dump_pdf("Screenshots/civil banner pdf.pdf", "civil_banner")
dump_pdf("Screenshots/Janma B Dept - AI-DS.pdf", "janma")
