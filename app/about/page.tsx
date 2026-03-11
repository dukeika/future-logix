import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Future Logix",
  description:
    "Learn about Future Logix Limited, a Lagos-based technology company building products and services for African organizations.",
};

export default function AboutPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-6xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="07"
            title="About"
            subtitle="About Future Logix"
            description="Implementation-minded technology company for African organizations."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Company Story</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Future Logix Limited is a technology company building practical digital products
                  and delivery services for growing African organizations. We operate at the
                  intersection of product development and implementation services, with a focus on
                  systems that actually work in local business environments.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Mission</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  To help African organizations operate better, move faster, and scale with
                  confidence through technology that fits their reality.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Leadership Principles</h2>
                <ul className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Operator-first:</span> Every
                    leader at Future Logix has direct responsibility for client delivery.
                    Management is not separate from implementation.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Local context:</span> Decisions
                    are made by people who understand the specific constraints of African business
                    environments, infrastructure, talent, regulatory, and cultural.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Long-term orientation:</span> We
                    measure success by client outcomes over years, not project margins over months.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Approach</h2>
                <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
                  <li>Build for the context, not just the spec</li>
                  <li>Ship quickly, improve continuously</li>
                  <li>Measure by business outcomes, not technical complexity</li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Leadership</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Future Logix is led by operators who have built technology inside African
                  organizations, not just consulted on them.
                </p>
                <div className="mt-5 space-y-4 rounded-[1.2rem] border border-border/70 bg-white/70 p-5">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      Founder &amp; Managing Director: Akabom Kadana
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Akabom Kadana founded Future Logix in 2023 after 10 years consulting for
                      African edtech companies. The consistent gap between technology promise and
                      operational reality in African organizations motivated the creation of a
                      company focused on delivery, not presentations.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Direct experience includes: AWS Solutions Architect and AWS AI Certified.
                      Education and certifications focused on cloud architecture, artificial
                      intelligence implementation, and scalable system design for emerging markets.
                      Based in Lagos.
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Contact Akabom directly: admin@futurelogix.ng for partnership, press, or
                    significant engagement discussions.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Team</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Future Logix operates with a core team of 3 permanent staff and a network of 5
                  specialized consultants for specific implementation needs. This structure
                  maintains consistent quality while accessing deep expertise for complex
                  requirements.
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Team members are based primarily in Lagos, with remote collaboration
                  infrastructure for clients and partners across Africa.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <h2 className="text-xl font-semibold">Location</h2>
                    <p className="mt-4 text-base leading-8 text-slate-300">Lagos, Nigeria</p>
                    <p className="text-base leading-8 text-slate-300">Serving clients across Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button asChild className="rounded-full">
            <Link href="/contact">Work with us</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}
