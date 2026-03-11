import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";

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
