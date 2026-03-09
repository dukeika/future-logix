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
  href: "/products#classpoint",
  category: "Flagship Product",
  summary:
    "A classroom engagement and digital learning product for schools, training teams, and institutions that need better participation, structure, and visibility.",
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
      "A digital learning and classroom engagement product for schools, training providers, and institutions that want more structured, interactive teaching experiences.",
    detail:
      "ClassPoint helps improve engagement, session flow, and learning visibility for organizations that need a more modern educational experience.",
    audience: "Built for schools, training organizations, and teams delivering structured learning programs.",
    problem: "It solves fragmented participation, low session visibility, and weak digital engagement in learning environments.",
    ctas: [
      { label: "Explore ClassPoint", href: "/products#classpoint" },
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
    { label: "ClassPoint", href: "/products#classpoint" },
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
