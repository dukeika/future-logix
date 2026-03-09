'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { featuredProduct, navigation } from "../../content/siteContent";

const isActive = (pathname, href) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101f]/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                FL
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Future Logix</p>
                <p className="text-sm font-medium text-white">Products and technology services</p>
              </div>
            </Link>
            <Link
              href={featuredProduct.href}
              className="hidden rounded-full border border-amber-300/30 bg-amber-300/12 px-3 py-1 text-xs font-semibold text-amber-100 transition hover:bg-amber-300/18 lg:inline-flex"
            >
              ClassPoint
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(pathname, item.href)
                    ? "bg-white text-slate-950"
                    : "text-slate-200 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 lg:inline-flex"
            >
              Talk to Us
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-100 lg:hidden"
              aria-label="Toggle navigation"
            >
              <span className="text-lg">{isOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-3 border-t border-white/10 pb-4 pt-4 lg:hidden">
            <Link
              href={featuredProduct.href}
              className="block rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100"
              onClick={() => setIsOpen(false)}
            >
              Explore ClassPoint
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(pathname, item.href) ? "bg-white text-slate-950" : "bg-white/5 text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
