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
  title: "Practical Technology Products & Services for African Organizations",
  description:
    "Future Logix helps African organizations operate better with SchoolsRep, AI automation, web development, and AWS architecture.",
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
