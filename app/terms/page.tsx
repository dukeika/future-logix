import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Future Logix. Full terms content coming soon.",
};

export default function TermsPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-3xl space-y-4 px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Terms of Service</h1>
          <p className="text-base leading-8 text-muted-foreground">Terms of Service - Coming soon</p>
        </div>
      </SiteContainer>
    </section>
  );
}
