import {
  Globe,
  Palette,
  Smartphone,
  Cloud,
  ShoppingCart,
  Newspaper,
  Boxes,
  MessageSquare,
  Bot,
  GraduationCap,
  School,
  Landmark,
  ClipboardCheck,
  UserPlus,
  Building,
  HeartPulse,
  Hotel,
  Users,
  Sparkles,
  MonitorCheck,
} from "lucide-react";

export const contact = {
  phoneDisplay: "+91 94303 88982",
  phoneHref: "tel:+919430388982",
  whatsappNumber: "919430388982",
  email: "kijitechnology@gmail.com",
  addressLine1: "Ward No. 16, Hanuman Tikri",
  addressLine2: "Deoghar, Jharkhand 814112, India",
  website: "kijitechnology.in",
};

export const services = [
  {
    icon: Globe,
    slug: "web-application-development",
    title: "Web Application Development",
    text: "Customer portals, booking platforms and business applications, built around your workflows with responsive interfaces and maintainable architecture.",
    deliverables: [
      "Customer & partner portals",
      "API development & integrations",
      "Performance & accessibility",
    ],
  },
  {
    icon: Palette,
    slug: "ui-ux-website-design",
    title: "UI / UX & Website Design",
    text: "Clear, thoughtful digital experiences that bring your brand to life—from user journeys and interactive prototypes to polished business websites.",
    deliverables: [
      "User journeys & wireframes",
      "Brand-aligned design systems",
      "Responsive company websites",
    ],
  },
  {
    icon: Smartphone,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    text: "Android and iOS experiences for customers and teams, with intuitive navigation, connected data and a release plan that fits your product.",
    deliverables: [
      "Flutter & React Native apps",
      "Notifications & API integrations",
      "Store-release preparation",
    ],
  },
  {
    icon: Cloud,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    text: "Plan, deploy and maintain your cloud infrastructure with reliable delivery pipelines, monitoring and capacity planning as your needs evolve.",
    deliverables: [
      "Cloud setup & migration",
      "CI/CD & container deployments",
      "Monitoring & backup planning",
    ],
  },
  {
    icon: ShoppingCart,
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    text: "Connected shopping experiences with product catalogues, checkout, order management and the integrations your operations depend on.",
    deliverables: [
      "Storefront & catalogue",
      "Payment & delivery integrations",
      "Inventory & order management",
    ],
  },
  {
    icon: Newspaper,
    slug: "news-content-platforms",
    title: "News & Content Platforms",
    text: "Publishing platforms for editorial teams, with structured content, practical author workflows and accessible reading experiences.",
    deliverables: ["Editorial CMS & publishing", "Categories & search", "SEO-ready page structure"],
  },
  {
    icon: Boxes,
    slug: "custom-erp-crm",
    title: "Custom ERP & CRM",
    text: "Bring sales, billing, inventory and internal operations into one tailored business system, instead of forcing your processes into disconnected tools.",
    deliverables: [
      "Sales & customer pipelines",
      "Billing & inventory workflows",
      "Operational reports & dashboards",
    ],
  },
  {
    icon: MessageSquare,
    slug: "business-messaging",
    title: "Business Messaging",
    text: "Connect customer communication to your systems with WhatsApp Business and SMS integrations, opt-in workflows and useful service notifications.",
    deliverables: [
      "WhatsApp Business integration",
      "Opt-in campaign workflows",
      "Order & service notifications",
    ],
  },
  {
    icon: Bot,
    slug: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    text: "Put AI to work on practical tasks: knowledge assistants, document processing and connected workflows, with human review where it matters.",
    deliverables: [
      "AI assistants & knowledge search",
      "Document & data processing",
      "CRM & workflow automation",
    ],
  },
];

export const process = [
  {
    title: "Discover & define",
    text: "Understand your users, existing systems and business goals. Agree on scope, priorities and what success looks like.",
  },
  {
    title: "Design & validate",
    text: "Map key journeys and review prototypes together before development starts, so the experience reflects real needs.",
  },
  {
    title: "Build & integrate",
    text: "Develop in focused milestones, connect your tools and share progress for feedback throughout the project.",
  },
  {
    title: "Test & launch",
    text: "Check functionality, usability and deployment readiness, then prepare documentation and a considered rollout.",
  },
  {
    title: "Support & evolve",
    text: "Plan maintenance, review feedback and prioritise the next improvements as your business and product develop.",
  },
];

export const faqs = [
  {
    q: "What services does Kiji Technology provide?",
    a: "We build websites, web and mobile apps, ERP/CRM, e-commerce, cloud and DevOps, and AI automation — plus ready products such as School, College and University Management Systems, an Online Test Platform and StudyMate, our AI learning app for Class 1–5.",
  },
  {
    q: "Which industries do you work with?",
    a: "Education, healthcare, hospitality, retail, real estate and housing societies, media, logistics, startups and growing businesses.",
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Domain setup, hosting, SSL and ongoing maintenance can be included in the agreed project scope.",
  },
  {
    q: "How does your development process work?",
    a: "Discovery → design → development → testing → launch → support. You get updates at every step.",
  },
  {
    q: "Can you integrate AI into our existing software?",
    a: "We can assess your current tools and data, identify suitable AI use cases, and plan an integration with access controls, testing and human review.",
  },
  {
    q: "Which technologies do you work with?",
    a: "Next.js, React and TypeScript on the frontend; Python/Django, FastAPI, Node.js/NestJS and PHP/Laravel on the backend; PostgreSQL, MySQL, MongoDB and Redis for data; OpenAI, Claude, Gemini and LangChain for AI; and Docker, Kubernetes, AWS, Google Cloud and Azure for deployment.",
  },
  {
    q: "Can we hire a dedicated developer?",
    a: "Yes. You can hire Django, Laravel, Node.js, Next.js, full-stack, AI/ML, DevOps or mobile developers hourly, part-time, full-time or for a fixed-price project.",
  },
  {
    q: "Do you work with clients outside Deoghar or outside India?",
    a: "Yes. We work remotely with clients across India and abroad, with regular video calls, shared task boards and code in your own repository.",
  },
  {
    q: "Do you offer internships?",
    a: "Please contact us to ask about current internship opportunities and application requirements.",
  },
];

export const productCategories = [
  "Education Platforms",
  "Institution Management Systems",
  "Student & Learning Products",
  "Business & Property Systems",
  "AI & Automation",
] as const;

export const products = [
  {
    slug: "university-website",
    icon: Landmark,
    category: "Education Platforms",
    title: "University Website",
    text: "Multi-department university websites covering admissions, academics, research and placements — built to inform students, faculty and parents clearly.",
    highlights: [
      "Department & course pages",
      "Admissions & notices",
      "Faculty & research profiles",
    ],
  },
  {
    slug: "college-website",
    icon: GraduationCap,
    category: "Education Platforms",
    title: "College Website",
    text: "Professional college websites covering courses, faculty, campus life and admissions, designed to build trust with students and parents.",
    highlights: [
      "Courses & fee information",
      "Online enquiry & admission forms",
      "Gallery, events & notices",
    ],
  },
  {
    slug: "school-website",
    icon: School,
    category: "Education Platforms",
    title: "School Website",
    text: "Friendly, informative school websites bringing academics, achievements, admissions and parent communication together in one place.",
    highlights: [
      "Academics & curriculum pages",
      "Admission enquiry forms",
      "Notices, events & photo gallery",
    ],
  },
  {
    slug: "university-management-system",
    icon: Building,
    category: "Institution Management Systems",
    title: "University Management System",
    text: "A complete ERP for universities covering admissions, academics, examinations, finance and administration in one connected system.",
    highlights: [
      "Multi-department admissions",
      "Academic & examination records",
      "Finance, fees & reporting",
    ],
  },
  {
    slug: "college-management-system",
    icon: Boxes,
    category: "Institution Management Systems",
    title: "College Management System",
    text: "Manage admissions, attendance, timetables, fees, exams and results for your college from a single dashboard.",
    highlights: ["Student & staff records", "Attendance & timetable", "Fee collection & reports"],
  },
  {
    slug: "school-management-system",
    icon: ClipboardCheck,
    category: "Institution Management Systems",
    title: "School Management System",
    text: "An all-in-one platform for admissions, attendance, timetables, homework, fees and parent communication.",
    highlights: [
      "Admission & attendance tracking",
      "Fee & expense management",
      "Parent-teacher communication",
    ],
  },
  {
    slug: "exam-management-system",
    icon: ClipboardCheck,
    category: "Institution Management Systems",
    title: "Exam Management System",
    text: "Plan, conduct and evaluate exams online or offline, with question banks, scheduling, result processing and report cards.",
    highlights: [
      "Question bank & scheduling",
      "Online & offline exam modes",
      "Result processing & report cards",
    ],
  },
  {
    slug: "admission-management-system",
    icon: UserPlus,
    category: "Institution Management Systems",
    title: "Admission Management System",
    text: "Simplify enrollment with online applications, document verification, merit lists and seat allocation workflows.",
    highlights: [
      "Online application forms",
      "Document verification",
      "Merit list & seat allocation",
    ],
  },
  {
    slug: "studymate",
    icon: Sparkles,
    category: "Student & Learning Products",
    title: "StudyMate — AI Learning for Class 1–5",
    text: "A fully AI-enabled, child-safe learning companion for Class 1–5 in Hindi and English — doubt solving, read-aloud, adaptive practice and a parent dashboard.",
    highlights: [
      "AI tutor that explains step by step",
      "NCERT/CBSE-aligned Maths, EVS, English, Hindi",
      "Parent dashboard & child-safe guardrails",
    ],
  },
  {
    slug: "online-test-platform",
    icon: MonitorCheck,
    category: "Student & Learning Products",
    title: "Online Test Platform",
    text: "Mock tests, test series and practice exams with an exam-like interface, AI-generated question banks and instant performance analytics.",
    highlights: [
      "Timed tests with negative marking & sections",
      "AI question generation & performance coach",
      "Rank, percentile & topic-wise analytics",
    ],
  },
  {
    slug: "flat-management-system",
    icon: Building,
    category: "Business & Property Systems",
    title: "Flat / Society Management System",
    text: "Manage maintenance billing, visitor logs, complaints, notices and accounts for apartments and housing societies.",
    highlights: [
      "Maintenance billing & dues",
      "Visitor & security log",
      "Notices & complaint tracking",
    ],
  },
  {
    slug: "hospital-management-system",
    icon: HeartPulse,
    category: "Business & Property Systems",
    title: "Hospital Management System",
    text: "Streamline patient registration, appointments, billing, pharmacy and records for clinics and hospitals.",
    highlights: [
      "OPD & appointment scheduling",
      "Billing & pharmacy inventory",
      "Patient records & history",
    ],
  },
  {
    slug: "hotel-management-system",
    icon: Hotel,
    category: "Business & Property Systems",
    title: "Hotel Management System",
    text: "Handle bookings, check-in/check-out, billing and housekeeping for hotels and guest houses from one dashboard.",
    highlights: [
      "Room booking & availability",
      "Billing & invoicing",
      "Housekeeping & staff tasks",
    ],
  },
  {
    slug: "hrms",
    icon: Users,
    category: "Business & Property Systems",
    title: "HRMS — Human Resource Management",
    text: "Manage employee records, attendance, payroll and leave approvals for growing teams and organisations.",
    highlights: [
      "Attendance & leave tracking",
      "Payroll processing",
      "Employee self-service portal",
    ],
  },
  {
    slug: "ai-automation-suite",
    icon: Bot,
    category: "AI & Automation",
    title: "AI Automation Suite",
    text: "AI assistants, document intelligence and connected workflow automation tailored to your institution's or business's processes.",
    highlights: [
      "AI assistants & chatbots",
      "Document & data automation",
      "Workflow & CRM integration",
    ],
  },
];

export const engagementModels = [
  {
    title: "Fixed-scope project",
    text: "A clearly defined scope, timeline and price agreed upfront — best for websites, products and well-understood requirements.",
    points: ["Itemised written quote", "Milestone-based payments", "Demo at every milestone"],
  },
  {
    title: "Dedicated developer / team",
    text: "A developer or small team working on your product month by month — best when requirements evolve or work is ongoing.",
    points: ["Flexible monthly engagement", "Direct communication", "Scale up or down as needed"],
  },
  {
    title: "Annual maintenance (AMC)",
    text: "Ongoing support after launch — updates, bug fixes, backups and small improvements under a yearly plan.",
    points: ["Security & software updates", "Backup and uptime checks", "Priority support"],
  },
];

export const commitments = [
  {
    title: "Clear, written quotes",
    text: "Every proposal lists scope, timeline and cost line by line — no hidden charges.",
  },
  {
    title: "Your code, your data",
    text: "Source-code and data ownership are agreed in writing in the project contract.",
  },
  {
    title: "Regular demos",
    text: "You see working software at every milestone, not just at the end.",
  },
  {
    title: "Local, reachable team",
    text: "Based in Deoghar, Jharkhand — reachable by phone, WhatsApp and in person.",
  },
];
