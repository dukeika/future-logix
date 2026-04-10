import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { AnalyticsScripts } from "@/components/monitoring/AnalyticsScripts";
import { WebVitalsReporter } from "@/components/monitoring/WebVitalsReporter";
import { Navigation } from "@/components/Navigation";
import { CookieBanner } from "@/components/shared/CookieBanner";

import "./globals.css";

const LOGO_URL = "https://futurelogix.ng/images/future-logix-logo.png";
const APPLE_TOUCH_ICON_URL = "https://futurelogix.ng/apple-touch-icon.png";
const OG_IMAGE_URL = "https://futurelogix.ng/og-image.png";
const TWITTER_IMAGE_URL = "https://futurelogix.ng/twitter-image.png";
const LINKEDIN_URL = "https://linkedin.com/company/futurelogix";
const TWITTER_URL = "https://twitter.com/futurelogix";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futurelogix.ng"),
  title: {
    default: "Future Logix | Practical Technology for African Organizations",
    template: "%s | Future Logix",
  },
  description:
    "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: SchoolsRep.",
  applicationName: "Future Logix",
  keywords:
    "technology services Nigeria, school management software, AI automation, AWS architecture, business automation Africa",
  authors: [{ name: "Future Logix Limited" }],
  creator: "Future Logix Limited",
  publisher: "Future Logix Limited",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "https://futurelogix.ng/favicon.ico" }],
    apple: [{ url: APPLE_TOUCH_ICON_URL }],
    shortcut: [{ url: "https://futurelogix.ng/favicon.ico" }],
  },
  /* Google Search Console verified via DNS TXT record - Domain: futurelogix.ng */
  openGraph: {
    type: "website",
    siteName: "Future Logix",
    title: "Future Logix",
    description:
      "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: SchoolsRep.",
    url: "https://futurelogix.ng",
    locale: "en_NG",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Future Logix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Logix",
    description:
      "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: SchoolsRep.",
    images: [TWITTER_IMAGE_URL],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0066CC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Future Logix Limited",
    url: "https://futurelogix.ng",
    logo: LOGO_URL,
    sameAs: [LINKEDIN_URL, TWITTER_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@futurelogix.ng",
      telephone: "+2347061106212",
      areaServed: "Africa",
      availableLanguage: ["en"],
    },
  };

  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AnalyticsScripts />
        <WebVitalsReporter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main id="main-content" className="flex-1 pt-20 sm:pt-24">
            {children}
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
