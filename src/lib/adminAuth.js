import crypto from "crypto";

const hashSecret = (secret) => crypto.createHash("sha256").update(secret).digest("hex");

export function isAdminRequest(request) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const session = request.cookies?.get("admin_session")?.value || "";
  return session === hashSecret(password);
}
