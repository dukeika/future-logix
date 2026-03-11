import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

import "./globals.css";

const GOOGLE_SEARCH_CONSOLE_TOKEN = "your-google-verification-code";
const LOGO_URL = "https://futurelogix.ng/logo.png";
const LINKEDIN_URL = "https://linkedin.com/company/futurelogix";
const TWITTER_URL = "https://twitter.com/futurelogix";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futurelogix.ng"),
  title: {
    default: "Future Logix | Practical Technology for African Organizations",
    template: "%s | Future Logix",
  },
  description:
    "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: ClassPoint.",
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
  verification: {
    google: GOOGLE_SEARCH_CONSOLE_TOKEN,
  },
  openGraph: {
    type: "website",
    siteName: "Future Logix",
    title: "Future Logix",
    description:
      "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: ClassPoint.",
    url: "https://futurelogix.ng",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Logix",
    description:
      "Future Logix builds practical digital products and technology services for growing African organizations. Flagship product: ClassPoint.",
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
      email: "admin@futurelogix.ng",
      telephone: "+23470611006212",
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
      </body>
    </html>
  );
}
