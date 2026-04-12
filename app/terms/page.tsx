import type { Metadata } from "next";

import { SiteContainer } from "@/components/shared/site-container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Future Logix Limited, its website, and connected app integrations.",
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
              <p className="font-medium text-foreground">Last updated: April 12, 2026</p>
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
                Future Logix Limited provides technology consulting, product implementation, and
                software development services, including websites, internal tools, content
                operations workflows, and third-party platform integrations. All services are
                subject to separate written agreements specifying scope, deliverables, timelines,
                and fees where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Service Engagement</h2>
              <p className="mt-3">
                All professional services require a written Statement of Work or Service Agreement
                specifying scope, deliverables, timelines, fees, and payment terms. No service is
                considered engaged until both parties have executed such agreement. Website
                information is illustrative only and does not constitute an offer to contract.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Accounts and Integrations</h2>
              <p className="mt-3">
                If you connect a third-party service or social platform to a Future Logix workflow,
                you represent that you are authorized to do so and that you will use the
                integration in compliance with the applicable platform rules, community standards,
                and laws. We may suspend or disconnect integrations that create security, abuse, or
                compliance risks.
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
              <h2 className="text-xl font-semibold text-foreground">Privacy and Data Handling</h2>
              <p className="mt-3">
                Your use of the website and any connected application workflows is also governed by
                our Privacy Policy. If you want your data deleted from our systems, follow the
                instructions published at `/data-deletion` or contact admin@futurelogix.ng.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Future Logix Limited shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, or business interruption,
                arising from your use of our services or website.
              </p>
              <p className="mt-3">
                Our total liability for any claim shall not exceed the total amount paid by you to
                Future Logix Limited in the twelve (12) months preceding the claim, or ₦500,000
                (Five Hundred Thousand Naira), whichever is greater.
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
                disputes shall first attempt resolution through good faith negotiation, then
                mediation in Lagos, Nigeria, and finally the courts of Lagos State if necessary.
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
