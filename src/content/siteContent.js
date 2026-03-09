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
    summary:
      "Set up the hosting, deployment, and operational foundation needed to run modern software reliably and with less friction.",
    value: "Helps teams move away from fragile setups and into infrastructure they can operate with more confidence.",
    bullets: ["Cloud setup", "Deployment pipelines", "Operational readiness"],
  },
  {
    name: "Cybersecurity",
    summary:
      "Strengthen security posture with practical controls, reviews, and implementation support suited to growing organizations.",
    value: "Helps reduce preventable risk and gives teams a more disciplined security baseline as systems and exposure grow.",
    bullets: ["Security reviews", "Access and control hygiene", "Implementation support"],
  },
  {
    name: "Workflow Automation",
    summary:
      "Replace repetitive manual work with workflows, integrations, and system logic that improve speed and consistency.",
    value: "Helps teams spend less time on repetitive coordination and more time on real business execution.",
    bullets: ["Process mapping", "Automation design", "Connected workflows"],
  },
  {
    name: "Custom Software Development",
    summary:
      "Build internal tools, customer-facing platforms, and tailored software products around clear business needs.",
    value: "Helps organizations create systems that fit how they actually operate instead of forcing work into generic tools.",
    bullets: ["Internal platforms", "Customer portals", "Tailored software delivery"],
  },
  {
    name: "Product Engineering and Advisory",
    summary:
      "Shape better digital products and make stronger technology decisions with a team that understands both delivery and business positioning.",
    value: "Helps leaders avoid expensive misdirection and move toward products and systems with stronger market fit.",
    bullets: ["Product direction", "Technical planning", "Execution guidance"],
  },
];

export const industries = [
  {
    name: "Education",
    organization: "Schools, training providers, and learning-focused institutions",
    need: "Need better structure, engagement, and visibility across teaching and training delivery.",
    help: "Future Logix helps with products like ClassPoint and the digital systems that support modern learning experiences.",
  },
  {
    name: "SMEs and Growing Businesses",
    organization: "Businesses moving from manual operations to more scalable systems",
    need: "Need simpler workflows, better visibility, and tools that reduce operational drag.",
    help: "Future Logix helps design practical systems, automation, and digital foundations that support growth without overengineering.",
  },
  {
    name: "Professional Services",
    organization: "Firms that sell expertise and depend on coordinated internal delivery",
    need: "Need clearer internal processes, client-facing systems, and better control over delivery operations.",
    help: "Future Logix helps improve workflow, reporting, and digital infrastructure so teams can deliver more consistently.",
  },
  {
    name: "Service-Led Organizations",
    organization: "Organizations whose performance depends on process, responsiveness, and operational coordination",
    need: "Need systems that reduce friction, improve accountability, and make service delivery easier to manage.",
    help: "Future Logix helps implement platforms, automations, and supporting technology that make service operations more resilient.",
  },
  {
    name: "Startups and Product Ventures",
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
    { label: "Cloud and Infrastructure", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
    { label: "Workflow Automation", href: "/services" },
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
