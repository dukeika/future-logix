import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/landing-pages";

const schoolsRepTrialUrl =
  "https://schoolsrep.com/trial?utm_source=futurelogix&utm_medium=campaign_page&utm_campaign=schoolsrep_launch&utm_content=guided_trial";

export const metadata: Metadata = {
  title: "SchoolsRep Guided Trial for Nigerian Schools",
  description:
    "Request a guided SchoolsRep trial through Future Logix and evaluate attendance, results, fees, parent communication, migration, and school operations before paying for a term.",
  alternates: { canonical: "/schoolsrep/free-trial" },
  openGraph: {
    title: "SchoolsRep Guided Trial for Nigerian Schools",
    description:
      "Evaluate SchoolsRep through Future Logix before committing to a paid school operations rollout.",
    url: "/schoolsrep/free-trial",
    images: ["/og-image.png"],
  },
};

const trialChecks = [
  "Admin dashboard and school setup flow",
  "Attendance, classes, students, teachers, and parent access",
  "Results, fee visibility, reminders, and manual-payment review",
  "Migration questions for schools using Excel or paper records",
  "Pricing fit for Starter, Growth, and Premium school brackets",
  "Data handling, access roles, support, and rollout concerns",
] as const;

const buyerBlocks = [
  {
    title: "For owners and directors",
    description:
      "Confirm whether SchoolsRep solves the school-level visibility problem before approving a term commitment.",
    icon: ShieldCheck,
  },
  {
    title: "For administrators",
    description:
      "Review the daily workflows: students, classes, staff, records, announcements, attendance, fees, and support.",
    icon: ClipboardList,
  },
  {
    title: "For bursars and finance teams",
    description:
      "Evaluate fee tracking, parent reminders, Paystack-led paths, and manual transfer review before rollout.",
    icon: WalletCards,
  },
  {
    title: "For academic leaders",
    description:
      "Inspect how attendance, results, classes, and parent visibility connect across the school term.",
    icon: GraduationCap,
  },
] as const;

const outreachAngles = [
  "We currently use Excel and WhatsApp for school records.",
  "Parents keep calling for updates, balances, or results.",
  "Fee follow-up is difficult to track during the term.",
  "Teachers and admins need one clearer workflow.",
] as const;

export default function SchoolsRepFreeTrialCampaignPage() {
  return (
    <main>
      <section className="section-shell pb-8 lg:pb-12">
        <SiteContainer>
          <div className="surface-panel grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
            <div className="space-y-6">
              <div className="inline-flex w-fit rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                SchoolsRep Campaign
              </div>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Start a guided SchoolsRep trial before your school pays for rollout.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Future Logix helps Nigerian private schools evaluate SchoolsRep with the real
                  buying questions upfront: setup, migration, fee workflows, parent communication,
                  support, pricing, and data protection.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/schoolsrep#contact-form">
                    Request guided demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={schoolsRepTrialUrl}>Start trial on SchoolsRep</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={contactDetails.whatsappUrl}>Chat on WhatsApp</a>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-primary/10 bg-primary/5 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What to verify in the trial
              </p>
              <div className="mt-5 grid gap-3">
                {trialChecks.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-border/80 bg-white/80 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Buyer fit
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Built for the different people involved in a school software decision.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {buyerBlocks.map((block) => {
                const Icon = block.icon;

                return (
                  <article key={block.title} className="surface-panel px-5 py-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{block.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] bg-slate-950 px-5 py-8 text-white shadow-soft sm:px-8">
              <MessageSquare className="h-6 w-6 text-secondary" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Use this page when your school says any of these.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The campaign should lead with the pressure the buyer already feels, then move them
                into a guided Future Logix conversation or the SchoolsRep trial path.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outreachAngles.map((angle) => (
                <div key={angle} className="rounded-2xl border border-border/80 bg-white/80 px-5 py-5">
                  <p className="text-sm font-medium leading-7 text-foreground">&quot;{angle}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell pt-8">
        <SiteContainer>
          <div className="bento-card-accent px-5 py-8 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  Ready to test SchoolsRep with your own school context?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
                  Start with the Future Logix demo request if you want guidance, or go straight to
                  the SchoolsRep trial when you are ready to create a trial tenant.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg">
                  <Link href="/schoolsrep#contact-form">Request guided demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={schoolsRepTrialUrl}>Start trial</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={contactDetails.whatsappUrl}>WhatsApp us</a>
                </Button>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
