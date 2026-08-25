/**
 * Induction Day 2026 - Master Presentation Slide Deck Data
 * Grace College of Engineering (GCOE)
 * Department of Humanities & Science and MBA
 */

const SLIDES_DATA = [
  {
    id: "slide-0",
    type: "hero",
    slideNumber: 1,
    tag: "GRACE COLLEGE OF ENGINEERING • INDUCTION 2026",
    title: "FRESHER'S DAY 2026",
    subtitle: "Department of Humanities & Science and Department of Management Studies (MBA)",
    themeTagline: "“Igniting Minds, Inspiring Futures — Welcome to the Beginning of Your Journey”",
    date: "Wednesday, September 03, 2026",
    time: "10:30 AM IST",
    venue: "Grace Auditorium, GCOE Campus",
    batch: "B.E. / B.Tech / MBA Batch (2026 - 2030)"
  },
  {
    id: "slide-1",
    type: "agenda-overview",
    slideNumber: 2,
    tag: "EVENT PROGRAM FLOW",
    title: "Official Program Agenda",
    subtitle: "Grace Auditorium • 10:30 AM Onwards",
    agendaList: [
      { time: "10:30 AM", title: "Prayer & Divine Invocation", speaker: "Mr. S. Stephen (Vice Chairman)" },
      { time: "10:40 AM", title: "Welcome Address", speaker: "Dr. M. D. Mohan Gift (Vice Principal)" },
      { time: "10:55 AM", title: "Presidential Address", speaker: "Mr. C. M. Joshua (Chairman)" },
      { time: "11:15 AM", title: "Inaugural Address", speaker: "Chief Guest Dr. Raman" },
      { time: "11:40 AM", title: "Principal's Orientation", speaker: "Dr. S. Sidhardhan (Principal)" },
      { time: "12:05 PM", title: "Alumni & Learner Insights", speaker: "Alumni Network & Student Council" },
      { time: "12:25 PM", title: "HODs Introduction", speaker: "Heads of Engineering & MBA" },
      { time: "12:40 PM", title: "First Year Faculties Intro", speaker: "Dr. J. Antony Rex Rodrigo (HOD / H&S)" },
      { time: "12:55 PM", title: "MBA Horizons & Readiness", speaker: "Dr. Sivakumar (HOD / MBA)" },
      { time: "01:10 PM", title: "Merit Prize Distribution", speaker: "Management & Dignitaries" },
      { time: "01:25 PM", title: "Guest of Honour Address", speaker: "Mr. Petro Joshua & Dr. Victor" },
      { time: "01:35 PM", title: "Vote of Thanks & Lunch", speaker: "Dr. R. Jaqulin Isabella (AP / Tamil)" }
    ]
  },
  {
    id: "slide-2",
    type: "speaker",
    slideNumber: 3,
    speakerId: "stephen",
    time: "10:30 AM",
    sessionTitle: "Prayer & Divine Invocation",
    name: "Mr. S. Stephen",
    role: "Vice Chairman",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "blue",
    image: "assets/images/speakers/stephen.png",
    fallbackImage: "Screenshots/Stephen.png",
    keyPoints: [
      "Invocation seeking divine wisdom, health, and prosperity for freshers",
      "Blessing the academic journey of the 2026–2030 freshman batch",
      "Instilling core moral values, spiritual grounding, and student discipline",
      "Opening prayer with the college choir and dignitaries"
    ],
    quote: "“The fear of the Lord is the beginning of wisdom — May your journey at Grace be filled with purpose and excellence.”"
  },
  {
    id: "slide-3",
    type: "speaker",
    slideNumber: 4,
    speakerId: "mohan-gift",
    time: "10:40 AM",
    sessionTitle: "Welcome Address",
    name: "Dr. M. D. Mohan Gift",
    role: "Vice Principal",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "emerald",
    image: "assets/images/speakers/mohan_gift.png",
    fallbackImage: "Screenshots/Mohan gift 1.png",
    keyPoints: [
      "Extending a warm welcome to parents, guardians, and the new scholars",
      "Overview of Grace College's legacy, accreditations, and achievements",
      "Orientation schedule outline and faculty mentorship overview",
      "Commitment to holistic student development and academic rigor"
    ],
    quote: "“We are thrilled to welcome our newest innovators into the vibrant and supportive Grace family!”"
  },
  {
    id: "slide-4",
    type: "speaker",
    slideNumber: 5,
    speakerId: "joshua",
    time: "10:55 AM",
    sessionTitle: "Presidential Address",
    name: "Mr. C. M. Joshua",
    role: "Chairman",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "gold",
    image: "assets/images/speakers/joshua.png",
    fallbackImage: "Screenshots/joshua.png",
    keyPoints: [
      "Foundational vision: Transforming raw talent into global technical leaders",
      "State-of-the-art infrastructure, advanced labs & digital learning hubs",
      "Empowering young minds with ethical character and entrepreneurial drive",
      "Management's unwavering pledge for student success and world-class facilities"
    ],
    quote: "“At Grace, we do not just teach engineering; we cultivate visionaries who will build tomorrow's world.”"
  },
  {
    id: "slide-5",
    type: "speaker",
    slideNumber: 6,
    speakerId: "raman",
    time: "11:15 AM",
    sessionTitle: "Inaugural Keynote Address",
    name: "Dr. Raman",
    role: "Chief Guest & Eminent Keynote Speaker",
    organization: "Distinguished Academic & Tech Luminary",
    badgeColor: "gold",
    image: "assets/images/speakers/raman.png",
    fallbackImage: "Screenshots/Raman.jpeg",
    keyPoints: [
      "The fast-evolving tech horizon: AI, Automation & Industry 5.0",
      "Essential skill sets for the next generation of engineers and managers",
      "Transforming curiosity into impactful patents, projects, and startups",
      "Navigating your four years with passion, consistency, and resilience"
    ],
    quote: "“The future belongs to those who embrace continuous learning and solve real-world problems with technology.”"
  },
  {
    id: "slide-6",
    type: "speaker",
    slideNumber: 7,
    speakerId: "sidharthan",
    time: "11:40 AM",
    sessionTitle: "Principal's Orientation",
    name: "Dr. S. Sidhardhan",
    role: "Principal",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "purple",
    image: "assets/images/speakers/sidharthan.png",
    fallbackImage: "Screenshots/Sidharthan.png",
    keyPoints: [
      "Anna University academic regulations, credit structure & evaluations",
      "Placement readiness & industry-institute tie-ups from Year 1",
      "Research culture, student hackathons, clubs, and international forums",
      "Campus discipline, code of conduct, anti-ragging measures & welfare cells"
    ],
    quote: "“Excellence is not an act, but a habit. Welcome to four transformative years of learning and discovery.”"
  },
  {
    id: "slide-7",
    type: "feature",
    slideNumber: 8,
    tag: "STUDENT PERSPECTIVES",
    title: "Alumni & Present Learner Insights",
    subtitle: "Session Time: 12:05 PM",
    keyPoints: [
      "Alumni Journeys: From GCOE campus to multinational giants and successful enterprises",
      "Practical tips on mastering coursework, competitive coding, and technical clubs",
      "Peer mentorship initiative: Senior students guiding first-year transition",
      "Life on campus: Sports, cultural fests, symposiums, and leadership councils"
    ],
    badgeColor: "cyan"
  },
  {
    id: "slide-8",
    type: "feature",
    slideNumber: 9,
    tag: "ACADEMIC DEPARTMENTS",
    title: "Introduction of Department Heads (HODs)",
    subtitle: "Session Time: 12:25 PM",
    keyPoints: [
      "Computer Science & Engineering (CSE) & Artificial Intelligence (AI & DS)",
      "Electronics & Communication (ECE) & Electrical & Electronics (EEE)",
      "Mechanical Engineering & Civil Engineering",
      "Master of Business Administration (MBA) & Humanities & Sciences"
    ],
    badgeColor: "indigo"
  },
  {
    id: "slide-9",
    type: "speaker",
    slideNumber: 10,
    speakerId: "antony-rex",
    time: "12:40 PM",
    sessionTitle: "Introduction of First Year Faculties",
    name: "Dr. J. Antony Rex Rodrigo",
    role: "Head of Department (HOD) - Humanities & Science",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "cyan",
    image: "assets/images/speakers/antony_rex.png",
    fallbackImage: "Screenshots/Antony Rex HOD.jpeg",
    keyPoints: [
      "Introducing professors in Engineering Mathematics, Physics, Chemistry & English",
      "Bridge courses, foundation programming, and communication labs",
      "Student mentoring cell and personalized academic counseling system",
      "Building a solid academic base to excel in core engineering subjects"
    ],
    quote: "“A strong foundation in basic sciences is the cornerstone of every breakthrough engineering achievement.”"
  },
  {
    id: "slide-10",
    type: "speaker",
    slideNumber: 11,
    speakerId: "sivakumar",
    time: "12:55 PM",
    sessionTitle: "MBA Department Special Address",
    name: "Dr. Sivakumar",
    role: "Head of Department (HOD) - MBA",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "indigo",
    image: "assets/images/speakers/sivakumar.png",
    fallbackImage: "Screenshots/Sivakumar.png",
    keyPoints: [
      "Techno-managerial opportunities and future business horizons",
      "Entrepreneurship Development Cell (EDC) & Startup Incubation",
      "Corporate internships, live business case studies, and soft skills training",
      "Cross-disciplinary synergy between Engineering and Business Administration"
    ],
    quote: "“Leadership and management skills convert brilliant engineering ideas into sustainable global enterprises.”"
  },
  {
    id: "slide-11",
    type: "feature",
    slideNumber: 12,
    tag: "MERIT & EXCELLENCE",
    title: "Prize Distribution & Academic Honors",
    subtitle: "Session Time: 01:10 PM",
    keyPoints: [
      "Honoring high-school cut-off toppers and admission merit scholars",
      "Recognition of entrance rank achievers and sports excellence",
      "Awarding certificates of merit and scholarship citations",
      "Inspiring the entire 2026-2030 freshers cohort to strive for greatness"
    ],
    badgeColor: "gold"
  },
  {
    id: "slide-12",
    type: "duo-speakers",
    slideNumber: 13,
    time: "01:25 PM",
    sessionTitle: "Guest of Honour Address",
    speaker1: {
      name: "Mr. Petro Joshua",
      role: "Managing Trustee / Dignitary",
      organization: "Grace Group of Institutions",
      image: "assets/images/speakers/petro_joshua.png",
      fallbackImage: "Screenshots/petro joshua.png"
    },
    speaker2: {
      name: "Dr. Victor",
      role: "Guest of Honour",
      organization: "Distinguished Academic Leader",
      image: "assets/images/speakers/victor.png",
      fallbackImage: "Screenshots/Victor Maths.png"
    },
    keyPoints: [
      "Congratulating parents for choosing Grace College of Engineering",
      "Encouraging students to seize campus research & innovation platforms",
      "Special felicitation address and mementos presentation"
    ],
    quote: "“Your dedication today will define your success tomorrow. Dream big and work tirelessly.”"
  },
  {
    id: "slide-13",
    type: "speaker",
    slideNumber: 14,
    speakerId: "jaqulin-isabella",
    time: "01:35 PM",
    sessionTitle: "Vote of Thanks",
    name: "Dr. R. Jaqulin Isabella",
    role: "Assistant Professor / Tamil",
    organization: "Grace College of Engineering (GCOE)",
    badgeColor: "rose",
    image: "assets/images/speakers/jaquiline_isabella.png",
    fallbackImage: "Screenshots/Jaquilin isabella Tamil AP.jpeg",
    keyPoints: [
      "Heartfelt gratitude to Chairman, Vice Chairman, Dignitaries & Chief Guests",
      "Sincere thanks to respected parents and enthusiastic freshmen students",
      "Appreciation for the organizing committee, faculty, and technical team",
      "Invitation to fellowship lunch and guided campus tour"
    ],
    quote: "“Gratitude is the memory of the heart. Thank you all for making this Induction Day truly unforgettable.”"
  },
  {
    id: "slide-14",
    type: "outro",
    slideNumber: 15,
    tag: "CONCLUDING CEREMONY",
    title: "National Anthem & Fellowship Lunch",
    subtitle: "Grace Auditorium & Dining Hall • 01:45 PM",
    keyPoints: [
      "Solemn rendition of the National Anthem (Please rise)",
      "Celebratory fellowship lunch arranged for all parents & freshers",
      "Guided campus, laboratory, and library orientation tour with faculty mentors",
      "Hostel registration & college bus pass facilitation desks are open"
    ],
    badgeColor: "emerald"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SLIDES_DATA;
}
