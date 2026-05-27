import Link from "next/link";
import { ArrowUpRight, Cloud, Code, RefreshCw, Workflow } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import type { Service } from "@/types";

const services: Service[] = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Implement intelligent automation workflows that reduce manual work, improve decision speed, and integrate AI into existing operations.",
    capabilities: ["Process Automation", "AI Integration", "Workflow Optimization", "Document Processing"],
    startingPrice: "From ₦2,500,000",
    delivery: "2-6 weeks",
    cta: "Discuss Your Workflow",
    href: "/contact",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Build custom web applications tailored to your business processes, from internal tools to customer-facing platforms.",
    capabilities: ["React / Next.js", "API Design", "Database Architecture", "Integrations"],
    startingPrice: "From ₦4,000,000",
    delivery: "4-12 weeks",
    cta: "Start Your Project",
    href: "/contact",
    icon: Code,
  },
  {
    number: "03",
    title: "AWS Architecture & Implementation",
    description:
      "Design and deploy secure, scalable cloud infrastructure on AWS with proper architecture, cost optimization, and operational readiness.",
    capabilities: ["Infrastructure Design", "Serverless", "Security Hardening", "Cost Optimization"],
    startingPrice: "From ₦3,000,000",
    delivery: "2-8 weeks",
    cta: "Plan Your Infrastructure",
    href: "/contact",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Business Modernization",
    description:
      "Transform legacy processes and manual operations into streamlined, automated systems that scale with growth.",
    capabilities: ["Process Mapping", "Legacy Integration", "Transformation Roadmaps", "Change Management"],
    startingPrice: "From ₦5,000,000",
    delivery: "4-16 weeks",
    cta: "Modernize Operations",
    href: "/contact",
    icon: RefreshCw,
  },
];

export function ServicesSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-5xl">
            <SectionHeader
              number="02"
              title="Services"
              subtitle="Two clear paths, depending on what you need right now."
              description="Choose services when you need a partner to design, build, modernize, or support core systems."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="bento-card flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-display text-3xl font-semibold tracking-tight text-slate-200">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3.5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Starting at
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">
                        {service.startingPrice}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.delivery}</p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 h-11 w-full justify-between rounded-full bg-white/80 px-5"
                  >
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
