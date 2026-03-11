import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Future Logix Limited.",
};

export default function TermsPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-4xl space-y-8 px-6 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="11"
            title="Terms of Service"
            subtitle="The terms governing use of the Future Logix website and services."
          />

          <div className="space-y-8 text-base leading-8 text-muted-foreground">
            <section>
              <p className="font-medium text-foreground">Last updated: March 2026</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using the Future Logix website and services, you agree to be bound
                by these Terms of Service. If you do not agree, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Use of Services</h2>
              <p className="mt-3">
                Future Logix provides technology consulting, product implementation, and software
                development services. All services are subject to separate written agreements
                specifying scope, deliverables, timelines, and fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <div className="mt-3 space-y-4">
                <p>
                  <span className="font-medium text-foreground">Our Content:</span> All content on
                  this website, including text, graphics, logos, and software, is the property of
                  Future Logix and protected by intellectual property laws.
                </p>
                <p>
                  <span className="font-medium text-foreground">Your Content:</span> You retain
                  ownership of content you submit to us. You grant us a license to use such content
                  solely to provide requested services.
                </p>
                <p>
                  <span className="font-medium text-foreground">Client Work:</span> Ownership of
                  deliverables is specified in individual project agreements. Unless otherwise
                  agreed, Future Logix retains rights to pre-existing intellectual property and
                  general methodologies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Prohibited Activities</h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 space-y-2">
                <li>Use our services for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with other users&apos; access to services</li>
                <li>Transmit malware or harmful code</li>
                <li>Reverse engineer any aspect of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Future Logix shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of our services.
              </p>
              <p className="mt-3">
                Our total liability for any claim arising from these terms or our services shall
                not exceed the amount paid by you to Future Logix in the twelve months preceding
                the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Indemnification</h2>
              <p className="mt-3">
                You agree to indemnify and hold harmless Future Logix and its officers, directors,
                employees, and agents from any claims, damages, or expenses arising from your use
                of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Termination</h2>
              <p className="mt-3">
                We may terminate or suspend your access to our services immediately for any breach
                of these terms. Provisions concerning intellectual property, limitation of
                liability, and indemnification survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Governing Law</h2>
              <p className="mt-3">
                These Terms shall be governed by the laws of the Federal Republic of Nigeria. Any
                disputes shall be subject to the exclusive jurisdiction of the courts of Lagos
                State.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="mt-3">
                We may revise these Terms at any time. The current version will always be posted on
                our website with the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Severability</h2>
              <p className="mt-3">
                If any provision of these Terms is held invalid or unenforceable, the remaining
                provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
              <div className="mt-3 space-y-1">
                <p>Future Logix Limited</p>
                <p>Email: admin@futurelogix.ng</p>
                <p>Phone: +23470611006212</p>
              </div>
            </section>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
