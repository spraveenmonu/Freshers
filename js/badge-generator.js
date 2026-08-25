/**
 * Induction Day 2026 - Digital Student Pass & Badge Generator
 * Renders an official, premium holographic pass on HTML5 Canvas
 */

class BadgeGenerator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // High-resolution canvas dimensions
    this.width = 750;
    this.height = 1100;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.studentData = {
      name: "ALEXANDER CHEN",
      dept: "Artificial Intelligence & Data Science",
      code: "AIDS",
      rollNo: "GCOE26-AD-1042",
      bloodGroup: "O+ve",
      seatZone: "Zone-A (Auditorium Central)",
      photoUrl: null
    };

    this.customPhotoImg = null;
    this.init();
  }

  init() {
    this.bindInputs();
    this.render();
  }

  bindInputs() {
    const nameInput = document.getElementById('passStudentName');
    const deptSelect = document.getElementById('passDepartment');
    const rollInput = document.getElementById('passRollNo');
    const bloodSelect = document.getElementById('passBloodGroup');
    const photoUpload = document.getElementById('passPhotoUpload');
    const downloadBtn = document.getElementById('btnDownloadPass');
    const presetBtn = document.getElementById('btnSampleData');

    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.studentData.name = (e.target.value || "STUDENT NAME").toUpperCase();
        this.render();
      });
    }

    if (deptSelect) {
      deptSelect.addEventListener('change', (e) => {
        const sel = e.target;
        const text = sel.options[sel.selectedIndex].text;
        this.studentData.dept = text;
        this.studentData.code = sel.value;
        this.render();
      });
    }

    if (rollInput) {
      rollInput.addEventListener('input', (e) => {
        this.studentData.rollNo = (e.target.value || "GCOE26-0000").toUpperCase();
        this.render();
      });
    }

    if (bloodSelect) {
      bloodSelect.addEventListener('change', (e) => {
        this.studentData.bloodGroup = e.target.value;
        this.render();
      });
    }

    if (photoUpload) {
      photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
              this.customPhotoImg = img;
              this.render();
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.download();
      });
    }

    if (presetBtn) {
      presetBtn.addEventListener('click', () => {
        const names = ["PRAVEEN KUMAR", "SARAH JASMINE", "DANIEL RAJ", "KAVITHA M", "ROHIT SHARMA", "ANANYA VERMA"];
        const depts = [
          { val: "CSE", name: "Computer Science & Engineering" },
          { val: "AIDS", name: "Artificial Intelligence & Data Science" },
          { val: "ECE", name: "Electronics & Communication Engineering" },
          { val: "MBA", name: "Master of Business Administration" }
        ];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomDept = depts[Math.floor(Math.random() * depts.length)];
        const randomRoll = `GCOE26-${randomDept.val}-${Math.floor(1000 + Math.random() * 9000)}`;

        if (nameInput) nameInput.value = randomName;
        if (deptSelect) deptSelect.value = randomDept.val;
        if (rollInput) rollInput.value = randomRoll;

        this.studentData.name = randomName;
        this.studentData.dept = randomDept.name;
        this.studentData.code = randomDept.val;
        this.studentData.rollNo = randomRoll;
        this.render();
      });
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    // Clear Canvas
    ctx.clearRect(0, 0, w, h);

    // 1. Background Card with Rounded Corners
    this.roundRect(ctx, 0, 0, w, h, 36);
    ctx.clip();

    // Dark Gradient Background
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0a0e1e');
    bgGrad.addColorStop(0.5, '#121933');
    bgGrad.addColorStop(1, '#060914');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Aurora Orbs
    const orb1 = ctx.createRadialGradient(100, 100, 10, 100, 100, 300);
    orb1.addColorStop(0, 'rgba(79, 70, 229, 0.4)');
    orb1.addColorStop(1, 'rgba(79, 70, 229, 0)');
    ctx.fillStyle = orb1;
    ctx.fillRect(0, 0, w, h);

    const orb2 = ctx.createRadialGradient(w - 100, h - 200, 10, w - 100, h - 200, 350);
    orb2.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
    orb2.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = orb2;
    ctx.fillRect(0, 0, w, h);

    // 2. Hologram Border
    ctx.lineWidth = 4;
    const borderGrad = ctx.createLinearGradient(0, 0, w, h);
    borderGrad.addColorStop(0, '#4f46e5');
    borderGrad.addColorStop(0.3, '#06b6d4');
    borderGrad.addColorStop(0.7, '#f59e0b');
    borderGrad.addColorStop(1, '#8b5cf6');
    ctx.strokeStyle = borderGrad;
    this.roundRect(ctx, 2, 2, w - 4, h - 4, 34);
    ctx.stroke();

    // 3. Header Banner
    const bannerGrad = ctx.createLinearGradient(0, 0, w, 0);
    bannerGrad.addColorStop(0, '#312e81');
    bannerGrad.addColorStop(0.5, '#4338ca');
    bannerGrad.addColorStop(1, '#0e7490');
    ctx.fillStyle = bannerGrad;
    ctx.fillRect(0, 0, w, 150);

    // College Emblem / Icon
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(70, 75, 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 30px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('G', 70, 86);

    // Header Titles
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.font = '800 28px "Outfit", sans-serif';
    ctx.fillText('GRACE COLLEGE OF ENGINEERING', 125, 65);

    ctx.fillStyle = '#a5f3fc';
    ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('DEPARTMENT OF HUMANITIES & SCIENCE / MBA', 125, 95);

    ctx.fillStyle = '#fde68a';
    ctx.font = '700 13px "Space Grotesk", monospace';
    ctx.fillText('★ OFFICIAL FRESHERS ORIENTATION PASS 2026 ★', 125, 120);

    // 4. Pass Category Ribbon
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fillRect(40, 175, w - 80, 52);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 175, w - 80, 52);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '700 18px "Outfit", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('EVENT: INDUCTION DAY 2026', 60, 207);

    ctx.fillStyle = '#4ade80';
    ctx.textAlign = 'right';
    ctx.font = '700 16px "Space Grotesk", monospace';
    ctx.fillText('STATUS: CONFIRMED ENTRY', w - 60, 207);

    // 5. Photo Box / Avatar
    const photoX = 60;
    const photoY = 255;
    const photoSize = 190;

    // Photo frame
    ctx.save();
    this.roundRect(ctx, photoX, photoY, photoSize, photoSize, 20);
    ctx.clip();

    if (this.customPhotoImg) {
      ctx.drawImage(this.customPhotoImg, photoX, photoY, photoSize, photoSize);
    } else {
      // Default Avatar Gradient
      const avGrad = ctx.createLinearGradient(photoX, photoY, photoX + photoSize, photoY + photoSize);
      avGrad.addColorStop(0, '#1e293b');
      avGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = avGrad;
      ctx.fillRect(photoX, photoY, photoSize, photoSize);

      // Student silhouette icon
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + 70, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(photoX + photoSize / 2, photoY + 200, 70, Math.PI, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Photo border
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 3;
    this.roundRect(ctx, photoX, photoY, photoSize, photoSize, 20);
    ctx.stroke();

    // 6. Student Identity Details (Right of Photo)
    const textStartX = 280;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('STUDENT NAME', textStartX, 280);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 26px "Outfit", sans-serif';
    ctx.fillText(this.studentData.name, textStartX, 312);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('DEPARTMENT / PROGRAM', textStartX, 355);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    // Wrap text if needed
    ctx.fillText(this.studentData.dept.substring(0, 32), textStartX, 382);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('ROLL / APP NO.', textStartX, 425);

    ctx.fillStyle = '#fde047';
    ctx.font = '700 20px "Space Grotesk", monospace';
    ctx.fillText(this.studentData.rollNo, textStartX, 450);

    // 7. Info Grid Row
    const boxY = 480;
    const boxW = (w - 120 - 20) / 2;

    // Box 1: Date & Time
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    this.roundRect(ctx, 60, boxY, boxW, 110, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    this.roundRect(ctx, 60, boxY, boxW, 110, 16);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('DATE & TIME', 80, boxY + 32);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 18px "Outfit", sans-serif';
    ctx.fillText('Sept 03, 2026', 80, boxY + 62);
    ctx.fillStyle = '#f59e0b';
    ctx.font = '700 15px "Space Grotesk", monospace';
    ctx.fillText('10:30 AM IST', 80, boxY + 90);

    // Box 2: Venue & Seat
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    this.roundRect(ctx, 80 + boxW, boxY, boxW, 110, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    this.roundRect(ctx, 80 + boxW, boxY, boxW, 110, 16);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('VENUE & AUDITORIUM', 100 + boxW, boxY + 32);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 18px "Outfit", sans-serif';
    ctx.fillText('Grace Auditorium', 100 + boxW, boxY + 62);
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Zone-A (Freshers Seating)', 100 + boxW, boxY + 90);

    // 8. Key Instructions
    const instY = 625;
    ctx.fillStyle = 'rgba(79, 70, 229, 0.08)';
    this.roundRect(ctx, 60, instY, w - 120, 160, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(79, 70, 229, 0.25)';
    this.roundRect(ctx, 60, instY, w - 120, 160, 16);
    ctx.stroke();

    ctx.fillStyle = '#a5b4fc';
    ctx.font = '700 14px "Outfit", sans-serif';
    ctx.fillText('IMPORTANT INSTRUCTIONS FOR FRESHERS & PARENTS:', 80, instY + 30);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 13.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('• Please report at Grace Auditorium registration desk by 09:30 AM.', 80, instY + 60);
    ctx.fillText('• Bring this digital or printed pass along with original admission receipts.', 80, instY + 85);
    ctx.fillText('• Formal dress code is mandatory for all students during the ceremony.', 80, instY + 110);
    ctx.fillText('• Special celebratory lunch will be served immediately following the program.', 80, instY + 135);

    // 9. QR Code & Barcode Simulation
    const barY = 825;
    this.drawBarcode(ctx, 60, barY, w - 120, 60);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 13px "Space Grotesk", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`* ${this.studentData.rollNo} * AUTH-PASS-GCOE-2026 *`, w / 2, barY + 95);

    // 10. Footer Strip
    ctx.fillStyle = '#0a0d18';
    ctx.fillRect(0, h - 80, w, 80);
    ctx.fillStyle = '#64748b';
    ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GRACE COLLEGE OF ENGINEERING • MULLAKKADU, THOOTHUKUDI - 628 005', w / 2, h - 45);
    ctx.fillText('Affiliated to Anna University | Approved by AICTE, New Delhi', w / 2, h - 25);
  }

  roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  drawBarcode(ctx, x, y, width, height) {
    ctx.fillStyle = '#ffffff';
    let currentX = x;
    const endX = x + width;

    // Draw pseudo-random realistic barcode lines
    let seed = 42;
    function pseudoRand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    while (currentX < endX) {
      const barWidth = Math.floor(pseudoRand() * 5) + 2;
      const spaceWidth = Math.floor(pseudoRand() * 4) + 2;

      ctx.fillRect(currentX, y, barWidth, height);
      currentX += barWidth + spaceWidth;
    }
  }

  download() {
    const link = document.createElement('a');
    link.download = `GCOE_Induction_Pass_${this.studentData.name.replace(/\s+/g, '_')}.png`;
    link.href = this.canvas.toDataURL('image/png');
    link.click();
  }
}

window.BadgeGenerator = BadgeGenerator;
