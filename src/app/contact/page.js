'use client';

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
            <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Talk with Future Logix</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Ready to migrate to the cloud, strengthen security, automate workflows, or build something new? Reach out for a
              free consultation.
            </p>
          </div>
        </section>

        {/* Contact info and form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide mb-2">Get in touch</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">We respond within hours</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tell us about your goals and challenges. We will share a quick plan and next steps for cloud, security,
                  automation, or product delivery.
                </p>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p>+234 706 110 6212</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p>admin@futurelogix.tech</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p>Lekki, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p>Mon-Fri: 9AM-6PM WAT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-blue-700 mb-1">Live chat</p>
                  <p className="text-gray-700">Available 24/7</p>
                </div>
                <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-green-700 mb-1">WhatsApp</p>
                  <p className="text-gray-700">Quick responses</p>
                </div>
              </div>
            </div>

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
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-14 bg-gradient-to-r from-[#123072] to-[#0B1D4D] text-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-yellow-300">24/7</p>
              <p className="text-blue-100">Support available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-300">{"< 2hrs"}</p>
              <p className="text-blue-100">Average first response</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-300">100+</p>
              <p className="text-blue-100">Clients served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-300">5.0</p>
              <p className="text-blue-100">Average rating</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
