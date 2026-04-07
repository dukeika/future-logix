import { NextResponse } from "next/server";

import { isAdminSessionValid } from "@/lib/admin-session";

const noStoreHeaders = { "Cache-Control": "no-store" };

export function requireAdminRequest(request: Request) {
  if (isAdminSessionValid(request.headers.get("cookie"))) {
    return null;
  }

  return NextResponse.json(
    { error: "Admin authentication required." },
    { status: 401, headers: noStoreHeaders }
  );
}

