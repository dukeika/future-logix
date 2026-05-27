import Image from "next/image";
import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

export function WhoWeAreSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-4xl">
            <SectionHeader
              number="05"
              title="Who We Are"
              subtitle="A small team focused on useful outcomes."
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="bento-card-accent lg:col-span-2 p-6 sm:p-8">
              <Quote className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <p className="mt-4 text-balance font-display text-xl font-medium leading-9 tracking-tight text-foreground sm:text-2xl">
                Future Logix is a Lagos-based technology company building practical digital products
                and services for African organizations. A small, focused team of builders and
                operators who care more about useful outcomes than impressive deliverables.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="inline-flex h-1 w-1 rounded-full bg-secondary" />
                Lagos, Nigeria · Founded with a builder mindset
              </div>
            </div>

            <div className="bento-card p-6 sm:p-7">
              <div className="space-y-4">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-3xl border border-border bg-white">
                  <Image
                    src="/images/future-logix-ceo-profile.jpg"
                    alt="Akabom Kadana, Founder and CEO of Future Logix"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Founder &amp; CEO
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                    Akabom Kadana
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  From the founder
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Technology as a tool for real transformation.
                </h3>
              </div>
              <div className="space-y-4 text-base leading-8 text-muted-foreground">
                <p>
                  As the CEO of Future Logix, I am committed to driving innovation through practical
                  technology that solves real business problems. My experience spans cloud
                  architecture, software development, IoT, and digital product strategy.
                </p>
                <p>
                  I bring a hands-on approach to leadership, combining technical depth with
                  strategic vision. Through Future Logix, I aim to position technology as a tool for
                  real transformation — helping businesses modernize, compete, and thrive in an
                  increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
