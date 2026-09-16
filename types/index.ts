import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ProductFeature {
  label: string;
  icon: LucideIcon;
}

export interface ProductDirectionItem {
  label: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  startingPrice: string;
  delivery: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}

export interface Industry {
  title: string;
  need: string;
  solution: string;
  href: string;
  icon: LucideIcon;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type InsightContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { term?: string; description: string }[] }
  | { type: "orderedList"; items: string[] };

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  /** Shorter SEO-tuned title used for <title> and og:title when set. Falls back to title. */
  seoTitle?: string;
  excerpt: string;
  author?: string;
  /** Human-readable publish date (rendered visibly, e.g. "April 2026"). */
  publishedAt: string;
  /** ISO-8601 publish date (YYYY-MM-DD). Used for Article schema + article:published_time. */
  publishedAtISO?: string;
  /** ISO-8601 modified date. Defaults to publishedAtISO if unset. */
  modifiedAtISO?: string;
  content?: InsightContentBlock[];
  status?: "draft" | "published";
  coverImageKey?: string;
  coverImageUrl?: string;
  updatedAt?: string;
  createdAt?: string;
  /** Commercial page to feature as the next step from an insight. */
  serviceLink?: string;
  /** Short CTA label for the commercial page. */
  serviceCta?: string;
}

export interface ContactInterestOption {
  value: string;
  label: string;
}

export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
  source: string;
  confirmed: boolean;
  confirmationToken: string;
  unsubscribeToken: string;
  confirmedAt?: string;
  unsubscribedAt?: string;
}

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "proposal",
  "won",
  "lost",
  "resolved",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_CHANNELS = ["website", "whatsapp", "phone", "email", "referral", "social", "other"] as const;

export type LeadChannel = (typeof LEAD_CHANNELS)[number];

export interface LeadAttribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPage?: string;
  referrer?: string;
}

export interface ContactSubmission extends LeadAttribution {
  id: string;
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  interest: string;
  message: string;
  source: string;
  channel?: LeadChannel;
  submittedAt: string;
  updatedAt?: string;
  status: LeadStatus;
  notes?: string;
  nextFollowUpAt?: string;
  referralSource?: string;
  ipAddress?: string;
}
