import {
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileSearch,
  GraduationCap,
  LineChart,
  Lock,
  MessageSquare,
  Network,
  PhoneCall,
  RefreshCw,
  Route,
  School,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LandingPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta?: string;
  interest: string;
  formTitle: string;
  formIntro: string;
  messagePlaceholder: string;
  price?: string;
  timeline?: string;
  painTitle: string;
  painIntro: string;
  painPoints: string[];
  solutionTitle: string;
  solutionIntro: string;
  capabilities: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  outcomes: string[];
  trustTitle: string;
  trustItems: string[];
  proofQuote: string;
  proofAttribution: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  schemaType: "Service" | "Product";
  productUrl?: string;
};

export const contactDetails = {
  phone: "+2347061106212",
  phoneLabel: "+234 706 110 6212",
  email: "admin@futurelogix.ng",
  location: "Lagos, Nigeria",
};

export const landingPages: Record<string, LandingPageData> = {
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    metaTitle: "AI Automation Services in Nigeria",
    metaDescription:
      "Reduce manual work with practical AI automation implemented into your existing operations by Future Logix in Lagos, Nigeria.",
    eyebrow: "AI Automation",
    h1: "Reduce manual work and move business processes faster with practical AI automation.",
    subheadline:
      "Future Logix helps African organizations design and implement AI-enabled workflows inside the tools and operations they already use.",
    primaryCta: "Discuss Your Workflow",
    secondaryCta: "Call Now",
    tertiaryCta: "Email Us",
    interest: "AI Automation",
    formTitle: "Send an AI automation inquiry",
    formIntro: "Tell us where manual work is slowing your team down. We will review the workflow and respond with a practical next step.",
    messagePlaceholder: "Describe the workflow, documents, approvals, reports, or repetitive tasks you want to improve.",
    price: "Starting from ₦2,500,000",
    timeline: "2-6 weeks implementation",
    painTitle: "Manual work is expensive when it sits inside daily operations.",
    painIntro:
      "Many teams know they need automation, but the real blocker is turning scattered tasks, documents, approvals, and reporting into a working system.",
    painPoints: [
      "Staff spend hours moving information between spreadsheets, email, and business tools.",
      "Approvals and handoffs slow down because the process depends on manual follow-up.",
      "Documents, requests, and reports pile up before anyone can extract useful information.",
      "AI experiments stay separate from real operations instead of improving daily work.",
    ],
    solutionTitle: "We implement AI where it can carry real operational weight.",
    solutionIntro:
      "Future Logix maps the process, identifies the parts AI can improve, connects the right systems, and ships automation your team can actually use.",
    capabilities: [
      {
        title: "Process Automation",
        description: "Automate repetitive approvals, routing, reminders, reporting, and task handoffs.",
        icon: Workflow,
      },
      {
        title: "AI Integration",
        description: "Connect AI capabilities to existing tools, databases, documents, and business workflows.",
        icon: Bot,
      },
      {
        title: "Workflow Optimization",
        description: "Redesign slow processes so automation supports clear ownership and better turnaround time.",
        icon: Route,
      },
      {
        title: "Intelligent Document Processing",
        description: "Extract, classify, summarize, and route information from operational documents.",
        icon: FileSearch,
      },
    ],
    outcomes: [
      "Less repetitive manual work for operations teams.",
      "Faster processing of requests, documents, and internal approvals.",
      "Better visibility into work status and process bottlenecks.",
      "AI implementation tied to measurable business outcomes, not demos.",
    ],
    trustTitle: "Built for real operating environments",
    trustItems: [
      "Practical over bloated: we focus on workflows that can be implemented and maintained.",
      "Grounded in African operating realities, including mixed tools, lean teams, and changing processes.",
      "Implementation-minded delivery with scalable thinking from the start.",
    ],
    proofQuote:
      "Future Logix approaches automation like an operating problem first, then a technology problem. That makes the recommendations easier to act on.",
    proofAttribution: "Operations leader, Lagos business services company",
    faqs: [
      {
        question: "Do we need to replace our current tools?",
        answer:
          "Not always. We usually start by reviewing your current tools and workflow, then decide what should be integrated, automated, replaced, or left as-is.",
      },
      {
        question: "What kind of processes can you automate?",
        answer:
          "Common fits include document handling, approvals, customer intake, reporting, reminders, internal requests, data movement, and repetitive operational tasks.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most focused AI automation projects take 2-6 weeks, depending on integrations, data quality, approvals, and the number of workflow steps.",
      },
      {
        question: "How do you manage data privacy?",
        answer:
          "We review the data involved, access controls, storage, and AI provider choices before implementation. Sensitive workflows need clear rules before automation goes live.",
      },
    ],
    schemaType: "Service",
  },
  "web-application-development": {
    slug: "web-application-development",
    title: "Web Application Development",
    metaTitle: "Custom Web Application Development in Nigeria",
    metaDescription:
      "Build custom internal tools, portals, workflow systems, and SaaS products with Future Logix.",
    eyebrow: "Web Application Development",
    h1: "Build custom web applications around the way your business actually works.",
    subheadline:
      "Future Logix designs and builds internal tools, portals, workflow systems, and product platforms for growing African organizations.",
    primaryCta: "Start Your Project",
    secondaryCta: "Talk to Us",
    tertiaryCta: "Request a Consultation",
    interest: "Web Application Development",
    formTitle: "Start a web application conversation",
    formIntro: "Share what you need the application to do, who will use it, and any systems it must connect to.",
    messagePlaceholder: "Describe the app, portal, internal tool, product, or workflow system you want to build.",
    price: "Starting from ₦4,000,000",
    timeline: "4-12 weeks typical project",
    painTitle: "Generic software often leaves the real process outside the system.",
    painIntro:
      "When teams outgrow spreadsheets and disconnected tools, the next step is not always another subscription. Sometimes the business needs a system built around its own workflow.",
    painPoints: [
      "Internal work depends on spreadsheets, email threads, and manual reconciliation.",
      "Customers or partners need a portal, but off-the-shelf tools do not fit the process.",
      "Teams need one reliable place to manage data, approvals, users, and reporting.",
      "A product idea needs a disciplined build path from MVP to scalable platform.",
    ],
    solutionTitle: "We build focused web applications that support the business process.",
    solutionIntro:
      "From requirements to deployment, Future Logix turns operational needs into clean interfaces, reliable APIs, and maintainable systems.",
    capabilities: [
      {
        title: "React/Next.js Development",
        description: "Modern web interfaces built for speed, usability, maintainability, and responsive access.",
        icon: Code2,
      },
      {
        title: "API Design",
        description: "Clean API layers for web apps, mobile clients, integrations, and internal services.",
        icon: Network,
      },
      {
        title: "Database Architecture",
        description: "Data models that support reporting, auditability, permissions, and future growth.",
        icon: Database,
      },
      {
        title: "Third-party Integrations",
        description: "Connect payments, email, CRMs, ERPs, analytics, cloud services, and business tools.",
        icon: Sparkles,
      },
    ],
    outcomes: [
      "A custom system that matches your workflow instead of forcing workarounds.",
      "Clearer ownership, faster task movement, and better reporting.",
      "A product foundation that can evolve after launch.",
      "Reduced dependency on scattered tools and duplicated data entry.",
    ],
    trustTitle: "Product and service thinking in one team",
    trustItems: [
      "We build products as well as client systems, so delivery decisions are grounded in real software operations.",
      "We keep requirements practical and implementation-minded from the start.",
      "We design for maintainability, security, and future scale without overbuilding the first release.",
    ],
    proofQuote:
      "The strongest part of the engagement was how quickly the team translated our process into screens, data, and implementation priorities.",
    proofAttribution: "Founder, Nigerian services company",
    faqs: [
      {
        question: "What types of web apps do you build?",
        answer:
          "We build internal tools, customer portals, partner portals, workflow systems, dashboards, SaaS platforms, and product MVPs.",
      },
      {
        question: "Can you work with our existing database or systems?",
        answer:
          "Yes. We review existing systems first, then recommend whether to integrate, migrate, rebuild, or phase the work.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We can support deployment, monitoring, improvements, and further feature development depending on the support arrangement.",
      },
      {
        question: "How do you price projects?",
        answer:
          "Pricing depends on scope, integrations, data complexity, user roles, and delivery timeline. Focused projects start from ₦4,000,000.",
      },
    ],
    schemaType: "Service",
  },
  "aws-architecture": {
    slug: "aws-architecture",
    title: "AWS Architecture & Implementation",
    metaTitle: "AWS Architecture and Implementation Services",
    metaDescription:
      "Plan and implement secure, scalable AWS infrastructure, serverless systems, monitoring, and cost optimization with Future Logix.",
    eyebrow: "AWS Architecture & Implementation",
    h1: "Design secure, scalable AWS infrastructure before growth exposes the weak points.",
    subheadline:
      "Future Logix helps startups and organizations plan, deploy, harden, monitor, and optimize AWS environments for real business use.",
    primaryCta: "Plan Your Infrastructure",
    secondaryCta: "Book a Call",
    tertiaryCta: "Send an Inquiry",
    interest: "AWS Architecture & Implementation",
    formTitle: "Send an AWS infrastructure inquiry",
    formIntro: "Tell us what is running now, what needs to scale, and where reliability, cost, or security is becoming a concern.",
    messagePlaceholder: "Describe your AWS setup, application stack, traffic, cost concerns, monitoring gaps, or security requirements.",
    price: "Starting from ₦3,000,000",
    timeline: "2-8 weeks implementation",
    painTitle: "Cloud infrastructure gets expensive when architecture is left too late.",
    painIntro:
      "A working app can still have fragile deployments, weak monitoring, unclear ownership, rising cloud bills, and security exposure.",
    painPoints: [
      "Infrastructure fails under traffic spikes or manual deployment mistakes.",
      "Cloud costs keep rising without clear visibility into what drives them.",
      "Monitoring and alerts are incomplete, so teams discover issues from users.",
      "Security settings, access policies, backups, and environments are not consistently managed.",
    ],
    solutionTitle: "We plan and implement AWS environments with operational discipline.",
    solutionIntro:
      "Future Logix designs cloud infrastructure around availability, security, cost control, deployment flow, and future scale.",
    capabilities: [
      {
        title: "Infrastructure Design",
        description: "Architecture plans for application hosting, data, networking, environments, and deployment flow.",
        icon: ServerCog,
      },
      {
        title: "Serverless Architecture",
        description: "Event-driven and managed AWS services where they reduce operational burden and fit the workload.",
        icon: Cloud,
      },
      {
        title: "Security Hardening",
        description: "IAM, network boundaries, secrets, backups, logging, and least-privilege access patterns.",
        icon: Lock,
      },
      {
        title: "Cost Optimization",
        description: "Usage review, service right-sizing, architecture adjustments, and practical cost visibility.",
        icon: LineChart,
      },
      {
        title: "24/7 Monitoring Setup",
        description: "Logs, metrics, alerts, uptime checks, and dashboards that help teams respond faster.",
        icon: ShieldCheck,
      },
    ],
    outcomes: [
      "More reliable deployments and fewer avoidable outages.",
      "Better visibility into infrastructure health, security posture, and cost drivers.",
      "Cloud architecture that can support growth without constant firefighting.",
      "A clearer operating model for backups, access, alerts, and environments.",
    ],
    trustTitle: "Technical credibility with practical delivery",
    trustItems: [
      "We connect architecture decisions to the realities of budget, team capacity, and business stage.",
      "We favor managed and serverless services when they reduce maintenance without limiting growth.",
      "We document the setup so your team is not locked out of its own infrastructure.",
    ],
    proofQuote:
      "Future Logix brought structure to the cloud decisions and helped us separate urgent fixes from architecture that needed a proper implementation plan.",
    proofAttribution: "Technical founder, African software startup",
    faqs: [
      {
        question: "Can you improve an existing AWS setup?",
        answer:
          "Yes. We can audit the current environment, identify risks, and implement improvements without forcing a full rebuild where it is not needed.",
      },
      {
        question: "Do you support serverless systems?",
        answer:
          "Yes. We design and implement serverless architectures where they fit the workload, cost profile, and operational model.",
      },
      {
        question: "Can you help reduce AWS costs?",
        answer:
          "Yes. Cost optimization usually starts with visibility, then service right-sizing, architecture adjustments, and better environment management.",
      },
      {
        question: "Do you provide monitoring setup?",
        answer:
          "Yes. We can set up logging, dashboards, uptime checks, alerts, and incident visibility so teams are not operating blind.",
      },
    ],
    schemaType: "Service",
  },
  "business-modernization": {
    slug: "business-modernization",
    title: "Business Modernization & Automation",
    metaTitle: "Business Modernization & Automation",
    metaDescription:
      "Modernize manual processes, legacy workflows, and disconnected tools with Future Logix in Lagos, Nigeria.",
    eyebrow: "Business Modernization & Automation",
    h1: "Modernize operations so the business can move with clarity, speed, and scale.",
    subheadline:
      "Future Logix helps traditional and growing businesses replace manual workflows with practical digital systems that fit African operating realities.",
    primaryCta: "Modernize Your Operations",
    secondaryCta: "Talk to Us",
    tertiaryCta: "Start the Conversation",
    interest: "Business Modernization & Automation",
    formTitle: "Start a modernization conversation",
    formIntro: "Share the process, department, or operation that needs better visibility and less manual effort.",
    messagePlaceholder: "Describe the manual processes, legacy tools, disconnected systems, or service delays you want to fix.",
    price: "Starting from ₦5,000,000",
    timeline: "4-16 weeks engagement",
    painTitle: "Growth exposes the limits of manual operations.",
    painIntro:
      "Many businesses carry important work through paper, spreadsheets, WhatsApp, email, and legacy systems. It works for a while, then slows service and hides what is happening.",
    painPoints: [
      "Manual processes make work hard to track and easy to delay.",
      "Disconnected tools create duplicate entry, unclear records, and poor reporting.",
      "Managers lack visibility into service delivery, approvals, inventory, finance, or customer workflows.",
      "Legacy systems cannot support the speed, integration, or control the business now needs.",
    ],
    solutionTitle: "We turn messy operations into clear, scalable systems.",
    solutionIntro:
      "Future Logix maps the current process, designs a practical modernization path, integrates what should stay, and implements digital workflows in phases.",
    capabilities: [
      {
        title: "Process Mapping",
        description: "Clarify current workflows, ownership, bottlenecks, data movement, and improvement priorities.",
        icon: BarChart3,
      },
      {
        title: "Legacy System Integration",
        description: "Connect existing systems where useful instead of replacing everything at once.",
        icon: RefreshCw,
      },
      {
        title: "Digital Transformation Roadmaps",
        description: "Prioritized implementation plans with realistic scope, cost, risk, and sequencing.",
        icon: Route,
      },
      {
        title: "Change Management Support",
        description: "Support adoption with clear workflows, user guidance, rollout planning, and feedback loops.",
        icon: Users,
      },
    ],
    outcomes: [
      "Clearer operations and better management visibility.",
      "Reduced manual handoffs, duplicate data entry, and avoidable delays.",
      "Digital systems that can scale with branches, teams, customers, and reporting needs.",
      "A phased modernization path that respects budget, people, and operational continuity.",
    ],
    trustTitle: "Modernization without theatre",
    trustItems: [
      "We do not force broad transformation language where a practical workflow fix is what the business needs.",
      "We combine process thinking, software delivery, automation, and cloud implementation.",
      "We work as a long-term technology partner when the modernization roadmap extends beyond one phase.",
    ],
    proofQuote:
      "The conversation stayed focused on how the work actually moves through the business, which made the technology plan much clearer.",
    proofAttribution: "Managing director, Lagos-based operations business",
    faqs: [
      {
        question: "Do we need a full digital transformation project?",
        answer:
          "Not always. Some businesses need a phased modernization plan that starts with the highest-friction process and expands from there.",
      },
      {
        question: "Can you work around legacy systems?",
        answer:
          "Yes. We review what exists and decide whether to integrate, replace, automate around, or phase out each system.",
      },
      {
        question: "How do you handle staff adoption?",
        answer:
          "We design workflows with user reality in mind, then support rollout with training, clear ownership, documentation, and feedback.",
      },
      {
        question: "What does the first engagement include?",
        answer:
          "A typical engagement includes process review, solution design, implementation planning, build or integration work, rollout support, and handover.",
      },
    ],
    schemaType: "Service",
  },
  schoolsrep: {
    slug: "schoolsrep",
    title: "SchoolsRep",
    metaTitle: "SchoolsRep School Operations Platform",
    metaDescription:
      "SchoolsRep helps Nigerian private schools manage attendance, results, fees, communication, records, and admin workflows in one place.",
    eyebrow: "Flagship Product",
    h1: "Run attendance, results, fees, parent communication, and school admin in one place.",
    subheadline:
      "SchoolsRep is the flagship Future Logix product for Nigerian private schools that need clearer operations without adding administrative pressure.",
    primaryCta: "Request a Demo",
    secondaryCta: "Visit SchoolsRep",
    tertiaryCta: "Talk to Us",
    interest: "SchoolsRep Product Inquiry",
    formTitle: "Request a SchoolsRep demo",
    formIntro: "Tell us about your school and the operations you want to improve. We will follow up with the right demo path.",
    messagePlaceholder: "Share your school name, student size, current tools, and what you want SchoolsRep to help with.",
    painTitle: "School operations become harder when records, payments, and communication are scattered.",
    painIntro:
      "Private schools need reliable academic and administrative workflows, but many teams still manage critical work through notebooks, spreadsheets, chat messages, and manual follow-up.",
    painPoints: [
      "Attendance, results, fees, and student records sit in separate places.",
      "Parents miss important updates because communication is inconsistent.",
      "Fee tracking and payment follow-up take too much administrative time.",
      "Academic workflows become stressful during result processing and reporting periods.",
    ],
    solutionTitle: "SchoolsRep brings school operations into one practical platform.",
    solutionIntro:
      "Future Logix built SchoolsRep to help Nigerian private schools manage daily administration, academic records, parent communication, and financial visibility with less manual effort.",
    capabilities: [
      {
        title: "Administration & Records Management",
        description: "Keep student, staff, class, and operational records organized for easier access and reporting.",
        icon: School,
      },
      {
        title: "Communication & Parent Engagement",
        description: "Improve parent updates, school announcements, and engagement around important activities.",
        icon: MessageSquare,
      },
      {
        title: "Academic Workflows & Scheduling",
        description: "Support class, term, assessment, timetable, and academic coordination workflows.",
        icon: GraduationCap,
      },
      {
        title: "Fee Management & Payment Tracking",
        description: "Track fees, balances, payment status, and follow-up with clearer financial visibility.",
        icon: WalletCards,
      },
      {
        title: "Attendance & Result Processing",
        description: "Handle daily attendance and result workflows with more structure and less repetitive admin.",
        icon: CheckCircle2,
      },
    ],
    outcomes: [
      "Better visibility for administrators and school owners.",
      "Less manual pressure during attendance, fee, and result periods.",
      "More consistent parent communication.",
      "A practical school operations platform backed by a Nigerian technology company.",
    ],
    trustTitle: "A Future Logix product, built for Nigerian schools",
    trustItems: [
      "SchoolsRep is the flagship product under Future Logix.",
      "The platform reflects the realities of private school administration in Nigeria.",
      "Future Logix brings both product delivery and long-term technology partner thinking.",
    ],
    proofQuote:
      "Schools need systems that reduce admin pressure without making daily work more complicated. That is the operating principle behind SchoolsRep.",
    proofAttribution: "Future Logix product team",
    faqs: [
      {
        question: "Is SchoolsRep for Nigerian private schools?",
        answer:
          "Yes. SchoolsRep is positioned for Nigerian private schools that need better administration, parent communication, academic workflows, and fee visibility.",
      },
      {
        question: "Can we request a demo before deciding?",
        answer:
          "Yes. Use the form to request a demo and include your school size, current challenges, and the workflows you want to review.",
      },
      {
        question: "Does SchoolsRep handle fees and results?",
        answer:
          "Yes. The landing focus includes fee management, payment tracking, attendance, and result processing workflows.",
      },
      {
        question: "Is Future Logix the company behind SchoolsRep?",
        answer:
          "Yes. SchoolsRep is the flagship product under Future Logix, alongside our technology services for African organizations.",
      },
    ],
    schemaType: "Product",
    productUrl: "https://schoolsrep.com",
  },
};

export const landingRouteSlugs = Object.keys(landingPages);
