'use client';

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
            <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide mb-4">About Future Logix</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Built in Lagos. Delivering secure, modern technology for Africa.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              We are a digital transformation consultancy helping organizations move to the cloud,
              strengthen cybersecurity, automate operations, and build reliable software.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="uppercase text-xs font-bold text-blue-600 tracking-wide mb-2">Mission</p>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Empower businesses with secure, scalable technology</h2>
              <p className="text-gray-700 leading-relaxed">
                We help Nigerian and West African organizations modernize by pairing cloud foundations, cybersecurity,
                automation, and custom software with clear change management and training.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="uppercase text-xs font-bold text-yellow-500 tracking-wide mb-2">Vision</p>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Be the trusted transformation partner across Africa</h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to be the go-to partner for cloud adoption, security uplift, and automation — known for dependable
                delivery, documentation, and long-term support.
              </p>
            </div>
          </div>
        </section>

        {/* Stats / Identity */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-3xl font-bold text-blue-700 mb-1">Founded 2020</p>
                <p className="text-gray-700">Born in Lekki, Lagos with a team focused on regional realities.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-3xl font-bold text-purple-700 mb-1">100+ projects</p>
                <p className="text-gray-700">Delivered across manufacturing, finance, public sector, and SMEs.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-3xl font-bold text-emerald-700 mb-1">24/7 support</p>
                <p className="text-gray-700">Round-the-clock response with clear SLAs and runbooks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-[#0B1D4D] via-[#0F285F] to-[#0A1A3F] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide">Values</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">What guides our delivery</h2>
                <p className="text-lg text-blue-100 mt-3 max-w-3xl">
                  Our engagements are security-first, documentation-heavy, and rooted in partnership so your teams can
                  run confidently after launch.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                Explore services
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Local Expertise", copy: "We navigate Nigerian regulations and realities so your rollout is compliant and practical." },
                { title: "Excellence", copy: "Secure defaults, architecture reviews, and testing discipline on every project." },
                { title: "Partnership", copy: "Training, documentation, and continued optimization after go-live." },
              ].map((value) => (
                <div key={value.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <p className="uppercase text-xs font-bold text-blue-600 tracking-wide mb-2">What we focus on</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation areas</h2>
              <p className="text-lg text-gray-700 mb-4">
                Cloud migration, cybersecurity uplift, automation of critical workflows, and custom applications that
                keep your operations resilient.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  AWS landing zones, identity, and guardrails.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  Security audits, threat detection, and incident response readiness.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                  Workflow automation, integrations, and performance analytics.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  API-first web, mobile, and IoT builds with ongoing support.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How we partner</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900">Discovery</p>
                  <p>Workshops to align goals, risks, and success metrics.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900">Design</p>
                  <p>Architecture, security controls, and migration plans.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900">Build</p>
                  <p>Hands-on delivery, automation, and validation with your teams.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="font-semibold text-gray-900">Support</p>
                  <p>24/7 assistance, observability, and continuous optimization.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full mt-6 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gradient-to-r from-[#123072] to-[#0B1D4D] text-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide">Next step</p>
              <h2 className="text-3xl font-bold mt-2">Plan your transformation with us</h2>
              <p className="text-blue-100 mt-2">
                Whether it is cloud migration, security uplift, automation, or custom development, we can help.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/services"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-white/50 text-white font-semibold hover:bg-white/10 transition-transform hover:-translate-y-0.5"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
