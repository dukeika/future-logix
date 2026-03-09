import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Future Logix | Products and Technology Services",
  description:
    "Future Logix Limited is a modern technology company building products and delivering practical technology services for ambitious African businesses.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Future Logix | Products and Technology Services",
    description:
      "A parent technology brand building products like ClassPoint while delivering modern product and platform services.",
    url: "/",
    siteName: "Future Logix",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Logix | Products and Technology Services",
    description:
      "Products, platforms, and practical technology services for African businesses.",
  },
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Future Logix Limited",
    url: siteUrl,
    logo: `${siteUrl}/FUTURELOGIX.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2347061106212",
      contactType: "sales",
      areaServed: "Africa",
      availableLanguage: ["en"],
    },
  };

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
