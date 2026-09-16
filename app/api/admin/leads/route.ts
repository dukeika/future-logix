import { NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminRequest } from "@/lib/admin-request";
import { createLead, listLeads } from "@/lib/leads";
import { LEAD_CHANNELS, LEAD_STATUSES } from "@/types";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };

const createLeadSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(160).optional(),
  interest: z.string().trim().min(1, "Interest is required.").max(120),
  message: z.string().trim().min(1, "Add a short note about what they asked for.").max(4000),
  channel: z.enum(LEAD_CHANNELS),
  status: z.enum(LEAD_STATUSES).optional(),
  notes: z.string().trim().max(4000).optional(),
  nextFollowUpAt: z.string().trim().max(40).optional(),
  utmSource: z.string().trim().max(200).optional(),
  utmCampaign: z.string().trim().max(200).optional(),
});

export async function GET(request: Request) {
  const unauthorized = requireAdminRequest(request);
  if (unauthorized) return unauthorized;

  try {
    const leads = await listLeads();
    return NextResponse.json({ leads }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/leads] GET failed", error);
    return NextResponse.json(
      { error: "Unable to load leads right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

export async function POST(request: Request) {
  const unauthorized = requireAdminRequest(request);
  if (unauthorized) return unauthorized;

  const payload = await request.json().catch(() => null);
  const parsed = createLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid lead payload." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  try {
    const lead = await createLead({
      ...parsed.data,
      email: parsed.data.email || undefined,
    });
    return NextResponse.json({ lead }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/leads] POST failed", error);
    return NextResponse.json(
      { error: "Unable to save lead right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
