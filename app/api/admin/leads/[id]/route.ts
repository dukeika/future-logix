import { NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminRequest } from "@/lib/admin-request";
import { updateLead } from "@/lib/leads";
import { LEAD_CHANNELS, LEAD_STATUSES } from "@/types";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };

const updateLeadSchema = z
  .object({
    status: z.enum(LEAD_STATUSES).optional(),
    notes: z.string().trim().max(4000).optional(),
    nextFollowUpAt: z.string().trim().max(40).nullable().optional(),
    channel: z.enum(LEAD_CHANNELS).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, { message: "Nothing to update." });

type RouteContext = { params: { id: string } };

export async function PATCH(request: Request, { params }: RouteContext) {
  const unauthorized = requireAdminRequest(request);
  if (unauthorized) return unauthorized;

  const payload = await request.json().catch(() => null);
  const parsed = updateLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid update." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  try {
    const lead = await updateLead(params.id, {
      ...parsed.data,
      nextFollowUpAt: parsed.data.nextFollowUpAt === "" ? null : parsed.data.nextFollowUpAt,
    });

    if (!lead) {
      return NextResponse.json({ error: "Lead not found." }, { status: 404, headers: noStoreHeaders });
    }

    return NextResponse.json({ lead }, { headers: noStoreHeaders });
  } catch (error) {
    if (error instanceof Error && error.name === "ConditionalCheckFailedException") {
      return NextResponse.json({ error: "Lead not found." }, { status: 404, headers: noStoreHeaders });
    }

    console.error("[api/admin/leads/[id]] PATCH failed", error);
    return NextResponse.json(
      { error: "Unable to update lead right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
