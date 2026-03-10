"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
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
              <p className="text-lg font-semibold">Future Logix</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
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
                <a href="mailto:hello@futurelogix.ng" className="hover:text-white">
                  hello@futurelogix.ng
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                <span>+234 (0) 000 000 0000</span>
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
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/30"
              />
              <Button type="submit" className="h-11 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
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
