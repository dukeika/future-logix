import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";
import type { Service } from "@/types";
import { Cloud, Code, RefreshCw, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - AI Automation, Web Development, AWS Architecture",
  description:
    "Implementation-focused technology services: AI automation, web application development, AWS architecture, and business modernization for African organizations.",
};

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

export default function ServicesPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-5xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Services
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Services
            </h1>
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              Future Logix offers implementation-focused technology services for organizations that
              need design, build, security, modernization, and long-term operational support.
            </p>
          </div>

          <div className="grid gap-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.5rem] border border-border/80 bg-background/80 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {service.number}
                    </p>
                    <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                    <p className="text-base leading-8 text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="rounded-[1.2rem] border border-primary/10 bg-primary/5 px-4 py-3 text-sm">
                    <p className="font-semibold text-foreground">{service.startingPrice}</p>
                    <p className="mt-1 text-muted-foreground">{service.delivery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-border/80 bg-white/70 p-6">
            <p className="text-base leading-8 text-muted-foreground">
              Prices are starting estimates. Final quotes depend on scope, complexity, and timeline.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/contact">Contact us for detailed proposals</Link>
            </Button>
          </div>

          <div className="rounded-[1.5rem] border border-border/80 bg-white/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Impact in Progress
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              We measure success by operational outcomes, not project deliverables. Here are
              representative engagements illustrating our approach:
            </p>

            <div className="mt-6 grid gap-5">
              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">
                  Education Sector: Administrative Transformation
                </h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A group of four private schools in Lagos faced a common challenge: administrative
                  staff spending 60% of time on fee tracking, receipt generation, and parent
                  communication. We implemented ClassPoint across the group, standardized their
                  administrative workflows, and trained a shared operations team. Result:
                  administrative time reduced by 40%, parent payment compliance improved by 25%,
                  and staff redeployed to student-facing activities.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Service: Product Implementation + Workflow Design
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">
                  Professional Services: From Chaos to Clarity
                </h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A 25-person law firm had outgrown their informal systems. Matters were tracked in
                  spreadsheets, billing was inconsistent, and partners lacked visibility into
                  associate workload. We designed and built a custom practice management platform,
                  migrated three years of historical data, and established weekly operational review
                  rhythms. Result: billing realization improved by 18%, associate utilization became
                  visible and balanced, and the managing partner gained confidence to pursue larger
                  matters.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Service: Custom Software Development + Business Modernization
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">
                  Growth Company: Infrastructure for Scale
                </h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A fintech startup preparing for regulatory review needed secure, auditable
                  infrastructure. We architected their AWS environment with security controls, cost
                  guardrails, and compliance documentation. Built deployment pipelines, monitoring
                  systems, and incident response procedures. Result: passed security audit on first
                  attempt, infrastructure costs 30% below budget, engineering team focused on
                  product rather than firefighting.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Service: AWS Architecture + Implementation
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">
                  Manufacturing: Intelligent Automation
                </h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A mid-sized manufacturer processed 200+ supplier invoices monthly through manual
                  data entry. We implemented intelligent document processing: invoices received via
                  email are automatically categorized, data extracted, matched to purchase orders,
                  and entered into their ERP. Exception handling only. Result: processing time per
                  invoice reduced from 15 minutes to 2 minutes, data entry errors eliminated,
                  finance team focused on analysis rather than transcription.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Service: AI Automation + Workflow Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
