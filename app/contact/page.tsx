import type { Metadata } from "next";

import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Future Logix",
  description:
    "Get in touch with Future Logix in Lagos, Nigeria. Start a conversation about your technology, automation, AWS, or product needs.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
