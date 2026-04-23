import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";

export function Hero() {
  return (
    <section className="section-shell overflow-hidden">
      <SiteContainer>
        <div className="surface-panel relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-br from-primary/15 via-white/40 to-secondary/15" />
          <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />

          <div className="hero-grid relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Built for African businesses
              </div>

              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                We build the systems that help African businesses run better and scale faster.
              </h1>

              <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Future Logix helps schools, service-led teams, and growing businesses move from
                manual work to practical digital systems. Our flagship product, SchoolsRep, and our
                implementation services are built for teams that need clearer operations and faster
                execution.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="gap-2 rounded-full">
                  <Link href="/schoolsrep">
                    Explore SchoolsRep
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-white/70">
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Product-led foundation
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Product thinking and delivery services aligned under one operating brand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/60 bg-slate-950 p-5 text-white shadow-soft">
                  <ShieldCheck className="h-5 w-5 text-secondary" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Trust
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Clear systems, mobile-friendly interfaces, and implementation choices suited to
                    real operating conditions.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-5 shadow-soft backdrop-blur">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Readiness
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    Start with SchoolsRep, a custom build, or a modernization plan based on what
                    your team actually needs now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
