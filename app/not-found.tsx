import Link from "next/link";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-3xl space-y-6 px-6 py-12 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">404</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Page not found</h1>
          <p className="text-base leading-8 text-muted-foreground">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="/">Go home</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-white/70">
              <Link href="/products">Products</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-white/70">
              <Link href="/services">Services</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-white/70">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
