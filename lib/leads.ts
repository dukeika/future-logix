import { randomUUID } from "node:crypto";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

import {
  LEAD_CHANNELS,
  LEAD_STATUSES,
  type ContactSubmission,
  type LeadChannel,
  type LeadStatus,
} from "@/types";

const CONTACT_TABLE_NAME = process.env.CONTACT_TABLE_NAME ?? "ContactSubmissions";
const AWS_REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";

const dynamoClient = new DynamoDBClient({ region: AWS_REGION });
const docClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: { removeUndefinedValues: true },
});

export type Lead = ContactSubmission;

export function isLeadStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && (LEAD_STATUSES as readonly string[]).includes(value);
}

export function isLeadChannel(value: unknown): value is LeadChannel {
  return typeof value === "string" && (LEAD_CHANNELS as readonly string[]).includes(value);
}

/** Older records only ever had "new" or "resolved"; normalise anything odd to "new". */
function normaliseLead(item: Record<string, unknown>): Lead {
  const lead = item as unknown as Lead;
  return {
    ...lead,
    status: isLeadStatus(lead.status) ? lead.status : "new",
    channel: isLeadChannel(lead.channel) ? lead.channel : "website",
  };
}

export async function listLeads(): Promise<Lead[]> {
  const leads: Lead[] = [];
  let lastKey: Record<string, unknown> | undefined;

  do {
    const result = await docClient.send(
      new ScanCommand({
        TableName: CONTACT_TABLE_NAME,
        ExclusiveStartKey: lastKey,
      })
    );

    for (const item of result.Items ?? []) {
      leads.push(normaliseLead(item));
    }

    lastKey = result.LastEvaluatedKey as Record<string, unknown> | undefined;
  } while (lastKey);

  return leads.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
}

export async function getLead(id: string): Promise<Lead | null> {
  const result = await docClient.send(
    new GetCommand({ TableName: CONTACT_TABLE_NAME, Key: { id } })
  );

  return result.Item ? normaliseLead(result.Item) : null;
}

export interface CreateLeadInput {
  name: string;
  email?: string;
  phone?: string;
  organization?: string;
  interest: string;
  message: string;
  channel: LeadChannel;
  status?: LeadStatus;
  notes?: string;
  nextFollowUpAt?: string;
  utmSource?: string;
  utmCampaign?: string;
}

/** Manual entry for leads that arrive outside the website: WhatsApp, calls, referrals. */
export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const now = new Date().toISOString();
  const lead: Lead = {
    id: randomUUID(),
    name: input.name,
    email: input.email?.trim().toLowerCase() || `no-email+${Date.now()}@leads.futurelogix.ng`,
    phone: input.phone,
    organization: input.organization,
    interest: input.interest,
    message: input.message,
    source: `manual-${input.channel}`,
    channel: input.channel,
    status: input.status ?? "new",
    notes: input.notes,
    nextFollowUpAt: input.nextFollowUpAt,
    utmSource: input.utmSource,
    utmCampaign: input.utmCampaign,
    submittedAt: now,
    updatedAt: now,
  };

  await docClient.send(new PutCommand({ TableName: CONTACT_TABLE_NAME, Item: lead }));

  return lead;
}

export interface UpdateLeadInput {
  status?: LeadStatus;
  notes?: string;
  nextFollowUpAt?: string | null;
  channel?: LeadChannel;
}

export async function updateLead(id: string, input: UpdateLeadInput): Promise<Lead | null> {
  const sets: string[] = ["#updatedAt = :updatedAt"];
  const removes: string[] = [];
  const names: Record<string, string> = { "#updatedAt": "updatedAt" };
  const values: Record<string, unknown> = { ":updatedAt": new Date().toISOString() };

  if (input.status) {
    sets.push("#status = :status");
    names["#status"] = "status";
    values[":status"] = input.status;
  }

  if (typeof input.notes === "string") {
    sets.push("#notes = :notes");
    names["#notes"] = "notes";
    values[":notes"] = input.notes;
  }

  if (input.channel) {
    sets.push("#channel = :channel");
    names["#channel"] = "channel";
    values[":channel"] = input.channel;
  }

  if (input.nextFollowUpAt === null) {
    removes.push("#nextFollowUpAt");
    names["#nextFollowUpAt"] = "nextFollowUpAt";
  } else if (typeof input.nextFollowUpAt === "string") {
    sets.push("#nextFollowUpAt = :nextFollowUpAt");
    names["#nextFollowUpAt"] = "nextFollowUpAt";
    values[":nextFollowUpAt"] = input.nextFollowUpAt;
  }

  const expression = [`SET ${sets.join(", ")}`, removes.length ? `REMOVE ${removes.join(", ")}` : ""]
    .filter(Boolean)
    .join(" ");

  const result = await docClient.send(
    new UpdateCommand({
      TableName: CONTACT_TABLE_NAME,
      Key: { id },
      UpdateExpression: expression,
      ConditionExpression: "attribute_exists(id)",
      ExpressionAttributeNames: names,
      ExpressionAttributeValues: values,
      ReturnValues: "ALL_NEW",
    })
  );

  return result.Attributes ? normaliseLead(result.Attributes) : null;
}
