import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getInsightBySlug, insightArticles } from "@/lib/insights";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

type InsightDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: InsightDetailPageProps): Metadata {
  const article = getInsightBySlug(params.slug);

  if (!article) {
    return {
      title: "Insight",
      description: "Future Logix insight article.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function InsightDetailPage({ params }: InsightDetailPageProps) {
  const article = getInsightBySlug(params.slug);

  if (!article || !article.content?.length) {
    notFound();
  }

  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-4xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="05"
            title={article.category}
            subtitle={article.title}
            supportingCopy={article.excerpt}
          />
          {/* TODO: Replace with real author name and accurate publish date */}
          <p className="-mt-4 text-sm font-medium text-muted-foreground">
            {article.author ?? "Future Logix Team"} • {article.publishedAt}
          </p>
          <div className="space-y-5 rounded-[1.5rem] border border-border/80 bg-white/70 p-6">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
