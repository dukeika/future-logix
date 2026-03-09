'use client';

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    setStatus("");
    const formData = new FormData(formEl);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("Thanks for reaching out. We will respond shortly.");
      formEl.reset();
    } catch (error) {
      setStatus("Sorry, something went wrong. Please try again.");
      console.error("Contact submit failed", error);
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 text-slate-950 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)]">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700">General Enquiries</p>
        <h2 className="mt-3 text-2xl font-semibold">Send us a message</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">Tell us what you are building, improving, or planning next.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">Name *</label>
            <input
              name="name"
              required
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">Phone</label>
            <input
              name="phone"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-400"
              placeholder="+234..."
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">Topic</label>
            <select
              name="topic"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-400"
            >
              <option>Products</option>
              <option>Services</option>
              <option>Partnership</option>
              <option>ClassPoint</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-800">Message *</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-400"
            placeholder="What would you like to discuss?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Send message
        </button>
        {status && <p className="text-sm font-semibold text-cyan-800">{status}</p>}
      </form>
    </div>
  );
}
