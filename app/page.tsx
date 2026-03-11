import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      {/* Upcoming sections: industries, insights, and contact CTA */}
    </>
  );
}
