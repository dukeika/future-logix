import Link from "next/link";
import { XCircle } from "lucide-react";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PayFailedPage() {
  return (
    <section className="section-shell">
      <SiteContainer className="max-w-3xl">
        <Card>
          <CardHeader className="items-center text-center">
            <XCircle className="h-10 w-10 text-destructive" />
            <CardTitle className="text-3xl text-slate-950">Payment not completed</CardTitle>
            <CardDescription>
              Your payment was not completed. You can try again or return to the homepage.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/">Back to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </SiteContainer>
    </section>
  );
}
