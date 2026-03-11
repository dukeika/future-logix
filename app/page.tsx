import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical Technology Products & Services for African Organizations",
  description:
    "Future Logix helps African organizations operate better with ClassPoint, AI automation, web development, and AWS architecture.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhySection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
