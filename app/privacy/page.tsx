import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Future Logix. Full policy content coming soon.",
};

export default function PrivacyPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-3xl space-y-4 px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="text-base leading-8 text-muted-foreground">Privacy Policy - Coming soon</p>
        </div>
      </SiteContainer>
    </section>
  );
}
