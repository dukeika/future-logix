"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";
import type { HeroCard, HeroStat } from "@/types/site";

const stats: HeroStat[] = [
  { label: "Market", value: "Africa-first" },
  { label: "Focus", value: "Products + services" },
  { label: "Base", value: "Lagos, Nigeria" },
];

const cards: HeroCard[] = [
  {
    title: "Modern website foundation",
    description: "Next.js 14, TypeScript, Tailwind, and shadcn/ui baseline are in place.",
    icon: Zap,
  },
  {
    title: "Built for low-bandwidth delivery",
    description: "Static export, lean assets, and mobile-first structure keep the footprint light.",
    icon: ShieldCheck,
  },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden py-10 sm:py-14 lg:py-20">
      <SiteContainer>
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground shadow-sm">
              Future Logix Limited
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Phase 1 foundation
              </p>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Practical digital products and technology services for growing African organizations
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                This is a clean production-ready scaffold for the next Future Logix website. Content,
                brand storytelling, and conversion sections can now be built on top of a stable base.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Start Phase 2
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                futurelogix.ng
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl" />
            <div className="rounded-[2rem] border border-border bg-white/85 p-5 shadow-soft backdrop-blur">
              <div className="rounded-[1.5rem] border border-dashed border-border bg-muted/70 p-5 sm:p-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Launch placeholder</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Add final hero media, service proof points, and brand visuals in the next phase.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {cards.map((card) => {
                      const Icon = card.icon;

                      return (
                        <div key={card.title} className="rounded-2xl border border-border bg-background/80 p-4">
                          <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-primary/10 p-2 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <p className="font-semibold text-foreground">{card.title}</p>
                              <p className="text-sm leading-6 text-muted-foreground">{card.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
