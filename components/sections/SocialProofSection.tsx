import { CheckCircle2, Layers3, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

const trustSignals = [
  {
    icon: Layers3,
    title: "Built around real workflows",
    description:
      "We focus on attendance, records, reporting, approvals, and operational handoffs that teams deal with every week.",
  },
  {
    icon: ShieldCheck,
    title: "Implementation matters as much as strategy",
    description:
      "Future Logix is structured for delivery, not slide decks. The work is scoped around usable systems, adoption, and next steps.",
  },
  {
    icon: CheckCircle2,
    title: "Designed for local operating realities",
    description:
      "Products and services are shaped for African organizations balancing lean teams, uneven bandwidth, and growth pressure.",
  },
];

export function SocialProofSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <SectionHeader
              number="01A"
              title="Why Teams Start Here"
              subtitle="Practical signals for buyers who need delivery confidence."
              description="A clearer product story, grounded execution, and systems designed for real operating conditions."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;

              return (
              <article
                key={signal.title}
                className="surface-panel h-full px-5 py-6 sm:px-6"
              >
                <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{signal.title}</h3>
                <p className="mt-3 text-base leading-8 text-muted-foreground">{signal.description}</p>
              </article>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
