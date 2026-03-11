import type { Metadata } from "next";

import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Future Logix. Start a conversation about your technology needs in Lagos, Nigeria.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
