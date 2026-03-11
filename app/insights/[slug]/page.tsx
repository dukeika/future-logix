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

  if (!article) {
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
          <div className="rounded-[1.5rem] border border-dashed border-border bg-white/60 p-6">
            <p className="text-base leading-8 text-muted-foreground">
              Full article content for this insight is coming soon.
            </p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
