export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const featuredProduct = {
  name: "ClassPoint",
  href: "/products/classpoint",
  category: "Flagship Product",
  summary:
    "A school operations platform for Nigerian schools that need better structure across administration, records, communication, and daily delivery.",
};

export const trustPoints = [
  "Built for African businesses and institutions",
  "Products and services under one company",
  "Cloud, automation, security, and software delivery",
  "Practical implementation over slide-deck strategy",
  "Structured for long-term partnership",
];

export const homepage = {
  hero: {
    eyebrow: "Future Logix Limited",
    title: "Practical digital products and technology services for growing African organizations.",
    description:
      "Future Logix is the parent technology company behind ClassPoint and a growing portfolio of products, platforms, and delivery services designed to help organizations operate better, move faster, and scale with confidence.",
    primaryCta: { label: "Talk to Us", href: "/contact" },
    secondaryCta: { label: "Explore Products", href: "/products" },
    supportLine: "For product teams, service-led businesses, schools, SMEs, and organizations building what comes next.",
    benefits: [
      "Clear product thinking",
      "Delivery that gets implemented",
      "Technology grounded in business reality",
    ],
    heroPanel: {
      eyebrow: "ClassPoint Flagship Product",
      title: "Future Logix is building a product company, not just a services brand.",
      body:
        "ClassPoint leads the portfolio today, while the wider Future Logix platform is positioned to support more products, stronger service lines, and deeper long-term partnerships over time.",
      stats: [
        { label: "Products", value: "Flagship + pipeline" },
        { label: "Services", value: "Execution-focused" },
        { label: "Approach", value: "Commercially practical" },
      ],
      links: [
        { label: "View Products", href: "/products" },
        { label: "See Services", href: "/services" },
      ],
    },
  },
  decisionGateway: {
    eyebrow: "What We Do",
    title: "Two clear paths, depending on what you need right now.",
    description:
      "Some visitors are looking for a product. Others need a technology partner who can help them design, build, secure, or improve core systems. The homepage should make both paths obvious.",
  },
  featuredProductsIntro: {
    eyebrow: "Featured Products",
    title: "ClassPoint is the current flagship. The portfolio will grow from here.",
    description:
      "This section establishes Future Logix as a company with product ambition and a visible anchor product today, while leaving clean room for more products later.",
  },
  servicesIntro: {
    eyebrow: "Services Overview",
    title: "Service lines framed around outcomes, not vague capability lists.",
    description:
      "Future Logix helps organizations launch new products, improve operations, strengthen infrastructure, and make better technology decisions without overcomplicating the work.",
  },
  industriesIntro: {
    eyebrow: "Who We Serve",
    title: "Built for organizations that need useful systems, not empty transformation language.",
    description:
      "The industries focus is intentionally practical: sectors where technology has to improve delivery, visibility, coordination, and growth.",
  },
  differentiatorsIntro: {
    eyebrow: "Why Future Logix",
    title: "A sharper proposition than the usual technology consultancy story.",
    description:
      "The company should feel implementation-minded, market-aware, and built for long-term relevance in African business environments.",
  },
  outcomesIntro: {
    eyebrow: "What Clients Can Expect",
    title: "An honest preview of the outcomes Future Logix is built to create.",
    description:
      "Rather than inventing proof, this section explains the kind of progress clients should expect when the right product and delivery decisions are put in place.",
  },
  insightsIntro: {
    eyebrow: "Insights",
    title: "A stronger bridge between authority, content, and future SEO growth.",
    description:
      "The insights preview should feel like the thinking arm of the business: practical, informed, and useful to decision-makers.",
  },
  finalCta: {
    eyebrow: "Next Step",
    title: "Looking for a product, a technology partner, or both? Start with the right conversation.",
    body:
      "Explore the product direction, review the service offering, or speak directly with Future Logix about what you are building and where your organization needs support next.",
    primaryHref: "/contact",
    primaryLabel: "Talk to Us",
    secondaryHref: "/products",
    secondaryLabel: "Explore Products",
  },
};

export const decisionCards = [
  {
    title: "Products",
    meta: "For teams looking for ready solutions",
    summary:
      "Explore products developed by Future Logix for recurring operational and market needs. This is the right path if you want a solution with a defined use case and a product roadmap behind it.",
    audience: "Best for schools, institutions, product buyers, and partners looking for a usable offering rather than a custom build from scratch.",
    cta: "Go to Products",
    href: "/products",
  },
  {
    title: "Services",
    meta: "For organizations that need delivery support",
    summary:
      "Work with Future Logix on cloud, cybersecurity, workflow automation, software delivery, and technology planning. This is the right path if you need execution, guidance, or implementation support.",
    audience: "Best for business leaders, operations teams, founders, and organizations improving systems, processes, or digital products.",
    cta: "Go to Services",
    href: "/services",
  },
];

export const products = [
  {
    name: "ClassPoint",
    slug: "classpoint",
    status: "Flagship Product",
    summary:
      "A school operations platform for Nigerian schools that need more structure across administration, communication, academic workflows, and daily visibility.",
    detail:
      "ClassPoint helps schools reduce operational stress by bringing key records, workflows, and communication into one practical system.",
    audience: "Built for private schools, school owners, administrators, and operations-focused education teams.",
    problem:
      "It helps schools reduce admin overload, disconnected records, communication friction, and manual fee, attendance, and result workflows.",
    ctas: [
      { label: "Explore ClassPoint", href: "/products/classpoint" },
      { label: "Talk to Us", href: "/contact" },
    ],
  },
  {
    name: "More products in development",
    slug: "portfolio-ventures",
    status: "Portfolio Direction",
    summary:
      "Future Logix is building toward a broader product portfolio for African businesses and institutions, starting with one strong flagship and a scalable parent brand.",
    detail:
      "The goal is not to clutter the homepage with promises, but to signal that Future Logix is structured to launch and support more products over time.",
    audience: "Relevant for partners, investors, and organizations looking for a long-term technology company rather than a one-off vendor.",
    problem: "It reinforces that Future Logix is growing a product business with room for additional offerings.",
    ctas: [{ label: "View Product Direction", href: "/products" }],
  },
];

export const services = [
  {
    name: "Cloud and Infrastructure",
    slug: "cloud-and-infrastructure",
    category: "Operational Foundation",
    href: "/services",
    summary:
      "Set up the hosting, deployment, and operational foundation needed to run modern software reliably and with less friction.",
    value: "Helps teams move away from fragile setups and into infrastructure they can operate with more confidence.",
    bullets: ["Cloud setup", "Deployment pipelines", "Operational readiness"],
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    category: "Risk and Resilience",
    href: "/services",
    summary:
      "Strengthen security posture with practical controls, reviews, and implementation support suited to growing organizations.",
    value: "Helps reduce preventable risk and gives teams a more disciplined security baseline as systems and exposure grow.",
    bullets: ["Security reviews", "Access and control hygiene", "Implementation support"],
  },
  {
    name: "Workflow Automation",
    slug: "workflow-automation",
    category: "Featured Service",
    href: "/services/workflow-automation",
    summary:
      "Replace repetitive manual work with workflows, integrations, and system logic that improve speed and consistency.",
    value: "Helps teams spend less time on repetitive coordination and more time on real business execution.",
    bullets: ["Process mapping", "Automation design", "Connected workflows"],
  },
  {
    name: "Custom Software Development",
    slug: "custom-software-development",
    category: "Featured Service",
    href: "/services/custom-software-development",
    summary:
      "Build internal tools, customer-facing platforms, and tailored software products around clear business needs.",
    value: "Helps organizations create systems that fit how they actually operate instead of forcing work into generic tools.",
    bullets: ["Internal platforms", "Customer portals", "Tailored software delivery"],
  },
  {
    name: "Product Engineering and Advisory",
    slug: "technology-advisory",
    category: "Strategy and Delivery",
    href: "/services",
    summary:
      "Shape better digital products and make stronger technology decisions with a team that understands both delivery and business positioning.",
    value: "Helps leaders avoid expensive misdirection and move toward products and systems with stronger market fit.",
    bullets: ["Product direction", "Technical planning", "Execution guidance"],
  },
];

export const industries = [
  {
    name: "Education",
    slug: "education",
    href: "/industries/education",
    category: "Featured Industry",
    organization: "Schools, training providers, and learning-focused institutions",
    need: "Need better structure, engagement, and visibility across teaching and training delivery.",
    help: "Future Logix helps with products like ClassPoint and the digital systems that support modern learning experiences.",
  },
  {
    name: "SMEs and Growing Businesses",
    slug: "smes",
    href: "/industries/smes",
    category: "Featured Industry",
    organization: "Businesses moving from manual operations to more scalable systems",
    need: "Need simpler workflows, better visibility, and tools that reduce operational drag.",
    help: "Future Logix helps design practical systems, automation, and digital foundations that support growth without overengineering.",
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    href: "/industries",
    category: "Industry Focus",
    organization: "Firms that sell expertise and depend on coordinated internal delivery",
    need: "Need clearer internal processes, client-facing systems, and better control over delivery operations.",
    help: "Future Logix helps improve workflow, reporting, and digital infrastructure so teams can deliver more consistently.",
  },
  {
    name: "Service-Led Organizations",
    slug: "service-led-organizations",
    href: "/industries",
    category: "Industry Focus",
    organization: "Organizations whose performance depends on process, responsiveness, and operational coordination",
    need: "Need systems that reduce friction, improve accountability, and make service delivery easier to manage.",
    help: "Future Logix helps implement platforms, automations, and supporting technology that make service operations more resilient.",
  },
  {
    name: "Startups and Product Ventures",
    slug: "startups-and-product-ventures",
    href: "/industries",
    category: "Industry Focus",
    organization: "Early-stage teams building digital products or new technology-led services",
    need: "Need product thinking, technical execution, and scalable foundations without wasting time on the wrong build path.",
    help: "Future Logix helps founders and product teams move from concept to usable product with stronger structure and clearer technical decisions.",
  },
];

export const differentiators = [
  {
    title: "Practical over bloated",
    body: "Future Logix is positioned around usable systems, better operations, and real delivery, not long decks full of jargon.",
  },
  {
    title: "Grounded in African operating realities",
    body: "The work is framed around the constraints and opportunities of African businesses and institutions, not imported assumptions.",
  },
  {
    title: "Products and services in one company",
    body: "The company builds its own products while also delivering services, which creates stronger strategic and execution depth.",
  },
  {
    title: "Implementation-minded delivery",
    body: "Advice matters only if it can be executed. Future Logix is designed to help teams actually ship and operationalize the work.",
  },
  {
    title: "Scalable thinking from the start",
    body: "Products, workflows, and infrastructure are shaped with future growth in mind so clients do not outgrow every decision too quickly.",
  },
  {
    title: "Long-term partner orientation",
    body: "The relationship is framed around continued support, improvement, and future phases, not a one-time engagement and exit.",
  },
];

export const outcomes = [
  {
    title: "Sharper digital direction",
    body: "Clients should leave with more clarity about what to build, what to improve, and what to stop overcomplicating.",
  },
  {
    title: "Systems that support real work",
    body: "The goal is not more software for its own sake. It is better delivery, smoother operations, and tools teams can actually use.",
  },
  {
    title: "Better foundations for growth",
    body: "Whether through products, infrastructure, or automation, the work should make future scale easier rather than more chaotic.",
  },
  {
    title: "A more credible technology posture",
    body: "Organizations should feel more structured, more secure, and more confident in how they present and run their digital operations.",
  },
];

export const insights = [
  {
    title: "What a modern African technology company should actually sound like",
    category: "Positioning",
    summary:
      "Why product companies and technology service firms lose trust when they rely on vague consulting language.",
  },
  {
    title: "How to choose between buying a product and commissioning a custom build",
    category: "Decision Guide",
    summary:
      "A practical framework for leaders deciding whether they need an existing product, a custom system, or a hybrid path.",
  },
  {
    title: "Why workflow automation matters before a business feels \"ready\"",
    category: "Operations",
    summary:
      "A plain-language look at how growing organizations can remove process drag earlier and scale with less operational strain.",
  },
];

export const footerGroups = {
  products: [
    { label: "ClassPoint", href: "/products/classpoint" },
    { label: "Product Portfolio", href: "/products" },
  ],
  services: [
    { label: "Workflow Automation", href: "/services/workflow-automation" },
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export const productHub = {
  hero: {
    eyebrow: "Products",
    title: "Products built for practical operations, clear adoption, and long-term relevance.",
    description:
      "Future Logix builds software products for real operational problems. The product side of the company is designed to create useful systems that organizations can adopt, trust, and grow with, starting with ClassPoint.",
    primaryCta: { label: "Explore ClassPoint", href: "/products/classpoint" },
    secondaryCta: { label: "Talk to Us", href: "/contact" },
    supportingPoints: [
      "Backed by Future Logix",
      "Built for local operating realities",
      "Designed for real-world adoption",
    ],
  },
  philosophy: {
    eyebrow: "How We Build",
    title: "A product approach shaped by business reality, not feature inflation.",
    description:
      "Future Logix products are built to solve recurring operational problems with clear workflows, sensible implementation, and room to scale over time.",
    pillars: [
      {
        title: "Practical first",
        body: "Products start from real operational pressure points, not abstract product theory.",
      },
      {
        title: "Adoption-aware",
        body: "The goal is not to impress with complexity. It is to make modernization easier to adopt and sustain.",
      },
      {
        title: "Scalable by design",
        body: "Each product is shaped to support growth, clearer data visibility, and stronger operating discipline over time.",
      },
      {
        title: "Built with local context",
        body: "Workflows and priorities are informed by how African organizations actually run, communicate, and grow.",
      },
    ],
  },
  spotlight: {
    eyebrow: "Flagship Product",
    title: "ClassPoint is the first product to carry the Future Logix portfolio into the market.",
    description:
      "ClassPoint gives the product side of Future Logix real commercial substance. It is positioned as a focused solution for school operations, not a placeholder name inside a portfolio deck.",
    quickFacts: [
      "School operations platform",
      "Built for Nigerian schools",
      "Designed for administrative clarity",
    ],
  },
  portfolio: {
    eyebrow: "Growing Portfolio",
    title: "Future Logix is building a product company with room for more category-specific solutions.",
    description:
      "The portfolio is intentionally starting with one clear flagship product. That gives the brand focus today while leaving room for future products that solve practical business and institutional problems.",
    tracks: [
      {
        title: "Focused expansion",
        body: "Future products will be added where there is a repeatable problem, a credible product case, and a clear path to adoption.",
      },
      {
        title: "Partner-ready direction",
        body: "The product side of Future Logix is structured to support product conversations with operators, institutional buyers, and strategic partners.",
      },
    ],
    cta: {
      label: "Talk to Future Logix",
      href: "/contact",
    },
  },
  paths: {
    eyebrow: "Next Step",
    title: "Choose the right product path from here.",
    description:
      "Whether you want to evaluate ClassPoint, understand the portfolio direction, or discuss a product partnership, the next step should be clear.",
    actions: [
      {
        title: "View ClassPoint details",
        body: "See what ClassPoint is for, what it solves, and why it matters to school operators.",
        label: "Go to ClassPoint",
        href: "/products/classpoint",
      },
      {
        title: "Visit the product website",
        body: "Open the ClassPoint site if you want to engage with the product brand directly.",
        label: "Visit ClassPoint",
        href: "https://classpoint.ng",
        external: true,
      },
      {
        title: "Talk to Future Logix",
        body: "Start a conversation about product partnerships, institutional needs, or future portfolio opportunities.",
        label: "Talk to Us",
        href: "/contact",
      },
    ],
  },
};

export const classPointDetail = {
  hero: {
    eyebrow: "ClassPoint",
    title: "A school operations platform for Nigerian schools.",
    description:
      "ClassPoint helps schools run more clearly by bringing key administrative records, academic workflows, and communication touchpoints into one more usable system.",
    audience: "For private schools, school leaders, administrators, and operations-focused education teams.",
    primaryCta: { label: "Visit ClassPoint", href: "https://classpoint.ng", external: true },
    secondaryCta: { label: "Talk to Future Logix", href: "/contact" },
    stats: [
      { label: "Category", value: "School Operations" },
      { label: "Market Focus", value: "Nigerian Schools" },
      { label: "Backed By", value: "Future Logix" },
    ],
  },
  problems: {
    eyebrow: "Why It Exists",
    title: "Schools often outgrow manual coordination before they outgrow ambition.",
    description:
      "As schools grow, everyday operations become harder to manage consistently. Records live in too many places, communication becomes fragmented, and leadership loses visibility into what is happening across admin and academic workflows.",
    items: [
      "Administrative overload across admissions, student records, and routine follow-up",
      "Disconnected workflows for fees, attendance, and results",
      "Communication friction between school leadership, staff, and families",
      "Limited visibility into day-to-day operations as the school grows",
    ],
  },
  capabilities: {
    eyebrow: "Key Capabilities",
    title: "ClassPoint brings the school’s core operational workflows into a more structured system.",
    description:
      "The product is positioned around the practical areas schools need to manage well every day, not a long list of abstract features.",
    items: [
      {
        title: "Admissions and records",
        body: "Keep student information, entry workflows, and core records more organized from the start.",
      },
      {
        title: "Fees and finance operations",
        body: "Reduce confusion around school fee processes and improve visibility into payment-related administration.",
      },
      {
        title: "Attendance and daily activity",
        body: "Track attendance and everyday school workflows with less reliance on scattered manual follow-up.",
      },
      {
        title: "Results and academic workflows",
        body: "Support academic reporting and result-related processes with a system that is easier to manage consistently.",
      },
      {
        title: "Parent-teacher-school communication",
        body: "Create a clearer communication layer between the school and the people it serves.",
      },
      {
        title: "Administrative visibility",
        body: "Give school leadership better line of sight into operational activity and where follow-up is needed.",
      },
    ],
  },
  audience: {
    eyebrow: "Who It Is For",
    title: "Built for schools that need better systems without taking on unnecessary complexity.",
    description:
      "ClassPoint is a fit for schools that are growing, carrying too much operational workload manually, or trying to modernize school administration in a more structured way.",
    segments: [
      {
        title: "Private schools",
        body: "Schools looking for stronger structure across administration, records, and academic operations.",
      },
      {
        title: "School leaders and owners",
        body: "Decision-makers who need better visibility, control, and confidence in how the school is running.",
      },
      {
        title: "Administrative teams",
        body: "Teams handling the daily operational burden of records, communication, fees, attendance, and reporting.",
      },
      {
        title: "Growing schools",
        body: "Schools moving beyond manual workarounds and looking for a cleaner modernization path.",
      },
    ],
  },
  differentiation: {
    eyebrow: "Why ClassPoint",
    title: "A product shaped around school realities, not generic software assumptions.",
    description:
      "ClassPoint is positioned as a practical modernization path for schools. It is backed by Future Logix, grounded in local realities, and aimed at operational usefulness rather than unnecessary complexity.",
    points: [
      {
        title: "Built around local school realities",
        body: "The product direction reflects how Nigerian schools actually operate and where operational friction tends to build up.",
      },
      {
        title: "Practical workflows over bloated systems",
        body: "The goal is to make school operations easier to manage, not to bury teams under software complexity.",
      },
      {
        title: "Designed for adoption",
        body: "ClassPoint is positioned as a system schools can realistically move into, not an intimidating digital overhaul.",
      },
      {
        title: "Backed by Future Logix",
        body: "The product sits inside a broader technology company that can support product evolution, implementation thinking, and long-term continuity.",
      },
    ],
  },
  conversion: {
    eyebrow: "Next Step",
    title: "Interested in ClassPoint for your school or institution?",
    description:
      "Use the route that fits your stage: go directly to the product site, request a conversation with Future Logix, or start a broader discussion around school technology needs.",
    actions: [
      { label: "Visit ClassPoint", href: "https://classpoint.ng", external: true },
      { label: "Talk to Future Logix", href: "/contact" },
      { label: "Back to Products", href: "/products" },
    ],
  },
};

export const servicesHub = {
  hero: {
    eyebrow: "Services",
    title: "Practical technology services for businesses that need better systems, not more noise.",
    description:
      "Future Logix works with growing businesses and institutions that need to reduce process friction, build better software, strengthen digital operations, and make more grounded technology decisions.",
    primaryCta: { label: "Talk to Us", href: "/contact" },
    secondaryCta: { label: "Explore Service Areas", href: "#service-areas" },
    supportPoints: [
      "Business-aware delivery",
      "Implementation-minded support",
      "Built for operational clarity",
    ],
  },
  architecture: {
    eyebrow: "Service Areas",
    title: "A focused services portfolio built around outcomes that matter to growing organizations.",
    description:
      "Future Logix offers service lines that help clients improve execution, modernize internal systems, reduce operating drag, and make more credible technology decisions.",
  },
  engagement: {
    eyebrow: "How We Work",
    title: "A delivery model designed to reduce uncertainty and move work into action.",
    description:
      "Services are structured around practical engagement: understand the bottleneck, define the right technical response, implement what is needed, and improve the system after it goes live.",
    steps: [
      {
        title: "Understand the business bottleneck",
        body: "Start from operational pressure points, growth constraints, or product needs rather than rushing into tools too early.",
      },
      {
        title: "Define the right technical path",
        body: "Shape the service around what will actually improve workflow, visibility, speed, or delivery quality.",
      },
      {
        title: "Build, implement, and integrate",
        body: "Handle the technical execution with a bias toward usable systems and clean adoption.",
      },
      {
        title: "Support improvement over time",
        body: "Refine the workflow, system, or platform after launch so the work continues to create value.",
      },
    ],
  },
  featured: {
    eyebrow: "Featured Services",
    title: "Workflow Automation and Custom Software Development lead the services story in this phase.",
    description:
      "These two offers are the most direct bridge between business pain and visible transformation. They make the Future Logix services side feel concrete, outcome-oriented, and immediately relevant.",
  },
  paths: {
    eyebrow: "Next Step",
    title: "Choose the service path that matches your need.",
    description:
      "Some teams need automation help. Others need a custom platform. Others need a broader technology conversation. The service journey should make those choices obvious.",
    actions: [
      {
        title: "Workflow automation support",
        body: "For businesses trying to reduce repetitive work, connect systems, and improve operational speed.",
        label: "Explore Automation",
        href: "/services/workflow-automation",
      },
      {
        title: "Custom software support",
        body: "For businesses that need a tailored portal, workflow system, dashboard, or internal platform.",
        label: "Explore Custom Software",
        href: "/services/custom-software-development",
      },
      {
        title: "Broader technology consultation",
        body: "For leadership teams that need help deciding what to build, improve, secure, or modernize next.",
        label: "Talk to Future Logix",
        href: "/contact",
      },
    ],
  },
};

export const workflowAutomationDetail = {
  slug: "workflow-automation",
  name: "Workflow Automation",
  hero: {
    eyebrow: "Workflow Automation",
    title: "Automation that reduces manual work and helps operations move faster.",
    description:
      "Future Logix helps organizations design and implement automation workflows that reduce repetitive work, improve visibility, and make execution more consistent across the business.",
    audience: "For SMEs, operations teams, service businesses, and growing organizations dealing with repeated process friction.",
    primaryCta: { label: "Discuss an Automation Project", href: "/contact" },
    secondaryCta: { label: "Book a Consultation", href: "/contact" },
  },
  challenge: {
    eyebrow: "Business Challenge",
    title: "Manual processes quietly slow down teams long before leaders notice the cost clearly.",
    description:
      "Many organizations operate with repeated tasks spread across email, spreadsheets, chat, and disconnected tools. The result is slow turnaround, inconsistent follow-up, hidden bottlenecks, and staff time lost to work that should no longer be manual.",
    items: [
      "Repetitive manual processes that keep stealing staff time",
      "Disconnected systems that create double entry and follow-up gaps",
      "Slow approvals, notifications, and internal handoffs",
      "Weak visibility into what is happening across day-to-day operations",
    ],
  },
  examples: {
    eyebrow: "What We Help Automate",
    title: "Automation work is shaped around the workflows businesses repeat every day.",
    description:
      "The goal is not automation for its own sake. It is to remove process drag where it keeps slowing down delivery, coordination, and business response time.",
    items: [
      {
        title: "Lead capture and follow-up",
        body: "Route enquiries quickly, trigger the right follow-up steps, and reduce dropped opportunities.",
      },
      {
        title: "Operational approvals",
        body: "Reduce lag in internal approvals by creating clearer routing and decision paths.",
      },
      {
        title: "Internal notifications",
        body: "Trigger alerts and updates automatically when work reaches the next stage.",
      },
      {
        title: "System integrations",
        body: "Connect the tools teams already use so information moves with less manual intervention.",
      },
      {
        title: "Reporting pipelines",
        body: "Structure recurring reporting flows so teams get visibility without rebuilding reports manually every time.",
      },
      {
        title: "Task routing and onboarding flows",
        body: "Automate assignment, sequencing, and onboarding steps for smoother internal execution.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Outcomes",
    title: "The value of automation is operational clarity, speed, and consistency.",
    items: [
      "Less manual work across repetitive business processes",
      "Faster execution and reduced process delays",
      "Fewer avoidable errors caused by fragmented handoffs",
      "Better visibility into what is happening across operations",
      "A more scalable operating model as the business grows",
    ],
  },
  audience: {
    eyebrow: "Who It Is For",
    title: "Best suited to organizations where repeated process friction is already visible.",
    description:
      "Workflow automation is especially relevant when teams are growing, service delivery is becoming more complex, or operations are still leaning too heavily on scattered manual coordination.",
    segments: [
      "SMEs trying to improve operational efficiency",
      "Operations teams carrying too much process overhead",
      "Growing companies that need better internal coordination",
      "Service businesses handling recurring follow-up and approvals",
      "Organizations with obvious admin bottlenecks and repeated workflow drag",
    ],
  },
  approach: {
    eyebrow: "How Future Logix Approaches It",
    title: "Automation starts with understanding the workflow, not with forcing a tool.",
    steps: [
      {
        title: "Map the current workflow",
        body: "Understand how work currently moves, where it stalls, and where manual steps are creating avoidable drag.",
      },
      {
        title: "Design the right automation path",
        body: "Choose the automation logic, approvals, integrations, and triggers that fit the business context.",
      },
      {
        title: "Implement and connect the tools",
        body: "Build the automation flow and connect the systems involved so work moves more consistently.",
      },
      {
        title: "Monitor and improve",
        body: "Refine the workflow after rollout so it continues to support the business as processes evolve.",
      },
    ],
  },
  conversion: {
    eyebrow: "Next Step",
    title: "Need to reduce process drag in your business?",
    description:
      "Future Logix can help you review the workflow, identify what should be automated, and implement a more scalable path forward.",
    actions: [
      { label: "Talk to Future Logix", href: "/contact" },
      { label: "Discuss an Automation Project", href: "/contact" },
      { label: "Back to Services", href: "/services" },
    ],
  },
};

export const customSoftwareDetail = {
  slug: "custom-software-development",
  name: "Custom Software Development",
  hero: {
    eyebrow: "Custom Software Development",
    title: "Software built around how your business actually works.",
    description:
      "Future Logix helps organizations plan and build custom platforms, portals, internal systems, and operational software when off-the-shelf tools no longer fit the work clearly enough.",
    audience: "For growing businesses, operators, founders, schools, and institutions that need a more tailored digital foundation.",
    primaryCta: { label: "Discuss Your Project", href: "/contact" },
    secondaryCta: { label: "Get a Consultation", href: "/contact" },
  },
  challenge: {
    eyebrow: "Business Challenge",
    title: "Custom software becomes necessary when the business has outgrown workarounds.",
    description:
      "There is a point where spreadsheets, disconnected tools, and generic platforms create more friction than value. That is when a tailored system can start improving control, workflow quality, and long-term operating efficiency.",
    items: [
      "Off-the-shelf tools no longer match how the business runs",
      "Operations are fragmented across too many disconnected systems",
      "Internal workflows need a platform built around the actual process",
      "Growth now depends on a portal, dashboard, internal system, or business application",
    ],
  },
  examples: {
    eyebrow: "What We Can Help Build",
    title: "The focus is on systems that support real operations, delivery, and growth.",
    description:
      "Future Logix works on custom software where the business needs a system that fits more precisely than a generic tool can.",
    items: [
      {
        title: "Internal business platforms",
        body: "Build internal tools that give teams more structure, visibility, and control over day-to-day work.",
      },
      {
        title: "Client portals",
        body: "Create cleaner client-facing experiences for access, updates, service interaction, or account management.",
      },
      {
        title: "Workflow systems",
        body: "Turn repeated operational processes into a more usable system rather than a patchwork of manual steps.",
      },
      {
        title: "Dashboards and admin systems",
        body: "Give leaders and operators a clearer view into performance, records, and operational activity.",
      },
      {
        title: "Business web applications",
        body: "Build tailored web-based systems that support a specific business model or internal process.",
      },
      {
        title: "Product MVPs and operational software",
        body: "Support new product ideas or operational software needs with a more structured build path.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Outcomes",
    title: "Good custom software should create fit, clarity, and room to scale.",
    items: [
      "Systems aligned more closely with real business needs",
      "Better operational control and cleaner internal workflows",
      "Reduced process friction across teams and users",
      "A platform that leaves more room for future growth",
      "A stronger user experience than fragmented manual workarounds",
    ],
  },
  audience: {
    eyebrow: "Who It Is For",
    title: "A fit for organizations that need a more tailored system than generic tools can provide.",
    description:
      "This service is most relevant when a business has clear operational complexity, a defined workflow challenge, or a product idea that needs a credible technical build path.",
    segments: [
      "Growing businesses building around more structured operations",
      "Founders needing an MVP, internal platform, or business application",
      "Operators trying to replace spreadsheets and disconnected tools",
      "Schools or institutions that need a custom operational system",
      "Teams that need a portal, dashboard, workflow platform, or admin system",
    ],
  },
  approach: {
    eyebrow: "How Future Logix Approaches It",
    title: "The work moves from discovery and clarity into build, launch, and improvement.",
    steps: [
      {
        title: "Discovery",
        body: "Understand the business model, users, workflows, and what the software is supposed to improve.",
      },
      {
        title: "Requirements clarity",
        body: "Define the important workflows, constraints, and core capabilities before building too much too early.",
      },
      {
        title: "Architecture and planning",
        body: "Shape a credible build path with the right technical structure for the scope and stage of the product.",
      },
      {
        title: "Design and build",
        body: "Implement the system with a bias toward usability, maintainability, and operational fit.",
      },
      {
        title: "Launch and improvement",
        body: "Support rollout, gather learning, and improve the system after real use begins.",
      },
    ],
  },
  conversion: {
    eyebrow: "Next Step",
    title: "Need software that fits your business more closely?",
    description:
      "Future Logix can help you scope the right system, define the build path, and move from fragmented workarounds to a more usable platform.",
    actions: [
      { label: "Discuss Your Project", href: "/contact" },
      { label: "Talk to Future Logix", href: "/contact" },
      { label: "Back to Services", href: "/services" },
    ],
  },
};

export const industriesHub = {
  hero: {
    eyebrow: "Industries",
    title: "Technology that makes more sense when it is grounded in how the organization actually operates.",
    description:
      "Future Logix builds products and delivers services for specific operational environments, not abstract market categories. The industries layer shows where the company is most commercially relevant and how its work fits real business contexts.",
    primaryCta: { label: "Explore Education", href: "/industries/education" },
    secondaryCta: { label: "Explore SMEs", href: "/industries/smes" },
    tertiaryCta: { label: "Talk to Us", href: "/contact" },
  },
  coverage: {
    eyebrow: "Industry Coverage",
    title: "Focused on environments where operational clarity, better systems, and practical modernization matter.",
    description:
      "Future Logix is not trying to claim every market. The focus is on sectors where better products, cleaner workflows, and implementation-minded technology support can make a visible difference.",
  },
  fit: {
    eyebrow: "How Future Logix Helps",
    title: "Products, services, and implementation support combined around real operating needs.",
    description:
      "Across industries, Future Logix brings together software products, delivery services, and practical modernization support. That combination helps clients choose whether they need a product, a tailored system, an automation path, or broader technical guidance.",
    points: [
      {
        title: "Products where recurring problems justify a repeatable solution",
        body: "ClassPoint is the current example: a focused product response to school operations pressure.",
      },
      {
        title: "Services where the need is operational improvement or a tailored build",
        body: "Workflow automation, custom software, infrastructure, and advisory support help organizations modernize more intentionally.",
      },
      {
        title: "Implementation that respects local realities and adoption limits",
        body: "The work is framed to be practical, operationally credible, and easier to adopt in real-world business environments.",
      },
    ],
  },
  featured: {
    eyebrow: "Featured Industry Paths",
    title: "Education and SMEs are the strongest industry stories in this phase.",
    description:
      "These two industry paths create the clearest connection between Future Logix offerings and real operational challenges. They show where the company’s product and service mix is easiest to understand commercially.",
  },
  paths: {
    eyebrow: "Next Step",
    title: "Choose the industry path that fits your context.",
    description:
      "Start with education if you are evaluating school operations systems and modernization. Start with SMEs if you are trying to reduce process drag and improve business operations. Use contact if your need cuts across multiple contexts.",
    actions: [
      {
        title: "Education organizations",
        body: "See how Future Logix supports schools and education operators with ClassPoint, custom systems, and practical modernization support.",
        label: "Explore Education",
        href: "/industries/education",
      },
      {
        title: "SMEs and growing businesses",
        body: "See how Future Logix helps businesses reduce manual work, improve systems, and create a better foundation for growth.",
        label: "Explore SMEs",
        href: "/industries/smes",
      },
      {
        title: "Broader industry conversation",
        body: "Talk to Future Logix if your organization needs a more tailored discussion across products, services, or modernization priorities.",
        label: "Talk to Us",
        href: "/contact",
      },
    ],
  },
};

export const educationIndustryDetail = {
  slug: "education",
  hero: {
    eyebrow: "Education",
    title: "Technology support for schools and education organizations that need better operational structure.",
    description:
      "Future Logix helps education organizations modernize day-to-day administration, records, communication, and internal workflows through a mix of product, service, and implementation support.",
    primaryCta: { label: "Explore ClassPoint", href: "/products/classpoint" },
    secondaryCta: { label: "Talk to Future Logix", href: "/contact" },
  },
  challenge: {
    eyebrow: "Education Challenges",
    title: "Schools often need better systems long before they have the capacity to manage a complex digital transformation.",
    description:
      "Education organizations regularly carry operational stress across administration, records, communication, fee tracking, attendance, academic workflows, and everyday coordination. The challenge is not just digitization. It is finding systems that are practical enough to adopt and useful enough to improve how the school runs.",
    items: [
      "Administrative overload across admissions, records, and everyday follow-up",
      "Disconnected school data and inconsistent visibility across operations",
      "Communication gaps between school leadership, staff, parents, and guardians",
      "Pressure around attendance, results, and fee-related workflows",
      "Limited capacity to modernize without creating more complexity for the team",
    ],
  },
  fit: {
    eyebrow: "Where Future Logix Fits",
    title: "Future Logix can support schools through products, tailored systems, workflow improvement, and broader modernization guidance.",
    cards: [
      {
        title: "ClassPoint for school operations",
        body: "Use ClassPoint as the flagship product path when the need is a more structured platform for school administration and operational visibility.",
        label: "Explore ClassPoint",
        href: "/products/classpoint",
      },
      {
        title: "Custom software for tailored institutional needs",
        body: "Build a more specific system when the education organization has workflows or structures that need a tailored platform.",
        label: "Explore Custom Software",
        href: "/services/custom-software-development",
      },
      {
        title: "Workflow automation for repeated admin processes",
        body: "Reduce internal process drag where repetitive approvals, notifications, or coordination tasks slow the institution down.",
        label: "Explore Automation",
        href: "/services/workflow-automation",
      },
      {
        title: "Consultation for broader modernization planning",
        body: "Start with a Future Logix conversation if the school needs a clearer technology roadmap before choosing a product or service path.",
        label: "Talk to Us",
        href: "/contact",
      },
    ],
  },
  solutionMap: {
    eyebrow: "Solution Mapping",
    title: "The focus is on solving education operations problems with the right level of structure.",
    items: [
      {
        title: "School operations platform",
        body: "Support day-to-day administration, records, and visibility through a product path like ClassPoint.",
      },
      {
        title: "Automation for operational handoffs",
        body: "Improve internal communication, notifications, and repeated administrative flows where manual coordination creates delays.",
      },
      {
        title: "Custom systems for tailored education workflows",
        body: "Build systems for institutions that need a more specific operational model than a standard product can provide.",
      },
    ],
  },
  audience: {
    eyebrow: "Who This Is For",
    title: "Relevant to education operators responsible for making the institution run more clearly.",
    description:
      "The education path is designed for schools and institutions carrying operational complexity and looking for a more practical route into better systems.",
    segments: [
      "Private schools",
      "School owners and proprietors",
      "School leaders and management teams",
      "School administrators and operations teams",
      "Growing education institutions modernizing delivery",
    ],
  },
  relevance: {
    eyebrow: "Why Future Logix Is Relevant Here",
    title: "The advantage is not abstract education-tech language. It is practical operational fit.",
    points: [
      {
        title: "Local operational awareness",
        body: "The work is framed around how schools in this market actually operate and where friction usually builds up.",
      },
      {
        title: "Adoption-friendly modernization",
        body: "The goal is not to overwhelm schools with bloated software, but to create a more realistic path into better systems.",
      },
      {
        title: "Product and services in one company",
        body: "Future Logix can support the school through both ClassPoint and service-led modernization when the need extends beyond a single product.",
      },
      {
        title: "Long-term support mindset",
        body: "The relationship is positioned around continued improvement, not a one-off implementation with no continuity.",
      },
    ],
  },
  conversion: {
    eyebrow: "Next Step",
    title: "Looking at systems for your school or education organization?",
    description:
      "Start with ClassPoint if you want to evaluate the flagship product path, or talk to Future Logix if the need is broader and requires a more tailored discussion.",
    actions: [
      { label: "Explore ClassPoint", href: "/products/classpoint" },
      { label: "Talk to Future Logix", href: "/contact" },
      { label: "Discuss Education Operations Needs", href: "/contact" },
    ],
  },
};

export const smesIndustryDetail = {
  slug: "smes",
  hero: {
    eyebrow: "SMEs and Growing Businesses",
    title: "Support for businesses that need better systems as growth makes operations more complex.",
    description:
      "Future Logix helps growing businesses modernize operations through workflow automation, custom software, stronger digital foundations, and clearer technology direction.",
    primaryCta: { label: "Explore Services", href: "/services" },
    secondaryCta: { label: "Talk to Future Logix", href: "/contact" },
  },
  challenge: {
    eyebrow: "SME Challenges",
    title: "Growth usually exposes process problems before it feels like a technology project.",
    description:
      "Many SMEs grow into a stage where manual workflows, fragmented tools, weak visibility, and repeated process bottlenecks start slowing the business down. The issue is not that the business needs more software everywhere. It is that the current setup no longer fits the way the business now operates.",
    items: [
      "Too many manual workflows across internal operations",
      "Disconnected tools and inconsistent handoffs between teams",
      "Weak visibility into execution, status, and business performance",
      "Growth creating internal complexity faster than systems are improving",
      "Off-the-shelf tools no longer fitting the real operating model clearly",
    ],
  },
  fit: {
    eyebrow: "Where Future Logix Fits",
    title: "Future Logix helps SMEs improve how the business runs, not just add more tools.",
    cards: [
      {
        title: "Workflow automation for operational efficiency",
        body: "Reduce repeated admin work, approvals, notifications, and coordination drag through better workflow design and automation.",
        label: "Explore Workflow Automation",
        href: "/services/workflow-automation",
      },
      {
        title: "Custom software for better operational fit",
        body: "Build systems, dashboards, portals, or internal tools when the business has outgrown generic software and spreadsheets.",
        label: "Explore Custom Software",
        href: "/services/custom-software-development",
      },
      {
        title: "Cloud, security, and advisory support",
        body: "Strengthen infrastructure, security posture, and broader technology decision-making where the business needs more disciplined foundations.",
        label: "Explore Services",
        href: "/services",
      },
      {
        title: "Consultation for roadmap clarity",
        body: "Start with a Future Logix conversation when the business knows there is operational drag but needs help defining the right next move.",
        label: "Talk to Us",
        href: "/contact",
      },
    ],
  },
  solutionMap: {
    eyebrow: "Solution Mapping",
    title: "The SME path focuses on systems that improve execution, visibility, and scalability.",
    items: [
      {
        title: "Automation for repeated business processes",
        body: "Reduce recurring manual tasks, approvals, notifications, and fragmented follow-up.",
      },
      {
        title: "Internal systems and operational software",
        body: "Build internal platforms, portals, dashboards, or business applications around the way the company actually works.",
      },
      {
        title: "Modernization support for better business foundations",
        body: "Strengthen the business with more structured infrastructure, cleaner workflows, and better technical direction over time.",
      },
    ],
  },
  audience: {
    eyebrow: "Who This Is For",
    title: "Relevant to operators and business leaders trying to scale without operational chaos.",
    description:
      "The SME industry path is built for organizations that are moving beyond scattered manual systems and need a more credible operating setup.",
    segments: [
      "Founders",
      "Operators and operations leads",
      "SMEs and growing businesses",
      "Service-led businesses",
      "Businesses outgrowing spreadsheets and disconnected tools",
    ],
  },
  relevance: {
    eyebrow: "Why Future Logix Is Relevant Here",
    title: "The value is in practical implementation and better operational fit, not over-engineered transformation language.",
    points: [
      {
        title: "Business-aware delivery",
        body: "The work is framed around business bottlenecks, workflow quality, and operating reality rather than generic technology enthusiasm.",
      },
      {
        title: "Practical implementation",
        body: "Future Logix is positioned to define and implement systems that teams can actually use and sustain.",
      },
      {
        title: "Scalable thinking",
        body: "The focus is on improving today’s operations without creating systems the business will outgrow too quickly.",
      },
      {
        title: "Product-minded approach",
        body: "The combination of product thinking and service delivery helps Future Logix build cleaner, more usable systems for growing organizations.",
      },
      {
        title: "No over-engineering of simple problems",
        body: "The goal is to solve the real operational issue at the right level, not to turn every bottleneck into an oversized technology program.",
      },
    ],
  },
  conversion: {
    eyebrow: "Next Step",
    title: "Need better systems for a growing business?",
    description:
      "Explore the relevant service paths if you already know the kind of support you need, or talk to Future Logix if the business needs a broader operational or software discussion first.",
    actions: [
      { label: "Explore Services", href: "/services" },
      { label: "Talk to Future Logix", href: "/contact" },
      { label: "Discuss Operations or Software Needs", href: "/contact" },
    ],
  },
};
