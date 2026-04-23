import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages["ai-automation"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `/${page.slug}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function AiAutomationLandingPage() {
  return <LandingPage page={page} />;
}
