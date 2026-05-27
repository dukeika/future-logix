import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import type { Differentiator } from "@/types";

const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Practical over bloated",
    description:
      "Positioned around usable systems, better operations, and real delivery — not long decks full of jargon.",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Grounded in African realities",
    description:
      "Framed around the constraints and opportunities of African businesses, not imported assumptions.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Products and services in one",
    description:
      "We build our own products while delivering services — stronger strategic and execution depth.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Implementation-minded delivery",
    description:
      "Advice matters only if it can be executed. We help teams actually ship and operationalize.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Scalable thinking from the start",
    description:
      "Products and infrastructure shaped with future growth in mind so clients don't outgrow every decision.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Long-term partner orientation",
    description:
      "Framed around continued support, improvement, and future phases — not one-time engagement and exit.",
    icon: CheckCircle2,
  },
];

export function WhySection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-bento">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 60% at 10% 0%, rgba(0,102,204,0.35), transparent 70%), radial-gradient(ellipse 40% 50% at 90% 30%, rgba(0,170,102,0.25), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            }}
          />

          <div className="relative space-y-10 px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="max-w-3xl">
              <SectionHeader
                number="04"
                title="Why Future Logix"
                subtitle="A sharper proposition than the usual technology consultancy story."
                description="Product thinking, implementation depth, and long-term support for teams that need systems they can actually run."
                inverted
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-3xl font-semibold tracking-tight text-white/30">
                        {item.number}
                      </span>
                      <div className="rounded-2xl bg-secondary/15 p-2.5 text-secondary">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
