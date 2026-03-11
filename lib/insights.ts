import type { InsightArticle } from "@/types";

export const insightArticles: InsightArticle[] = [
  {
    slug: "modern-african-technology-company-positioning",
    category: "Positioning",
    title: "What a modern African technology company should actually sound like",
    excerpt:
      "Why product companies and technology service firms lose trust when they rely on vague consulting language.",
  },
  {
    slug: "product-vs-custom-build-decision-guide",
    category: "Decision Guide",
    title: "How to choose between buying a product and commissioning a custom build",
    excerpt:
      "A practical framework for leaders deciding whether they need an existing product, a custom system, or a hybrid path.",
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
