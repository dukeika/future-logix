import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { NewsletterSignupForm } from "@/components/shared/NewsletterSignupForm";
import { SiteContainer } from "@/components/shared/site-container";
import type { FooterLink, SocialLink } from "@/types";

const quickLinks: FooterLink[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-slate-950 text-slate-100">
      <SiteContainer className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div className="space-y-5">
            <div>
              <Link
                href="/"
                aria-label="Future Logix homepage"
                className="inline-flex rounded-2xl border border-slate-200/70 bg-white px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src="/images/future-logix-logo.png"
                  alt="Future Logix"
                  width={400}
                  height={100}
                  sizes="128px"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                Products &amp; Technology Services
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Practical digital products and technology services for growing African organizations.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-secondary" />
                <a href="mailto:admin@futurelogix.ng" className="hover:text-white">
                  admin@futurelogix.ng
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                <a href="tel:*2347061106212" className="hover:text-white">
                  *2347061106212
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Quick links</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Newsletter</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Subscribe for product updates, practical insights, and company news.
              </p>
            </div>
            <NewsletterSignupForm />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Social</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-secondary/40 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 Future Logix Limited. All rights reserved.
        </div>
      </SiteContainer>
    </footer>
  );
}
