import Link from "next/link";

export function PageShell({ children }) {
  return <div className="min-h-screen bg-[#07111f] text-slate-100">{children}</div>;
}

export function PageContainer({ className = "", children }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({ className = "", children, tone = "default", ...props }) {
  const toneClass =
    tone === "surface"
      ? "bg-white/[0.03]"
      : tone === "light"
      ? "bg-[#f5f7fb] text-slate-950"
      : "bg-transparent";

  return (
    <section className={`py-20 sm:py-24 ${toneClass} ${className}`} {...props}>
      {children}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark" }) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const eyebrowClass = tone === "light" ? "text-cyan-700" : "text-cyan-300";
  const bodyClass = tone === "light" ? "text-slate-600" : "text-slate-300/90";

  return (
    <div className={alignClass}>
      {eyebrow && <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className={`mt-4 text-base leading-8 sm:text-lg ${bodyClass}`}>{description}</p>}
    </div>
  );
}

export function PromoStrip({ items }) {
  return (
    <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-[1.5rem] border border-white/[0.08] bg-[#0f1a2d] px-4 py-5 text-sm font-medium text-slate-200">
          {item}
        </div>
      ))}
    </div>
  );
}

export function FeatureCard({ title, description, meta, href, cta, variant = "dark", children }) {
  const classes =
    variant === "light"
      ? "border-slate-200 bg-white text-slate-950 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)]"
      : "border-white/10 bg-white/[0.04] text-white";

  return (
    <article className={`rounded-[2rem] border p-6 sm:p-8 ${classes}`}>
      {meta && <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">{meta}</p>}
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className={`mt-3 text-sm leading-7 ${variant === "light" ? "text-slate-600" : "text-slate-300"}`}>{description}</p>
      {children}
      {href && cta && (
        <Link
          href={href}
          className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${
            variant === "light"
              ? "bg-slate-950 text-white hover:bg-slate-800"
              : "bg-white text-slate-950 hover:bg-cyan-200"
          }`}
        >
          {cta}
        </Link>
      )}
    </article>
  );
}

export function CtaBand({ eyebrow, title, body, primaryHref = "/contact", primaryLabel = "Talk to Us", secondaryHref, secondaryLabel }) {
  return (
    <div className="rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,#101c33,#08111f)] p-8 sm:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-200">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="inline-flex justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex justify-center rounded-full border border-white/[0.15] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
