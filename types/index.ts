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

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author?: string;
  publishedAt: string;
  content?: string[];
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

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  interest: string;
  message: string;
  source: string;
  submittedAt: string;
  status: "new" | "resolved";
  notes?: string;
  referralSource?: string;
  ipAddress?: string;
}
