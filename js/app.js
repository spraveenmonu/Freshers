/**
 * INDUCTION DAY 2026 - PPT STAGE SLIDE DECK
 * Grace College of Engineering (GCOE)
 * Department of Humanities & Sciences and Department of Management Studies (MBA)
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
    subtitle: "DEPARTMENT OF HUMANITIES AND SCIENCES • INDUCTION DAY (03.09.2026)",
    venueTime: "VENUE: GRACE AUDITORIUM | TIME: 10.30 AM",
    items: [
      { time: "10.30 AM", event: "Prayer", person: "Mr. S. Stephen", role: "Vice Chairman, GCOE", slideIdx: 2 },
      { time: "10.40 AM", event: "Welcome Address", person: "Dr. M. D. Mohan Gift", role: "Vice Principal, GCOE", slideIdx: 3 },
      { time: "10.55 AM", event: "Presidential Address", person: "Mr. C. M. Joshua", role: "Chairman, GCOE", slideIdx: 4 },
      { time: "11.15 AM", event: "Inaugural Address", person: "Sri R. Shiva Prasad IPS", role: "Superintendent of Police", slideIdx: 5 },
      { time: "11.35 AM", event: "Special Invitee Address", person: "Dr. R. Joshua Arul Kumar", role: "Manager-Operations, Rane", slideIdx: 6 },
      { time: "11.45 AM", event: "Special Invitee Address", person: "Dr. B. Janet", role: "Associate Professor, NIT Trichy", slideIdx: 7 },
      { time: "11.55 AM", event: "Orientation", person: "Dr. S. Sidhardhan", role: "Principal, GCOE", slideIdx: 8 },
      { time: "12.10 PM", event: "HOD’s Introduction & Dept Showcases", person: "Heads of Departments", role: "Engineering & H&S", slideIdx: 9 },
      { time: "12.45 PM", event: "Introduction of First Year Faculties", person: "Dr. J. Antony Rex Rodrigo", role: "HOD / H&S", slideIdx: 21 },
      { time: "01.05 PM", event: "Department of Management Studies", person: "Dr. Sivakumar & MBA Faculty", role: "HOD & Faculty / MBA", slideIdx: 29 },
      { time: "01.15 PM", event: "Prize Distribution", person: "Management & Dignitaries", role: "Merit Awards", slideIdx: 31 },
      { time: "01.25 PM", event: "Alumni & Present Learner Insights", person: "Alex Mathew & Sumitha Rani", role: "Distinguished Alumni", slideIdx: 32 },
      { time: "01.35 PM", event: "Vote of Thanks", person: "Dr. R. Jaqulin Isabella", role: "AP / Tamil", slideIdx: 33 }
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

  // 5. Chief Guest Inaugural Address - Sri R. Shiva Prasad IPS
  {
    id: "chief-guest",
    type: "speaker",
    agendaEvent: "INAUGURAL ADDRESS",
    badgeLabel: "★ CHIEF GUEST & KEYNOTE SPEAKER",
    name: "Sri R. Shiva Prasad IPS",
    role: "Superintendent of Police, Thoothukudi Dist.",
    image: "assets/images/speakers/shiva_prasad.png",
    fallback: "Screenshots/R. Shiva Prasad.png",
    description: "Inaugural address illuminating emerging technologies, discipline, societal impact, ethical leadership, and empowering youth readiness.",
    quote: "“Discipline, dedication, and knowledge are the ultimate superpowers that turn young scholars into national changemakers.”"
  },

  // 6. Special Invitee Slide 1 - Dr. R. Joshua Arul Kumar
  {
    id: "special-invitee-joshua",
    type: "special-invitee",
    agendaEvent: "SPECIAL INVITEE ADDRESS",
    badgeLabel: "★ SPECIAL INVITEE",
    name: "Dr. R. Joshua Arul Kumar",
    qualifications: "M.Tech., Ph.D. • 20 Years Experience",
    role: "Manager - Operations, Rane Vidyalaya Schools",
    image: "assets/images/speakers/joshua_arul_kumar.png",
    fallback: "Screenshots/joshua arul kumar.png",
    isPlaceholder: false,
    careerHistory: [
      {
        period: "15 May 2021 – 31st May 2026",
        role: "Principal",
        org: "Rane Polytechnic, Trichy"
      },
      {
        period: "From June 2026 – Present",
        role: "Manager - Operations",
        org: "Rane Vidyalaya Schools"
      }
    ],
    highlights: [
      "20 Years Teaching Experience",
      "Specialist: Deep Learning & Robotics",
      "Embedded Systems & Neural Networks",
      "WIPRO Mission10X Master Trainer",
      "Established VLSI & E-Yantra Robotics Labs",
      "Life Member: ISTE & IE"
    ],
    description: "Special address bringing 20 years of academic leadership, robotics and VLSI lab establishment, and operational excellence to inspire the incoming freshman batch.",
    quote: "“Continuous learning, strong foundational values, and technical agility are the keys to building an enduring career in modern industry.”"
  },

  // 7. Special Invitee Slide 2 - Dr. B. Janet (NIT Trichy)
  {
    id: "special-invitee-janet",
    type: "special-invitee",
    agendaEvent: "SPECIAL INVITEE ADDRESS",
    badgeLabel: "★ SPECIAL INVITEE",
    name: "Dr. B. Janet",
    qualifications: "M.C.A., M.Phil., Ph.D. • NIT Tiruchirappalli",
    role: "Associate Professor, Dept. of Computer Applications, NIT Trichy",
    image: "assets/images/speakers/b_janet.png",
    fallback: "Screenshots/b.janet.png",
    isPlaceholder: false,
    careerHistory: [
      {
        period: "14+ Years Teaching & Research",
        role: "Associate Professor / Faculty",
        org: "National Institute of Technology (NIT), Tiruchirappalli"
      },
      {
        period: "Founder & Lab In-Charge",
        role: "Information Processing & Security Lab",
        org: "NIT Tiruchirappalli"
      }
    ],
    highlights: [
      "Ph.D., National Institute of Technology, Trichy",
      "Information Retrieval & Web Security Specialist",
      "Established Info Processing & Security Lab",
      "IEEE & International Journal Reviewer",
      "National Coordinator: Cyber Security & AI Forums"
    ],
    description: "Special address delivering deep insights into cybersecurity, web intelligence, information processing, and ethical technology practices from one of India's premier institutes of national importance (NIT Trichy).",
    quote: "“Cultivate relentless curiosity and strong technical ethics — the digital era belongs to purposeful creators.”"
  },

  // 8. Principal Orientation - Dr. S. Sidhardhan
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

  // =========================================================================
  // 9. CSE DEPARTMENT SHOWCASE & HOD
  // =========================================================================
  // 9a. CSE Flyer
  {
    id: "cse-flyer",
    type: "dept-flyer",
    agendaEvent: "DEPARTMENT SPOTLIGHT • COMPUTER SCIENCE & ENGINEERING",
    deptCode: "CSE",
    deptName: "Department of Computer Science and Engineering",
    flyerImage: "assets/images/departments/cse_page_1.webp",
    fallbackFlyer: "assets/images/departments/cse_page_1.png",
    badge: "16 Years of Excellence",
    stats: [
      { value: "80%", label: "Placement On-Campus" },
      { value: "3.6 LPA", label: "Average Package" },
      { value: "25+", label: "IT & Non-IT Recruiters" }
    ],
    bullets: [
      "Tech-enabled & Practice Oriented Learning Platforms: Infosys Springboard, IBM SkillsBuild, Naan Mudhalvan, GUVI, NPTEL.",
      "Live Student Innovation Projects: Hostel Inventory Management, University ExamSoft, Home Automation, Grace Desk, GPS Tracking & Library Management System.",
      "State-of-the-Art Infrastructure: High-speed computing labs, smart air-conditioned digital learning spaces, and comprehensive online resources."
    ],
    recruiters: ["Infosys", "TCS", "HCLTech", "Foxconn", "Literact", "DigiSailor", "Jilaba", "Palnar"]
  },

  // 9b. CSE Achievements
  {
    id: "cse-achievements",
    type: "dept-flyer",
    agendaEvent: "DEPARTMENT ACHIEVEMENTS • COMPUTER SCIENCE & ENGINEERING",
    deptCode: "CSE",
    deptName: "CSE Focus Areas, Research & Honors",
    flyerImage: "assets/images/departments/cse_page_2.webp",
    fallbackFlyer: "assets/images/departments/cse_page_2.png",
    badge: "Academic & Research Milestones",
    stats: [
      { value: "12 LPA", label: "Top Placement Record" },
      { value: "TNSCST", label: "Funded Research Projects" },
      { value: "CM Trophy", label: "Bronze Medal Winner" }
    ],
    bullets: [
      "Centre of Excellence in Internet of Things (IoT) driving hands-on smart embedded systems and sensors.",
      "Professional Development & Industry Networking: Language and cultural exchange programs, hackathons, and corporate forums.",
      "State-level & National symposium winners; recognized by MoE's Innovation Cell, Institution's Innovation Council (IIC), and IQAC.",
      "Degrees Offered: Undergraduate B.E. (Computer Science & Engg) & Postgraduate M.E. (Computer Science & Engg)."
    ],
    recruiters: ["Rinex", "Thozhil", "Roriri Software", "Shloklabs", "Space Zee", "Webberax"]
  },

  // 9c. CSE HOD Profile - Dr. I. Felcia Jerlin
  {
    id: "hod-cse",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • COMPUTER SCIENCE & ENGINEERING",
    deptCode: "CSE",
    deptName: "Department of Computer Science & Engineering",
    name: "Dr. I. Felcia Jerlin",
    role: "Head of the Department (HOD) - CSE",
    image: "assets/images/speakers/felcia_jerlin.png",
    fallback: "Screenshots/Grace College CSE - HoD Profile Flyer (1).jpg.jpeg",
    isPlaceholder: false,
    highlights: [
      "Ph.D. Anna University, Chennai",
      "Specialist: Data Structures & OS",
      "UI/UX Design Architecture",
      "Interdisciplinary Project Mentor",
      "Leading International Journal Publications"
    ],
    description: "Dr. I. Felcia Jerlin is an Assistant Professor & Head of the Department in Computer Science and Engineering at Grace College of Engineering. She earned her Ph.D. in CSE from Anna University, Chennai, and has published extensively in leading international journals and conferences. A dedicated academic and researcher specializing in Data Structures, Operating Systems, and UI/UX Design, she blends rigorous theoretical foundations with practical insights to empower aspiring engineers to create meaningful digital products with creativity and empathy.",
    quote: "“We are committed to empowering students with the skills to create meaningful digital experiences, integrating creativity, empathy, and problem-solving for real-world impact.”"
  },

  // =========================================================================
  // 10. AI & DS DEPARTMENT
  // =========================================================================
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

  // =========================================================================
  // 11. ECE DEPARTMENT SHOWCASE & HOD
  // =========================================================================
  // 11a. ECE Flyer
  {
    id: "ece-flyer",
    type: "dept-flyer",
    agendaEvent: "DEPARTMENT SPOTLIGHT • ELECTRONICS & COMMUNICATION ENGINEERING",
    deptCode: "ECE",
    deptName: "Department of Electronics and Communication Engineering",
    flyerImage: "assets/images/departments/ece_flyer.webp",
    fallbackFlyer: "assets/images/departments/ece_flyer.png",
    badge: "Where Electronics Meets Intelligence",
    stats: [
      { value: "94.4%", label: "Placement Success" },
      { value: "17 / 18", label: "Graduates Placed" },
      { value: "3D Print", label: "Student-Built Innovation" }
    ],
    bullets: [
      "Engineering in Action: ECE students designed and developed a functional 3D printer entirely from scratch.",
      "Advanced Practical Laboratories: Digital Signal Processing (DSP), Devices & Circuits, and Linear Integrated Circuits (LIC) equipped with state-of-the-art kits.",
      "Thriving Core Careers: Government opportunities (ISRO, DRDO, BEL, BSNL, Railways) & Private giants (VLSI, IoT, 5G/6G, Robotics, Telecom, Automotive).",
      "Philosophy: LEARN • DESIGN • BUILD • TEST • INNOVATE."
    ],
    recruiters: ["VLSI & Semiconductor", "Embedded Systems", "5G/6G Telecom", "Robotics & Automation"]
  },

  // 11b. ECE HOD Profile - Mrs. E. M. Uma Selvi
  {
    id: "hod-ece",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • ELECTRONICS & COMMUNICATION ENGINEERING",
    deptCode: "ECE",
    deptName: "Department of Electronics & Communication Engineering",
    name: "Mrs. E. M. Uma Selvi",
    role: "Assistant Professor & Head of the Department (HOD) - ECE",
    image: "assets/images/speakers/uma_selvi.png",
    fallback: "assets/images/departments/image2.png",
    isPlaceholder: false,
    highlights: [
      "M.E. Communication Systems",
      "14+ Years Academic Experience",
      "94.4% Placement Record",
      "Student 3D Printer Project Mentor",
      "DSP & LIC Lab Architect"
    ],
    description: "Mrs. E. M. Uma Selvi is an Assistant Professor & Head of the Department in Electronics and Communication Engineering at Grace College of Engineering. Holding an M.E. in Communication Systems with over 14 years of dedicated academic and research experience, she actively spearheads hands-on student innovations—including guiding students to design and develop a fully functional 3D printer from scratch. Under her dynamic leadership, the department achieved a stellar 94.4% placement record (17 out of 18 students placed), driving excellence in Digital Signal Processing (DSP), Linear Integrated Circuits (LIC), and advanced semiconductor technologies.",
    quote: "“Connecting the globe through semiconductor precision, wireless innovation, and hands-on engineering excellence: LEARN • DESIGN • BUILD • TEST • INNOVATE.”"
  },

  // =========================================================================
  // 12. EEE DEPARTMENT SHOWCASE & HOD
  // =========================================================================
  // 12a. EEE Flyer
  {
    id: "eee-flyer",
    type: "dept-flyer",
    agendaEvent: "DEPARTMENT SPOTLIGHT • ELECTRICAL & ELECTRONICS ENGINEERING",
    deptCode: "EEE",
    deptName: "Department of Electrical and Electronics Engineering",
    flyerImage: "assets/images/departments/eee_flyer.webp",
    fallbackFlyer: "assets/images/departments/eee_flyer.png",
    badge: "Powering Ideas... Energizing Tomorrow",
    stats: [
      { value: "100%", label: "Placement Track Record" },
      { value: "2 Times", label: "Niral Thiruvizha Winners" },
      { value: "Innovative", label: "Projects Every Year" }
    ],
    bullets: [
      "Consistent 100% Placement record for eligible students across leading core electrical and IT sectors.",
      "2-Time Winners of Prestigious Niral Thiruvizha: Hybrid Microbial Fuel Cell, Solar E-Bicycle & VR for Engineering Education.",
      "Excellent Core Career Hub in Thoothukudi: NTPL, TANGEDCO/TNPEDCL, TTPS, Sterlite Power, Tata Power, SPIC, Ind-Barath, SEPC, DCW.",
      "Advanced Laboratories: Well-equipped modern labs, latest simulation software & hands-on industry skill development."
    ],
    recruiters: ["NTPL", "TANGEDCO", "TTPS", "Sterlite Power", "Tata Power", "SPIC", "DCW", "SEPC Power"]
  },

  // 12b. EEE HOD Profile - Dr. S. Ganesh
  {
    id: "hod-eee",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • ELECTRICAL & ELECTRONICS ENGINEERING",
    deptCode: "EEE",
    deptName: "Department of Electrical & Electronics Engineering",
    name: "Dr. S. Ganesh",
    role: "Associate Professor & Head of the Department (HOD) - EEE",
    image: "assets/images/speakers/ganesh.png",
    fallback: "assets/images/speakers/ganesh_raw.jpeg",
    isPlaceholder: false,
    highlights: [
      "B.E., M.E. (Power Systems), Ph.D. (Anna Univ)",
      "12+ Years Teaching & Research",
      "3 Patents (VFD, Robotics, Microgrids)",
      "22 Journal Papers (IEEE, Wiley, IET)",
      "₹3.5 Lakh AICTE Cyber Security Grant",
      "2× State Niral Thiruvizha Mentor"
    ],
    description: "Dr. S. Ganesh, M.E., Ph.D. (Electrical) is an accomplished academician, researcher, and mentor with over 12 years of experience. He completed his B.E., M.E. in Power Systems, and Ph.D. from institutions affiliated with Anna University. His research spans Smart Grids, Renewable Microgrids, D-STATCOM, Electric Vehicles, AI/IoT, and Cyber-Physical Systems. Dr. Ganesh has published 22 journal papers (IEEE, Wiley, IET, Scopus) and 2 book chapters, holds 3 patents (variable-frequency-drive technology, multi-agent robotic systems, microgrid power scheduling), and secured ₹3,50,000 AICTE funding for AI-Powered Cyber Security in Industrial Control Systems. As a dedicated mentor, he guided student innovations to win state-level honors at Naan Mudhalvan–Niral Thiruvizha for the Solar E-Bicycle and VR in Engineering Education.",
    quote: "“Join EEE, Power Your Passion, Power the Future! Empowering ideas and energizing tomorrow through smart power, clean energy, and visionary innovation.”"
  },

  // =========================================================================
  // 13. MECHANICAL ENGINEERING SHOWCASE & HOD
  // =========================================================================
  // 13a. Mechanical Department Spotlight
  {
    id: "mech-spotlight",
    type: "dept-spotlight",
    agendaEvent: "DEPARTMENT SPOTLIGHT • MECHANICAL ENGINEERING",
    deptCode: "MECH",
    deptName: "Department of Mechanical Engineering",
    badge: "B.E. Programme Established in 2009",
    vision: "To be internationally recognized for Mechanical Engineering education and to develop well-qualified, innovative engineers prepared for advanced studies and global careers.",
    topics: [
      "CAD / CAM & Simulation",
      "Robotics & Automation",
      "Thermal & Heat Transfer",
      "Fluid Mechanics & Hydraulics",
      "Kinematics & Dynamics",
      "Manufacturing Technology",
      "Strength of Materials",
      "Mechatronics & PLC"
    ],
    description: "The Department of Mechanical Engineering has established a long-standing academic record in education, placement, and research since the inception of Grace College of Engineering in 2009. Students undergo rigorous theoretical and hands-on laboratory immersion spanning design, simulation, precision machining, and intelligent mechatronic automation.",
    labs: [
      {
        title: "Manufacturing Technology Lab",
        desc: "Machining, lathe operations, shaping, drilling, milling & modern production practice."
      },
      {
        title: "CAD / CAM / CAE Computing Lab",
        desc: "AutoCAD, SolidWorks, PRO-E, CATIA, ANSYS, Edgecam & CNC industrial trainers."
      },
      {
        title: "Thermal Engineering Lab",
        desc: "IC-engine performance analysis, heat transfer setups & experimental testing."
      },
      {
        title: "Strength & Fluid Mechanics Lab",
        desc: "Universal testing machine, pumps, turbines, flow measurements & hydraulics."
      },
      {
        title: "Kinematics & Dynamics Lab",
        desc: "Dynamic balancing, vibration analysis, gyroscopes, flywheels & machine dynamics."
      },
      {
        title: "Mechatronics & Automation Lab",
        desc: "Electro-pneumatics, PLC programming, servo controls & robotics integration."
      }
    ],
    outcomes: ["Problem Analysis", "Precision System Design", "Experimental Investigation", "Modern Tool Usage (CAD/CAM/FEA)", "Ethical Professional Practice"]
  },

  // 13b. Mechanical HOD Profile - Dr. M. D. Mohan Gift
  {
    id: "hod-mech",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • MECHANICAL ENGINEERING",
    deptCode: "MECH",
    deptName: "Department of Mechanical Engineering",
    name: "Dr. M. D. Mohan Gift",
    role: "Professor & Head of Department (HOD) - Mechanical Engineering",
    image: "assets/images/speakers/mohan_gift.png",
    fallback: "Screenshots/Mohan Gift.png",
    isPlaceholder: false,
    highlights: [
      "B.E., M.E., Ph.D. • 26 Years Experience",
      "Vice Principal, Grace College of Engineering",
      "CAD/CAM, Robotics & Thermal Engineering",
      "26+ Years of Academic & Research Leadership",
      "Excellence and Genuineness for Innovation"
    ],
    description: "Dr. M. D. Mohan Gift, B.E., M.E., Ph.D., is the Vice Principal and Professor & Head of the Department of Mechanical Engineering at Grace College of Engineering. With over 26 years of distinguished academic leadership, teaching, and research experience, he spearheads advanced mechanical engineering education, modern manufacturing labs, CAD/CAM/Robotics integration, and multidisciplinary student innovation. Under his leadership, the department prepares graduates with high competence, character, and industry readiness.",
    quote: "“Engineering the future with competence, character & innovation — Excellence and Genuineness for Innovation.”"
  },

  // =========================================================================
  // 14. CIVIL ENGINEERING SHOWCASE & HOD
  // =========================================================================
  // 14a. Civil Department Spotlight Flyer
  {
    id: "civil-flyer",
    type: "dept-flyer",
    agendaEvent: "DEPARTMENT SPOTLIGHT • CIVIL ENGINEERING",
    deptCode: "CIVIL",
    deptName: "Department of Civil Engineering",
    flyerImage: "assets/images/departments/civil_flyer.webp",
    fallbackFlyer: "assets/images/departments/civil_flyer.png",
    badge: "100% Placement Success Record",
    stats: [
      { value: "100%", label: "Placement in Past 4 Years" },
      { value: "CPWD / RLY", label: "Govt Opportunities" },
      { value: "Live Visits", label: "Hydro, Ports & Plants" }
    ],
    bullets: [
      "Expansive Scope: Infrastructure Development, Urban Planning, Environmental & Geotechnical Engineering, Transportation, Water Resources, Sustainability & Green Building.",
      "Hands-on Field Immersion: Hydro Power Plant visits, Survey Camps, Tuticorin Harbour visits, Water Treatment & RMC plant exposure, Plastic Brick & Concrete mixing platforms.",
      "Prime Core Government Opportunities: CPWD, Indian Railways, State PWDs, TNHB, TNEB, TWAD Board, Ministry of Housing & Urban Affairs, PSUs & UPSC."
    ],
    recruiters: ["SAMSIV CADD Intellects", "OPA Archfirm", "SPIC", "Renaatus", "Govt Civil Sectors"]
  },

  // 14b. Civil HOD Profile - Dr. Nalini Jebastina
  {
    id: "hod-civil",
    type: "hod-single",
    agendaEvent: "HOD INTRODUCTION • CIVIL ENGINEERING",
    deptCode: "CIVIL",
    deptName: "Department of Civil Engineering",
    name: "Dr. Nalini Jebastina",
    role: "Assistant Professor & Head of Department (HOD) - Civil",
    image: "assets/images/speakers/nalini_jebastina.png",
    fallback: "scratch/civil_hod_p1_img1.jpeg",
    isPlaceholder: false,
    highlights: [
      "B.E., M.Tech (Remote Sensing), Ph.D.",
      "20 Years Teaching Experience",
      "100% Placement Success Track Record",
      "Remote Sensing & GIS Specialist",
      "Turn ideas into Infrastructure"
    ],
    description: "Dr. Nalini Jebastina is the Assistant Professor & Head of the Department of Civil Engineering at Grace College of Engineering. Holding an M.Tech in Remote Sensing and a Ph.D. in Civil Engineering with over 20 years of dedicated teaching and research excellence, she leads modern civil infrastructure education, hands-on survey camps, environmental sustainability initiatives, and corporate partnerships yielding a stellar 100% placement track record over the past four years.",
    quote: "“Turn ideas into enduring infrastructure — building resilient, smart, and sustainable structures for future generations.”"
  },

  // =========================================================================
  // 15. HOD OF H&S INTRODUCTION OF FIRST YEAR FACULTIES
  // =========================================================================
  {
    id: "hod-hs-intro",
    type: "speaker",
    agendaEvent: "INTRODUCTION OF FIRST YEAR FACULTIES",
    badgeLabel: "★ HEAD OF DEPARTMENT • H&S",
    name: "Dr. J. Antony Rex Rodrigo",
    role: "Head of the Department (HOD) - Humanities & Sciences",
    image: "assets/images/speakers/antony_rex.png",
    fallback: "Screenshots/Antony Rex HOD.jpeg",
    description: "Dr. J. Antony Rex Rodrigo introduces the esteemed faculty members of the Department of Humanities & Sciences — spanning Tamil, English, Mathematics, Physics, Chemistry, Physical Education, and Library Sciences — dedicated to building the intellectual foundation, communicative mastery, and analytical excellence of the Freshman Batch 2026–2030.",
    quote: "“A strong foundational bedrock in basic sciences and humanities is the catalyst that transforms enthusiastic freshers into visionary engineering innovators.”"
  },

  // =========================================================================
  // 16. FIRST YEAR FACULTIES (HUMANITIES & SCIENCES)
  // =========================================================================
  // 16a. Tamil
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

  // 16b. English
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
        image: "assets/images/speakers/dyana_flora.png",
        fallback: "Screenshots/Dyana flora.jpeg",
        isPlaceholder: false
      },
      {
        name: "Ms. E. Flora Jacob",
        role: "Assistant Professor / English",
        image: "assets/images/speakers/flora_jacob.png",
        fallback: "Screenshots/E. Flora Jacob.jpeg",
        isPlaceholder: false
      }
    ]
  },

  // 16c. Mathematics
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

  // 16d. Physics
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
        name: "Mr. Selvaprem Kumar",
        role: "Assistant Professor / Physics",
        image: "assets/images/speakers/selvaprem_kumar.png",
        fallback: "Screenshots/Selvaprem kumar physics AP.jpeg",
        isPlaceholder: false
      },
      {
        name: "Dr./Ms. Jini Kamal Eastro",
        role: "Assistant Professor / Physics",
        image: "assets/images/speakers/jini_kamal.png",
        fallback: "Screenshots/Jini kamal.jpeg",
        isPlaceholder: false
      }
    ]
  },

  // 16e. Chemistry
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
        name: "Ms. G. Somasundari",
        role: "Assistant Professor / Chemistry",
        image: "assets/images/speakers/somasundari.png",
        fallback: "Screenshots/Somasundari.jpeg",
        isPlaceholder: false
      }
    ]
  },

  // 16f. Physical Education (PET)
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
        name: "Mr. V.RISHOP",
        role: "Physical Education Director (PET)",
        image: "assets/images/speakers/rishop_pet.png",
        fallback: "Screenshots/Rishop PET.jpeg",
        isPlaceholder: false
      }
    ]
  },

  // 16g. Library Sciences
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
        name: "Mr. T.Aseer Rabin",
        role: "College Librarian",
        image: "assets/images/speakers/asir_librarian.png",
        fallback: "Screenshots/Asir Librarian.png",
        isPlaceholder: false
      }
    ]
  },

  // =========================================================================
  // 17. DEPARTMENT OF MANAGEMENT STUDIES (MBA) - HOD & FACULTY INTRO
  // =========================================================================
  // 17a. MBA HOD Profile - Dr. Sivakumar
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
    highlights: [
      "Ph.D., MBA Management Leadership",
      "Corporate Strategy & Business Analytics",
      "Entrepreneurship & Incubation Mentor",
      "Industry-Academia Collaboration",
      "Financial Modeling & Operations Acumen"
    ],
    description: "Dr. Sivakumar heads the Department of Management Studies (MBA) at Grace College of Engineering, nurturing techno-managerial leaders, corporate strategists, entrepreneurs, and global business managers through innovative case pedagogy and practical industry immersion.",
    quote: "“Leadership and management acumen empower engineers and professionals to convert brilliant ideas into global enterprises.”"
  },

  // 17b. MBA Faculty Team Introduction (4 Members)
  {
    id: "faculty-mba",
    type: "faculty-subject",
    agendaEvent: "FACULTY INTRODUCTION • DEPARTMENT OF MANAGEMENT STUDIES",
    subject: "Department of Management Studies (MBA)",
    subtitle: "Corporate Strategy, Finance, Marketing, HR & Business Analytics",
    leadName: "Dr. Sivakumar (HOD / MBA)",
    description: "Guiding future business executives in organizational behavior, digital marketing, portfolio management, supply chain analytics, and corporate leadership.",
    quote: "“Empowering future business leaders with strategic acumen, analytical insight, and ethical leadership.”",
    members: [
      {
        name: "Dr. Deodine Isaac J.",
        role: "Assistant Professor / MBA",
        image: "assets/images/speakers/deodine_isaac.png",
        fallback: "Screenshots/Dr. DEODINE ISAAC J. Assistant Prof. MBA.jpeg",
        isPlaceholder: false
      },
      {
        name: "Mrs. C. Anitta",
        role: "Assistant Professor / MBA",
        image: "assets/images/speakers/anitta_mba.png",
        fallback: "Screenshots/Mrs. C Anitta MBA.jpeg",
        isPlaceholder: false
      },
      {
        name: "Ms. R. Priya Shalini",
        role: "Assistant Professor / MBA",
        image: "assets/images/speakers/priya_shalini.png",
        fallback: "Screenshots/R.Priya shalini MBA.jpeg",
        isPlaceholder: false
      },
      {
        name: "Ms. S. Shonica",
        role: "Assistant Professor / MBA",
        image: "",
        fallback: "",
        isPlaceholder: true
      }
    ]
  },

  // =========================================================================
  // 18. PRIZE DISTRIBUTION (WITH MERIT AWARDEE IMAGES)
  // =========================================================================
  {
    id: "prize",
    type: "prize-awardees",
    agendaEvent: "PRIZE DISTRIBUTION • ACADEMIC HONORS",
    title: "Academic Honors & Admission Merit Awards",
    subtitle: "Felicitating Top Higher Secondary Scorers & Entrance Merit Scholarship Awardees (Batch 2026–2030)",
    awardees: [
      {
        name: "Juvariya Samreen J",
        dept: "B.E. Computer Science & Engineering (CSE)",
        badge: "★ TOP MERIT SCHOLAR",
        image: "assets/images/speakers/juvariya_samreen.png",
        fallback: "Screenshots/Juvariya samreen j CSE.jpeg",
        desc: "Distinguished admission merit awardee recognized for exemplary entrance academic excellence."
      },
      {
        name: "Janma B",
        dept: "B.Tech AI & Data Science (AI & DS)",
        badge: "★ TOP MERIT SCHOLAR",
        image: "assets/images/speakers/janma_b.png",
        fallback: "scratch/janma_page_1.png",
        desc: "Outstanding merit scholarship recipient celebrated for higher secondary cut-off distinction."
      },
      {
        name: "Blessy Kanaga A",
        dept: "B.E. Computer Science & Engineering (CSE)",
        badge: "★ TOP MERIT SCHOLAR",
        image: "assets/images/speakers/blessy_kanaga.png",
        fallback: "Screenshots/Blessy Kanaga A CSE.jpeg",
        desc: "Honored for admission entrance excellence and stellar academic performance."
      }
    ],
    quote: "“Recognizing and nurturing academic brilliance — inspiring the freshman class of 2026–2030 to achieve stellar heights.”"
  },

  // =========================================================================
  // 19. ALUMNI INSIGHTS & PRESENT LEARNER INSIGHTS (ALEX MATHEW & SUMITHA RANI)
  // =========================================================================
  {
    id: "alumni-spotlight",
    type: "alumni-duo",
    agendaEvent: "ALUMNI INSIGHTS & PRESENT LEARNER INSIGHTS",
    title: "Distinguished Alumni & Senior Learner Perspectives",
    subtitle: "Real-world experiences, campus roadmaps, and career wisdom shared by proud Grace College alumni",
    speakers: [
      {
        name: "Alex Mathew",
        role: "Distinguished Alumnus",
        badge: "DISTINGUISHED ALUMNUS",
        dept: "Grace College of Engineering Alumni Network",
        image: "assets/images/speakers/alex_mathew.png",
        fallback: "Screenshots/alex mathew.jpeg",
        points: [
          "Master core engineering concepts, coding practices, and mini-projects right from Year 1.",
          "Actively participate in hackathons, coding clubs, and technical symposiums to stand out.",
          "Build strong professional portfolios and leverage on-campus placement drives early."
        ],
        quote: "“Every challenge you embrace at Grace is an opportunity to forge technical grit, confidence, and career mastery.”"
      },
      {
        name: "Sumitha Rani",
        role: "Distinguished Alumna",
        badge: "DISTINGUISHED ALUMNA",
        dept: "Grace College of Engineering Alumni Network",
        image: "assets/images/speakers/sumitha_rani.png",
        fallback: "Screenshots/sumitha rani.jpeg",
        points: [
          "Make full use of our advanced laboratories, digital library resources, and faculty guidance.",
          "Balance academic consistency with soft skills, communication, and extracurriculars.",
          "Cultivate peer study networks and maintain curiosity to adapt to emerging global tech."
        ],
        quote: "“Dream ambitiously, utilize every laboratory and library resource, and build friendships that last a lifetime.”"
      }
    ]
  },

  // =========================================================================
  // 20. VOTE OF THANKS (LAST PAGE)
  // =========================================================================
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
          ${slide.badgeLabel ? `<div class="special-invitee-badge">${slide.badgeLabel}</div>` : ''}
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
  } else if (slide.type === 'special-invitee') {
    html = `
      <div class="slide-speaker-layout">
        <div class="speaker-left-card special-invitee-card ${slide.isPlaceholder ? 'placeholder-card-glow' : ''}">
          <div class="speaker-photo-frame ${slide.isPlaceholder ? 'placeholder-frame' : ''}">
            ${slide.isPlaceholder ? `
              <div class="photo-placeholder-content">
                <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <div class="ph-label">${slide.placeholderLabel || 'SPACE FOR PHOTO'}</div>
              </div>
            ` : `
              <img src="${slide.image}" alt="${slide.name}" class="speaker-real-photo" onerror="this.src='${slide.fallback || 'Screenshots/Stephen.png'}'" />
            `}
          </div>
          <h2 class="speaker-display-name chief-guest-name-slot">${slide.name}</h2>
          ${slide.qualifications ? `<div class="cover-batch-badge" style="margin: 0.35rem 0 0.6rem 0;">${slide.qualifications}</div>` : ''}
          <div class="speaker-display-role">${slide.role}</div>
          <div class="special-invitee-badge">${slide.badgeLabel || '★ SPECIAL INVITEE ★'}</div>
        </div>

        <div class="speaker-right-card">
          <div class="agenda-event-tag">★ PROGRAM AGENDA • SPECIAL INVITEE</div>
          <h1 class="agenda-event-title">${slide.agendaEvent}</h1>
          
          <div class="special-career-timeline">
            ${slide.careerHistory ? slide.careerHistory.map(item => `
              <div class="timeline-item">
                <div class="timeline-period">📅 ${item.period}</div>
                <div class="timeline-role">${item.role}</div>
                <div class="timeline-org">${item.org}</div>
              </div>
            `).join('') : ''}
          </div>

          ${slide.highlights ? `
            <div class="hod-highlights-strip" style="margin: 0.6rem 0 0.8rem 0;">
              ${slide.highlights.map(h => `
                <span class="hod-highlight-badge">
                  ✦ ${h}
                </span>
              `).join('')}
            </div>
          ` : ''}

          <p class="agenda-event-desc">${slide.description}</p>
          
          <div class="speaker-quote-banner">
            <div class="quote-symbol">“</div>
            <div class="quote-text">${slide.quote}</div>
          </div>
        </div>
      </div>
    `;
  } else if (slide.type === 'dept-flyer') {
    html = `
      <div class="slide-dept-flyer-layout">
        <div class="dept-flyer-preview-card">
          <img src="${slide.flyerImage}" alt="${slide.deptName}" class="dept-flyer-img" onerror="this.src='${slide.fallbackFlyer || ''}'" />
        </div>

        <div class="dept-flyer-info-card">
          <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
          <h1 class="agenda-event-title">${slide.deptName}</h1>
          <div class="hod-dept-badge-pill" style="align-self: flex-start; margin: 0.5rem 0 1rem 0;">${slide.badge || slide.deptCode}</div>

          <div class="dept-stats-row">
            ${slide.stats ? slide.stats.map(st => `
              <div class="dept-stat-box">
                <div class="dept-stat-val">${st.value}</div>
                <div class="dept-stat-lbl">${st.label}</div>
              </div>
            `).join('') : ''}
          </div>

          <div class="dept-bullet-list">
            ${slide.bullets ? slide.bullets.map(b => `
              <div class="dept-bullet-item">
                <span class="dept-bullet-icon">✦</span>
                <span>${b}</span>
              </div>
            `).join('') : ''}
          </div>

          ${slide.recruiters ? `
            <div class="dept-recruiters-pill">
              ${slide.recruiters.map(r => `<span class="recruiter-chip">${r}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  } else if (slide.type === 'dept-spotlight') {
    html = `
      <div class="slide-dept-spotlight-layout">
        <div class="dept-spotlight-left">
          <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
          <h1 class="agenda-event-title">${slide.deptName}</h1>
          <div class="hod-dept-badge-pill" style="align-self: flex-start; margin: 0.3rem 0 0.8rem 0;">${slide.badge || slide.deptCode}</div>

          <div class="dept-vision-box">
            <div class="dept-vision-label">★ DEPARTMENTAL VISION & GOAL</div>
            <div class="dept-vision-text">“${slide.vision}”</div>
          </div>

          <p class="agenda-event-desc" style="font-size: 0.95rem; margin-bottom: 0.8rem;">${slide.description}</p>

          <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: var(--text-gold); margin-top: 0.2rem;">
            ★ CORE ENGINEERING SPECIALIZATIONS:
          </div>
          <div class="mech-topics-grid">
            ${slide.topics ? slide.topics.map(t => `<span class="mech-topic-chip">⚙ ${t}</span>`).join('') : ''}
          </div>
        </div>

        <div class="dept-spotlight-right">
          <div class="agenda-event-tag">★ INFRASTRUCTURE & EXPERIMENTAL RIGOR</div>
          <h1 class="agenda-event-title" style="font-size: 1.85rem;">Advanced Laboratories & Practical Rigor</h1>

          <div class="mech-labs-grid">
            ${slide.labs ? slide.labs.map(lab => `
              <div class="mech-lab-item">
                <div class="mech-lab-title">🔬 ${lab.title}</div>
                <div class="mech-lab-desc">${lab.desc}</div>
              </div>
            `).join('') : ''}
          </div>

          ${slide.outcomes ? `
            <div class="dept-outcomes-pill">
              <div class="dept-outcomes-header">✦ GRADUATE PROGRAMME OUTCOMES:</div>
              <div class="dept-outcomes-tags">
                ${slide.outcomes.map(o => `<span class="outcome-tag">✔ ${o}</span>`).join('')}
              </div>
            </div>
          ` : ''}
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
                <div class="ph-label">${slide.placeholderLabel || `SPACE FOR ${slide.deptCode} HOD PHOTO`}</div>
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
          
          ${slide.highlights ? `
            <div class="hod-highlights-strip">
              ${slide.highlights.map(h => `
                <span class="hod-highlight-badge">
                  ✦ ${h}
                </span>
              `).join('')}
            </div>
          ` : ''}

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
      // Multi-member faculty subject layout (English, Mathematics, Physics, MBA)
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
  } else if (slide.type === 'prize-awardees') {
    html = `
      <div class="slide-prize-awardees-layout">
        <div class="prize-header-strip">
          <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
          <h1 class="agenda-event-title">${slide.title}</h1>
          <div class="agenda-sub" style="font-size: 0.95rem; margin-top: 0.2rem;">${slide.subtitle}</div>
        </div>

        <div class="awardees-grid">
          ${slide.awardees.map(awd => `
            <div class="awardee-card">
              <div class="awardee-avatar-frame">
                <img src="${awd.image}" alt="${awd.name}" class="speaker-real-photo" onerror="this.src='${awd.fallback || 'Screenshots/Stephen.png'}'" />
              </div>
              <div class="awardee-badge">${awd.badge}</div>
              <h2 class="awardee-name">${awd.name}</h2>
              <div class="awardee-dept">${awd.dept}</div>
              <p class="awardee-desc">${awd.desc}</p>
            </div>
          `).join('')}
        </div>

        ${slide.quote ? `
          <div class="prize-footer-quote">
            ${slide.quote}
          </div>
        ` : ''}
      </div>
    `;
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
  } else if (slide.type === 'alumni-duo') {
    html = `
      <div class="slide-alumni-duo-layout">
        <div class="alumni-header-strip">
          <div class="agenda-event-tag">★ ${slide.agendaEvent}</div>
          <h1 class="agenda-event-title">${slide.title}</h1>
          <div class="agenda-sub" style="font-size: 0.95rem; margin-top: 0.2rem;">${slide.subtitle}</div>
        </div>

        <div class="alumni-cards-row">
          ${slide.speakers.map(spk => `
            <div class="alumni-speaker-card">
              <div class="alumni-top-profile">
                <div class="alumni-avatar-frame">
                  <img src="${spk.image}" alt="${spk.name}" class="speaker-real-photo" onerror="this.src='${spk.fallback || 'Screenshots/Stephen.png'}'" />
                </div>
                <div class="alumni-profile-info">
                  <div class="alumni-badge">★ ${spk.badge}</div>
                  <h2 class="alumni-name">${spk.name}</h2>
                  <div class="alumni-dept-tag">${spk.dept}</div>
                </div>
              </div>

              <div class="alumni-points-list">
                ${spk.points.map(pt => `
                  <div class="alumni-point-item">
                    <span>✦</span>
                    <span>${pt}</span>
                  </div>
                `).join('')}
              </div>

              <div class="alumni-quote-box">
                ${spk.quote}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  stage.innerHTML = html;

  // AUTO-FIT SCALER: Guarantee every slide fits within viewport (zero scrolling)
  requestAnimationFrame(() => {
    const wrapper = stage;
    const child = wrapper.firstElementChild;
    if (!child) return;

    // Reset any previous scale
    child.style.transform = '';
    child.style.transformOrigin = 'center center';

    const viewH = window.innerHeight - 20;
    const viewW = wrapper.offsetWidth;
    const contentH = child.scrollHeight;
    const contentW = child.scrollWidth;

    const scaleY = contentH > viewH ? viewH / contentH : 1;
    const scaleX = contentW > viewW ? viewW / contentW : 1;
    const scale = Math.min(scaleY, scaleX, 1);

    if (scale < 1) {
      child.style.transform = `scale(${scale.toFixed(4)})`;
      child.style.transformOrigin = 'center center';
    }
  });
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
