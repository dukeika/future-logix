import "./globals.css";

export const metadata = {
  title: "Future Logix - IT Solutions & Digital Transformation",
  description: "Leading IT solutions and digital transformation consulting firm in Lagos, Nigeria. Specializing in cloud migration, cybersecurity, and business automation.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Future Logix - IT Solutions & Digital Transformation",
    description: "Leading IT solutions and digital transformation consulting firm in Lagos, Nigeria. Specializing in cloud migration, cybersecurity, and business automation.",
    url: "/",
    siteName: "Future Logix",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Logix - IT Solutions & Digital Transformation",
    description: "Leading IT solutions and digital transformation consulting firm in Lagos, Nigeria. Specializing in cloud migration, cybersecurity, and business automation.",
  },
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Future Logix",
    url: siteUrl,
    logo: `${siteUrl}/FUTURELOGIX.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lekki",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2347061106212",
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: ["en"],
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
