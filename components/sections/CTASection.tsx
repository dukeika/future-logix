import Link from "next/link";
import { ArrowRight, Grid2x2, MessageCircle } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-5xl">
            <SectionHeader
              number="07"
              title="Next Step"
              subtitle="Choose the next step that matches your need right now."
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="bento-card-accent flex h-full flex-col p-6 sm:p-8">
              <div className="rounded-2xl bg-white/70 p-3 text-primary w-fit shadow-bento">
                <Grid2x2 className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Start with SchoolsRep
              </h3>
              <p className="mt-3 flex-1 text-base leading-8 text-muted-foreground">
                Best for school leaders evaluating a ready product for operations, records,
                communication, and fee visibility.
              </p>
              <Button asChild size="lg" className="mt-6 h-12 w-full justify-between rounded-full px-6">
                <Link href="/schoolsrep">
                  Explore SchoolsRep
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>

            <article className="bento-card-dark flex h-full flex-col p-6 sm:p-8">
              <div className="rounded-2xl bg-secondary/20 p-3 text-secondary w-fit">
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Talk through your requirements
              </h3>
              <p className="mt-3 flex-1 text-base leading-8 text-slate-300">
                Best for teams that need automation, custom software, modernization support, or help
                choosing the right path.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 h-12 w-full justify-between rounded-full bg-white px-6 text-foreground hover:bg-white/90"
              >
                <Link href="/contact">
                  Talk to Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
