"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  CalendarCheck2,
  CheckCircle2,
  CreditCard,
  FolderKanban,
  GraduationCap,
  Layers3,
  LineChart,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";
import type { ProductDirectionItem, ProductFeature } from "@/types";

const features: ProductFeature[] = [
  { label: "Administration & Records Management", icon: FolderKanban },
  { label: "Communication & Parent Engagement", icon: BellRing },
  { label: "Academic Workflows & Scheduling", icon: CalendarCheck2 },
  { label: "Fee Management & Payment Tracking", icon: CreditCard },
  { label: "Attendance & Result Processing", icon: LineChart },
];

const directionItems: ProductDirectionItem[] = [
  { label: "Built for African businesses" },
  { label: "Cloud-native architecture" },
  { label: "Integration-ready platforms" },
];

export function ProductsSection() {
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
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span>Products</span>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-[0.65rem]">01</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              ClassPoint Flagship Product
            </h2>
            <p className="text-lg font-medium text-foreground">
              Future Logix is building a product company, not just a services brand.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              ClassPoint leads the portfolio today, while the wider Future Logix platform is
              positioned to support more products, stronger service lines, and deeper long-term
              partnerships over time.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="group lg:col-span-2"
            >
              <div className="surface-panel h-full p-5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)] sm:p-7">
                <div className="space-y-7">
                  <div className="flex flex-col gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-foreground">ClassPoint</h3>
                        <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                          Flagship Product
                        </span>
                      </div>
                      <p className="max-w-3xl text-lg leading-8 text-foreground">
                        A school operations platform for Nigerian schools that need better
                        structure across administration, records, communication, and daily delivery.
                      </p>
                      <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                        It helps schools reduce admin overload, disconnected records, communication
                        friction, and manual fee, attendance, and result workflows.
                      </p>
                    </div>
                    <Button asChild className="rounded-full">
                      <Link href="https://classpoint.ng" target="_blank" rel="noreferrer noopener">
                        Visit ClassPoint
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Core capabilities
                      </p>
                      <div className="grid gap-3">
                        {features.map((feature) => {
                          const Icon = feature.icon;

                          return (
                            <div
                              key={feature.label}
                              className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-3"
                            >
                              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {feature.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-gradient-to-br from-primary/15 via-white to-secondary/15">
                        <div className="aspect-video p-5 sm:p-6">
                          <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-dashed border-primary/20 bg-slate-950/85 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                            ClassPoint Interface Preview
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-5 text-white shadow-soft">
                        <div className="flex items-start gap-3">
                          <div className="rounded-2xl bg-secondary/15 p-3 text-secondary">
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <div className="space-y-2">
                            <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
                              Learning Session
                            </div>
                            <h4 className="text-lg font-semibold">Interactive Classroom Workspace</h4>
                            <p className="text-sm leading-7 text-slate-300">
                              Track student responses, session flow, and engagement in one place.
                              Run more organized classes and training sessions with real-time
                              visibility.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="group"
            >
              <div className="surface-panel flex h-full flex-col p-5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)] sm:p-7">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      Coming 2025-2026
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      More Products in Development
                    </h3>
                    <p className="text-base leading-8 text-muted-foreground">
                      Future Logix is building toward a broader product portfolio for African
                      businesses and institutions, starting with one strong flagship and a scalable
                      parent brand.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {directionItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <BadgeCheck className="h-5 w-5 text-secondary" />
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-primary/10 p-2 text-primary">
                        <UsersRound className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Portfolio direction</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          Product strategy is being built to expand beyond one launch-ready platform.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full rounded-full bg-white/70">
                    <Link href="/products">
                      View Product Direction
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
