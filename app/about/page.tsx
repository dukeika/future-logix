import Image from "next/image";
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
                <div className="mt-5 grid gap-5 rounded-[1.2rem] border border-border/70 bg-white/70 p-5 sm:grid-cols-[160px_1fr]">
                  <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-[1.25rem] border border-border/80 bg-white">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/future-logix-ceo-profile.jpg"
                        alt="Akabom Kadana, Founder and CEO of Future Logix"
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Akabom Kadana, Founder &amp; CEO
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      As the CEO of Future Logix, I am committed to driving innovation through
                      practical technology solutions that solve real business problems and create
                      long-term value. My experience spans cloud architecture, software
                      development, IoT systems, and digital product strategy, with a focus on
                      building solutions that are scalable, efficient, and aligned with business
                      goals.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      I bring a hands-on approach to leadership, combining technical depth with
                      strategic vision. With expertise in AWS, application development, and smart
                      device technologies, I have led the development of solutions designed to
                      improve operations, enable growth, and open new opportunities for
                      organizations across different sectors.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      My passion lies in transforming ideas into impactful products and services
                      that are not only technically sound, but also relevant to the needs of the
                      market. Through Future Logix, I aim to position technology as a tool for
                      real transformation, helping businesses modernize, compete effectively, and
                      thrive in an increasingly digital world.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Contact Akabom directly: admin@futurelogix.ng for partnership, press, or
                      significant engagement discussions.
                    </p>
                  </div>
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
