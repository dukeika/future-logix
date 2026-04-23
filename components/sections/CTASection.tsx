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
              subtitle="Choose the next step that matches your need right now."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="group">
              <Card className="h-full border-primary/15 bg-gradient-to-br from-primary/10 via-white to-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                <CardHeader className="space-y-4 p-6">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                    <Grid2x2 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Start with SchoolsRep</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <p className="text-base leading-8 text-muted-foreground">
                    Best for school leaders evaluating a ready product for operations, records,
                    communication, and fee visibility.
                  </p>
                  <Button asChild className="h-12 w-full rounded-[1.2rem] justify-center">
                    <Link href="/schoolsrep">Explore SchoolsRep</Link>
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
                  <CardTitle className="text-2xl text-foreground">Talk through your requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <p className="text-base leading-8 text-muted-foreground">
                    Best for teams that need automation, custom software, modernization support, or
                    help choosing the right path.
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
