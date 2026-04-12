import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "User Data Deletion",
  description: "How to request deletion of personal data and connected app data from Future Logix.",
};

export default function DataDeletionPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-4xl space-y-8 px-6 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="12"
            title="User Data Deletion"
            subtitle="How to request deletion of your data from Future Logix and connected app integrations."
          />

          <div className="space-y-8 text-base leading-8 text-muted-foreground">
            <section>
              <p className="font-medium text-foreground">Last updated: April 12, 2026</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How to Request Deletion</h2>
              <p className="mt-3">
                If you want Future Logix Limited to delete personal data or data obtained through a
                connected platform such as Facebook or Instagram, send an email to
                admin@futurelogix.ng with the subject line &quot;Data Deletion Request.&quot;
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">What to Include</h2>
              <ul className="mt-3 space-y-2">
                <li>Your full name</li>
                <li>The email address or phone number associated with your account or request</li>
                <li>The product, service, or app integration involved</li>
                <li>Your Facebook Page, Instagram account, or other connected account identifier, if relevant</li>
                <li>Any extra context that helps us locate the data safely</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">What Happens Next</h2>
              <ul className="mt-3 space-y-2">
                <li>We review the request and verify identity where necessary to protect account security.</li>
                <li>We delete or anonymize the data that is no longer required for legal, billing, fraud-prevention, or record-keeping purposes.</li>
                <li>We send a confirmation response after the request has been processed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Platform Callback Support</h2>
              <p className="mt-3">
                If a platform requires an automated deletion callback, Future Logix also provides a
                machine-readable endpoint at `/api/data-deletion`.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <div className="mt-3 space-y-1">
                <p>Future Logix Limited</p>
                <p>Email: admin@futurelogix.ng</p>
                <p>Phone: +234 706 110 6212</p>
                <p>Address: Lagos, Nigeria</p>
              </div>
            </section>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
