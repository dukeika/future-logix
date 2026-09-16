"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CalendarClock,
  ChevronDown,
  ChevronUp,
  Loader2,
  MessageCircle,
  Phone,
  Plus,
  RefreshCw,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Lead } from "@/lib/leads";
import { cn } from "@/lib/utils";
import { LEAD_CHANNELS, LEAD_STATUSES, type LeadChannel, type LeadStatus } from "@/types";

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal: "Proposal sent",
  won: "Won",
  lost: "Lost",
  resolved: "Resolved",
};

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-primary/10 text-primary",
  contacted: "bg-sky-500/10 text-sky-700",
  qualified: "bg-violet-500/10 text-violet-700",
  proposal: "bg-amber-500/10 text-amber-700",
  won: "bg-emerald-500/10 text-emerald-700",
  lost: "bg-rose-500/10 text-rose-700",
  resolved: "bg-slate-500/10 text-slate-600",
};

const CHANNEL_LABELS: Record<LeadChannel, string> = {
  website: "Website form",
  whatsapp: "WhatsApp",
  phone: "Phone call",
  email: "Email",
  referral: "Referral",
  social: "Social DM",
  other: "Other",
};

const INTEREST_OPTIONS = [
  "SchoolsRep",
  "AI Automation",
  "Web Application Development",
  "AWS Architecture",
  "Business Modernization",
  "General Inquiry",
];

const OPEN_STATUSES: LeadStatus[] = ["new", "contacted", "qualified", "proposal"];

type StatusFilter = "open" | "all" | LeadStatus;

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function isFollowUpDue(lead: Lead) {
  return Boolean(lead.nextFollowUpAt) && (lead.nextFollowUpAt as string).slice(0, 10) <= todayIso();
}

function describeSource(lead: Lead) {
  const campaign = [lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(" / ");
  if (campaign) return campaign;
  if (lead.channel && lead.channel !== "website") return CHANNEL_LABELS[lead.channel];
  if (lead.referrer) return `Referrer: ${lead.referrer}`;
  if (lead.referralSource) return lead.referralSource;
  return lead.source || "Direct";
}

function whatsappHref(phone?: string) {
  if (!phone) return null;
  const digits = phone.replace(/[^\d]/g, "");
  if (!digits) return null;
  const normalised = digits.startsWith("0") ? `234${digits.slice(1)}` : digits;
  return `https://wa.me/${normalised}`;
}

export function LeadsListClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("open");
  const [query, setQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  async function loadLeads(mode: "initial" | "refresh" = "refresh") {
    if (mode === "initial") setLoading(true);
    else setRefreshing(true);

    try {
      const response = await fetch("/api/admin/leads", { cache: "no-store" });
      const data = (await response.json()) as { leads?: Lead[]; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Unable to load leads.");
      setLeads(data.leads ?? []);
      setError("");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load leads.");
    } finally {
      if (mode === "initial") setLoading(false);
      else setRefreshing(false);
    }
  }

  useEffect(() => {
    void loadLeads("initial");
  }, []);

  const counts = useMemo(() => {
    const open = leads.filter((lead) => OPEN_STATUSES.includes(lead.status));
    return {
      open: open.length,
      newToday: leads.filter((lead) => lead.status === "new").length,
      due: open.filter(isFollowUpDue).length,
      won: leads.filter((lead) => lead.status === "won").length,
    };
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    return leads
      .filter((lead) => {
        if (statusFilter === "all") return true;
        if (statusFilter === "open") return OPEN_STATUSES.includes(lead.status);
        return lead.status === statusFilter;
      })
      .filter((lead) => {
        if (!normalisedQuery) return true;
        return [lead.name, lead.email, lead.organization, lead.phone, lead.interest, lead.utmCampaign]
          .filter(Boolean)
          .some((value) => (value as string).toLowerCase().includes(normalisedQuery));
      })
      .sort((a, b) => {
        const aDue = isFollowUpDue(a) ? 0 : 1;
        const bDue = isFollowUpDue(b) ? 0 : 1;
        if (aDue !== bDue) return aDue - bDue;
        return a.submittedAt < b.submittedAt ? 1 : -1;
      });
  }, [leads, query, statusFilter]);

  function handleLeadUpdated(updated: Lead) {
    setLeads((current) => current.map((lead) => (lead.id === updated.id ? updated : lead)));
  }

  function handleLeadCreated(created: Lead) {
    setLeads((current) => [created, ...current]);
    setShowAddForm(false);
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <SummaryTile label="Open leads" value={counts.open} icon={Users} />
        <SummaryTile label="Untouched (new)" value={counts.newToday} icon={Plus} accent="amber" />
        <SummaryTile label="Follow-ups due" value={counts.due} icon={CalendarClock} accent={counts.due ? "rose" : "muted"} />
        <SummaryTile label="Won" value={counts.won} icon={MessageCircle} accent="emerald" />
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-slate-950">Leads</CardTitle>
            <CardDescription>
              Every enquiry from the website, plus WhatsApp and phone leads you log by hand. Work them from
              new to won.
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              className="gap-2"
              onClick={() => void loadLeads()}
              disabled={refreshing}
            >
              {refreshing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Refresh
            </Button>
            <Button type="button" className="gap-2" onClick={() => setShowAddForm((value) => !value)}>
              <Plus className="h-4 w-4" />
              {showAddForm ? "Close" : "Log a lead"}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          {showAddForm ? (
            <NewLeadForm onCreated={handleLeadCreated} onCancel={() => setShowAddForm(false)} />
          ) : null}

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-1.5">
              {(["open", "all", ...LEAD_STATUSES] as StatusFilter[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStatusFilter(value)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors",
                    statusFilter === value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-white/80 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {value === "open" ? "Open" : value === "all" ? "All" : STATUS_LABELS[value]}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, school, phone, campaign"
                className="pl-9"
              />
            </div>
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          {loading ? (
            <div className="flex min-h-[20vh] items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading leads" />
            </div>
          ) : filteredLeads.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border/60 px-4 py-6 text-center text-sm text-muted-foreground">
              No leads match this view yet. Website enquiries appear here automatically; log WhatsApp and
              phone leads with the button above.
            </p>
          ) : (
            <div className="space-y-3">
              {filteredLeads.map((lead) => (
                <LeadRow key={lead.id} lead={lead} onUpdated={handleLeadUpdated} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function SummaryTile({
  label,
  value,
  icon: Icon,
  accent = "primary",
}: {
  label: string;
  value: number;
  icon: typeof Users;
  accent?: "primary" | "amber" | "rose" | "emerald" | "muted";
}) {
  const accentClass = {
    primary: "bg-primary/10 text-primary",
    amber: "bg-amber-500/15 text-amber-600",
    rose: "bg-rose-500/15 text-rose-600",
    emerald: "bg-emerald-500/15 text-emerald-600",
    muted: "bg-slate-500/10 text-slate-500",
  }[accent];

  return (
    <div className="bento-card p-5">
      <div className={cn("inline-flex rounded-2xl p-2.5", accentClass)}>
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

function LeadRow({ lead, onUpdated }: { lead: Lead; onUpdated: (lead: Lead) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState(lead.notes ?? "");
  const [followUp, setFollowUp] = useState(lead.nextFollowUpAt?.slice(0, 10) ?? "");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const due = isFollowUpDue(lead);
  const whatsapp = whatsappHref(lead.phone);

  async function patch(body: Record<string, unknown>) {
    setSaving(true);
    setSaveError("");

    try {
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await response.json().catch(() => null)) as { lead?: Lead; error?: string } | null;
      if (!response.ok || !data?.lead) throw new Error(data?.error ?? "Unable to update lead.");
      onUpdated(data.lead);
    } catch (patchError) {
      setSaveError(patchError instanceof Error ? patchError.message : "Unable to update lead.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className={cn(
        "rounded-2xl border bg-white/85 transition-colors",
        due ? "border-rose-300/70" : "border-border/60"
      )}
    >
      <div className="flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-medium text-foreground">{lead.name}</p>
            {lead.organization ? (
              <span className="text-sm text-muted-foreground">· {lead.organization}</span>
            ) : null}
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]",
                STATUS_STYLES[lead.status]
              )}
            >
              {STATUS_LABELS[lead.status]}
            </span>
            {due ? (
              <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-600">
                Follow up today
              </span>
            ) : null}
          </div>
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
            {lead.interest} · {describeSource(lead)} · {formatDate(lead.submittedAt)}
            {lead.nextFollowUpAt ? ` · next: ${formatDate(lead.nextFollowUpAt)}` : ""}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {whatsapp ? (
            <Button asChild size="sm" variant="outline" className="h-8 gap-1.5 rounded-full">
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Button>
          ) : null}
          {lead.phone ? (
            <Button asChild size="sm" variant="outline" className="h-8 gap-1.5 rounded-full">
              <a href={`tel:${lead.phone}`}>
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
            </Button>
          ) : null}
          <select
            aria-label={`Status for ${lead.name}`}
            value={lead.status}
            disabled={saving}
            onChange={(event) => void patch({ status: event.target.value })}
            className="h-8 rounded-full border border-border/70 bg-white px-3 text-xs font-medium text-foreground"
          >
            {LEAD_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-8 rounded-full px-2"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="sr-only">Toggle details</span>
          </Button>
        </div>
      </div>

      {expanded ? (
        <div className="grid gap-4 border-t border-border/60 px-4 py-4 lg:grid-cols-2">
          <div className="space-y-2 text-sm">
            <DetailLine label="Email" value={lead.email.includes("@leads.futurelogix.ng") ? "—" : lead.email} />
            <DetailLine label="Phone" value={lead.phone} />
            <DetailLine label="Channel" value={CHANNEL_LABELS[lead.channel ?? "website"]} />
            <DetailLine label="Campaign" value={[lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmContent].filter(Boolean).join(" / ")} />
            <DetailLine label="Landing page" value={lead.landingPage} />
            <DetailLine label="Referrer" value={lead.referrer ?? lead.referralSource} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</p>
              <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-foreground">{lead.message}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label
                htmlFor={`notes-${lead.id}`}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              >
                Notes
              </label>
              <Textarea
                id={`notes-${lead.id}`}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="School size, current tools, main pain, what was agreed, objections..."
                className="mt-1 min-h-28"
              />
            </div>
            <div>
              <label
                htmlFor={`followup-${lead.id}`}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              >
                Next follow-up
              </label>
              <Input
                id={`followup-${lead.id}`}
                type="date"
                value={followUp}
                onChange={(event) => setFollowUp(event.target.value)}
                className="mt-1 h-10"
              />
            </div>
            {saveError ? <p className="text-sm text-destructive">{saveError}</p> : null}
            <Button
              type="button"
              size="sm"
              className="gap-2 rounded-full"
              disabled={saving}
              onClick={() => void patch({ notes, nextFollowUpAt: followUp || null })}
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Save notes
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DetailLine({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <p>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}: </span>
      <span className="break-all text-foreground">{value}</span>
    </p>
  );
}

function NewLeadForm({ onCreated, onCancel }: { onCreated: (lead: Lead) => void; onCancel: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    interest: "SchoolsRep",
    channel: "whatsapp" as LeadChannel,
    message: "",
    nextFollowUpAt: "",
    utmCampaign: "",
  });

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          utmSource: values.utmCampaign ? "manual" : undefined,
          utmCampaign: values.utmCampaign || undefined,
          nextFollowUpAt: values.nextFollowUpAt || undefined,
        }),
      });
      const data = (await response.json().catch(() => null)) as { lead?: Lead; error?: string } | null;
      if (!response.ok || !data?.lead) throw new Error(data?.error ?? "Unable to save lead.");
      onCreated(data.lead);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to save lead.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = "h-10";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="surface-panel space-y-4 px-5 py-5">
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">Log a lead</h3>
        <p className="text-sm text-muted-foreground">
          For enquiries that came through WhatsApp, a call, a referral, or a social DM.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className={labelClass} htmlFor="lead-name">Name</label>
          <Input id="lead-name" className={fieldClass} required value={values.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-org">School / business</label>
          <Input id="lead-org" className={fieldClass} value={values.organization} onChange={(e) => update("organization", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-phone">Phone (WhatsApp)</label>
          <Input id="lead-phone" className={fieldClass} type="tel" placeholder="+234..." value={values.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-email">Email (optional)</label>
          <Input id="lead-email" className={fieldClass} type="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-interest">Interested in</label>
          <select
            id="lead-interest"
            value={values.interest}
            onChange={(e) => update("interest", e.target.value)}
            className="mt-0 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-channel">Came in via</label>
          <select
            id="lead-channel"
            value={values.channel}
            onChange={(e) => update("channel", e.target.value as LeadChannel)}
            className="mt-0 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            {LEAD_CHANNELS.map((channel) => (
              <option key={channel} value={channel}>{CHANNEL_LABELS[channel]}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-campaign">Campaign / ad (optional)</label>
          <Input id="lead-campaign" className={fieldClass} placeholder="e.g. meta_schoolsrep_sep" value={values.utmCampaign} onChange={(e) => update("utmCampaign", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-followup">Next follow-up</label>
          <Input id="lead-followup" className={fieldClass} type="date" value={values.nextFollowUpAt} onChange={(e) => update("nextFollowUpAt", e.target.value)} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="lead-message">What they asked for</label>
        <Textarea
          id="lead-message"
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="School of 400 students, using Excel + WhatsApp, wants fee tracking first..."
          className="min-h-24"
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div className="flex flex-wrap gap-2">
        <Button type="submit" className="gap-2 rounded-full" disabled={submitting}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          Save lead
        </Button>
        <Button type="button" variant="ghost" className="rounded-full" onClick={onCancel} disabled={submitting}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
