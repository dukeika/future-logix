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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] p-6">
        <h2 className="text-2xl font-bold text-white">Send us a message</h2>
        <p className="text-blue-100">We will reply within 24 hours.</p>
      </div>
      <div className="p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">Name *</label>
              <input
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">Phone</label>
              <input
                name="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+234..."
              />
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
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Message *</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
          {status && <p className="text-sm font-semibold text-blue-800">{status}</p>}
        </form>
      </div>
    </div>
  );
}
