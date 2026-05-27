import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { getInsight, listInsights } from "@/lib/insights-db";
import type { InsightContentBlock } from "@/types";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

type InsightDetailPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const article = await getInsight(params.slug);
  if (!article) {
    return { title: "Insight", description: "Future Logix insight article." };
  }
  return { title: article.title, description: article.excerpt };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const article = await getInsight(params.slug);

  if (!article || (article.status === "draft") || !article.content?.length) {
    notFound();
  }

  const published = await listInsights({ publishedOnly: true });
  const related = published.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="relative overflow-hidden pb-20 pt-12 sm:pt-16">
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
              {article.content.map((block, index) => (
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
        <p className="text-base leading-[1.85] text-foreground/85 sm:text-[1.0625rem]">{block.text}</p>
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
