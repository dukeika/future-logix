import Link from "next/link";
import { PageContainer } from "../site/PagePrimitives";
import { classPointDetail, productHub, products } from "../../content/siteContent";

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

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(251,191,36,0.14),transparent_16%),linear-gradient(180deg,#07111f_0%,#07111f_55%,#0a1321_100%)]" />
      <div className="absolute left-0 top-28 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-8 -z-10 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div className="grid gap-7">
            <div className="max-w-4xl">
              <Kicker>{productHub.hero.eyebrow}</Kicker>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
                {productHub.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{productHub.hero.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink action={productHub.hero.primaryCta} variant="primary" />
              <ActionLink action={productHub.hero.secondaryCta} />
            </div>

            <div className="flex flex-wrap gap-3">
              {productHub.hero.supportingPoints.map((point) => (
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
              <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] xl:grid-cols-1">
                <div>
                  <Kicker>Flagship Product</Kicker>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{products[0].name}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-200">{products[0].summary}</p>
                </div>

                <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.05] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Product Structure</p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Flagship product with a clear buyer path",
                      "Parent-brand backing from Future Logix",
                      "Room for future product lines without reworking the architecture",
                    ].map((item, index) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.2rem] border border-white/[0.08] bg-[#0b1422] px-4 py-4">
                        <span className="mt-0.5 text-sm font-semibold text-cyan-200">0{index + 1}</span>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(160deg,#0d1d33,#08101d)] p-6">
                <Kicker>Portfolio Direction</Kicker>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Future Logix is treating products as a serious growth layer of the business. ClassPoint is first,
                  but the portfolio is being shaped for additional problem-specific products over time.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#0b1422] p-6">
                <Kicker>Next Move</Kicker>
                <div className="mt-4 grid gap-3">
                  <ActionLink action={productHub.paths.actions[0]} variant="primary" />
                  <ActionLink action={productHub.paths.actions[2]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ProductPhilosophySection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker tone="light">{productHub.philosophy.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {productHub.philosophy.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{productHub.philosophy.description}</p>
          </div>

          <div className="grid gap-5">
            {productHub.philosophy.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`grid gap-5 rounded-[2.1rem] border p-7 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.3)] sm:grid-cols-[0.18fr_0.82fr] ${
                  index === 0 || index === 3 ? "border-cyan-200 bg-white" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="flex items-start">
                  <span className="inline-flex rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{pillar.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function FlagshipSpotlightSection() {
  const classPoint = products[0];

  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[2.6rem] border border-white/10 bg-[linear-gradient(145deg,#101e35,#0a1220)] p-8 sm:p-10">
            <Kicker>{productHub.spotlight.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {productHub.spotlight.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{productHub.spotlight.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {productHub.spotlight.quickFacts.map((fact) => (
                <div key={fact} className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.05] px-4 py-4 text-sm font-medium text-slate-200">
                  {fact}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {classPoint.ctas.map((cta, index) => (
                <ActionLink key={cta.href} action={cta} variant={index === 0 ? "primary" : "default"} />
              ))}
            </div>
          </div>

          <div className="rounded-[2.6rem] border border-slate-200 bg-white p-6 text-slate-950 shadow-[0_34px_100px_-55px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(170deg,#f8fbff,#eef4ff)] p-5">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.4)]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">ClassPoint</p>
                    <p className="mt-2 text-sm font-semibold text-slate-950">School operations overview</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Live focus</span>
                </div>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-[1.2rem] bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Who it is for</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{classPoint.audience}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">What it solves</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">Admin pressure, disconnected records, and school workflow friction.</p>
                    </div>
                    <div className="rounded-[1.2rem] bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Why it matters</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">Helps schools modernize operations without jumping into bloated systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-950">Why ClassPoint leads the portfolio</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                It gives Future Logix a real product point of view in the market: focused, commercially relevant, and backed by a broader technology company.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function PortfolioGrowthSection() {
  return (
    <section className="bg-[#09111d] py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-start">
          <div>
            <Kicker>{productHub.portfolio.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {productHub.portfolio.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{productHub.portfolio.description}</p>
          </div>

          <div className="grid gap-5">
            {productHub.portfolio.tracks.map((track, index) => (
              <div
                key={track.title}
                className={`rounded-[2rem] border p-7 ${
                  index === 0
                    ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-5 sm:grid-cols-[0.18fr_0.82fr]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{track.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{track.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[2rem] border border-white/10 bg-[#0c1625] p-7">
              <Kicker>Partnership Signal</Kicker>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Future Logix is open to product conversations around institutional demand, portfolio strategy, and the needs shaping what should be built next.
              </p>
              <div className="mt-6">
                <ActionLink action={productHub.portfolio.cta} variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ProductPathsSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker tone="light">{productHub.paths.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{productHub.paths.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{productHub.paths.description}</p>
          </div>

          <div className="grid gap-5">
            {productHub.paths.actions.map((action, index) => (
              <div
                key={action.label}
                className={`rounded-[2rem] border p-7 sm:p-8 ${
                  index === 0 ? "border-slate-950 bg-white shadow-[0_30px_90px_-55px_rgba(15,23,42,0.4)]" : "border-slate-200 bg-[#edf2f8]"
                }`}
              >
                <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">Option 0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{action.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{action.body}</p>
                  </div>
                  <div className="flex lg:justify-end">
                    <ActionLink action={action} variant="light" />
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

export function ClassPointHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(251,191,36,0.14),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_54%,#09111d_100%)]" />
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <div>
            <Kicker>{classPointDetail.hero.eyebrow}</Kicker>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.1rem]">
              {classPointDetail.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{classPointDetail.hero.description}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">{classPointDetail.hero.audience}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink action={classPointDetail.hero.primaryCta} variant="primary" />
              <ActionLink action={classPointDetail.hero.secondaryCta} />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(150deg,#132644,#0b1321)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.45)]">
            <Kicker>Product Snapshot</Kicker>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {classPointDetail.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.45rem] border border-white/[0.08] bg-white/[0.05] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">{stat.label}</p>
                  <p className="mt-3 text-base font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-white/[0.08] bg-[#0b1422] p-5">
              <p className="text-sm font-semibold text-white">Why this page exists</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                ClassPoint now has a complete product detail page inside the Future Logix site, so the product side of the company feels real, navigable, and commercially credible.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ClassPointProblemSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <Kicker tone="light">{classPointDetail.problems.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {classPointDetail.problems.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{classPointDetail.problems.description}</p>
          </div>

          <div className="grid gap-4">
            {classPointDetail.problems.items.map((item, index) => (
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

export function ClassPointCapabilitiesSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <div>
            <Kicker>{classPointDetail.capabilities.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {classPointDetail.capabilities.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{classPointDetail.capabilities.description}</p>
          </div>

          <div className="grid gap-4">
            {classPointDetail.capabilities.items.map((item, index) => (
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

export function ClassPointAudienceSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <div className="rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.4)] sm:p-10">
            <Kicker tone="light">{classPointDetail.audience.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {classPointDetail.audience.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{classPointDetail.audience.description}</p>
          </div>

          <div className="grid gap-4">
            {classPointDetail.audience.segments.map((segment, index) => (
              <div
                key={segment.title}
                className={`rounded-[1.9rem] border p-6 ${
                  index === 0 || index === 3 ? "border-slate-200 bg-[#edf2f8]" : "border-slate-950 bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{segment.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{segment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ClassPointDifferentiationSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker>{classPointDetail.differentiation.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {classPointDetail.differentiation.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{classPointDetail.differentiation.description}</p>
          </div>

          <div className="grid gap-5">
            {classPointDetail.differentiation.points.map((point, index) => (
              <div
                key={point.title}
                className={`rounded-[2rem] border p-7 ${
                  index === 0
                    ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]"
                    : index === 3
                    ? "border-amber-300/20 bg-[linear-gradient(145deg,#2a1d08,#120f09)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{point.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ClassPointConversionSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="rounded-[2.6rem] border border-slate-200 bg-white p-8 shadow-[0_32px_90px_-55px_rgba(15,23,42,0.4)] sm:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div>
              <Kicker tone="light">{classPointDetail.conversion.eyebrow}</Kicker>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                {classPointDetail.conversion.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">{classPointDetail.conversion.description}</p>
            </div>

            <div className="grid gap-4">
              {classPointDetail.conversion.actions.map((action, index) => (
                <div
                  key={action.label}
                  className={`grid gap-4 rounded-[1.9rem] border p-6 sm:grid-cols-[0.68fr_0.32fr] sm:items-center ${
                    index === 0 ? "border-slate-950 bg-[#edf2f8]" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">Path 0{index + 1}</p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      {index === 0
                        ? "Go directly to the ClassPoint site if you want to engage with the product brand now."
                        : index === 1
                        ? "Talk to Future Logix if you want a product conversation, institutional discussion, or implementation context."
                        : "Return to the products hub to see how ClassPoint fits into the wider Future Logix portfolio."}
                    </p>
                  </div>
                  <div className="flex sm:justify-end">
                    <ActionLink action={action} variant="light" />
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
