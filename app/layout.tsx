import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futurelogix.ng"),
  title: {
    default: "Future Logix Limited",
    template: "%s | Future Logix Limited",
  },
  description:
    "Practical digital products and technology services for growing African organizations.",
  applicationName: "Future Logix",
  keywords: [
    "Future Logix",
    "Nigeria technology company",
    "digital products",
    "technology services",
    "African businesses",
  ],
  openGraph: {
    type: "website",
    siteName: "Future Logix Limited",
    title: "Future Logix Limited",
    description:
      "Practical digital products and technology services for growing African organizations.",
    url: "https://futurelogix.ng",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Logix Limited",
    description:
      "Practical digital products and technology services for growing African organizations.",
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
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
