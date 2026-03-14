"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PayNowPage() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const parsedAmount = Number(amount);

      if (!Number.isFinite(parsedAmount) || parsedAmount < 100) {
        throw new Error("Amount must be at least NGN 100.");
      }

      const response = await fetch("/api/payments/direct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: parsedAmount,
          description,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { authorization_url?: string; error?: string }
        | null;

      if (!response.ok || !data?.authorization_url) {
        throw new Error(data?.error ?? "Unable to start payment.");
      }

      window.location.href = data.authorization_url;
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to start payment.");
      setLoading(false);
    }
  }

  return (
    <section className="section-shell">
      <SiteContainer className="max-w-2xl">
        <Card>
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Quick payment</p>
            <CardTitle className="text-3xl text-slate-950">Pay Now</CardTitle>
            <CardDescription>Complete a direct Future Logix payment without creating an invoice.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="pay-now-email">Email</Label>
                <Input
                  id="pay-now-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pay-now-amount">Amount (NGN)</Label>
                <Input
                  id="pay-now-amount"
                  type="number"
                  min={100}
                  step="1"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="100"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pay-now-description">Description</Label>
                <Textarea
                  id="pay-now-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Website retainer, consultation, support, etc."
                  required
                />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Continue to Paystack
              </Button>
            </form>
          </CardContent>
        </Card>
      </SiteContainer>
    </section>
  );
}
