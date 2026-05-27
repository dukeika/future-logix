import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        aria-hidden="true"
        className="grid-bg grid-bg-mask absolute inset-x-0 top-0 -z-10 h-[680px] opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-40 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />

      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/schoolsrep"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur transition-colors hover:border-primary/30 hover:text-primary motion-safe:animate-fade-in"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
            SchoolsRep is live for Nigerian schools
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl motion-safe:animate-fade-up">
            <span className="gradient-text">Practical technology</span>
            <br className="hidden sm:block" /> for African organizations that need to ship.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg motion-safe:animate-fade-up">
            Future Logix builds the systems schools, service teams, and growing businesses use to
            move from manual work to clear digital operations — without the consulting fog.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row motion-safe:animate-fade-up">
            <Button asChild size="lg" className="h-12 gap-2 rounded-full px-6 text-base">
              <Link href="/schoolsrep">
                Explore SchoolsRep
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-full bg-white/70 px-6 text-base"
            >
              <Link href="/contact">
                Talk to Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground motion-safe:animate-fade-in">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
              Built in Lagos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
              AWS-grade infrastructure
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
              Implementation-led
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:auto-rows-[180px]">
          <div className="bento-card-accent lg:col-span-2 lg:row-span-2 lg:p-8 p-6">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3 w-3" />
                  Flagship product
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  SchoolsRep — the operating system for Nigerian schools.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  Attendance, results, fees, parent communication, and admin workflows in one
                  place. Mobile-friendly. Built for real operating conditions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Attendance",
                  "Results",
                  "Fees",
                  "Parents",
                  "Records",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/schoolsrep"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 hover:text-primary/80"
              >
                View SchoolsRep
                <ArrowRight className="h-4 w-4 transition-all" />
              </Link>
            </div>
          </div>

          <div className="bento-card-dark p-6 lg:col-span-2 lg:row-span-1">
            <div className="flex h-full items-start gap-4">
              <div className="rounded-2xl bg-secondary/15 p-2.5 text-secondary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Trust
                </p>
                <p className="mt-2 text-base font-medium leading-7 text-slate-100">
                  Clear systems, mobile-first interfaces, and implementation choices fit for real
                  operating conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-card p-6 lg:col-span-1">
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-primary/10 p-2.5 text-primary w-fit">
                <Workflow className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">AI Automation</p>
              <p className="text-xs leading-6 text-muted-foreground">
                Reduce manual work with practical workflow automation.
              </p>
            </div>
          </div>

          <div className="bento-card p-6 lg:col-span-1">
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-secondary/15 p-2.5 text-secondary w-fit">
                <Cloud className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">AWS Architecture</p>
              <p className="text-xs leading-6 text-muted-foreground">
                Secure, scalable cloud foundations done right.
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
