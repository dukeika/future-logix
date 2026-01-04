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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <form className="space-y-4" onSubmit={handleConsultationSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Name *</label>
          <input
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Phone</label>
            <input
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+234..."
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Topic</label>
          <select
            name="topic"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Cloud Migration</option>
            <option>Cybersecurity</option>
            <option>Automation</option>
            <option>Custom Development</option>
            <option>Other</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Notes</label>
          <textarea
            name="notes"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Project goals, timelines, questions..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Submit consultation request
        </button>
      </form>
      {consultationStatus && (
        <p className="mt-4 text-sm font-semibold text-blue-800">{consultationStatus}</p>
      )}
    </div>
  );
}
