from PIL import Image
import os

os.makedirs('assets/images/departments', exist_ok=True)

# 1. Process MBA Flyer
im_mba = Image.open('Screenshots/Flyer MBA.png')
im_mba.save('assets/images/departments/mba_flyer.png', 'PNG', quality=95)
im_mba.save('assets/images/departments/mba_flyer.webp', 'WEBP', quality=95)
print('Saved mba_flyer')

# 2. Process all AI&DS images with clean names
aids_images = {
    'aids_iist_internship': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 2.07.12 PM.jpeg',
    'aids_tnwise_hackathon': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.16 PM.jpeg',
    'aids_aws_academy': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.13 PM.jpeg',
    'aids_aws_banner': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.13 PM (1).jpeg',
    'aids_workshop_1': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.15 PM.jpeg',
    'aids_workshop_2': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.15 PM (1).jpeg',
    'aids_celebration': 'Screenshots/AI&DS/WhatsApp Image 2026-09-01 at 1.58.16 PM (1).jpeg',
    'aids_isro_visit': 'Screenshots/visit.jpeg',
}

for name, path in aids_images.items():
    if os.path.exists(path):
        im = Image.open(path)
        png_path = f'assets/images/departments/{name}.png'
        webp_path = f'assets/images/departments/{name}.webp'
        im.save(png_path, 'PNG', quality=92)
        im.save(webp_path, 'WEBP', quality=92)
        print(f'Exported {name} ({im.size})')
    else:
        print(f'Missing {path}')

print('All image exports completed.')
