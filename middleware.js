import crypto from "crypto";
import { NextResponse } from "next/server";

const protectedMatchers = ["/admin", "/blog/admin", "/api/contact", "/api/consultations"];

const hashSecret = (secret) => crypto.createHash("sha256").update(secret).digest("hex");

const isProtected = (pathname) =>
  protectedMatchers.some((base) => pathname === base || pathname.startsWith(`${base}/`));

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.warn("ADMIN_PASSWORD is not set; blocking access to admin and submission endpoints.");
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "ADMIN_PASSWORD is not configured" }, { status: 503 });
    }
    const missingUrl = new URL("/admin/login", request.url);
    missingUrl.searchParams.set("reason", "missing-password");
    return NextResponse.redirect(missingUrl);
  }

  const expected = hashSecret(password);
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
  matcher: ["/admin/:path*", "/blog/admin/:path*", "/api/contact/:path*", "/api/consultations/:path*"],
};
