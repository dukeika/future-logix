'use client';

import React, { useState } from "react";

export default function ConsultationForm() {
  const [consultationStatus, setConsultationStatus] = useState("");

  const handleConsultationSubmit = async (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    setConsultationStatus("");
    const formData = new FormData(formEl);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit consultation");
      setConsultationStatus("Thank you. We received your consultation request and will respond shortly.");
      formEl.reset();
    } catch (error) {
      setConsultationStatus("Sorry, something went wrong. Please try again.");
      console.error("Consultation submit failed", error);
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Consultation</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Book a strategy conversation</h2>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Share your priorities and we will shape the most relevant next step.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleConsultationSubmit}>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-100">Name *</label>
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
            placeholder="Your full name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-100">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-100">Phone</label>
            <input
              name="phone"
              className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              placeholder="+234..."
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-100">Topic</label>
          <select
            name="topic"
            className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          >
            <option>Product Discussion</option>
            <option>Service Engagement</option>
            <option>Portfolio Partnership</option>
            <option>ClassPoint</option>
            <option>Other</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-100">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-100">Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              className="w-full rounded-2xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-100">Notes</label>
          <textarea
            name="notes"
            rows={4}
            className="w-full rounded-3xl border border-white/[0.12] bg-[#0d1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
            placeholder="Project goals, timelines, questions..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Submit consultation request
        </button>
      </form>
      {consultationStatus && (
        <p className="mt-4 text-sm font-semibold text-cyan-200">{consultationStatus}</p>
      )}
    </div>
  );
}
