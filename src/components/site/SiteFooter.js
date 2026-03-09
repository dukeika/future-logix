import Link from "next/link";
import { footerGroups } from "../../content/siteContent";

const footerGroup = (title, items) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{title}</h3>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-sm text-slate-200 transition hover:text-white">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#060d19] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Future Logix Limited</p>
            <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white">
              Building products and delivering practical technology for businesses across Africa.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Future Logix is the parent technology brand behind ClassPoint and a growing portfolio of products, platforms,
              and delivery services for ambitious organizations.
            </p>
          </div>

          {footerGroup("Products", footerGroups.products)}
          {footerGroup("Services", footerGroups.services)}
          {footerGroup("Company", footerGroups.company)}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <p>Future Logix Limited</p>
              <p>Lagos, Nigeria</p>
              <p>
                <a href="mailto:admin@futurelogix.ng" className="transition hover:text-white">
                  admin@futurelogix.ng
                </a>
              </p>
              <p>
                <a href="tel:+2347061106212" className="transition hover:text-white">
                  +234 706 110 6212
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Future Logix Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Parent brand for products and services</span>
            <span>Built for long-term scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
