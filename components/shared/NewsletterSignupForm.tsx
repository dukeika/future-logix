"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type NewsletterState = "idle" | "loading" | "success" | "error";

export function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NewsletterState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "footer",
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.error ?? "Unable to subscribe right now.");
        return;
      }

      setState("success");
      setMessage(data.message ?? "Check your email to confirm subscription.");
      setEmail("");
    } catch (error) {
      console.error("newsletter form submit error", error);
      setState("error");
      setMessage("Unable to subscribe right now. Please try again later.");
    }
  };

  return (
    <div className="space-y-3">
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/30"
        />
        <Button
          type="submit"
          className="h-11 rounded-full bg-secondary font-semibold text-slate-950 hover:bg-secondary/90"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Submitting..." : "Subscribe"}
        </Button>
      </form>
      {state === "success" ? (
        <p className="text-sm text-secondary" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm text-red-300" role="alert">
          {message}
        </p>
      ) : null}
      <p className="text-xs leading-6 text-slate-400">
        We use your email only for Future Logix updates. You can unsubscribe at any time.
      </p>
    </div>
  );
}
