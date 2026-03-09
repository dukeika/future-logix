import Link from "next/link";
import { PageContainer } from "../site/PagePrimitives";
import {
  decisionCards,
  differentiators,
  featuredProduct,
  homepage,
  industries,
  insights,
  outcomes,
  products,
  services,
  trustPoints,
} from "../../content/siteContent";

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/[0.14] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.07]";
const darkPanel = "rounded-[2rem] border border-white/10 bg-[#0d1727] text-white";

function Kicker({ children, tone = "dark" }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${tone === "light" ? "text-cyan-700" : "text-cyan-300"}`}>
      {children}
    </p>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_80%_14%,rgba(251,191,36,0.12),transparent_18%),linear-gradient(180deg,#07111f_0%,#07111f_52%,#0b1322_100%)]" />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-12 -z-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <PageContainer className="relative">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
          <div className="grid gap-8">
            <div className="max-w-4xl">
              <Kicker>{homepage.hero.eyebrow}</Kicker>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl xl:text-[5.3rem]">
                {homepage.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{homepage.hero.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={homepage.hero.primaryCta.href} className={primaryButton}>
                {homepage.hero.primaryCta.label}
              </Link>
              <Link href={homepage.hero.secondaryCta.href} className={secondaryButton}>
                {homepage.hero.secondaryCta.label}
              </Link>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className={`${darkPanel} p-6`}>
                <p className="max-w-xl text-sm leading-7 text-slate-300">{homepage.hero.supportLine}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {homepage.hero.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#0f1e34,#0a1220)] p-6">
                <Kicker>Business Areas</Kicker>
                <div className="mt-5 grid gap-3">
                  {["Products", "Services", "Portfolio Growth"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4">
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                      <span className="text-sm font-semibold text-cyan-200">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-1">
              <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(150deg,#152746,#0d1626)] p-7 shadow-[0_30px_120px_-55px_rgba(6,182,212,0.5)]">
                <Kicker>{homepage.hero.heroPanel.eyebrow}</Kicker>
                <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.04em]">{homepage.hero.heroPanel.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">{homepage.hero.heroPanel.body}</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3 xl:grid-cols-3">
                  {homepage.hero.heroPanel.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.05] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">{stat.label}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(160deg,#0d1d33,#08101d)] p-6">
                  <Kicker>Flagship Product</Kicker>
                  <h3 className="mt-4 text-2xl font-semibold">{featuredProduct.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{featuredProduct.summary}</p>
                  <div className="mt-6 grid gap-3">
                    {homepage.hero.heroPanel.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="inline-flex items-center justify-between rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                      >
                        <span>{item.label}</span>
                        <span>+</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[#0b1422] p-6">
                  <Kicker>Portfolio Logic</Kicker>
                  <div className="mt-5 space-y-4">
                    {products.map((product, index) => (
                      <div key={product.slug} className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">0{index + 1}</p>
                        <p className="mt-2 text-sm font-semibold text-white">{product.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{product.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="pb-16">
      <PageContainer>
        <div className="rounded-[2.2rem] border border-white/10 bg-[#0b1423] p-4">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {trustPoints.map((point, index) => (
              <div
                key={point}
                className={`rounded-[1.5rem] border px-4 py-5 transition duration-300 hover:-translate-y-0.5 ${
                  index === 0
                    ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                    : index === 4
                    ? "border-amber-300/20 bg-amber-300/10 text-amber-100"
                    : "border-white/[0.08] bg-white/[0.04] text-slate-200"
                }`}
              >
                <p className="text-sm font-medium leading-6">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function DecisionSection() {
  return (
    <section className="py-20">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#0c1728,#09111d)] p-7 sm:p-9">
            <Kicker>{homepage.decisionGateway.eyebrow}</Kicker>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.decisionGateway.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.decisionGateway.description}</p>
            <div className="mt-8 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-5">
              <p className="text-sm leading-7 text-slate-300">
                Future Logix is intentionally presented as a parent technology brand with two clean entry points:
                a product path for solution buyers, and a service path for organizations that need design,
                implementation, or long-term support.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {decisionCards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-[2.25rem] border p-7 sm:p-8 ${
                  index === 0
                    ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]"
                    : "border-white/10 bg-[linear-gradient(145deg,#111c30,#0b111c)]"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">{card.meta}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{card.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{card.summary}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{card.audience}</p>
                  </div>
                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-200">
                      0{index + 1}
                    </span>
                    <Link href={card.href} className={index === 0 ? primaryButton : secondaryButton}>
                      {card.cta}
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

export function ProductSpotlight() {
  const classPoint = products[0];
  const futureProducts = products[1];

  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div>
            <Kicker tone="light">{homepage.featuredProductsIntro.eyebrow}</Kicker>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {homepage.featuredProductsIntro.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{homepage.featuredProductsIntro.description}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.42)]">
            <Kicker tone="light">{futureProducts.status}</Kicker>
            <h3 className="mt-4 text-2xl font-semibold">{futureProducts.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{futureProducts.summary}</p>
            <Link href={futureProducts.ctas[0].href} className="mt-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
              {futureProducts.ctas[0].label}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.42)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Kicker tone="light">{classPoint.status}</Kicker>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{classPoint.name}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{classPoint.summary}</p>
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-950">Who it serves:</span> {classPoint.audience}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-950">What it solves:</span> {classPoint.problem}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {classPoint.ctas.map((cta, index) => (
                    <Link
                      key={`${classPoint.slug}-${cta.href}`}
                      href={cta.href}
                      className={
                        index === 0
                          ? "inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                          : "inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                      }
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,#f8fbff,#eef5ff)] p-6">
                <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)]">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">Learning Session</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">Interactive classroom workspace</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Active</span>
                  </div>
                  <div className="mt-5 grid gap-4">
                    <div className="rounded-[1.2rem] bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Participation</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">Track student responses, session flow, and engagement in one place.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.2rem] bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Structure</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">Run more organized classes and training sessions.</p>
                      </div>
                      <div className="rounded-[1.2rem] bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Visibility</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">See what is happening during learning delivery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className={`${darkPanel} p-7`}>
              <Kicker>Why this matters</Kicker>
              <p className="mt-5 text-base leading-8 text-slate-300">
                ClassPoint is presented as more than a named product. It now reads like a flagship offering inside a
                broader company strategy, which makes Future Logix feel more like a real portfolio brand.
              </p>
            </div>
            <div className={`${darkPanel} p-7`}>
              <Kicker>Portfolio signal</Kicker>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.3rem] border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-white">Flagship first</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">One strong visible product gives the parent brand immediate substance.</p>
                </div>
                <div className="rounded-[1.3rem] border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-white">Expansion-ready</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">The structure leaves room for future products without changing the homepage logic again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function ServicesBand() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <Kicker>{homepage.servicesIntro.eyebrow}</Kicker>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.servicesIntro.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.servicesIntro.description}</p>
            <Link href="/services" className="mt-8 inline-flex rounded-full border border-white/[0.14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]">
              Explore Services
            </Link>
          </div>

          <div className="grid gap-5">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  service.slug === "workflow-automation" || service.slug === "custom-software-development"
                    ? "border-cyan-300/20 bg-[linear-gradient(145deg,#10233d,#0b1321)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.2fr_0.5fr_0.3fr] lg:items-start">
                  <div>
                    <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-sm font-semibold text-slate-200">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{service.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{service.value}</p>
                    {service.href !== "/services" && (
                      <Link
                        href={service.href}
                        className="mt-5 inline-flex rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                      >
                        View service
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-200"
                      >
                        {bullet}
                      </span>
                    ))}
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

export function IndustriesSection() {
  return (
    <section className="bg-[#0b1423] py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,#101b2f,#0b1423)] p-8">
            <Kicker>{homepage.industriesIntro.eyebrow}</Kicker>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.industriesIntro.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.industriesIntro.description}</p>
            <div className="mt-8 rounded-[1.6rem] border border-white/[0.08] bg-white/[0.04] p-5">
              <p className="text-sm leading-7 text-slate-300">
                The goal is not to claim every industry. It is to show where Future Logix is most likely to be useful,
                credible, and commercially relevant.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`rounded-[2rem] border p-6 ${
                  index === 0 || index === 3
                    ? "border-cyan-300/20 bg-cyan-300/10"
                    : "border-white/10 bg-white/[0.04]"
                } ${index === 4 ? "md:col-span-2" : ""}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">{industry.name}</p>
                <p className="mt-4 text-lg font-semibold text-white">{industry.organization}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">Need:</span> {industry.need}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">Future Logix:</span> {industry.help}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function PositioningSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="grid gap-6">
            <div>
              <Kicker>{homepage.differentiatorsIntro.eyebrow}</Kicker>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.differentiatorsIntro.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.differentiatorsIntro.description}</p>
            </div>
            <div className={`${darkPanel} p-7`}>
              <p className="text-lg font-semibold text-white">
                Future Logix should feel like a company that can build, deliver, and stay relevant as client needs evolve.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border p-6 sm:p-7 ${
                  index === 0 || index === 5
                    ? "border-amber-300/20 bg-amber-300/10"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <p className="text-sm font-semibold text-cyan-300">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="bg-[#f4f6fa] py-24 text-slate-950">
      <PageContainer>
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker tone="light">{homepage.outcomesIntro.eyebrow}</Kicker>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.outcomesIntro.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{homepage.outcomesIntro.description}</p>
          </div>
          <div className="rounded-[2.3rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-52px_rgba(15,23,42,0.4)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item, index) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-cyan-700">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function InsightsSection() {
  const featuredInsight = insights[0];
  const secondaryInsights = insights.slice(1);

  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(160deg,#101d33,#0b1320)] p-8 sm:p-10">
            <Kicker>{homepage.insightsIntro.eyebrow}</Kicker>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.insightsIntro.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.insightsIntro.description}</p>

            <div className="mt-8 rounded-[1.8rem] border border-white/[0.08] bg-white/[0.04] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">{featuredInsight.category}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{featuredInsight.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{featuredInsight.summary}</p>
              <Link href="/insights" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Explore Insights
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {secondaryInsights.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border p-7 ${
                  index === 0 ? "border-cyan-300/20 bg-cyan-300/10" : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">{item.category}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                <Link href="/insights" className="mt-6 inline-flex rounded-full border border-white/[0.12] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.07]">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export function FinalChoices() {
  return (
    <section className="pb-24 pt-6">
      <PageContainer>
        <div className="rounded-[2.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),linear-gradient(145deg,#111f36,#09111d)] p-8 sm:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <div>
              <Kicker>{homepage.finalCta.eyebrow}</Kicker>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{homepage.finalCta.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{homepage.finalCta.body}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Product Path</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Explore products and portfolio direction</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Start here if you are looking for a product, evaluating ClassPoint, or trying to understand where the Future Logix portfolio is headed.
                </p>
                <Link href={homepage.finalCta.secondaryHref} className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                  {homepage.finalCta.secondaryLabel}
                </Link>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Conversation Path</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Talk through a product, service, or partnership need</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Start here if you need a technology partner, want to discuss implementation, or are not yet sure whether your need fits products, services, or both.
                </p>
                <Link href={homepage.finalCta.primaryHref} className={primaryButton + " mt-6"}>
                  {homepage.finalCta.primaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
