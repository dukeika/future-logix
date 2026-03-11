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
