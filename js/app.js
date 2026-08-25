/**
 * INDUCTION DAY 2026 - PPT STAGE SLIDE DECK
 * Grace College of Engineering (GCOE)
 * Department of Humanities & Science and Department of MBA
 */

const SLIDES = [
  // 0. Welcome Cover Slide
  {
    id: "cover",
    type: "cover",
    welcomeText: "WELCOME TO",
    institution: "GRACE COLLEGE OF ENGINEERING",
    tagline: "Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai",
    eventTitle: "FRESHER'S DAY 2026",
    eventSubtitle: "FRESHMAN INDUCTION & ACADEMIC ORIENTATION PROGRAM",
    batch: "BATCH 2026 – 2030",
    departments: "Department of Humanities & Sciences and Department of Management Studies (MBA)",
    venueDate: "📅 03.09.2026  |  📍 Grace Auditorium, Mullakkadu, Tuticorin",
    quote: "“Empowering Young Minds with Technical Excellence, Ethical Values & Global Vision.”"
  },

  // 1. Program Agenda Overview
  {
    id: "agenda",
    type: "agenda",
    title: "PROGRAM AGENDA",
    subtitle: "DEPARTMENT OF HUMANITIES AND SCIENCE • INDUCTION DAY (03.09.2026)",
    venueTime: "VENUE: GRACE AUDITORIUM | TIME: 10.30 AM",
    items: [
      { time: "10.30 AM", event: "Prayer", person: "Mr. S. Stephen", role: "Vice Chairman, GCOE", slideIdx: 2 },
      { time: "10.40 AM", event: "Welcome Address", person: "Dr. M. D. Mohan Gift", role: "Vice Principal, GCOE", slideIdx: 3 },
      { time: "10.55 AM", event: "Presidential Address", person: "Mr. C. M. Joshua", role: "Chairman, GCOE", slideIdx: 4 },
      { time: "11.15 AM", event: "Inaugural Address", person: "[ Chief Guest ]", role: "Chief Guest & Keynote Speaker", slideIdx: 5 },
      { time: "11.40 AM", event: "Orientation", person: "Dr. S. Sidhardhan", role: "Principal, GCOE", slideIdx: 6 },
      { time: "12.05 PM", event: "Alumni & Present Learner Insights", person: "Alumni & Student Representatives", role: "GCOE", slideIdx: 7 },
      { time: "12.25 PM", event: "HOD’s Introduction", person: "Heads of Departments", role: "Engineering, MBA & H&S", slideIdx: 8 },
      { time: "12.40 PM", event: "Introduction of First Year Faculties", person: "Dr. J. Antony Rex Rodrigo", role: "HOD / H&S", slideIdx: 16 },
      { time: "12.55 PM", event: "Department of Management Studies", person: "Dr. Sivakumar", role: "HOD / MBA", slideIdx: 23 },
      { time: "01.10 PM", event: "Prize Distribution", person: "Management & Dignitaries", role: "Merit Awards", slideIdx: 24 },
      { time: "01.30 PM", event: "Vote of Thanks", person: "Dr. R. Jaqulin Isabella", role: "AP / Tamil", slideIdx: 25 }
    ]
  },

  // 2. Prayer
  {
    id: "stephen",
    type: "speaker",
    agendaEvent: "PRAYER",
    name: "Mr. S. Stephen",
    role: "Vice Chairman, GCOE",
    image: "assets/images/speakers/stephen.png",
    fallback: "Screenshots/Stephen.png",
    description: "Invocation and prayer seeking divine blessings for the new academic journey of the 2026–2030 freshman batch.",
    quote: "“The fear of the Lord is the beginning of wisdom — May your journey at Grace be filled with purpose and excellence.”"
  },

  // 3. Welcome Address
  {
    id: "mohan-gift",
    type: "speaker",
    agendaEvent: "WELCOME ADDRESS",
    name: "Dr. M. D. Mohan Gift",
    role: "Vice Principal, GCOE",
    image: "assets/images/speakers/mohan_gift.png",
    fallback: "Screenshots/Mohan Gift.png",
    description: "Extending a warm and gracious welcome to freshers, parents, respected faculty, and esteemed dignitaries.",
    quote: "“We warmly welcome our newest innovators into the vibrant and supportive Grace College family!”"
  },

  // 4. Presidential Address
  {
    id: "joshua",
    type: "speaker",
    agendaEvent: "PRESIDENTIAL ADDRESS",
    name: "Mr. C. M. Joshua",
    role: "Chairman, GCOE",
    image: "assets/images/speakers/joshua.png",
    fallback: "Screenshots/joshua.png",
    description: "Presidential address sharing institutional vision, world-class facilities, ethical values, and empowering student success.",
    quote: "“At Grace, we cultivate visionaries, innovators, and leaders who will build tomorrow's world.”"
  },

  // 5. Chief Guest Inaugural Address
  {
    id: "chief-guest",
    type: "chief-guest",
    agendaEvent: "INAUGURAL ADDRESS",
    name: "[ Chief Guest Name ]",
    role: "Chief Guest & Eminent Keynote Speaker",
    description: "Inaugural address illuminating emerging technologies, engineering frontiers, academic mindset, and industry readiness.",
    quote: "“The future belongs to those who embrace continuous learning, curiosity, and technological innovation.”"
  },

  // 6. Principal Orientation
  {
    id: "sidhardhan",
    type: "speaker",
    agendaEvent: "ORIENTATION",
    name: "Dr. S. Sidhardhan",
    role: "Principal, GCOE",
    image: "assets/images/speakers/sidharthan.png",
    fallback: "Screenshots/Sidharthan.png",
    description: "Comprehensive orientation on academic framework, Anna University curriculum, research culture, and campus life.",
    quote: "“Excellence is not an act, but a habit. Welcome to four transformative years of learning and discovery.”"
  },

  // 7. Alumni & Present Learner Insights
  {
    id: "alumni",
    type: "feature",
    agendaEvent: "ALUMNI INSIGHTS & PRESENT LEARNER INSIGHTS",
    title: "Alumni Insights & Present Learner Insights",
    role: "GCOE Alumni Network & Senior Student Leaders",
    points: [
      "Inspiring career journeys and industry experiences shared by distinguished alumni",
      "Practical tips for freshers on coursework, competitive coding, hackathons, and projects",
      "Senior student perspectives on campus clubs, cultural forums, and sports activities",
      "Peer mentorship support system to help new students excel from Day 1"
    ]
  },

  // =========================================================================
  // 8. SEPARATE SLIDES FOR EACH AND EVERY HOD (NEXT BY NEXT IN ORDER)
  // =========================================================================
  {
    id: "hod-cse",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • COMPUTER SCIENCE & ENGINEERING",
    deptCode: "CSE",
    deptName: "Department of Computer Science & Engineering",
    name: "[ HOD / CSE Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Leading cutting-edge education in software engineering, algorithms, cloud computing, cybersecurity, and emerging technologies.",
    quote: "“Empowering code craftsmen and architects of the intelligent digital era.”"
  },
  {
    id: "hod-aids",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
    deptCode: "AI & DS",
    deptName: "Department of Artificial Intelligence & Data Science",
    name: "[ HOD / AI & DS Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Pioneering intelligent systems, machine learning architectures, big data analytics, deep learning models, and computer vision.",
    quote: "“Shaping the intelligence of tomorrow through data-driven innovation.”"
  },
  {
    id: "hod-ece",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • ELECTRONICS & COMMUNICATION ENGINEERING",
    deptCode: "ECE",
    deptName: "Department of Electronics & Communication Engineering",
    name: "[ HOD / ECE Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Spearheading advanced VLSI design, embedded IoT systems, 5G wireless communications, robotics, and signal processing.",
    quote: "“Connecting the globe through semiconductor precision and wireless innovation.”"
  },
  {
    id: "hod-eee",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • ELECTRICAL & ELECTRONICS ENGINEERING",
    deptCode: "EEE",
    deptName: "Department of Electrical & Electronics Engineering",
    name: "[ HOD / EEE Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Empowering next-gen renewable energy systems, smart power grids, EV drive technologies, and industrial power automation.",
    quote: "“Powering sustainable futures with smart grid intelligence and clean energy.”"
  },
  {
    id: "hod-mech",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • MECHANICAL ENGINEERING",
    deptCode: "MECH",
    deptName: "Department of Mechanical Engineering",
    name: "[ HOD / Mechanical Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Driving innovation in computer-aided design & manufacturing (CAD/CAM), thermal engineering, mechatronics, and robotics.",
    quote: "“Transforming imagination into precision machines and robotic marvels.”"
  },
  {
    id: "hod-civil",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • CIVIL ENGINEERING",
    deptCode: "CIVIL",
    deptName: "Department of Civil Engineering",
    name: "[ HOD / Civil Name ]",
    role: "Head of Department (HOD)",
    isPlaceholder: true,
    description: "Mastering sustainable infrastructure design, structural engineering, smart environmental solutions, and modern construction management.",
    quote: "“Building enduring structures and green infrastructure for modern civilizations.”"
  },
  {
    id: "hod-mba",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • DEPARTMENT OF MANAGEMENT STUDIES",
    deptCode: "MBA",
    deptName: "Department of Management Studies (MBA)",
    name: "Dr. Sivakumar",
    role: "Head of Department (HOD) - MBA",
    image: "assets/images/speakers/sivakumar.png",
    fallback: "Screenshots/Sivakumar.png",
    isPlaceholder: false,
    description: "Nurturing techno-managerial leaders, corporate strategists, entrepreneurs, and global business managers.",
    quote: "“Leadership and management acumen empower engineers to convert brilliant ideas into global enterprises.”"
  },
  {
    id: "hod-hs",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • HUMANITIES & SCIENCES",
    deptCode: "H&S",
    deptName: "Department of Humanities & Sciences (H&S)",
    name: "Dr. J. Antony Rex Rodrigo",
    role: "Head of Department (HOD) - Humanities & Science",
    image: "assets/images/speakers/antony_rex.png",
    fallback: "Screenshots/Antony Rex HOD.jpeg",
    isPlaceholder: false,
    description: "Building the core foundational pillars of Engineering Mathematics, Physics, Chemistry, English, and Computing fundamentals.",
    quote: "“A strong foundation in basic sciences is the bedrock of breakthrough engineering innovations.”"
  },

  // =========================================================================
  // 9. FIRST YEAR FACULTIES (SEPARATE SINGLE SLIDE FOR EACH SUBJECT)
  // =========================================================================
  {
    id: "faculty-tamil",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • TAMIL",
    subject: "Department of Tamil",
    subtitle: "Heritage, Language & Cultural Studies",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Fostering appreciation for Tamil heritage, scientific literature, classical and modern communication in engineering contexts.",
    quote: "“Language is the mirror of culture and the vehicle of creative scientific thought.”",
    members: [
      {
        name: "Dr. R. Jaqulin Isabella",
        role: "Assistant Professor / Tamil",
        image: "assets/images/speakers/jaquiline_isabella.png",
        fallback: "Screenshots/Jaquilin isabella Tamil AP.png",
        isPlaceholder: false
      }
    ]
  },
  {
    id: "faculty-english",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • ENGLISH",
    subject: "Department of English",
    subtitle: "Professional Communication & Soft Skills",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Empowering students with global communicative competence, technical report writing, professional soft skills, and interview excellence.",
    quote: "“Clear communication is the bridge between brilliant engineering ideas and real-world impact.”",
    members: [
      {
        name: "Ms. Dyana Flora",
        role: "Assistant Professor / English",
        isPlaceholder: true
      },
      {
        name: "Ms. Flora",
        role: "Assistant Professor / English",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "faculty-maths",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • MATHEMATICS",
    subject: "Department of Mathematics",
    subtitle: "Engineering Mathematics, Calculus, Statistics & Discrete Computing",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Cultivating analytical rigor, logical problem-solving, advanced calculus, linear algebra, and discrete mathematical computing.",
    quote: "“Mathematics is the queen of sciences — the foundational bedrock of all engineering breakthroughs.”",
    members: [
      {
        name: "Dr. J. Antony Rex Rodrigo",
        role: "HOD & Professor / Maths",
        image: "assets/images/speakers/antony_rex.png",
        fallback: "Screenshots/Antony Rex HOD.jpeg",
        isPlaceholder: false
      },
      {
        name: "Dr. Victor Immanuel",
        role: "Associate Professor / Maths",
        image: "assets/images/speakers/victor.png",
        fallback: "Screenshots/Victor Immanuel.png",
        isPlaceholder: false
      },
      {
        name: "Dr. Raman",
        role: "Assistant Professor / Maths",
        image: "assets/images/speakers/raman.png",
        fallback: "Screenshots/Raman.png",
        isPlaceholder: false
      },
      {
        name: "Ms. Shiny Arockia",
        role: "Assistant Professor / Maths",
        image: "assets/images/speakers/shiny_arockia.png",
        fallback: "Screenshots/shiny arockia.jpeg",
        isPlaceholder: false
      },
      {
        name: "Ms. Jeyantha",
        role: "Assistant Professor / Maths",
        image: "assets/images/speakers/jeyantha.png",
        fallback: "Screenshots/jeyantha.jpeg",
        isPlaceholder: false
      }
    ]
  },
  {
    id: "faculty-physics",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • PHYSICS",
    subject: "Department of Physics",
    subtitle: "Applied Physics, Optics, Solid State & Material Science",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Unraveling fundamental physical principles, laser optics, quantum mechanics, solid state physics, and nanomaterials for modern engineering.",
    quote: "“Physics illuminates the laws of nature and transforms pure scientific inquiry into transformative technology.”",
    members: [
      {
        name: "Dr. Selvaprem Kumar",
        role: "Assistant Professor / Physics",
        image: "assets/images/speakers/selvaprem_kumar.png",
        fallback: "Screenshots/Selvaprem kumar physics AP.jpeg",
        isPlaceholder: false
      },
      {
        name: "Ms. Jini Kamal",
        role: "Assistant Professor / Physics",
        image: "assets/images/speakers/jini_kamal.png",
        fallback: "Screenshots/Jini kamal.jpeg",
        isPlaceholder: false
      }
    ]
  },
  {
    id: "faculty-chemistry",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • CHEMISTRY",
    subject: "Department of Chemistry",
    subtitle: "Engineering Chemistry & Environmental Science",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Imparting key insights into polymer chemistry, battery technologies, corrosion engineering, water treatment, and green technologies.",
    quote: "“Understanding molecular transformations is the gateway to developing next-generation sustainable materials.”",
    members: [
      {
        name: "Dr. / Ms. Somasundari",
        role: "Assistant Professor / Chemistry",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "faculty-pet",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • PHYSICAL EDUCATION (PET)",
    subject: "Department of Physical Education",
    subtitle: "Sports, Athletics, Health & Physical Fitness",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Promoting physical fitness, competitive sportsmanship, university athletic tournaments, and active healthy lifestyles on campus.",
    quote: "“A sound mind resides in a sound body — champions are built on discipline, fitness, and persistence.”",
    members: [
      {
        name: "Mr. Rishop",
        role: "Physical Education Director (PET)",
        image: "assets/images/speakers/rishop_pet.png",
        fallback: "Screenshots/Rishop PET.jpeg",
        isPlaceholder: false
      }
    ]
  },
  {
    id: "faculty-librarian",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • LIBRARY SCIENCES",
    subject: "Central College Library",
    subtitle: "Information Resource Centre & Digital Knowledge Hub",
    leadName: "Dr. J. Antony Rex Rodrigo (HOD / H&S)",
    description: "Curating over 25,000+ volumes, IEEE e-journals, DELNET digital database, research periodicals, and state-of-the-art reading halls.",
    quote: "“Knowledge is power, and the library is the engine that drives intellectual growth and lifelong curiosity.”",
    members: [
      {
        name: "Mr. Asir",
        role: "College Librarian",
        image: "assets/images/speakers/asir_librarian.png",
        fallback: "Screenshots/Asir Librarian.png",
        isPlaceholder: false
      }
    ]
  },


  // 11. Prize Distribution
  {
    id: "prize",
    type: "feature",
    agendaEvent: "PRIZE DISTRIBUTION",
    title: "Prize Distribution & Academic Honors",
    role: "Management & Dignitaries, GCOE",
    points: [
      "Felicitating entrance and higher secondary cut-off toppers",
      "Recognizing admission merit scholarship awardees",
      "Distributing awards for excellence in academic, sports, and cultural achievements",
      "Inspiring the incoming freshman cohort to strive for the highest honors"
    ]
  },

  // 12. Vote of Thanks
  {
    id: "jaqulin-isabella",
    type: "speaker",
    agendaEvent: "VOTE OF THANKS",
    name: "Dr. R. Jaqulin Isabella",
    role: "AP / Tamil (Assistant Professor, Tamil)",
    image: "assets/images/speakers/jaquiline_isabella.png",
    fallback: "Screenshots/Jaquilin isabella Tamil AP.png",
    description: "Proposing a heartfelt vote of thanks to the Management, Dignitaries, Respected Parents, Faculty, and Freshers Batch 2026.",
    quote: "“Gratitude is the memory of the heart. Sincere thanks to everyone who made this Induction Day memorable!”"
  }
];

let currentSlide = 0;

function renderSlide(index) {
  if (index < 0 || index >= SLIDES.length) return;
  currentSlide = index;

  const stage = document.getElementById('stageContent');
  const slide = SLIDES[index];

  // Update HUD counter
  const counterEl = document.getElementById('slideNum');
  if (counterEl) {
    counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}`;
  }

  let html = '';

  if (slide.type === 'cover') {
    html = `
      <div class="slide-cover-layout">
        <div class="cover-gold-badge">★ INDUCTION CEREMONY ★</div>
        <div class="cover-welcome-text">${slide.welcomeText}</div>
        <h1 class="cover-college-title">${slide.institution}</h1>
        <div class="cover-college-tagline">${slide.tagline}</div>

        <div class="cover-center-box">
          <div class="cover-event-pill">${slide.eventTitle}</div>
          <div class="cover-event-sub">${slide.eventSubtitle}</div>
          <div class="cover-batch-badge">${slide.batch}</div>
        </div>

        <div class="cover-dept-name">${slide.departments}</div>
        <div class="cover-venue-strip">${slide.venueDate}</div>

        <div class="cover-cta-row" onclick="goToSlide(1)">
          <span>Explore Program Agenda</span>
          <span class="cta-arrow">➔</span>
        </div>
      </div>
    `;
  } else if (slide.type === 'agenda') {
    html = `
      <div class="slide-agenda-layout">
        <div class="agenda-header-strip">
          <div class="agenda-tag-badge">★ OFFICIAL STAGE SCHEDULE ★</div>
          <h2 class="agenda-screen-title">${slide.title}</h2>
          <div class="agenda-sub">${slide.subtitle}</div>
          <div class="agenda-venue">${slide.venueTime}</div>
        </div>

        <div class="agenda-table-grid">
          ${slide.items.map((item) => `
            <div class="agenda-table-row" onclick="goToSlide(${item.slideIdx})">
              <div class="time-col">${item.time}</div>
              <div class="event-col">
                <div class="event-name">${item.event}</div>
                <div class="person-name">${item.person} <span class="role-badge">${item.role}</span></div>
              </div>
              <div class="jump-arrow">➔</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (slide.type === 'speaker') {
    html = `
      <div class="slide-speaker-layout">
        <div class="speaker-left-card">
          <div class="speaker-photo-frame">
            <img src="${slide.image}" alt="${slide.name}" class="speaker-real-photo" onerror="this.src='${slide.fallback || 'Screenshots/Stephen.png'}'" />
          </div>
          <h2 class="speaker-display-name">${slide.name}</h2>
          <div class="speaker-display-role">${slide.role}</div>
        </div>

        <div class="speaker-right-card">
          <div class="agenda-event-tag">★ PROGRAM AGENDA</div>
          <h1 class="agenda-event-title">${slide.agendaEvent}</h1>
          <p class="agenda-event-desc">${slide.description}</p>
          
          <div class="speaker-quote-banner">
            <div class="quote-symbol">“</div>
            <div class="quote-text">${slide.quote}</div>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === 'chief-guest') {
    html = `
      <div class="slide-speaker-layout">
        <div class="speaker-left-card chief-guest-card">
          <div class="speaker-photo-frame placeholder-frame">
            <div class="photo-placeholder-content">
              <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <div class="ph-label">SPACE FOR CHIEF GUEST PHOTO</div>
            </div>
          </div>
          <div class="speaker-display-name chief-guest-name-slot">${slide.name}</div>
          <div class="speaker-display-role">${slide.role}</div>
        </div>

        <div class="speaker-right-card">
          <div class="agenda-event-tag">★ PROGRAM AGENDA • INAUGURAL ADDRESS</div>
          <h1 class="agenda-event-title">${slide.agendaEvent}</h1>
          <p class="agenda-event-desc">${slide.description}</p>
          
          <div class="speaker-quote-banner">
            <div class="quote-symbol">“</div>
            <div class="quote-text">${slide.quote}</div>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === 'hod-single') {
    html = `
      <div class="slide-speaker-layout">
        <div class="speaker-left-card ${slide.isPlaceholder ? 'placeholder-card-glow' : ''}">
          <div class="speaker-photo-frame ${slide.isPlaceholder ? 'placeholder-frame' : ''}">
            ${slide.isPlaceholder ? `
              <div class="photo-placeholder-content">
                <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <div class="ph-label">SPACE FOR ${slide.deptCode} HOD PHOTO</div>
              </div>
            ` : `
              <img src="${slide.image}" alt="${slide.name}" class="speaker-real-photo" onerror="this.src='${slide.fallback || 'Screenshots/Stephen.png'}'" />
            `}
          </div>
          <h2 class="speaker-display-name ${slide.isPlaceholder ? 'chief-guest-name-slot' : ''}">${slide.name}</h2>
          <div class="speaker-display-role">${slide.role}</div>
          <div class="hod-dept-badge-pill">${slide.deptCode}</div>
        </div>

        <div class="speaker-right-card">
          <div class="agenda-event-tag">★ HOD INTRODUCTION • ${slide.deptCode}</div>
          <h1 class="agenda-event-title">${slide.deptName}</h1>
          <p class="agenda-event-desc">${slide.description}</p>
          
          <div class="speaker-quote-banner">
            <div class="quote-symbol">“</div>
            <div class="quote-text">${slide.quote || `“Fostering technical excellence, innovation, and ethical leadership in ${slide.deptCode}.”`}</div>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === 'faculty-subject') {
    if (slide.members.length === 1) {
      // Single faculty spotlight hero layout (Tamil, Chemistry, PET, Librarian)
      const m = slide.members[0];
      html = `
        <div class="slide-speaker-layout faculty-single-hero-layout">
          <div class="speaker-left-card ${m.isPlaceholder ? 'placeholder-card-glow' : ''}">
            <div class="speaker-photo-frame ${m.isPlaceholder ? 'placeholder-frame' : ''}">
              ${m.isPlaceholder ? `
                <div class="photo-placeholder-content">
                  <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div class="ph-label">SPACE FOR PHOTO</div>
                </div>
              ` : `
                <img src="${m.image}" alt="${m.name}" class="speaker-real-photo" onerror="this.src='${m.fallback || 'Screenshots/Stephen.png'}'" />
              `}
            </div>
            <h2 class="speaker-display-name ${m.isPlaceholder ? 'chief-guest-name-slot' : ''}">${m.name}</h2>
            <div class="speaker-display-role">${m.role}</div>
            <div class="hod-dept-badge-pill">${slide.subject.replace('Department of ', '')}</div>
          </div>

          <div class="speaker-right-card">
            <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
            <h1 class="agenda-event-title">${slide.subject}</h1>
            <div class="subject-lead-intro-box">Introduced by <strong>${slide.leadName}</strong></div>
            <p class="agenda-event-desc">${slide.description || slide.subtitle}</p>
            
            ${slide.quote ? `
              <div class="speaker-quote-banner">
                <div class="quote-symbol">“</div>
                <div class="quote-text">${slide.quote}</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    } else {
      // Multi-member faculty subject layout (English, Mathematics, Physics)
      html = `
        <div class="slide-faculty-subject-layout">
          <div class="faculty-subject-header">
            <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
            <h1 class="subject-headline">${slide.subject}</h1>
            <div class="subject-lead-intro">Introduced by <strong>${slide.leadName}</strong></div>
            
            ${slide.quote ? `
              <div class="subject-quote-pill">
                <span class="quote-icon">“</span>
                <span class="quote-msg">${slide.quote}</span>
              </div>
            ` : ''}
          </div>

          <div class="faculty-members-row count-${slide.members.length}">
            ${slide.members.map(m => `
              <div class="faculty-spotlight-card ${m.isPlaceholder ? 'placeholder-spotlight' : ''}">
                <div class="faculty-spotlight-frame ${m.isPlaceholder ? 'placeholder-frame' : ''}">
                  ${m.isPlaceholder ? `
                    <div class="photo-placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <div class="ph-label" style="font-size: 0.78rem;">SPACE FOR PHOTO</div>
                    </div>
                  ` : `
                    <img src="${m.image}" alt="${m.name}" class="speaker-real-photo" onerror="this.src='${m.fallback || 'Screenshots/Stephen.png'}'" />
                  `}
                </div>
                <h3 class="faculty-spotlight-name ${m.isPlaceholder ? 'ph-name-tag' : ''}">${m.name}</h3>
                <div class="faculty-spotlight-role">${m.role}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  } else if (slide.type === 'feature') {
    html = `
      <div class="slide-feature-layout">
        <div class="agenda-event-tag">★ PROGRAM AGENDA</div>
        <h1 class="agenda-event-title">${slide.agendaEvent}</h1>
        <div class="feature-role-subtitle">${slide.role}</div>

        <div class="feature-points-grid">
          ${slide.points.map(pt => `
            <div class="feature-point-item">
              <span class="point-bullet">✔</span>
              <span class="point-text">${pt}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  stage.innerHTML = html;
}

function nextSlide() {
  if (currentSlide < SLIDES.length - 1) {
    renderSlide(currentSlide + 1);
  } else {
    renderSlide(0);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    renderSlide(currentSlide - 1);
  }
}

function goToSlide(idx) {
  renderSlide(idx);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log("Fullscreen request failed:", err);
    });
  } else {
    document.exitFullscreen();
  }
}

// Keyboard controls
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Backspace') {
    e.preventDefault();
    prevSlide();
  } else if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    toggleFullscreen();
  } else if (e.key === 'Home') {
    e.preventDefault();
    goToSlide(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goToSlide(SLIDES.length - 1);
  }
});

// Touch swipe
let touchStart = 0;
window.addEventListener('touchstart', e => {
  touchStart = e.changedTouches[0].screenX;
});
window.addEventListener('touchend', e => {
  let touchEnd = e.changedTouches[0].screenX;
  if (touchEnd < touchStart - 50) nextSlide();
  if (touchEnd > touchStart + 50) prevSlide();
});

document.addEventListener('DOMContentLoaded', () => {
  renderSlide(0);
});
