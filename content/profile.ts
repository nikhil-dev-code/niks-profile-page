export type Role = {
  id: string;
  org: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  detail: string;
  stack: string[];
  url?: string;
  urlLabel?: string;
  featured: boolean;
};

export type AgentDemo = {
  name: string;
  domain: string;
  problem: string;
  approach: string;
  production: string;
  stack: string[];
  samplePrompts: string[];
  url?: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export const person = {
  name: "Nikhil Narayana",
  title: "Engineering Lead · Agentic Systems",
  specialties: "Conversational AI · Generative AI · Production agent systems",
  supporting:
    "Fifteen years taking software from a blank repository to production, usually as the person accountable for the team. The last year of that work is conversational AI, generative features, and agent systems inside products that are already live.",
  metaDescription:
    "Fifteen years taking software from a blank repository to production, usually as the person accountable for the team.",
  location: "Mysore / Bengaluru",
  availability: "Open to global remote",
  phoneDisplay: "+91 98809 91531",
  phoneHref: "tel:+919880991531",
  email: "niks.narayana@gmail.com",
  emailHref: "mailto:niks.narayana@gmail.com",
  linkedinLabel: "LinkedIn",
  linkedinHref: "https://www.linkedin.com/in/nikhil-narayana-dev",
  documentTitle: "Nikhil Narayana — Engineering Lead · Agentic Systems",
};

export const nav = [
  { href: "#ai", label: "AI" },
  { href: "#work", label: "Work" },
  { href: "#agents", label: "Agents" },
  { href: "#career", label: "Career" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const proof = [
  { figure: "15+", label: "Years shipping software" },
  { figure: "15+", label: "Projects completed till date" },
  { figure: "7+", label: "0-1 projects" },
  { figure: "50+", label: "Team mentored" },
];

export const appliedAi = {
  lead: "Retrieval, orchestration, and generation inside products already in market.",
  example:
    "At Vidwath, subject ebooks were split into chapter chunks, stored in PostgreSQL with pgvector, retrieved, and passed to an LLM to produce question papers, homework, and summaries.",
  credentials: [
    {
      label: "Foundation: Introduction to LangGraph - Python",
      status: "Sep 2026",
      href: "https://academy.langchain.com/certificates/brvmzxyvuw",
    },
    {
      label: "Foundation: Monitoring Production Agents",
      status: "Sep 2026",
      href: "https://academy.langchain.com/certificates/wyofnogn9d",
    },
    {
      label: "Foundation: Introduction to Deep Agents",
      status: "Sep 2026",
      href: "https://academy.langchain.com/certificates/veja5rwll6",
    },
    {
      label: "Foundation: Introduction to LangSmith Deployment",
      status: "Sep 2026",
      href: "https://academy.langchain.com/certificates/tsksjmexm3",
    },
    {
      label: "Foundation: Building Reliable Agent",
      status: "Sep 2026",
      href: "https://academy.langchain.com/certificates/rm2vdvnnz0",
    },
    {
      label: "Foundation: Introduction to LangChain - Python",
      status: "Aug 2026",
      href: "https://academy.langchain.com/certificates/rm2vdvnnz0",
    },
    {
      label: "Quickstart: LangGraph Essentials - Python",
      status: "Aug 2026",
      href: "https://academy.langchain.com/certificates/xwznmqibjg",
    },
    {
      label: "Quickstart: LangChain Essentials - Python",
      status: "Aug 2026",
      href: "https://academy.langchain.com/certificates/brvmzxyvuw",
    },
    {
      label: "LangChain Certified Agent Engineer",
      status: "Exam in progress",
    },
  ],
};

export const roles: Role[] = [
  {
    id: "clascout",
    org: "Clascout",
    title: "Founder and Architect",
    start: "May 2026",
    end: "Present",
    summary:
      "SaaS for class owners to run fees, attendance, and schedules, and for learners to track enrollment across classes. Fifteen paying class owners in the first week.",
    detail:
      "Built and launched a SaaS platform alone. Class owners run fees, attendance, and schedules; learners track enrollment across classes. Fifteen paying class owners in the first week. The infrastructure is meant to run with very little ongoing maintenance.",
    stack: [
      "Next.js",
      "Capacitor",
      "Firebase Auth",
      "Firestore",
      "Cloud Messaging",
      "Data Connect",
      "Cloud Functions",
      "GCP",
    ],
    url: "https://clascout.in/",
    urlLabel: "clascout.in",
    featured: true,
  },
  {
    id: "vidwath",
    org: "Vidwath 4.0",
    title: "Head of Software, Vidwath Innovative Solutions",
    start: "Dec 2025",
    end: "May 2026",
    summary:
      "Led 20 people and shipped one Flutter codebase for Windows, web, Android, and classroom smart panels in under three months. A RAG pipeline turns subject ebooks into question papers, homework, and summaries for 50,000+ students.",
    detail:
      "Led 20 people and shipped Vidwath 4.0 in under three months: one Flutter codebase for Windows, web, Android, and classroom smart panels, with Node.js on GCP. 50,000+ students and 5,000+ hours of content. Subject ebooks were split into chapter chunks, stored in PostgreSQL with pgvector, retrieved, and passed to an LLM to produce question papers, homework, and summaries. Replaced a manual content-encryption process with one automated script, and stood up GitHub, coding standards, and CI/CD from zero.",
    stack: [
      "Flutter",
      "Node.js",
      "GCP",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Content encryption",
    ],
    featured: true,
  },
  {
    id: "athos",
    org: "Athos Commerce",
    title: "Technical Lead, Frontend",
    start: "Jan 2022",
    end: "Dec 2025",
    summary:
      "Led 10 engineers and moved a live merchant admin onto React with the strangler pattern and no downtime, for a platform serving 10,000+ merchants. Jest reached 90% coverage, and an OpenAI synonym API recovers zero-result searches.",
    detail:
      "At Athos Commerce, formerly Klevu, led 10 engineers and moved a live merchant admin onto React with the strangler pattern, with no downtime, for a platform serving 10,000+ merchants. Rolled Jest out across the team to 90% coverage, with SonarQube on the gate. Built an OpenAI synonym API so zero-result searches still return something useful.",
    stack: ["React", "Jest", "SonarQube", "OpenAI APIs"],
    featured: true,
  },
  {
    id: "bali",
    org: "Bali.Love",
    title: "Architect and Lead",
    start: "Dec 2024",
    end: "May 2025",
    summary:
      "Moved the product off Bubble onto React, Node.js, and PostgreSQL, including the data migration and a redesigned schema, on GCP Cloud Run and Cloud SQL.",
    detail:
      "Moved the product off Bubble onto React, Node.js, and PostgreSQL, including the data migration and a redesigned schema, on GCP Cloud Run and Cloud SQL.",
    stack: ["React", "Node.js", "PostgreSQL", "Cloud Run", "Cloud SQL"],
    url: "https://bali.love/",
    urlLabel: "bali.love",
    featured: true,
  },
  {
    id: "essence",
    org: "Essence",
    title: "Frontend App Developer",
    start: "Dec 2024",
    end: "May 2025",
    summary:
      "Shipped the iOS and Android app in 30 days with Expo and React Native. The product plays the day's news as 30-second drops with AI hosts.",
    detail:
      "Shipped the iOS and Android app in 30 days with Expo and React Native. The product plays the day's news as 30-second drops with AI hosts.",
    stack: ["Expo", "React Native"],
    url: "https://play.google.com/store/apps/details?id=com.essencenews.essenceapp&hl=en_IN",
    urlLabel: "Google Play",
    featured: true,
  },
  {
    id: "nineleaps",
    org: "Nineleaps Technologies",
    title: "Principal Engineer",
    start: "Jan 2021",
    end: "Jan 2022",
    summary:
      "TESCO Help App for 400,000 employees. Contributing in production within 15 days.",
    detail:
      "TESCO Help App, used by 400,000 employees, on React, Node.js, and Kubernetes. Cleared a Docker deployment blocker and was contributing in production within 15 days of joining.",
    stack: ["React", "Node.js", "Kubernetes", "Docker"],
    featured: false,
  },
  {
    id: "qwinix",
    org: "Qwinix Technologies",
    title: "Principal Consultant",
    start: "Jun 2018",
    end: "Jan 2021",
    summary:
      "Led teams for HPE Qbert 2.0 and CoolerScreens, and was the India–Costa Rica liaison.",
    detail:
      "Led 18 people on HPE’s Qbert 2.0 analytics platform: Node.js, React, PostgreSQL, Kafka, Kubernetes, and Azure, and was the sole India–Costa Rica liaison. Led 15 people for CoolerScreens: access manager, planogram editor, product catalog, and a pricing ingestion pipeline on Azure with OAuth 2.0 and OpenID Connect. Completed 4 GCP certifications and 1 AWS certification on the account.",
    stack: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Kafka",
      "Kubernetes",
      "Azure",
      "OAuth 2.0",
      "OpenID Connect",
    ],
    featured: false,
  },
  {
    id: "earlier",
    org: "Earlier career",
    title: "Software and operations",
    start: "2004",
    end: "2018",
    summary:
      "Product engineering at MSCI, Oracle Financial Services, and Dataflex, then an agriculture business with in-house software.",
    detail:
      "Senior Developer at MSCI (2008–2010). Software Developer at i-flex Solutions, now Oracle Financial Services (2005–2008), and at Dataflex Systems (2004–2005). From 2010 to 2018, ran a 100-acre dairy and agriculture operation — 30+ people, 1,000 litres a day — and built the payroll, dairy, and attendance software in-house.",
    stack: [],
    featured: false,
  },
];

export const agentDemos: AgentDemo[] = [
  {
    name: "Institution Management Agent",
    domain: "Institutions",
    problem:
      "Campus and multi-site teams answer enrollment, fee, roster, and policy questions by hopping across admin tools and tribal knowledge.",
    approach:
      "Tool-using agent over institution records and documents: multi-step admin workflows with retrieval for policies and structured tools for live data.",
    production:
      "Scoped tools, audited side effects, and human confirmation on writes.",
    stack: ["LangGraph", "Tool calling", "RAG", "PostgreSQL", "OpenAI APIs"],
    samplePrompts: [
      "Summarize open fee balances for the science department this term.",
      "Which campuses still need transfer approvals this week?",
      "What does the refund policy say for mid-semester withdrawals?",
    ],
  },
  {
    name: "Class Management Agent",
    domain: "Classes",
    problem:
      "Teachers and class owners lose time on attendance, homework follow-ups, schedule changes, and parent updates that live in separate apps.",
    approach:
      "Agent oriented around class operations: tools for roster and sessions, retrieval for class materials, and guided multi-step tasks for common teaching workflows.",
    production:
      "Read-first defaults, explicit confirmations for messages and schedule changes, eval prompts for common failure cases.",
    stack: ["LangGraph", "Tool calling", "RAG", "Node.js", "OpenAI APIs"],
    samplePrompts: [
      "Who was absent more than twice this week in Grade 8A?",
      "Draft a parent update for tomorrow's schedule change.",
      "List homework still outstanding for the last two sessions.",
    ],
  },
];

export const stack: StackGroup[] = [
  {
    label: "Applied AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "pgvector",
      "OpenAI APIs",
      "LangSmith (via Academy coursework)",
      "Cursor",
      "Claude Code",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Flutter"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Capacitor"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "Python"],
  },
  {
    label: "Cloud",
    items: [
      "GCP",
      "Firebase",
      "Cloud Functions",
      "Cloud Run",
      "Cloud SQL",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    label: "Data",
    items: [
      "PostgreSQL",
      "Firestore",
      "Firebase Data Connect",
      "MongoDB",
      "MySQL",
      "Kafka",
    ],
  },
  {
    label: "Security and delivery",
    items: [
      "OAuth 2.0",
      "OpenID Connect",
      "HLS",
      "Content encryption",
      "Jest",
      "SonarQube",
    ],
  },
];

export const education = {
  degree: "B.E. Computer Science",
  school: "TKIET, Shivaji University",
  year: "2003",
  languages: ["English", "Hindi", "Kannada"],
  visa: "US B1 visa valid through 2030",
};

export const agentEmptyCopy =
  "Agent system case studies are in progress. Each finished entry will show the problem, approach, production notes, stack, and a sandbox link when available.";
