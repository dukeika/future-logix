import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { getInsight, listInsights } from "@/lib/insights-db";
import { insightArticles as seedArticles } from "@/lib/insights";
import type { InsightArticle, InsightContentBlock } from "@/types";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

/**
 * Live DynamoDB entries pre-date the seoTitle / publishedAtISO fields. Hydrate
 * missing values from the seed so SEO metadata is correct without a DB migration.
 * Also prefer the seed excerpt when the DB excerpt is too long for a meta
 * description (>160 chars) and the seed has a shorter SEO-tuned version.
 */
function withSeedFallback(article: InsightArticle): InsightArticle {
  const seed = seedArticles.find((a) => a.slug === article.slug);
  if (!seed) return article;
  const excerpt =
    article.excerpt && article.excerpt.length > 160 && seed.excerpt && seed.excerpt.length <= 160
      ? seed.excerpt
      : article.excerpt;
  return {
    ...article,
    excerpt,
    seoTitle: article.seoTitle ?? seed.seoTitle,
    publishedAtISO: article.publishedAtISO ?? seed.publishedAtISO,
    modifiedAtISO: article.modifiedAtISO ?? seed.modifiedAtISO,
  };
}

const SITE_URL = "https://futurelogix.ng";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04",
  may: "05", june: "06", july: "07", august: "08",
  september: "09", october: "10", november: "11", december: "12",
};

function toISODate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  const match = value.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (match) {
    const mm = MONTHS[match[1]];
    if (mm) return `${match[2]}-${mm}-01`;
  }
  return undefined;
}

function articleDates(article: InsightArticle) {
  const published =
    toISODate(article.publishedAtISO) ??
    toISODate(article.publishedAt) ??
    toISODate(article.createdAt);
  const modified =
    toISODate(article.modifiedAtISO) ??
    toISODate(article.updatedAt) ??
    published;
  return { published, modified };
}

type InsightDetailPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const raw = await getInsight(params.slug);
  if (!raw) {
    return { title: "Insight", description: "Future Logix insight article." };
  }
  const article = withSeedFallback(raw);
  const seoTitle = article.seoTitle ?? article.title;
  const canonical = `/insights/${article.slug}`;
  const { published, modified } = articleDates(article);
  const authorName = article.author ?? "Future Logix Team";
  return {
    title: seoTitle,
    description: article.excerpt,
    alternates: { canonical },
    authors: [{ name: authorName }],
    openGraph: {
      type: "article",
      url: canonical,
      title: seoTitle,
      description: article.excerpt,
      images: article.coverImageUrl ? [article.coverImageUrl] : undefined,
      publishedTime: published,
      modifiedTime: modified,
      authors: [authorName],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: article.excerpt,
      images: article.coverImageUrl ? [article.coverImageUrl] : undefined,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const raw = await getInsight(params.slug);

  if (!raw || (raw.status === "draft") || !raw.content?.length) {
    notFound();
  }
  const article = withSeedFallback(raw);
  const content = article.content ?? raw.content ?? [];

  const published = await listInsights({ publishedOnly: true });
  const related = published.filter((a) => a.slug !== article.slug).slice(0, 3);

  const { published: publishedISO, modified: modifiedISO } = articleDates(article);
  const authorName = article.author ?? "Future Logix Team";
  const articleUrl = `${SITE_URL}/insights/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    headline: article.title,
    description: article.excerpt,
    url: articleUrl,
    inLanguage: "en-NG",
    image: article.coverImageUrl ?? DEFAULT_OG_IMAGE,
    articleSection: article.category,
    datePublished: publishedISO,
    dateModified: modifiedISO,
    author: { "@type": "Person", name: authorName },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  return (
    <article className="relative overflow-hidden pb-20 pt-12 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        aria-hidden="true"
        className="grid-bg grid-bg-mask pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-radial-fade"
      />

      <SiteContainer>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All insights
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {article.category}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <span className="gradient-text">{article.title}</span>
            </h1>
            <p className="mt-6 text-balance text-lg leading-8 text-muted-foreground">
              {article.excerpt}
            </p>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              {article.author ?? "Future Logix Team"} · {article.publishedAt}
            </p>
          </div>

          {article.coverImageUrl ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-muted shadow-bento">
              <Image
                src={article.coverImageUrl}
                alt={article.title}
                fill
                sizes="(min-width:768px) 768px, 100vw"
                priority
                className="object-cover"
                unoptimized
              />
            </div>
          ) : null}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="bento-card p-6 sm:p-10">
            <div className="prose-spaced space-y-7">
              {content.map((block, index) => (
                <ArticleBlock key={index} block={block} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="bento-card-accent p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Next step
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Want to talk about your specific situation?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Tell us about the problem you&apos;re trying to solve and we&apos;ll respond with concrete next steps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link href="/contact">
                  Talk to us
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-white/80">
                <Link href="/insights">More insights</Link>
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/insights/${rel.slug}`} className="group">
                  <article className="bento-card flex h-full flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {rel.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {rel.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {rel.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </SiteContainer>
    </article>
  );
}

function ArticleBlock({ block }: { block: InsightContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-10 scroll-mt-24 font-display text-2xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="whitespace-pre-line text-base leading-[1.85] text-foreground/85 sm:text-[1.0625rem]">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-4 border-l-2 border-primary/30 pl-5">
          {block.items.map((item, index) => (
            <li
              key={index}
              className="text-base leading-[1.8] text-foreground/85 sm:text-[1.0625rem]"
            >
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
