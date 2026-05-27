import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getInsightBySlug, insightArticles } from "@/lib/insights";
import type { InsightContentBlock } from "@/types";
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
        <article className="surface-panel mx-auto max-w-3xl px-5 py-10 sm:px-10 sm:py-14">
          <header className="border-b border-border/60 pb-8">
            <Link
              href="/insights"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              ← All insights
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {article.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              {article.author ?? "Future Logix Team"} · {article.publishedAt}
            </p>
          </header>

          <div className="mt-10 space-y-7">
            {article.content.map((block, index) => (
              <ArticleBlock key={index} block={block} />
            ))}
          </div>

          <footer className="mt-12 border-t border-border/60 pt-8">
            <Link
              href="/insights"
              className="inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              ← Back to all insights
            </Link>
          </footer>
        </article>
      </SiteContainer>
    </section>
  );
}

function ArticleBlock({ block }: { block: InsightContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-base leading-[1.85] text-foreground/85 sm:text-[1.0625rem]">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-4 border-l-2 border-primary/30 pl-5">
          {block.items.map((item, index) => (
            <li key={index} className="text-base leading-[1.8] text-foreground/85 sm:text-[1.0625rem]">
              {item.term ? (
                <>
                  <span className="font-semibold text-foreground">{item.term}:</span>{" "}
                  <span>{item.description}</span>
                </>
              ) : (
                <span>{item.description}</span>
              )}
            </li>
          ))}
        </ul>
      );
    case "orderedList":
      return (
        <ol className="space-y-3">
          {block.items.map((item, index) => (
            <li
              key={index}
              className="flex gap-4 text-base leading-[1.8] text-foreground/85 sm:text-[1.0625rem]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}
