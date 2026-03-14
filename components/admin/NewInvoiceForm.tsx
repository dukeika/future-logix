"use client";

import { useMemo, useState } from "react";
import { Loader2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { InvoiceItem } from "@/lib/invoices";

type DraftItem = InvoiceItem & { id: string };

function createDraftItem(): DraftItem {
  return { id: crypto.randomUUID(), description: "", quantity: 1, amount: 0 };
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function NewInvoiceForm() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState<DraftItem[]>([createDraftItem()]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.amount || 0), 0),
    [items]
  );

  function updateItem(id: string, key: keyof InvoiceItem, value: string) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: key === "description" ? value : Number(value),
            }
          : item
      )
    );
  }

  function addItem() {
    setItems((current) => [...current, createDraftItem()]);
  }

  function removeItem(id: string) {
    setItems((current) => (current.length > 1 ? current.filter((item) => item.id !== id) : current));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          dueDate,
          items: items.map(({ description, quantity, amount }) => ({
            description,
            quantity: Number(quantity),
            amount: Number(amount),
          })),
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to create invoice.");
      }

      window.location.href = "/admin/invoices";
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to create invoice.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-950">New invoice</CardTitle>
        <CardDescription>Create a draft invoice and calculate the total before sending.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="client-name">Client name</Label>
              <Input
                id="client-name"
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
                placeholder="Acme Schools Group"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client-email">Client email</Label>
              <Input
                id="client-email"
                type="email"
                value={clientEmail}
                onChange={(event) => setClientEmail(event.target.value)}
                placeholder="finance@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="due-date">Due date</Label>
              <Input id="due-date" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} required />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Invoice items</h2>
                <p className="text-sm text-muted-foreground">Add one or more line items for this invoice.</p>
              </div>
              <Button type="button" variant="outline" onClick={addItem} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Item
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="grid gap-3 rounded-[1.5rem] border border-border/70 p-4 md:grid-cols-[1.8fr_0.7fr_0.8fr_auto]">
                  <div className="space-y-2">
                    <Label htmlFor={`description-${item.id}`}>Description {index + 1}</Label>
                    <Input
                      id={`description-${item.id}`}
                      value={item.description}
                      onChange={(event) => updateItem(item.id, "description", event.target.value)}
                      placeholder="Implementation retainer"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`quantity-${item.id}`}>Qty</Label>
                    <Input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateItem(item.id, "quantity", event.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`amount-${item.id}`}>Amount</Label>
                    <Input
                      id={`amount-${item.id}`}
                      type="number"
                      min="0"
                      step="1"
                      value={item.amount}
                      onChange={(event) => updateItem(item.id, "amount", event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      aria-label={`Remove item ${index + 1}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-border/70 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Invoice total</p>
              <p className="text-2xl font-semibold text-slate-950">{formatCurrency(total)}</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              <Button type="button" variant="outline" onClick={() => (window.location.href = "/admin/invoices")}>
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Create Invoice
              </Button>
            </div>
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
        </form>
      </CardContent>
    </Card>
  );
}
