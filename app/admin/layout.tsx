import type { PropsWithChildren } from "react";

import { AdminGate } from "@/components/admin/AdminGate";
import { SiteContainer } from "@/components/shared/site-container";

export const metadata = {
  title: "Admin | Future Logix",
  description: "Internal invoice management dashboard for Future Logix.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef6f7_100%)]">
      <SiteContainer className="py-6">
        <AdminGate>{children}</AdminGate>
      </SiteContainer>
    </main>
  );
}
