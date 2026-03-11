import type { InsightArticle } from "@/types";

export const insightArticles: InsightArticle[] = [
  {
    slug: "modern-african-technology-company-positioning",
    category: "Positioning",
    title: "What a modern African technology company should actually sound like",
    excerpt:
      "Why product companies and technology service firms lose trust when they rely on vague consulting language.",
    content: [
      "The technology services industry has a language problem. Browse the websites of technology consultancies across Africa and you'll find the same vague promises: \"digital transformation,\" \"innovation enablement,\" \"strategic partnerships.\" The words sound impressive but communicate nothing specific. They create distance rather than connection.",
      "This linguistic fog serves a purpose. It allows companies to claim expertise without defining deliverables. It lets them promise outcomes without accepting accountability. And it protects them from the hard work of explaining complex technical work in terms business leaders actually understand.",
      "But the cost is trust. Every generic claim makes potential clients more skeptical. Every buzzword-heavy paragraph confirms the suspicion that technology vendors are more interested in sounding sophisticated than solving problems.",
      "The alternative is radical specificity.",
      "Instead of \"we deliver digital transformation,\" say \"we move schools from paper-based records to cloud systems in six weeks, with zero data loss and staff trained to operate without our help.\"",
      "Instead of \"AI-powered solutions,\" say \"we automate invoice processing so your finance team stops typing numbers into spreadsheets and starts analyzing why costs are rising.\"",
      "Instead of \"strategic technology partnerships,\" say \"we answer the phone when your system breaks at 9pm on a Friday, and we don't charge extra for it.\"",
      "Why this matters for African markets",
      "The specificity problem is particularly acute in African business contexts for three reasons:",
      "First, technology purchasing decisions carry higher risk. Budgets are tighter, margins are thinner, and a failed technology investment can destabilize an entire organization. Buyers need concrete evidence that vendors understand their constraints and have solved similar problems before.",
      "Second, the gap between promise and delivery is wider. Many organizations have been burned by technology projects that arrived late, cost double, and failed to deliver the advertised benefits. Generic language triggers these memories immediately.",
      "Third, relationship dynamics are different. Business in most African markets runs on trust built through demonstrated reliability, not contractual terms. You cannot contract your way out of a relationship with someone who speaks in abstractions. You need to know who they are, how they think, and what they actually do.",
      "What specific sounds like",
      "Specificity operates at multiple levels:",
      "Capability specificity: Not \"we do cloud\" but \"we migrate Windows-based applications to AWS, optimize costs for unpredictable traffic patterns, and train your team to manage infrastructure without daily external support.\"",
      "Process specificity: Not \"agile development\" but \"you'll see working software every two weeks, can change requirements without penalty until week six, and receive complete documentation and source code at handover.\"",
      "Outcome specificity: Not \"improved efficiency\" but \"administrative staff will spend 40% less time on fee tracking, which we measure by comparing time logs before and after implementation.\"",
      "Constraint specificity: Not \"enterprise-grade security\" but \"your data stays in African data centers, backups are encrypted and tested weekly, and you can export everything in standard formats if you ever want to switch providers.\"",
      "The implementation challenge",
      "Writing specifically is harder than writing generally. It requires knowing exactly what you do, who you do it for, and what results you reliably produce. It forces clarity about where you have genuine expertise and where you don't. And it commits you to deliverables that can be evaluated.",
      "This is precisely why most companies avoid it. Specificity creates accountability. But accountability is exactly what builds trust with sophisticated buyers.",
      "For Future Logix, this means every page on this site, every proposal we send, and every conversation we have starts with the concrete: the problem we observed, the approach we took, the outcome we achieved. The abstract comes only after the specific has established credibility.",
      "The technology companies that win in African markets over the next decade will not be those with the most sophisticated language. They will be those with the clearest communication and the most reliable delivery. We intend to be among them.",
    ],
  },
  {
    slug: "product-vs-custom-build-decision-guide",
    category: "Decision Guide",
    title: "How to choose between buying a product and commissioning a custom build",
    excerpt:
      "A practical framework for leaders deciding whether they need an existing product, a custom system, or a hybrid path.",
    content: [
      "Every growing organization eventually faces the same decision: buy existing software or build something tailored. The choice seems binary but is actually a spectrum, and making the wrong call wastes money, time, and organizational energy.",
      "This framework helps you think through the decision based on your situation, not vendor preferences.",
      "Start with the problem, not the solution",
      "Before evaluating options, define the problem with uncomfortable precision. What specific task takes too long? What error keeps recurring? What information do you lack? What opportunity are you missing?",
      "Vague problem definitions lead to vague solutions. \"We need better systems\" could mean anything from a new spreadsheet template to a million-dollar software project. Specific problems have specific signatures: \"Enrollment takes three weeks because parents must visit in person, forms get lost between departments, and fee verification requires manual bank reconciliation.\"",
      "The product path: When buying makes sense",
      "Buy existing software when:",
      "The problem is common: Thousands of organizations like yours have this problem. Software exists because markets support multiple vendors solving it. School administration, accounting, customer relationship management, these are solved problems with mature products.",
      "Your process can adapt: You're willing to adjust workflows to match software assumptions. Every product embeds opinions about how work should flow. The question is whether your team can work within those constraints without operational damage.",
      "Speed matters more than precision: You need working systems in weeks, not months. Products deploy faster because configuration is faster than construction.",
      "Budget is constrained: Product economics spread development costs across many customers. You pay a fraction of what custom development would cost.",
      "Ongoing maintenance is a concern: Products come with vendor support, updates, and security patches. Custom builds require you to fund these ongoing costs.",
      "The custom path: When building makes sense",
      "Build custom software when:",
      "The problem is unique: Your competitive advantage depends on doing something differently than competitors. A product forces standardization; custom development preserves differentiation.",
      "Integration complexity is high: You need deep connections between multiple existing systems, and products don't offer the required APIs or flexibility.",
      "User experience is critical: The software is customer-facing, and standard product interfaces would damage your brand or conversion rates.",
      "The process is core to operations: Changing workflows to match software would fundamentally alter how you deliver value. The risk of operational disruption exceeds the cost of custom development.",
    ],
  },
  {
    slug: "workflow-automation-before-ready",
    category: "Operations",
    title: "Why workflow automation matters before a business feels 'ready'",
    excerpt:
      "A plain-language look at how growing organizations can remove process drag earlier and scale with less operational strain.",
  },
];

export function getInsightBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
