"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { insightArticles } from "@/lib/insights";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoryStyles: Record<string, string> = {
  Positioning: "bg-primary/10 text-primary",
  "Decision Guide": "bg-secondary/10 text-secondary",
  Operations: "bg-slate-900/10 text-slate-700",
};

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section ref={sectionRef} className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <SectionHeader
              number="05"
              title="Insights"
              subtitle="Practical thinking on technology, operations, and African business."
              supportingCopy="The insights preview should feel like the thinking arm of the business: practical, informed, and useful to decision-makers."
            />
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {insightArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.42, delay: 0.08 * index, ease: "easeOut" }}
                className="group"
              >
                <Card className="h-full border-border/80 bg-white/85 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                  <CardHeader className="space-y-4 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                          categoryStyles[article.category] ?? "bg-primary/10 text-primary"
                        }`}
                      >
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-8 text-foreground">
                      <Link href={`/insights/${article.slug}`} className="transition-colors hover:text-primary">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 px-5 pb-5 pt-0">
                    <p className="text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <Button asChild variant="outline" className="rounded-full bg-white/70">
              <Link href="/insights">
                View all insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
