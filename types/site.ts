import type { LucideIcon } from "lucide-react";

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCard {
  title: string;
  description: string;
  icon: LucideIcon;
}
