import { NextResponse, type NextRequest } from "next/server";

const APEX_HOST = "futurelogix.ng";

const PERMANENT_REDIRECTS: Record<string, string> = {
  "/talk-to-us": "/contact",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  if (host.toLowerCase().startsWith("www.")) {
    const target = new URL(url.toString());
    target.protocol = "https:";
    target.hostname = APEX_HOST;
    target.port = "";
    return NextResponse.redirect(target, 301);
  }

  const redirectTo = PERMANENT_REDIRECTS[url.pathname];
  if (redirectTo) {
    const target = new URL(url.toString());
    target.protocol = "https:";
    target.hostname = APEX_HOST;
    target.port = "";
    target.pathname = redirectTo;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.well-known).*)"],
};
