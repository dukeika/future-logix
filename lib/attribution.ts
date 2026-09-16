"use client";

import type { LeadAttribution } from "@/types";

const STORAGE_KEY = "future-logix-attribution";
const MAX_LENGTH = 200;

const UTM_KEYS: Array<[string, keyof LeadAttribution]> = [
  ["utm_source", "utmSource"],
  ["utm_medium", "utmMedium"],
  ["utm_campaign", "utmCampaign"],
  ["utm_content", "utmContent"],
  ["utm_term", "utmTerm"],
];

function clip(value: string | null | undefined) {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, MAX_LENGTH) : undefined;
}

function readStored(): LeadAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadAttribution) : null;
  } catch {
    return null;
  }
}

/**
 * Records campaign attribution for this browser session.
 *
 * A visit that carries UTM parameters always wins, so the ad or post that
 * brought the visitor is what gets attached to their enquiry. Without UTMs we
 * only record the first landing page and external referrer, and never
 * overwrite an existing record.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utm: Partial<LeadAttribution> = {};

  for (const [param, key] of UTM_KEYS) {
    const value = clip(params.get(param));
    if (value) utm[key] = value;
  }

  const hasUtm = Object.keys(utm).length > 0;
  const stored = readStored();

  if (stored && !hasUtm) return;

  const attribution: LeadAttribution = {
    ...utm,
    landingPage: clip(window.location.pathname + window.location.search),
  };

  const referrer = clip(document.referrer);
  if (referrer && !referrer.includes(window.location.host)) {
    attribution.referrer = referrer;
  }

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage may be blocked; the enquiry still submits without attribution.
  }
}

export function getAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};
  return readStored() ?? {};
}
