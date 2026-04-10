import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

export function WhoWeAreSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <SectionHeader
              number="05"
              title="Who We Are"
              subtitle="A small team focused on useful outcomes."
            />
          </div>

          <div className="space-y-6">
            <div className="surface-panel max-w-4xl px-5 py-8 sm:px-8">
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                Future Logix is a Lagos-based technology company founded to build practical digital
                products and services for African organizations. We are a small, focused team of
                builders and operators who care more about useful outcomes than impressive-sounding
                deliverables.
              </p>
            </div>

            <div className="surface-panel grid gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[240px_1fr] lg:items-start">
              <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.5rem] border border-border/80 bg-white/80">
                <div className="relative aspect-square">
                  <Image
                    src="/images/future-logix-ceo-profile.jpg"
                    alt="Akabom Kadana, Founder and CEO of Future Logix"
                    fill
                    sizes="(min-width: 1024px) 240px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Founder &amp; CEO
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">Akabom Kadana</h3>
                </div>

                <p className="text-base leading-8 text-muted-foreground">
                  As the CEO of Future Logix, I am committed to driving innovation through
                  practical technology solutions that solve real business problems and create
                  long-term value. My experience spans cloud architecture, software development,
                  IoT systems, and digital product strategy, with a focus on building solutions
                  that are scalable, efficient, and aligned with business goals.
                </p>
                <p className="text-base leading-8 text-muted-foreground">
                  I bring a hands-on approach to leadership, combining technical depth with
                  strategic vision. With expertise in AWS, application development, and smart
                  device technologies, I have led the development of solutions designed to improve
                  operations, enable growth, and open new opportunities for organizations across
                  different sectors.
                </p>
                <p className="text-base leading-8 text-muted-foreground">
                  My passion lies in transforming ideas into impactful products and services that
                  are not only technically sound, but also relevant to the needs of the market.
                  Through Future Logix, I aim to position technology as a tool for real
                  transformation, helping businesses modernize, compete effectively, and thrive in
                  an increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
