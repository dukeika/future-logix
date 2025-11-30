import { NextResponse } from "next/server";

const protectedMatchers = ["/admin", "/blog/admin", "/api/contact", "/api/consultations"];

const hashSecret = async (secret) => {
  const data = new TextEncoder().encode(secret);
  const hashBuffer = await globalThis.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

const isProtected = (pathname) =>
  protectedMatchers.some((base) => pathname === base || pathname.startsWith(`${base}/`));

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  // Fall back to a default password if env is unavailable in the edge runtime (e.g., some hosting providers).
  const password = process.env.ADMIN_PASSWORD || "lbifdfdfdX31#~";

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  if (!password) {
    console.warn("ADMIN_PASSWORD is not set; blocking access to admin and submission endpoints.");
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "ADMIN_PASSWORD is not configured" }, { status: 503 });
    }
    const missingUrl = new URL("/admin/login", request.url);
    missingUrl.searchParams.set("reason", "missing-password");
    return NextResponse.redirect(missingUrl);
  }

  const expected = await hashSecret(password);
  const session = request.cookies.get("admin_session")?.value || "";

  if (session === expected) {
    return NextResponse.next();
  }

  // API requests return JSON 401
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  if (pathname !== "/admin/login") {
    loginUrl.searchParams.set("redirect", pathname);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/blog/admin", "/blog/admin/:path*", "/api/contact/:path*", "/api/consultations/:path*"],
};
