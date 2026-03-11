"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Cloud, Code, RefreshCw, Workflow } from "lucide-react";
import { useRef } from "react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/types";

const services: Service[] = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Implement intelligent automation workflows that reduce manual work, improve decision speed, and integrate AI capabilities into your existing operations.",
    capabilities: [
      "Process Automation",
      "AI Integration",
      "Workflow Optimization",
      "Intelligent Document Processing",
    ],
    startingPrice: "From ₦2,500,000",
    delivery: "2-6 weeks implementation",
    cta: "Discuss Your Workflow",
    href: "/contact",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Build custom web applications tailored to your business processes, from internal tools to customer-facing platforms.",
    capabilities: [
      "React/Next.js Development",
      "API Design",
      "Database Architecture",
      "Third-party Integrations",
    ],
    startingPrice: "From ₦4,000,000",
    delivery: "4-12 weeks typical project",
    cta: "Start Your Project",
    href: "/contact",
    icon: Code,
  },
  {
    number: "03",
    title: "AWS Architecture & Implementation",
    description:
      "Design and deploy secure, scalable cloud infrastructure on AWS with proper architecture, cost optimization, and operational readiness.",
    capabilities: [
      "Infrastructure Design",
      "Serverless Architecture",
      "Security Hardening",
      "Cost Optimization",
      "24/7 Monitoring Setup",
    ],
    startingPrice: "From ₦3,000,000",
    delivery: "2-8 weeks implementation",
    cta: "Plan Your Infrastructure",
    href: "/contact",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Business Modernization & Automation",
    description:
      "Transform legacy processes and manual operations into streamlined, automated systems that scale with your growth.",
    capabilities: [
      "Process Mapping",
      "Legacy System Integration",
      "Digital Transformation Roadmaps",
      "Change Management Support",
    ],
    startingPrice: "From ₦5,000,000",
    delivery: "4-16 weeks engagement",
    cta: "Modernize Your Operations",
    href: "/contact",
    icon: RefreshCw,
  },
];

export function ServicesSection() {
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
              number="02"
              title="Services"
              subtitle="Two clear paths, depending on what you need right now."
              description="Some visitors are looking for a product. Others need a technology partner who can help them design, build, secure, or improve core systems. The homepage should make both paths obvious."
              supportingCopy="Future Logix is intentionally presented as a parent technology brand with two clean entry points: a product path for solution buyers, and a service path for organizations that need design, implementation, or long-term support."
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 36 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                  transition={{ duration: 0.45, delay: 0.1 * index, ease: "easeOut" }}
                  className="group"
                >
                  <Card className="h-full border-border/80 bg-white/85 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                    <CardHeader className="space-y-5 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                          <span className="text-4xl font-semibold tracking-tight text-slate-200">
                            {service.number}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                          </div>
                        </div>
                      </div>
                      <p className="text-base leading-8 text-muted-foreground">
                        {service.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6 px-5 pb-6 pt-0 sm:px-6">
                      <div className="grid gap-3">
                        {service.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="rounded-2xl border border-border/80 bg-background/80 px-4 py-3 text-sm font-medium text-foreground"
                          >
                            {capability}
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.35rem] border border-primary/10 bg-primary/5 px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Starting at
                        </p>
                        <p className="mt-2 text-xl font-semibold text-foreground">
                          {service.startingPrice}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">{service.delivery}</p>
                      </div>
                    </CardContent>

                    <CardFooter className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-full bg-white/70 sm:w-auto sm:min-w-[220px]"
                      >
                        <Link href={service.href}>{service.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
