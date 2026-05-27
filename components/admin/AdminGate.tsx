"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, PropsWithChildren, useEffect, useState } from "react";
import { FileText, LayoutDashboard, Loader2, Lock, LogOut, ReceiptText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/insights", label: "Insights", icon: FileText },
  { href: "/admin/invoices", label: "Invoices", icon: ReceiptText },
];

export function AdminGate({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadSession() {
      try {
        const response = await fetch("/api/admin/auth", {
          method: "GET",
          cache: "no-store",
        });

        if (active) {
          setAuthenticated(response.ok);
        }
      } catch {
        if (active) {
          setAuthenticated(false);
        }
      } finally {
        if (active) {
          setReady(true);
        }
      }
    }

    void loadSession();

    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to verify admin password.");
      }

      setAuthenticated(true);
      setPassword("");
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : "Unable to verify admin password."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    setSubmitting(true);
    setError("");

    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
    } finally {
      setSubmitting(false);
      setAuthenticated(false);
      setPassword("");
    }
  }

  if (!ready) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading admin access" />
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
        <div className="bento-card-accent w-full p-8">
          <div className="inline-flex rounded-2xl bg-white/70 p-3 text-primary shadow-bento">
            <Lock className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground">
            Admin access
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Enter the dashboard password to manage insights, invoices, and payment workflows.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                htmlFor="admin-password"
              >
                Password
              </label>
              <Input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
                className="h-11"
                required
              />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <Button className="h-11 w-full rounded-full" type="submit" disabled={submitting}>
              {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Unlock dashboard
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-6">
      <div className="surface-panel flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Future Logix Admin
          </p>
          <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Operations console
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex flex-wrap gap-1.5">
            {adminLinks.map(({ href, label, icon: Icon }) => {
              const isActive =
                href === "/admin" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Button
                  key={href}
                  asChild
                  size="sm"
                  variant={isActive ? "default" : "outline"}
                  className={cn(
                    "h-9 rounded-full px-4",
                    !isActive && "bg-white/80"
                  )}
                >
                  <Link href={href} className="gap-1.5">
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                </Button>
              );
            })}
          </nav>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={handleLogout}
            className="h-9 rounded-full px-3 text-muted-foreground hover:text-foreground"
            disabled={submitting}
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only sm:ml-1.5">Log out</span>
          </Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
