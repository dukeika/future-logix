import type { PropsWithChildren } from "react";

import { AdminGate } from "@/components/admin/AdminGate";
import { SiteContainer } from "@/components/shared/site-container";

export const metadata = {
  title: "Admin | Future Logix",
  description: "Internal admin dashboard for Future Logix.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="grid-bg grid-bg-mask pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-radial-fade"
      />
      <SiteContainer className="py-6">
        <AdminGate>{children}</AdminGate>
      </SiteContainer>
    </div>
  );
}
