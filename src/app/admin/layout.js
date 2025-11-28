import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const hashSecret = (secret) => crypto.createHash("sha256").update(secret).digest("hex");

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }) {
  const password = process.env.ADMIN_PASSWORD;
  const session = cookies().get("admin_session")?.value || "";

  if (!password) {
    redirect("/admin/login?reason=missing-password");
  }

  const expected = hashSecret(password);
  if (session !== expected) {
    redirect(`/admin/login?redirect=/admin`);
  }

  return children;
}
