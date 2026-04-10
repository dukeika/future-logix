import Link from "next/link";
import { Grid2x2, MessageCircle } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-5xl">
            <SectionHeader
              number="06"
              title="Next Step"
              subtitle="Looking for a product, a technology partner, or both? Start with the right conversation."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="group">
              <Card className="h-full border-primary/15 bg-gradient-to-br from-primary/10 via-white to-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                <CardHeader className="space-y-4 p-6">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                    <Grid2x2 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    Explore Products and Portfolio Direction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <p className="text-base leading-8 text-muted-foreground">
                    Start here if you are looking for a product, evaluating SchoolsRep, or trying
                    to understand where the Future Logix portfolio is headed.
                  </p>
                  <Button asChild className="h-12 w-full rounded-[1.2rem] justify-center">
                    <Link href="/products">Explore Products</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="h-full border-secondary/20 bg-gradient-to-br from-secondary/10 via-white to-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                <CardHeader className="space-y-4 p-6">
                  <div className="rounded-2xl bg-secondary/15 p-3 text-secondary w-fit">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    Talk Through a Product, Service, or Partnership Need
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <p className="text-base leading-8 text-muted-foreground">
                    Start here if you need a technology partner, want to discuss implementation, or
                    are not yet sure whether your need fits products, services, or both.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 w-full rounded-[1.2rem] justify-center bg-white/80"
                  >
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
