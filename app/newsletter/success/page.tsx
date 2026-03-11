import Link from "next/link";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Newsletter Status",
  description: "Newsletter subscription status for Future Logix.",
};

type NewsletterSuccessPageProps = {
  searchParams?: {
    status?: string;
  };
};

const statusCopy: Record<string, { title: string; description: string }> = {
  confirmed: {
    title: "Subscription confirmed",
    description: "You are now subscribed to Future Logix insights.",
  },
  already: {
    title: "Already confirmed",
    description: "This email address is already subscribed to Future Logix insights.",
  },
  unsubscribed: {
    title: "Unsubscribed",
    description: "You have been removed from Future Logix insights emails.",
  },
  invalid: {
    title: "Invalid link",
    description: "This newsletter link is invalid or has expired.",
  },
  error: {
    title: "Something went wrong",
    description: "We could not complete your newsletter request. Please try again later.",
  },
};

export default function NewsletterSuccessPage({ searchParams }: NewsletterSuccessPageProps) {
  const status = searchParams?.status ?? "confirmed";
  const copy = statusCopy[status] ?? statusCopy.confirmed;

  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-3xl space-y-8 px-6 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="12"
            title="Newsletter"
            subtitle={copy.title}
            supportingCopy={copy.description}
          />
          <Button asChild className="rounded-full">
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}
