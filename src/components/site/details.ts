export type Detail = {
  tagline: string;
  overview: string[];
  features: { title: string; text: string }[];
  benefits: string[];
  audience: string[];
  faqs: { q: string; a: string }[];
  stack?: string[];
};

const pricingFaq = {
  q: "How is pricing decided?",
  a: "Pricing depends on the modules you need, the number of users and whether you want cloud hosting or installation on your own server. After a short requirement call we share a written, itemised quote — there are no hidden charges.",
};

const deploymentFaq = {
  q: "Can it be hosted on our own server?",
  a: "Yes. It can run as a cloud-hosted service managed by us, or be installed on your own server or cloud account. We help you choose based on budget, data-control requirements and in-house IT capacity.",
};

const customiseFaq = {
  q: "Can the system be customised for our institution?",
  a: "Yes. Fields, workflows, report formats, fee structures, roles and branding are configured during onboarding. Larger changes are scoped and quoted separately so you always know what you are paying for.",
};

export const productDetails: Record<string, Detail> = {
  "university-website": {
    tagline: "A credible, information-rich digital campus for students, faculty and parents.",
    overview: [
      "A university website is often the first place a prospective student, parent, researcher or accreditation body forms an opinion. It has to present many departments, programmes and notices clearly, stay up to date, and work well on a phone.",
      "We design and build multi-department university websites with an easy content-management panel, so each department can publish its own notices, events and faculty profiles without depending on a developer.",
    ],
    features: [
      {
        title: "Department & programme pages",
        text: "Structured pages for every school, department and programme, with eligibility, syllabus, fees and intake details.",
      },
      {
        title: "Admissions portal",
        text: "Admission notices, prospectus downloads, important dates and an online enquiry or application form.",
      },
      {
        title: "Faculty & research profiles",
        text: "Searchable faculty directory with qualifications, publications, projects and contact details.",
      },
      {
        title: "Notice board & events",
        text: "Time-stamped notices, circulars, tenders, results and an events calendar managed from the admin panel.",
      },
      {
        title: "Accreditation-ready sections",
        text: "Dedicated pages for NAAC/NIRF/IQAC documents, committees, mandatory disclosures and RTI information.",
      },
      {
        title: "Role-based admin panel",
        text: "Department-level editors, central approval, media library and an activity log for accountability.",
      },
    ],
    benefits: [
      "Prospective students find programme and admission information quickly",
      "Departments update their own content without developer delays",
      "Mandatory disclosures and accreditation documents stay organised",
      "Mobile-first, fast-loading pages that are SEO-ready",
    ],
    audience: ["State and private universities", "Deemed universities", "Autonomous institutes"],
    faqs: [
      {
        q: "Can each department manage its own pages?",
        a: "Yes. Department editors get their own login and can publish within their section, with optional central approval before content goes live.",
      },
      {
        q: "Will the website support Hindi as well as English?",
        a: "Bilingual content can be set up so that key pages and notices are available in both Hindi and English.",
      },
      pricingFaq,
    ],
  },
  "college-website": {
    tagline: "A professional online presence that builds trust and drives admission enquiries.",
    overview: [
      "For a college, the website is a 24×7 admission counsellor. Students and parents compare courses, fees, faculty and facilities online before they ever visit the campus.",
      "We build college websites that present this information clearly, capture admission enquiries, and are simple for your office staff to keep updated throughout the year.",
    ],
    features: [
      {
        title: "Course & fee pages",
        text: "Clear course listings with duration, eligibility, seats, fee structure and career outcomes.",
      },
      {
        title: "Online enquiry & admission forms",
        text: "Enquiry forms that deliver leads to your email or WhatsApp, with optional online application.",
      },
      {
        title: "Faculty & departments",
        text: "Faculty profiles with qualifications and experience, organised by department.",
      },
      {
        title: "Campus life & gallery",
        text: "Photo and video galleries for events, labs, library, hostel and sports facilities.",
      },
      {
        title: "Notices & results",
        text: "A notice board for exam schedules, results, holidays and circulars, updated from the admin panel.",
      },
      {
        title: "Affiliation & disclosures",
        text: "Sections for university affiliation, AICTE/UGC approvals and mandatory public disclosures.",
      },
    ],
    benefits: [
      "More admission enquiries captured directly from the website",
      "Parents and students get answers without calling the office",
      "Office staff update notices and results themselves",
      "Search-friendly structure helps the college appear in local search",
    ],
    audience: [
      "Degree colleges",
      "Engineering & polytechnic colleges",
      "Nursing, B.Ed. and professional colleges",
    ],
    faqs: [
      {
        q: "How long does a college website take?",
        a: "A typical college website takes a few weeks from content collection to launch. The biggest factor is how quickly course, faculty and photo content is available.",
      },
      {
        q: "Do you help with domain, hosting and email?",
        a: "Yes. Domain registration, hosting, SSL and official email setup can be included in the project scope.",
      },
      pricingFaq,
    ],
  },
  "school-website": {
    tagline: "A warm, informative website that parents trust and teachers can update.",
    overview: [
      "Parents want to know about a school's academics, safety, facilities and achievements — and they increasingly check online first.",
      "We create school websites that are friendly, quick to load on mobile, and easy for school staff to keep current with notices, events and photographs.",
    ],
    features: [
      {
        title: "Academics & curriculum",
        text: "Class-wise curriculum, CBSE/ICSE/State board information, academic calendar and teaching approach.",
      },
      {
        title: "Admission enquiries",
        text: "Admission process, documents required, age criteria and an enquiry form that reaches the office instantly.",
      },
      {
        title: "Notices & circulars",
        text: "Holiday lists, PTM schedules, exam timetables and circulars posted from a simple admin panel.",
      },
      {
        title: "Events & photo gallery",
        text: "Annual day, sports day and activity galleries that showcase school life.",
      },
      {
        title: "Achievements & toppers",
        text: "Highlight board results, competition winners and student achievements.",
      },
      {
        title: "Mandatory disclosure",
        text: "Affiliation details, fee structure and the mandatory public disclosure section required by boards.",
      },
    ],
    benefits: [
      "Builds parent confidence before the first visit",
      "Reduces repetitive phone enquiries to the office",
      "Keeps board-required disclosures accessible",
      "Pairs naturally with our School Management System",
    ],
    audience: [
      "CBSE, ICSE and State board schools",
      "Play schools and pre-primary",
      "Residential schools",
    ],
    faqs: [
      {
        q: "Can the website connect to the School Management System?",
        a: "Yes. Notices, results and admission enquiries can flow between the website and the School Management System so information is entered once.",
      },
      {
        q: "Who updates the website after launch?",
        a: "Your staff can update notices, galleries and pages from the admin panel. We provide training, and an optional maintenance plan if you prefer us to handle updates.",
      },
      pricingFaq,
    ],
  },
  "university-management-system": {
    tagline:
      "One connected ERP for admissions, academics, examinations, finance and administration.",
    overview: [
      "Universities run on many interconnected processes — admissions across programmes, semester registration, examinations, results, fees, affiliated colleges and administration. When each runs in a separate spreadsheet or tool, data gets duplicated and reports take days.",
      "Our University Management System brings these processes onto a single platform with role-based access for administrators, faculty, students and affiliated colleges.",
    ],
    features: [
      {
        title: "Admissions & enrolment",
        text: "Online applications, merit lists, counselling rounds, document verification and enrolment numbers.",
      },
      {
        title: "Academic management",
        text: "Programmes, courses, credit structure (CBCS), semester registration, timetables and attendance.",
      },
      {
        title: "Examination & results",
        text: "Exam forms, admit cards, seating, mark entry, moderation, result processing and grade cards.",
      },
      {
        title: "Fees & finance",
        text: "Fee structures, online payment, receipts, scholarships, refunds and finance reports.",
      },
      {
        title: "Affiliated college management",
        text: "College registration, intake approval, student lists and exam coordination for affiliated colleges.",
      },
      {
        title: "Reports & dashboards",
        text: "Real-time dashboards and exportable reports for administration, IQAC and statutory submissions.",
      },
    ],
    benefits: [
      "Single source of truth for student records",
      "Faster examination and result cycles",
      "Transparent fee tracking with online payment",
      "Data ready for NAAC, NIRF and AISHE reporting",
    ],
    audience: [
      "State and private universities",
      "Universities with affiliated colleges",
      "Autonomous institutions",
    ],
    faqs: [customiseFaq, deploymentFaq, pricingFaq],
  },
  "college-management-system": {
    tagline: "Run admissions, attendance, fees, exams and results from one dashboard.",
    overview: [
      "A college office handles admissions, fee collection, attendance, internal exams, results and certificates — often across registers, Excel files and separate software.",
      "Our College Management System connects these tasks so that staff enter data once, students and parents see what they need, and management gets accurate reports at any time.",
    ],
    features: [
      {
        title: "Student information",
        text: "Complete student profiles with documents, academic history and guardian details.",
      },
      {
        title: "Attendance & timetable",
        text: "Subject-wise attendance by faculty, timetable management and shortage alerts.",
      },
      {
        title: "Fee management",
        text: "Fee heads, instalments, concessions, online payment, receipts and due reminders.",
      },
      {
        title: "Internal exams & results",
        text: "Internal assessment marks, result processing, mark sheets and progress reports.",
      },
      {
        title: "Staff & payroll",
        text: "Staff records, leave, attendance and optional payroll processing.",
      },
      {
        title: "Certificates & documents",
        text: "Bonafide, transfer and character certificates generated in a few clicks.",
      },
    ],
    benefits: [
      "Less manual paperwork for the office",
      "Fee dues and collections visible at a glance",
      "Attendance shortages flagged early",
      "Students and parents get self-service access",
    ],
    audience: [
      "Degree and professional colleges",
      "Engineering & polytechnic colleges",
      "Nursing and B.Ed. colleges",
    ],
    faqs: [customiseFaq, deploymentFaq, pricingFaq],
  },
  "school-management-system": {
    tagline: "An all-in-one platform for school administration, teachers and parents.",
    overview: [
      "From admission to the final report card, a school manages thousands of small tasks every day — attendance, homework, fees, transport, exams and parent communication.",
      "Our School Management System brings these together with simple screens for the office, teachers and parents, including an optional Android app for parents.",
    ],
    features: [
      {
        title: "Admission & student records",
        text: "Online admission forms, document upload, class allocation and complete student profiles.",
      },
      {
        title: "Attendance",
        text: "Daily attendance by class teachers with automatic SMS/WhatsApp absence alerts to parents.",
      },
      {
        title: "Fee management",
        text: "Monthly or term fees, late fines, concessions, online payment and pending-fee reports.",
      },
      {
        title: "Exams & report cards",
        text: "Exam schedules, marks entry, grading and printable report cards in your format.",
      },
      {
        title: "Homework & communication",
        text: "Homework, circulars and announcements shared with parents through the app or messages.",
      },
      {
        title: "Transport & library",
        text: "Optional modules for bus routes, transport fees and library issue/return.",
      },
    ],
    benefits: [
      "Parents stay informed without daily phone calls",
      "Fee collection becomes faster and easier to track",
      "Teachers save time on registers and report cards",
      "Management sees the whole school on one dashboard",
    ],
    audience: [
      "CBSE, ICSE and State board schools",
      "Multi-branch school groups",
      "Coaching institutes",
    ],
    faqs: [
      {
        q: "Is there a mobile app for parents?",
        a: "An Android app for parents can be included, showing attendance, homework, fees, notices and report cards.",
      },
      deploymentFaq,
      pricingFaq,
    ],
  },
  "exam-management-system": {
    tagline: "Plan, conduct and evaluate examinations — online or offline — with accurate results.",
    overview: [
      "Examinations involve question papers, schedules, seating, admit cards, evaluation and result processing — with very little tolerance for error.",
      "Our Exam Management System supports both online tests and traditional pen-and-paper exams, and automates the steps where mistakes usually happen.",
    ],
    features: [
      {
        title: "Question bank",
        text: "Subject- and chapter-wise question bank with difficulty levels and multiple question types.",
      },
      {
        title: "Online exams",
        text: "Timed online tests with randomised questions, auto-submit and instant scoring for objective papers.",
      },
      {
        title: "Scheduling & admit cards",
        text: "Exam timetables, hall allocation, seating plans and downloadable admit cards.",
      },
      {
        title: "Mark entry & moderation",
        text: "Examiner-wise mark entry, double-checking, moderation and grace rules.",
      },
      {
        title: "Result processing",
        text: "Automatic totals, grades, ranks and result publication with re-evaluation workflow.",
      },
      {
        title: "Report cards & analytics",
        text: "Printable mark sheets plus subject- and student-level performance analysis.",
      },
    ],
    benefits: [
      "Fewer calculation and data-entry errors",
      "Results published faster",
      "Question papers and marks stored securely",
      "Performance insights for teachers and management",
    ],
    audience: [
      "Schools and colleges",
      "Universities",
      "Coaching and training institutes",
      "Recruitment and certification bodies",
    ],
    faqs: [
      {
        q: "Can it handle both online and offline exams?",
        a: "Yes. Online tests run in the browser, while offline exams use the same system for scheduling, admit cards, mark entry and results.",
      },
      {
        q: "How is exam security handled?",
        a: "Role-based access, time-bound question release, activity logs and randomised question order help protect exam integrity.",
      },
      pricingFaq,
    ],
  },
  "admission-management-system": {
    tagline: "Online applications, document verification and merit lists — without the queues.",
    overview: [
      "Admission season brings long queues, piles of forms and pressure to publish accurate merit lists quickly.",
      "Our Admission Management System moves the entire process online — from application and payment to verification, merit list and seat allocation.",
    ],
    features: [
      {
        title: "Online application form",
        text: "Configurable application forms with document upload and application-fee payment.",
      },
      {
        title: "Document verification",
        text: "Verifier dashboard to approve, reject or request corrections on uploaded documents.",
      },
      {
        title: "Merit lists",
        text: "Automatic merit lists based on your criteria, including category-wise reservation.",
      },
      {
        title: "Seat allocation & counselling",
        text: "Round-wise seat allocation, choice filling and admission confirmation.",
      },
      {
        title: "Applicant communication",
        text: "SMS, email and WhatsApp updates at every stage of the process.",
      },
      {
        title: "Admission reports",
        text: "Live counts of applications, verifications, admissions and fee collection.",
      },
    ],
    benefits: [
      "No queues or manual form handling",
      "Transparent, rule-based merit lists",
      "Applicants always know their status",
      "Admission data flows directly into the student records",
    ],
    audience: ["Schools and colleges", "Universities", "Professional and nursing institutes"],
    faqs: [customiseFaq, deploymentFaq, pricingFaq],
  },
  studymate: {
    tagline:
      "A fully AI-enabled learning companion for Class 1–5 — patient, playful, bilingual and built to be safe for children.",
    overview: [
      "Young children learn best with patience, repetition and encouragement — and every child moves at a different pace. Parents often can't sit with every homework question, and classroom time rarely allows one-to-one attention.",
      "StudyMate is an AI learning companion designed for Class 1 to Class 5. It explains concepts step by step in simple Hindi or English, reads lessons aloud, creates practice that adapts to each child, and keeps parents informed — inside a closed, child-safe environment focused only on learning.",
      "It can be offered directly to parents, adopted by primary schools and tuition centres, or white-labelled by schools and ed-tech partners under their own brand.",
    ],
    features: [
      {
        title: "Ask StudyMate — AI doubt solver",
        text: "Children ask by typing or by voice in Hindi or English. StudyMate gives hints first and explains step by step at the child's level, instead of just handing over the answer.",
      },
      {
        title: "Read-aloud & speaking practice",
        text: "Stories, poems and questions are read aloud, with pronunciation and reading-fluency practice for English and Hindi.",
      },
      {
        title: "Curriculum-aligned lessons",
        text: "Chapter-wise Maths, EVS, English and Hindi aligned to NCERT/CBSE, with state-board syllabi configurable for schools.",
      },
      {
        title: "Adaptive practice & worksheets",
        text: "AI-generated practice that gets easier or harder based on each answer, with extra revision on weak topics and printable worksheets.",
      },
      {
        title: "Photo homework helper",
        text: "Snap a photo of a homework question to get a guided explanation of the method — designed to build understanding, not copying.",
      },
      {
        title: "Gamified learning",
        text: "Stars, badges, streaks and short learning games that make daily practice a habit children enjoy.",
      },
      {
        title: "Parent dashboard",
        text: "Daily learning time, chapters covered, strengths and weak areas, plus a simple weekly progress report on WhatsApp.",
      },
      {
        title: "School & teacher mode",
        text: "Class-wise assignments, auto-checked worksheets and progress reports for teachers when a school adopts StudyMate.",
      },
      {
        title: "Child-safe AI by design",
        text: "Answers restricted to learning topics, content filtering, no ads, no open chat with strangers, screen-time limits and parental controls.",
      },
    ],
    benefits: [
      "Every child learns at their own pace",
      "Concepts explained in the child's own language",
      "Parents see real progress, not just marks",
      "Healthy daily learning habit with screen-time limits",
      "Teachers save time on worksheets and checking",
    ],
    audience: [
      "Parents of Class 1–5 children",
      "Primary & CBSE/State-board schools",
      "Tuition and coaching centres",
      "Ed-tech partners (white-label)",
    ],
    faqs: [
      {
        q: "Is it safe for young children to use AI?",
        a: "StudyMate is a closed learning environment: the AI only responds within school subjects, every response passes through content filters, there are no ads or public chat, and parents control screen time. Children's data is kept to the minimum needed, and the product is designed to support verifiable parental consent as required by India's Digital Personal Data Protection (DPDP) Act, 2023.",
      },
      {
        q: "Won't children just copy answers from the AI?",
        a: "No — StudyMate is hint-first. It asks guiding questions and explains the method step by step, and only reveals a full solution after the child has tried. Parents and teachers can see how a child arrived at an answer.",
      },
      {
        q: "Does it work in Hindi?",
        a: "Yes. Children can read, listen and ask questions in Hindi or English, and switch between them at any time.",
      },
      {
        q: "Can a school offer StudyMate under its own brand?",
        a: "Yes. Schools, coaching centres and ed-tech partners can deploy StudyMate with their own name, logo and class structure, and connect it with our School Management System.",
      },
      {
        q: "On which devices does it work?",
        a: "StudyMate runs in any modern browser on phones, tablets and computers, and can be delivered as an Android app for families.",
      },
    ],
  },
  "online-test-platform": {
    tagline:
      "Mock tests, test series and practice exams with an exam-like interface, AI-powered question banks and instant analytics.",
    overview: [
      "Students preparing for board exams and competitive exams improve fastest when they practise in exam-like conditions and get precise feedback on where they lose marks.",
      "Our Online Test Platform lets schools, coaching institutes and ed-tech teams create and sell test series, run timed mock exams with real exam patterns, and give every student an AI-powered analysis of their performance.",
    ],
    features: [
      {
        title: "Test series & mock exams",
        text: "Chapter tests, full-length mocks and previous-year-style papers for board exams and competitive patterns such as JEE, NEET, SSC, Banking and state exams.",
      },
      {
        title: "Real exam interface",
        text: "Sections, timer, question palette, mark-for-review and negative marking — so students practise exactly as the real exam works.",
      },
      {
        title: "AI question generation",
        text: "Generate MCQs and practice questions from your syllabus, notes or PDFs with AI, then review and approve them before they go live.",
      },
      {
        title: "Instant results & analytics",
        text: "Score, rank, percentile, topic-wise accuracy and time spent per question, available the moment a test is submitted.",
      },
      {
        title: "AI performance coach",
        text: "Personalised revision plans that highlight weak topics, recommend practice sets and track improvement over time.",
      },
      {
        title: "Proctoring & integrity",
        text: "Randomised questions and options, tab-switch detection, full-screen mode and optional webcam snapshots.",
      },
      {
        title: "Sell test series online",
        text: "Paid test packs with Razorpay, coupons, validity periods and automatic access on payment.",
      },
      {
        title: "Hindi & English",
        text: "Bilingual questions with per-question language switching for students.",
      },
      {
        title: "Institute dashboard & white-label",
        text: "Batch management, teacher accounts, result exports and your own branding and domain.",
      },
    ],
    benefits: [
      "Students practise in real exam conditions",
      "Teachers spend less time creating and checking tests",
      "Precise, topic-level feedback after every test",
      "A new online revenue stream for institutes",
    ],
    audience: [
      "Coaching institutes",
      "Schools and colleges",
      "Competitive-exam aspirants",
      "Ed-tech startups (white-label)",
    ],
    faqs: [
      {
        q: "How is this different from the Exam Management System?",
        a: "The Exam Management System runs an institution's official examinations — scheduling, admit cards, mark entry and results. The Online Test Platform is student-facing: practice tests, mock exams and test series that students take online, often sold as packages.",
      },
      {
        q: "Can thousands of students take a test at the same time?",
        a: "Yes. The platform runs on scalable cloud infrastructure, and we load-test before large scheduled exams so the experience stays smooth at peak time.",
      },
      {
        q: "Can we upload our existing question bank?",
        a: "Yes. Questions can be imported from Excel/Word templates, including images and equations, and organised by subject, chapter and difficulty.",
      },
      pricingFaq,
    ],
  },
  "flat-management-system": {
    tagline:
      "Transparent maintenance, security and communication for apartments and housing societies.",
    overview: [
      "Housing societies and apartment complexes juggle maintenance billing, visitor entries, complaints, notices and accounts — usually through registers and WhatsApp groups.",
      "Our Flat / Society Management System gives the committee, residents and security staff one organised place to manage it all.",
    ],
    features: [
      {
        title: "Maintenance billing",
        text: "Monthly maintenance bills, online payment, receipts, dues and late-fee tracking.",
      },
      {
        title: "Visitor & gate management",
        text: "Visitor entry log at the gate with resident approval and delivery tracking.",
      },
      {
        title: "Complaints & requests",
        text: "Residents raise plumbing, electrical or cleaning requests and track them to resolution.",
      },
      {
        title: "Notices & polls",
        text: "Society notices, meeting announcements and polls for committee decisions.",
      },
      {
        title: "Accounts & expenses",
        text: "Income, expenses, vendor payments and reports for the society committee.",
      },
      {
        title: "Facility booking",
        text: "Booking for clubhouse, hall or other common facilities.",
      },
    ],
    benefits: [
      "Clear, transparent maintenance accounts",
      "Better security with recorded visitor entries",
      "Complaints handled faster and on record",
      "Less dependence on registers and group chats",
    ],
    audience: [
      "Apartment complexes",
      "Housing societies",
      "Gated communities",
      "Builders handing over projects",
    ],
    faqs: [
      {
        q: "Is there a mobile app for residents?",
        a: "A resident app can be included for paying maintenance, approving visitors, raising complaints and reading notices.",
      },
      deploymentFaq,
      pricingFaq,
    ],
  },
  "hospital-management-system": {
    tagline:
      "Streamlined patient registration, OPD, billing, pharmacy and records for clinics and hospitals.",
    overview: [
      "Clinics and hospitals need fast patient registration, accurate billing and quick access to patient history — while staff are already stretched.",
      "Our Hospital Management System is designed around the daily OPD and front-desk workflow, with optional IPD, pharmacy and laboratory modules.",
    ],
    features: [
      {
        title: "Patient registration",
        text: "Quick registration with a unique patient ID and visit history.",
      },
      {
        title: "OPD & appointments",
        text: "Doctor-wise appointment scheduling, token system and consultation notes.",
      },
      {
        title: "Billing",
        text: "OPD, IPD and procedure billing with receipts, discounts and day-end reports.",
      },
      {
        title: "Pharmacy & inventory",
        text: "Medicine stock, batch and expiry tracking, purchase and sales.",
      },
      { title: "Laboratory", text: "Test orders, sample tracking and printable lab reports." },
      {
        title: "IPD & bed management",
        text: "Admissions, bed allocation, ward charges and discharge summaries.",
      },
    ],
    benefits: [
      "Shorter waiting time at the front desk",
      "Accurate, consistent billing",
      "Patient history available in seconds",
      "Medicine stock and expiry under control",
    ],
    audience: [
      "Clinics and polyclinics",
      "Nursing homes",
      "Small and mid-size hospitals",
      "Diagnostic centres",
    ],
    faqs: [
      {
        q: "How is patient data protected?",
        a: "Access is role-based, activity is logged, data is backed up regularly and hosting can be set up on your own server if required.",
      },
      deploymentFaq,
      pricingFaq,
    ],
  },
  "hotel-management-system": {
    tagline: "Bookings, check-ins, billing and housekeeping for hotels and guest houses.",
    overview: [
      "Running a hotel or guest house means managing room availability, walk-ins and online bookings, guest billing and housekeeping — often at the same time.",
      "Our Hotel Management System gives the front desk and management a real-time view of rooms, guests and revenue.",
    ],
    features: [
      {
        title: "Room booking & availability",
        text: "Visual room chart with availability, reservations and walk-in bookings.",
      },
      {
        title: "Check-in / check-out",
        text: "Guest registration with ID details, advance payment and quick check-out.",
      },
      {
        title: "Billing & GST invoices",
        text: "Room, food and service charges consolidated into GST-ready invoices.",
      },
      {
        title: "Housekeeping",
        text: "Room status updates and task assignment for housekeeping staff.",
      },
      {
        title: "Restaurant / KOT",
        text: "Optional restaurant module with KOT and posting to the guest's room bill.",
      },
      {
        title: "Reports",
        text: "Occupancy, revenue and collection reports for owners and managers.",
      },
    ],
    benefits: [
      "No double bookings",
      "Faster check-in and check-out",
      "Accurate, GST-ready billing",
      "Clear view of occupancy and revenue",
    ],
    audience: ["Hotels", "Guest houses and lodges", "Resorts", "Dharamshalas and pilgrim stays"],
    faqs: [deploymentFaq, customiseFaq, pricingFaq],
  },
  hrms: {
    tagline: "Employee records, attendance, leave and payroll in one place.",
    overview: [
      "As a team grows, tracking attendance, leave balances, salary and employee documents in spreadsheets becomes slow and error-prone.",
      "Our HRMS centralises employee information and automates the monthly cycle of attendance, leave and payroll.",
    ],
    features: [
      {
        title: "Employee records",
        text: "Complete employee profiles, documents, designations and reporting structure.",
      },
      {
        title: "Attendance",
        text: "Biometric integration, mobile check-in or manual attendance with shift support.",
      },
      {
        title: "Leave management",
        text: "Leave policies, applications, approvals and automatic balance tracking.",
      },
      {
        title: "Payroll",
        text: "Salary structures, deductions, PF/ESI calculations and payslips.",
      },
      {
        title: "Employee self-service",
        text: "Employees view payslips, apply for leave and update details themselves.",
      },
      {
        title: "HR reports",
        text: "Headcount, attendance, leave and payroll reports for management.",
      },
    ],
    benefits: [
      "Payroll processed faster with fewer errors",
      "Leave approvals without paperwork",
      "Employees get self-service access",
      "HR data organised and audit-ready",
    ],
    audience: [
      "SMEs and growing companies",
      "Schools and colleges (staff)",
      "Hospitals and hotels",
      "Multi-location businesses",
    ],
    faqs: [
      {
        q: "Can it connect to our biometric machine?",
        a: "Most common biometric attendance devices can be integrated. We confirm compatibility for your specific device during the requirement call.",
      },
      deploymentFaq,
      pricingFaq,
    ],
  },
  "ai-automation-suite": {
    tagline: "Practical AI that removes repetitive work — with your team still in control.",
    overview: [
      "Many businesses and institutions spend hours every day on repetitive work: answering the same questions, re-typing data from documents, and copying information between tools.",
      "Our AI Automation Suite identifies these bottlenecks and builds focused automations — AI assistants, document processing and connected workflows — with human review wherever accuracy matters.",
    ],
    features: [
      {
        title: "AI assistants & chatbots",
        text: "Website or WhatsApp assistants that answer from your approved information and hand over to staff when needed.",
      },
      {
        title: "Document processing",
        text: "Extract structured data from invoices, forms, applications and PDFs for review and use.",
      },
      {
        title: "Workflow automation",
        text: "Connect forms, CRM, email, WhatsApp and spreadsheets so routine steps happen automatically.",
      },
      {
        title: "Lead follow-up",
        text: "Capture enquiries and trigger timely follow-ups so no lead is missed.",
      },
      {
        title: "Reports & summaries",
        text: "Automatic summaries of daily activity, feedback or data for management.",
      },
      {
        title: "Human review & controls",
        text: "Approval steps, access controls and logs so the AI stays accountable.",
      },
    ],
    benefits: [
      "Hours of manual work saved every week",
      "Faster responses to customers and students",
      "Fewer data-entry errors",
      "A pilot-first approach with measurable results",
    ],
    audience: [
      "Businesses with high enquiry volume",
      "Institutions with heavy paperwork",
      "Teams using many disconnected tools",
    ],
    faqs: [
      {
        q: "Do we need technical knowledge to use it?",
        a: "No. We set up, test and document the automation, and train your team on how to review and manage it.",
      },
      {
        q: "Is our data shared with AI providers?",
        a: "We design each automation with your data policy in mind — choosing providers, limiting what data is sent, and keeping sensitive steps under human review.",
      },
      {
        q: "How do we start?",
        a: "We begin with a short discovery call to identify one high-impact bottleneck, then build a small pilot so you can see real results before expanding.",
      },
    ],
  },
};

export const serviceDetails: Record<string, Detail> = {
  "web-application-development": {
    tagline: "Custom web applications built around how your business actually works.",
    overview: [
      "Off-the-shelf software rarely fits every workflow. A custom web application lets you digitise your exact process — for customers, partners or internal teams — and grow it over time.",
      "We plan, design and build secure, responsive web applications with maintainable code, clear documentation and a deployment setup you control.",
    ],
    features: [
      {
        title: "Customer & partner portals",
        text: "Self-service portals for orders, bookings, documents, tickets and account management.",
      },
      {
        title: "Business applications",
        text: "Internal tools for approvals, operations, inventory, field teams and reporting.",
      },
      {
        title: "APIs & integrations",
        text: "REST APIs and integrations with payment gateways, SMS/WhatsApp, accounting and third-party systems.",
      },
      {
        title: "Dashboards & reports",
        text: "Role-based dashboards with charts, filters and exports for decision-makers.",
      },
      {
        title: "Security by default",
        text: "Authentication, role-based access, input validation, HTTPS and regular backups.",
      },
      {
        title: "Performance & accessibility",
        text: "Fast-loading, mobile-responsive interfaces that work for every user.",
      },
    ],
    benefits: [
      "Software that fits your process instead of the other way round",
      "You own the code and the data",
      "Built to be extended as your business grows",
      "Documented handover and optional maintenance",
    ],
    audience: [
      "Startups building a product",
      "SMEs digitising operations",
      "Institutions needing custom portals",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python / Django",
      "FastAPI",
      "Node.js / NestJS",
      "PHP / Laravel",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
    faqs: [
      {
        q: "Do we own the source code?",
        a: "Yes — ownership of the source code and data is agreed in writing in the project contract before development begins.",
      },
      {
        q: "How do you manage the project?",
        a: "Work is split into milestones with regular demos, so you review progress and give feedback throughout rather than only at the end.",
      },
      {
        q: "What happens after launch?",
        a: "We provide a warranty period for bug fixes, followed by an optional annual maintenance plan for updates, monitoring and improvements.",
      },
    ],
  },
  "ui-ux-website-design": {
    tagline: "Clear, modern design that makes your brand look as good as it is.",
    overview: [
      "Visitors decide within seconds whether a website feels trustworthy. Good design makes information easy to find and guides people towards contacting you.",
      "We design and build responsive business websites and product interfaces — starting with user journeys and wireframes, and ending with polished, fast pages.",
    ],
    features: [
      {
        title: "Business websites",
        text: "Corporate, institutional and service-business websites that are fast, responsive and easy to update.",
      },
      {
        title: "User journeys & wireframes",
        text: "Mapping how visitors move through the site before any visual design begins.",
      },
      {
        title: "UI design & prototypes",
        text: "High-fidelity screens and clickable prototypes to review before development.",
      },
      {
        title: "Design systems",
        text: "Consistent colours, typography and components aligned with your brand.",
      },
      {
        title: "Landing pages",
        text: "Focused pages for campaigns, admissions or product launches that drive enquiries.",
      },
      {
        title: "SEO-ready structure",
        text: "Clean page structure, metadata and performance basics for search visibility.",
      },
    ],
    benefits: [
      "A professional first impression",
      "More enquiries from the same traffic",
      "Consistent branding across every page",
      "Easy for your team to keep updated",
    ],
    audience: [
      "Businesses and professionals",
      "Schools, colleges and universities",
      "Startups launching a product",
    ],
    stack: ["Figma", "Next.js", "React", "Tailwind CSS", "WordPress / Headless CMS"],
    faqs: [
      {
        q: "Do you write the website content too?",
        a: "We can help structure and write content based on information you provide, or work with content you already have.",
      },
      {
        q: "Will we be able to update the website ourselves?",
        a: "Yes. We set up an admin panel or CMS where appropriate, and train your team to update content.",
      },
      {
        q: "Is domain and hosting included?",
        a: "Domain, hosting, SSL and email setup can be included in the project scope on request.",
      },
    ],
  },
  "mobile-app-development": {
    tagline: "Android and iOS apps your customers and teams will actually use.",
    overview: [
      "A mobile app makes sense when people need to use your service often — tracking orders, checking attendance, booking appointments or working in the field.",
      "We build cross-platform apps with Flutter and React Native, giving you Android and iOS from a single codebase, connected to a secure backend.",
    ],
    features: [
      {
        title: "Cross-platform apps",
        text: "One codebase for Android and iOS using Flutter or React Native.",
      },
      {
        title: "Backend & APIs",
        text: "Secure APIs, admin panels and databases that power the app.",
      },
      {
        title: "Push notifications",
        text: "Timely alerts for orders, reminders, attendance or announcements.",
      },
      {
        title: "Payments & integrations",
        text: "Payment gateways, maps, SMS/WhatsApp and third-party services.",
      },
      {
        title: "Offline support",
        text: "Key screens that keep working with poor connectivity, syncing when back online.",
      },
      {
        title: "Store release",
        text: "Play Store and App Store listing preparation, builds and submission support.",
      },
    ],
    benefits: [
      "Reach users directly on their phones",
      "Lower cost with a single codebase",
      "Built with a release and update plan",
      "Same backend can power web and app",
    ],
    audience: [
      "Startups and product companies",
      "Businesses serving customers on mobile",
      "Schools and institutions (parent/student apps)",
    ],
    stack: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Django / Node.js APIs"],
    faqs: [
      {
        q: "Should we build Android first or both platforms?",
        a: "In India, many products start with Android. With cross-platform frameworks, adding iOS later is straightforward.",
      },
      {
        q: "Do you publish the app on the Play Store?",
        a: "Yes. We prepare listing assets, builds and support the submission under your own developer account.",
      },
      {
        q: "Who maintains the app after launch?",
        a: "We offer maintenance plans covering OS updates, bug fixes and new features.",
      },
    ],
  },
  "cloud-devops": {
    tagline: "Reliable hosting, deployments and backups — so your software stays up.",
    overview: [
      "Good software still fails if hosting is unreliable, deployments are manual or backups are missing.",
      "We set up and manage cloud infrastructure with automated deployments, monitoring and backup plans sized to your actual needs and budget.",
    ],
    features: [
      {
        title: "Cloud setup & migration",
        text: "Set up on AWS, Azure or other providers, and migrate from shared hosting or old servers.",
      },
      {
        title: "CI/CD pipelines",
        text: "Automated build, test and deployment so releases are repeatable and safe.",
      },
      { title: "Containers", text: "Docker-based deployments for consistent environments." },
      {
        title: "Monitoring & alerts",
        text: "Uptime, performance and error monitoring with alerts.",
      },
      { title: "Backups & recovery", text: "Scheduled backups and a tested restore process." },
      {
        title: "Cost optimisation",
        text: "Right-sizing resources to avoid paying for capacity you don't use.",
      },
    ],
    benefits: [
      "Higher uptime and fewer surprises",
      "Faster, safer releases",
      "Data protected by tested backups",
      "Predictable hosting costs",
    ],
    audience: [
      "Businesses running their own software",
      "Startups preparing to scale",
      "Institutions hosting ERP systems",
    ],
    stack: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Linux",
    ],
    faqs: [
      {
        q: "Will the servers be in our name?",
        a: "Yes, we recommend the cloud account is owned by you, with access granted to us for management.",
      },
      {
        q: "Can you take over an existing server?",
        a: "Yes. We start with an audit of your current setup and then propose improvements.",
      },
      {
        q: "Do you provide ongoing server management?",
        a: "Ongoing monitoring, updates and backup checks are available as a monthly or annual plan.",
      },
    ],
  },
  "ecommerce-solutions": {
    tagline: "Online stores that are easy to manage and built to sell.",
    overview: [
      "Selling online needs more than a product page — it needs smooth checkout, payments, delivery integration and an easy way to manage stock and orders.",
      "We build e-commerce stores and ordering systems connected to the payment, logistics and inventory tools your business depends on.",
    ],
    features: [
      {
        title: "Storefront & catalogue",
        text: "Product listings with categories, variants, search and filters.",
      },
      {
        title: "Cart & checkout",
        text: "Simple checkout with UPI, cards, net banking and cash-on-delivery options.",
      },
      {
        title: "Order management",
        text: "Order status, invoices, returns and customer notifications.",
      },
      { title: "Inventory", text: "Stock levels, low-stock alerts and multi-location inventory." },
      { title: "Delivery integration", text: "Shipping partner integration with tracking." },
      {
        title: "Marketing tools",
        text: "Coupons, offers, SEO-friendly product pages and WhatsApp updates.",
      },
    ],
    benefits: [
      "Sell 24×7 beyond your physical location",
      "Orders and stock managed in one place",
      "Customers kept informed automatically",
      "Owned platform without per-sale commission",
    ],
    audience: [
      "Retailers and wholesalers",
      "Local brands going online",
      "Manufacturers selling direct",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "PHP / Laravel",
      "Razorpay",
      "Stripe",
      "PostgreSQL",
      "MySQL",
    ],
    faqs: [
      {
        q: "Which payment gateways can you integrate?",
        a: "Common Indian gateways such as Razorpay, PayU and Cashfree, along with UPI and cash-on-delivery.",
      },
      {
        q: "Can we manage products ourselves?",
        a: "Yes. You get an admin panel to add products, update prices and manage orders.",
      },
      {
        q: "Can you connect it to our billing software?",
        a: "Integration with billing or accounting software is possible; we confirm the approach during scoping.",
      },
    ],
  },
  "news-content-platforms": {
    tagline: "Fast, SEO-ready publishing platforms for news and content teams.",
    overview: [
      "News and content websites need fast publishing, good search visibility and pages that load quickly even during traffic spikes.",
      "We build publishing platforms with editorial workflows that suit reporters and editors, and reading experiences that work well on mobile.",
    ],
    features: [
      {
        title: "Editorial CMS",
        text: "Reporter, editor and admin roles with drafts, review and scheduled publishing.",
      },
      { title: "Categories & tags", text: "Organised sections, tags and author pages." },
      {
        title: "SEO structure",
        text: "Clean URLs, metadata, sitemaps and structured data for news.",
      },
      { title: "Media management", text: "Image and video library with optimised delivery." },
      { title: "Ad placements", text: "Configurable ad slots for display advertising." },
      { title: "Performance", text: "Caching and CDN setup to handle traffic spikes." },
    ],
    benefits: [
      "Publish breaking news in minutes",
      "Better search and social visibility",
      "Fast pages that keep readers engaged",
      "Clear editorial accountability",
    ],
    audience: ["Digital news portals", "Regional media houses", "Magazines and content publishers"],
    stack: ["Next.js", "Django / Laravel", "PostgreSQL", "Redis", "Cloudflare CDN"],
    faqs: [
      {
        q: "Can multiple reporters publish at once?",
        a: "Yes. Multiple reporters and editors can work in parallel with role-based permissions.",
      },
      {
        q: "Does it support Hindi content?",
        a: "Yes, Hindi and other Indian languages are fully supported.",
      },
      {
        q: "Can it handle high traffic?",
        a: "Caching and CDN configuration are part of the setup so pages stay fast during traffic spikes.",
      },
    ],
  },
  "custom-erp-crm": {
    tagline: "One tailored system for sales, billing, inventory and operations.",
    overview: [
      "As a business grows, sales, billing, stock and operations often end up spread across separate tools and spreadsheets that don't talk to each other.",
      "We build ERP and CRM systems tailored to your processes, so information is entered once and every department works from the same data.",
    ],
    features: [
      {
        title: "CRM & sales pipeline",
        text: "Leads, follow-ups, quotations and conversion tracking.",
      },
      {
        title: "Billing & GST invoicing",
        text: "Invoices, payments, credit notes and GST-ready reports.",
      },
      {
        title: "Inventory & purchase",
        text: "Stock, purchase orders, vendors and multi-warehouse tracking.",
      },
      {
        title: "Operations workflows",
        text: "Approvals, job cards, production or service workflows specific to your business.",
      },
      { title: "Roles & permissions", text: "Department-wise access with an audit trail." },
      {
        title: "Dashboards & reports",
        text: "Real-time view of sales, collections, stock and performance.",
      },
    ],
    benefits: [
      "One source of truth for the business",
      "Less double entry and fewer errors",
      "Faster, better-informed decisions",
      "A system that grows with you",
    ],
    audience: ["Manufacturers and traders", "Service businesses", "Multi-branch operations"],
    stack: [
      "Python / Django",
      "PHP / Laravel",
      "NestJS",
      "React / Next.js",
      "PostgreSQL",
      "MySQL",
      "Docker",
    ],
    faqs: [
      {
        q: "Why custom instead of ready-made ERP?",
        a: "Ready-made ERP works when your process matches it. A custom system makes sense when your workflows are specific and licence costs or workarounds are adding up.",
      },
      {
        q: "Can existing data be migrated?",
        a: "Yes. Data from Excel or older software can be cleaned and imported during setup.",
      },
      {
        q: "Can it be built in phases?",
        a: "Yes, and we recommend it — start with the most critical module and add others step by step.",
      },
    ],
  },
  "business-messaging": {
    tagline: "Reach customers on WhatsApp and SMS — automatically and with consent.",
    overview: [
      "Customers respond faster on WhatsApp than on email. Order updates, reminders and alerts sent at the right moment build trust and reduce support calls.",
      "We integrate WhatsApp Business and SMS into your website, app or business software, with opt-in workflows that respect messaging rules.",
    ],
    features: [
      {
        title: "WhatsApp Business API",
        text: "Official API integration for transactional and service messages.",
      },
      {
        title: "Automated notifications",
        text: "Order, payment, appointment, attendance and fee-reminder messages.",
      },
      { title: "Bulk SMS", text: "DLT-compliant SMS for alerts, OTPs and announcements." },
      { title: "Opt-in & templates", text: "Consent capture and approved message templates." },
      { title: "Chatbot flows", text: "Simple menu-based WhatsApp flows for FAQs and enquiries." },
      { title: "Delivery reports", text: "Track sent, delivered and read status." },
    ],
    benefits: [
      "Faster customer responses",
      "Fewer missed payments and appointments",
      "Less load on your support team",
      "Compliant, consent-based messaging",
    ],
    audience: [
      "Schools and colleges",
      "Clinics and hospitals",
      "E-commerce and retail",
      "Service businesses",
    ],
    stack: ["WhatsApp Business API", "SMS gateways", "Node.js", "Python", "n8n"],
    faqs: [
      {
        q: "Do we need WhatsApp Business API approval?",
        a: "Yes, the official API requires a verified business account. We guide you through the setup and template approval.",
      },
      {
        q: "Is DLT registration needed for SMS?",
        a: "In India, DLT registration is required for commercial SMS. We help with the registration process.",
      },
      {
        q: "Can messages be sent from our existing software?",
        a: "Usually yes, through an API integration with your current system.",
      },
    ],
  },
  "ai-workflow-automation": {
    tagline: "Practical AI and automation that saves hours every week.",
    overview: [
      "AI is most useful when it is pointed at a specific problem: repetitive questions, manual data entry, or tasks copied between tools.",
      "We identify those opportunities with you, build a focused pilot, and expand only once it delivers measurable results — always with human oversight where it matters.",
    ],
    features: [
      {
        title: "AI knowledge assistants",
        text: "Assistants that answer from your approved documents and policies using retrieval-augmented generation (RAG), with handover to staff.",
      },
      {
        title: "Document intelligence",
        text: "Extract and organise data from invoices, forms and PDFs.",
      },
      {
        title: "Workflow automation",
        text: "Connect CRM, email, forms, WhatsApp and spreadsheets so routine steps run automatically.",
      },
      {
        title: "AI in existing software",
        text: "Add AI features like summaries, classification or search to your current application.",
      },
      {
        title: "Evaluation & testing",
        text: "Defined test cases to check accuracy before going live.",
      },
      {
        title: "Human oversight",
        text: "Approval steps, access controls and logs built into every automation.",
      },
    ],
    benefits: [
      "Less repetitive, manual work",
      "Faster turnaround for customers",
      "Fewer errors in data handling",
      "Low-risk, pilot-first adoption",
    ],
    audience: [
      "Businesses with repetitive processes",
      "Support and sales teams",
      "Institutions with heavy documentation",
    ],
    stack: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "LangChain",
      "pgvector / RAG",
      "Hugging Face",
      "Python / FastAPI",
      "n8n",
    ],
    faqs: [
      {
        q: "Where should we start with AI?",
        a: "Start with one clearly measurable bottleneck. We run a short discovery session to find it.",
      },
      {
        q: "Will AI replace our staff?",
        a: "Our focus is removing repetitive tasks so your staff can spend more time on work that needs judgement.",
      },
      {
        q: "How do you ensure accuracy?",
        a: "Each automation is tested against real examples, and sensitive steps keep a human review before anything is final.",
      },
    ],
  },
};
