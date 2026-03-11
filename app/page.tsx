import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <IndustriesSection />
      {/* Upcoming sections: industries, insights, and contact CTA */}
    </>
  );
}
