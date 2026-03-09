import Link from "next/link";
import { PageContainer } from "../site/PagePrimitives";
import { educationIndustryDetail, industries, industriesHub, smesIndustryDetail } from "../../content/siteContent";

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

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function IndustriesHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.14),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_55%,#0a1321_100%)]" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <div className="grid gap-7">
            <div className="max-w-4xl">
              <Kicker>{industriesHub.hero.eyebrow}</Kicker>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
                {industriesHub.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{industriesHub.hero.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink action={industriesHub.hero.primaryCta} variant="primary" />
              <ActionLink action={industriesHub.hero.secondaryCta} />
              <ActionLink action={industriesHub.hero.tertiaryCta} />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(150deg,#132644,#0b1321)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.45)]">
              <Kicker>Industry Lens</Kicker>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Education", body: "School operations, admin stress, and modernization needs." },
                  { title: "SMEs", body: "Process bottlenecks, manual workflows, and growth complexity." },
                  { title: "Professional Services", body: "Better internal delivery and workflow visibility." },
                  { title: "Startups", body: "Product direction, systems, and delivery support." },
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
                <Kicker>Why this matters</Kicker>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Industry context makes the Future Logix story more concrete. It shows where products and services
                  actually solve operational problems.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#0b1422] p-6">
                <Kicker>Featured now</Kicker>
                <div className="mt-4 space-y-3">
                  {["Education", "SMEs and Growing Businesses"].map((item) => (
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

export function IndustryCoverageSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker tone="light">{industriesHub.coverage.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {industriesHub.coverage.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{industriesHub.coverage.description}</p>
          </div>

          <div className="grid gap-5">
            {industries.map((industry, index) => (
              <div
                key={industry.slug}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  industry.slug === "education" || industry.slug === "smes"
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">{industry.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{industry.name}</h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      <span className="font-semibold text-slate-950">{industry.organization}.</span> {industry.need}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{industry.help}</p>
                  </div>
                  <div className="flex lg:justify-end">
                    {industry.href !== "/industries" && (
                      <Link href={industry.href} className={lightButton}>
                        View industry
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

export function CrossIndustryFitSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,#0d1728,#09111d)] p-8 sm:p-10">
            <Kicker>{industriesHub.fit.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industriesHub.fit.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{industriesHub.fit.description}</p>
          </div>

          <div className="grid gap-4">
            {industriesHub.fit.points.map((point, index) => (
              <div
                key={point.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[0.16fr_0.84fr]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{point.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{point.body}</p>
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

export function FeaturedIndustrySection() {
  const featured = industries.filter((industry) => industry.slug === "education" || industry.slug === "smes");

  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker tone="light">{industriesHub.featured.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industriesHub.featured.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{industriesHub.featured.description}</p>
          </div>

          <div className="grid gap-5">
            {featured.map((industry, index) => (
              <div
                key={industry.slug}
                className={`rounded-[2.4rem] border p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.35)] sm:p-9 ${
                  index === 0 ? "border-slate-950 bg-white" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">{industry.category}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{industry.name}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{industry.need}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">{industry.help}</p>
                  </div>
                  <div className="flex lg:justify-end">
                    <Link href={industry.href} className={lightButton}>
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

export function IndustryPathsSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Kicker>{industriesHub.paths.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industriesHub.paths.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{industriesHub.paths.description}</p>
          </div>

          <div className="grid gap-5">
            {industriesHub.paths.actions.map((action, index) => (
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

function IndustryHero({ industry }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.14),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_54%,#09111d_100%)]" />
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.03fr_0.97fr] xl:items-end">
          <div>
            <Kicker>{industry.hero.eyebrow}</Kicker>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
              {industry.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{industry.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink action={industry.hero.primaryCta} variant="primary" />
              <ActionLink action={industry.hero.secondaryCta} />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(150deg,#132644,#0b1321)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.45)]">
            <Kicker>Industry Snapshot</Kicker>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {industry.audience.segments.slice(0, 4).map((item) => (
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

function IndustryChallengeSection({ industry }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <Kicker tone="light">{industry.challenge.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.challenge.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{industry.challenge.description}</p>
          </div>
          <div className="grid gap-4">
            {industry.challenge.items.map((item, index) => (
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

function IndustryFitSection({ industry }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker>{industry.fit.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.fit.title}</h2>
          </div>
          <div className="grid gap-4">
            {industry.fit.cards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{card.body}</p>
                  </div>
                  <div className="flex lg:justify-end">
                    <Link href={card.href} className={index === 0 ? primaryButton : secondaryButton}>
                      {card.label}
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

function IndustrySolutionMapSection({ industry }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div className="rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.35)] sm:p-10">
            <Kicker tone="light">{industry.solutionMap.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.solutionMap.title}</h2>
          </div>
          <div className="grid gap-4">
            {industry.solutionMap.items.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[1.9rem] border p-6 ${
                  index === 0 || index === industry.solutionMap.items.length - 1 ? "border-slate-950 bg-white" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function IndustryAudienceSection({ industry }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>{industry.audience.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.audience.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{industry.audience.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.audience.segments.map((segment, index) => (
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

function IndustryRelevanceSection({ industry }) {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker tone="light">{industry.relevance.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.relevance.title}</h2>
          </div>
          <div className="grid gap-4">
            {industry.relevance.points.map((point, index) => (
              <div
                key={point.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 ? "border-slate-950 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.35)]" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{point.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function IndustryConversionSection({ industry }) {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="rounded-[2.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,#101c33,#08111f)] p-8 sm:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div>
              <Kicker>{industry.conversion.eyebrow}</Kicker>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{industry.conversion.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{industry.conversion.description}</p>
            </div>
            <div className="grid gap-4">
              {industry.conversion.actions.map((action, index) => (
                <div
                  key={action.label}
                  className="grid gap-4 rounded-[1.9rem] border border-white/[0.08] bg-white/[0.05] p-6 sm:grid-cols-[0.68fr_0.32fr] sm:items-center"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Path 0{index + 1}</p>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      {index === 0
                        ? "Use this route if you already know the most relevant Future Logix product or service path."
                        : "Use this route if you want to discuss your organization’s needs directly with Future Logix."}
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

export function EducationIndustryPageSections() {
  return (
    <>
      <IndustryHero industry={educationIndustryDetail} />
      <IndustryChallengeSection industry={educationIndustryDetail} />
      <IndustryFitSection industry={educationIndustryDetail} />
      <IndustrySolutionMapSection industry={educationIndustryDetail} />
      <IndustryAudienceSection industry={educationIndustryDetail} />
      <IndustryRelevanceSection industry={educationIndustryDetail} />
      <IndustryConversionSection industry={educationIndustryDetail} />
    </>
  );
}

export function SmesIndustryPageSections() {
  return (
    <>
      <IndustryHero industry={smesIndustryDetail} />
      <IndustryChallengeSection industry={smesIndustryDetail} />
      <IndustryFitSection industry={smesIndustryDetail} />
      <IndustrySolutionMapSection industry={smesIndustryDetail} />
      <IndustryAudienceSection industry={smesIndustryDetail} />
      <IndustryRelevanceSection industry={smesIndustryDetail} />
      <IndustryConversionSection industry={smesIndustryDetail} />
    </>
  );
}
