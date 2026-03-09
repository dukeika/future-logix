import Link from "next/link";
import { PageContainer } from "../site/PagePrimitives";
import { customSoftwareDetail, services, servicesHub, workflowAutomationDetail } from "../../content/siteContent";

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/[0.14] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.07]";
const lightButton =
  "inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-50";

function Kicker({ children, tone = "dark" }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${tone === "light" ? "text-cyan-700" : "text-cyan-300"}`}>
      {children}
    </p>
  );
}

function ActionLink({ action, variant = "dark" }) {
  const className =
    variant === "primary" ? primaryButton : variant === "light" ? lightButton : secondaryButton;

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.14),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_55%,#0a1321_100%)]" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div className="grid gap-7">
            <div className="max-w-4xl">
              <Kicker>{servicesHub.hero.eyebrow}</Kicker>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
                {servicesHub.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{servicesHub.hero.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink action={servicesHub.hero.primaryCta} variant="primary" />
              <ActionLink action={servicesHub.hero.secondaryCta} />
            </div>

            <div className="flex flex-wrap gap-3">
              {servicesHub.hero.supportPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-200"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(150deg,#132644,#0b1321)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.45)]">
              <Kicker>Service Focus</Kicker>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Workflow Automation", body: "Reduce repetitive work and process delays." },
                  { title: "Custom Software", body: "Build systems that fit real operational needs." },
                  { title: "Cloud and Infrastructure", body: "Create a stronger operational foundation." },
                  { title: "Cybersecurity and Advisory", body: "Improve resilience and decision quality." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(160deg,#0d1d33,#08101d)] p-6">
                <Kicker>Commercial Position</Kicker>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Future Logix services are positioned around business outcomes: less friction, better systems,
                  clearer execution, and more scalable operations.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#0b1422] p-6">
                <Kicker>Most Relevant Now</Kicker>
                <div className="mt-4 space-y-3">
                  {["Workflow Automation", "Custom Software Development"].map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ServiceArchitectureSection() {
  return (
    <section id="service-areas" className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker tone="light">{servicesHub.architecture.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {servicesHub.architecture.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{servicesHub.architecture.description}</p>
          </div>

          <div className="grid gap-5">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  service.slug === "workflow-automation" || service.slug === "custom-software-development"
                    ? "border-slate-950 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.35)]"
                    : index % 2 === 0
                    ? "border-slate-200 bg-[#edf2f8]"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="grid gap-5 lg:grid-cols-[0.2fr_0.56fr_0.24fr] lg:items-start">
                  <div>
                    <span className="inline-flex rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">{service.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{service.name}</h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">{service.summary}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">{service.value}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {service.bullets.map((bullet) => (
                      <span key={bullet} className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                        {bullet}
                      </span>
                    ))}
                    {service.href !== "/services" && (
                      <Link href={service.href} className="mt-2 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                        View service
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function EngagementModelSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,#0d1728,#09111d)] p-8 sm:p-10">
            <Kicker>{servicesHub.engagement.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{servicesHub.engagement.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{servicesHub.engagement.description}</p>
          </div>

          <div className="grid gap-4">
            {servicesHub.engagement.steps.map((step, index) => (
              <div
                key={step.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[0.16fr_0.84fr]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function FeaturedServicesSection() {
  const automation = services.find((service) => service.slug === "workflow-automation");
  const customSoftware = services.find((service) => service.slug === "custom-software-development");

  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker tone="light">{servicesHub.featured.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{servicesHub.featured.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{servicesHub.featured.description}</p>
          </div>

          <div className="grid gap-5">
            {[automation, customSoftware].map((service, index) => (
              <div
                key={service.slug}
                className={`rounded-[2.4rem] border p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.35)] sm:p-9 ${
                  index === 0 ? "border-slate-950 bg-white" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">{service.category}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{service.name}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{service.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <span key={bullet} className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex lg:justify-end">
                    <Link href={service.href} className={lightButton}>
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ServicePathsSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Kicker>{servicesHub.paths.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{servicesHub.paths.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{servicesHub.paths.description}</p>
          </div>

          <div className="grid gap-5">
            {servicesHub.paths.actions.map((action, index) => (
              <div
                key={action.label}
                className={`rounded-[2rem] border p-7 sm:p-8 ${
                  index === 0 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Path 0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{action.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{action.body}</p>
                  </div>
                  <div className="flex lg:justify-end">
                    <ActionLink action={action} variant={index === 0 ? "primary" : "default"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.14),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_54%,#09111d_100%)]" />
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.03fr_0.97fr] xl:items-end">
          <div>
            <Kicker>{service.hero.eyebrow}</Kicker>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
              {service.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{service.hero.description}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">{service.hero.audience}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink action={service.hero.primaryCta} variant="primary" />
              <ActionLink action={service.hero.secondaryCta} />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(150deg,#132644,#0b1321)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.45)]">
            <Kicker>Service Snapshot</Kicker>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.outcomes.items.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[1.45rem] border border-white/[0.08] bg-white/[0.05] p-4">
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceChallengeSection({ service }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <Kicker tone="light">{service.challenge.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.challenge.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{service.challenge.description}</p>
          </div>
          <div className="grid gap-4">
            {service.challenge.items.map((item, index) => (
              <div
                key={item}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 1 ? "border-slate-950 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.35)]" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[0.14fr_0.86fr]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-8 text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceExamplesSection({ service }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker>{service.examples.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.examples.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{service.examples.description}</p>
          </div>
          <div className="grid gap-4">
            {service.examples.items.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index % 2 === 0 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-4 lg:grid-cols-[0.18fr_0.82fr]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Area 0{index + 1}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceOutcomesSection({ service }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div className="rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.35)] sm:p-10">
            <Kicker tone="light">{service.outcomes.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.outcomes.title}</h2>
          </div>
          <div className="grid gap-4">
            {service.outcomes.items.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.9rem] border p-6 ${
                  index === 0 || index === service.outcomes.items.length - 1 ? "border-slate-950 bg-white" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceAudienceSection({ service }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>{service.audience.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.audience.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{service.audience.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.audience.segments.map((segment, index) => (
              <div
                key={segment}
                className={`rounded-[1.9rem] border p-6 ${
                  index === 0 || index === 3 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <p className="text-base leading-7 text-slate-200">{segment}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceApproachSection({ service }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker tone="light">{service.approach.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.approach.title}</h2>
          </div>
          <div className="grid gap-4">
            {service.approach.steps.map((step, index) => (
              <div
                key={step.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 ? "border-slate-950 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.35)]" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[0.16fr_0.84fr]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ServiceConversionSection({ service }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="rounded-[2.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,#101c33,#08111f)] p-8 sm:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div>
              <Kicker>{service.conversion.eyebrow}</Kicker>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{service.conversion.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{service.conversion.description}</p>
            </div>
            <div className="grid gap-4">
              {service.conversion.actions.map((action, index) => (
                <div
                  key={action.label}
                  className="grid gap-4 rounded-[1.9rem] border border-white/[0.08] bg-white/[0.05] p-6 sm:grid-cols-[0.68fr_0.32fr] sm:items-center"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Path 0{index + 1}</p>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      {index === 0
                        ? "Start a direct conversation about this service and what your organization needs improved."
                        : index === 1
                        ? "Use this route if you want a more structured project discussion with Future Logix."
                        : "Return to the services hub to compare this service with the wider Future Logix offering."}
                    </p>
                  </div>
                  <div className="flex sm:justify-end">
                    <ActionLink action={action} variant={index === 0 ? "primary" : "default"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function WorkflowAutomationPageSections() {
  return (
    <>
      <ServiceHero service={workflowAutomationDetail} />
      <ServiceChallengeSection service={workflowAutomationDetail} />
      <ServiceExamplesSection service={workflowAutomationDetail} />
      <ServiceOutcomesSection service={workflowAutomationDetail} />
      <ServiceAudienceSection service={workflowAutomationDetail} />
      <ServiceApproachSection service={workflowAutomationDetail} />
      <ServiceConversionSection service={workflowAutomationDetail} />
    </>
  );
}

export function CustomSoftwarePageSections() {
  return (
    <>
      <ServiceHero service={customSoftwareDetail} />
      <ServiceChallengeSection service={customSoftwareDetail} />
      <ServiceExamplesSection service={customSoftwareDetail} />
      <ServiceOutcomesSection service={customSoftwareDetail} />
      <ServiceAudienceSection service={customSoftwareDetail} />
      <ServiceApproachSection service={customSoftwareDetail} />
      <ServiceConversionSection service={customSoftwareDetail} />
    </>
  );
}
