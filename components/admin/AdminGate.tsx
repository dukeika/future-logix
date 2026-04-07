"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, PropsWithChildren, useEffect, useState } from "react";
import { LayoutDashboard, Loader2, LogOut, ReceiptText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
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
      setError(submitError instanceof Error ? submitError.message : "Unable to verify admin password.");
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
      <div className="mx-auto flex min-h-[70vh] max-w-lg items-center justify-center">
        <Card className="w-full border-border/70 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-950">Admin access</CardTitle>
            <CardDescription>
              Enter the dashboard password to manage invoices and payment workflows.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900" htmlFor="admin-password">
                  Password
                </label>
                <Input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button className="w-full" type="submit" disabled={submitting}>
                {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Unlock dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-10">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-border/70 bg-white/95 p-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Future Logix Admin</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Invoice management</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap gap-2">
            {adminLinks.map(({ href, label, icon: Icon }) => (
              <Button key={href} asChild size="sm" variant={pathname === href ? "default" : "outline"}>
                <Link href={href} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </nav>
          <Button type="button" size="sm" variant="ghost" onClick={handleLogout} className="gap-2" disabled={submitting}>
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>
      <div className={cn("space-y-8")}>{children}</div>
    </div>
  );
}
