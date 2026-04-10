import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Future Logix Limited.",
};

export default function PrivacyPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-4xl space-y-8 px-6 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="10"
            title="Privacy Policy"
            subtitle="How Future Logix collects, uses, and protects your information."
          />

          <div className="space-y-8 text-base leading-8 text-muted-foreground">
            <section>
              <p className="font-medium text-foreground">Last updated: March 2026</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p className="mt-3">
                Future Logix Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
                your privacy. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website `futurelogix.ng` and use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <div className="mt-3 space-y-4">
                <p>
                  <span className="font-medium text-foreground">Personal Information:</span> We
                  may collect personal information that you voluntarily provide when contacting us,
                  including name, email address, phone number, organization name, and message
                  content.
                </p>
                <p>
                  <span className="font-medium text-foreground">Usage Data:</span> We
                  automatically collect certain information when you visit our website, including IP
                  address, browser type, operating system, access times, and pages viewed.
                </p>
                <p>
                  <span className="font-medium text-foreground">Cookies:</span> We use cookies and
                  similar tracking technologies to track activity on our website and hold certain
                  information to improve your experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="mt-3 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Improve our website and service offerings</li>
                <li>Communicate with you about updates, services, and relevant content</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against unauthorized access and legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Information Sharing</h2>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Service providers who assist in our operations (hosting, email delivery, analytics)</li>
                <li>Professional advisors (legal, accounting)</li>
                <li>Government authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-3">
                We implement appropriate technical and organizational measures to protect your
                personal information. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at hello@futurelogix.ng.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Retention</h2>
              <p className="mt-3">
                We retain personal information only as long as necessary to fulfill the purposes
                for which it was collected, including legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Third-Party Links</h2>
              <p className="mt-3">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices of these websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy periodically. The updated version will be
                indicated by the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Cookie Choices</h2>
              <p className="mt-3">
                When you visit our website, you can accept or reject optional analytics cookies
                through the cookie notice shown on the site. Essential cookies required for basic
                site operation remain active regardless of that choice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <div className="mt-3 space-y-1">
                <p>Future Logix Limited</p>
                <p>Email: hello@futurelogix.ng</p>
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
