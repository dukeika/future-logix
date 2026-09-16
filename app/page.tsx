import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhySection } from "@/components/sections/WhySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future Logix | Products and Technology Services for African Organizations",
  description:
    "Future Logix builds and markets practical technology products, including SchoolsRep, alongside AI automation, web development, AWS architecture, and modernization services.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: ["/og-image.png"] },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofSection />
      <ProductsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhySection />
      <WhoWeAreSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
