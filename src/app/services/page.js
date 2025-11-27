'use client';

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const services = [
  {
    title: "Cloud Migration & AWS Consulting",
    tag: "Cloud",
    description:
      "Plan and execute migrations with secure landing zones, identity, and cost controls tuned for your business.",
    features: ["Assessment and roadmap", "Landing zones and guardrails", "Data migration and modernization", "FinOps and cost optimization", "Observability and SRE runbooks"],
    color: "blue",
  },
  {
    title: "Cybersecurity Solutions",
    tag: "Security",
    description:
      "Strengthen your posture with audits, threat detection, and incident response readiness for regulated environments.",
    features: ["Security audits and compliance", "Identity and access governance", "Threat detection and response", "Incident playbooks and training", "Continuous monitoring"],
    color: "emerald",
  },
  {
    title: "Business Process Automation",
    tag: "Automation",
    description:
      "Replace manual steps with orchestrated workflows, integrations, and analytics so teams move faster.",
    features: ["Process mapping and redesign", "Integrations across apps", "Workflow automation", "Dashboards and KPIs", "Change management and training"],
    color: "purple",
  },
  {
    title: "Custom Application Development",
    tag: "Build",
    description:
      "Design and ship web, mobile, and IoT solutions with API-first thinking, testing, and reliable support.",
    features: ["Product discovery and UX", "API and platform engineering", "Web and mobile delivery", "Testing and QA automation", "Launch, support, and iteration"],
    color: "orange",
  },
];

const differentiators = [
  {
    title: "Security-first delivery",
    copy: "Secure defaults, reviews, and documentation on every engagement. We build with regulated sectors in mind.",
  },
  {
    title: "Lagos-based, region ready",
    copy: "We understand the Nigerian landscape, regulatory needs, and regional infrastructure realities.",
  },
  {
    title: "End-to-end ownership",
    copy: "From discovery to 24/7 support, we stay engaged after launch with observability and optimizations.",
  },
];

const process = [
  { title: "Discover", copy: "Assess goals, risks, constraints, and quick wins with your stakeholders." },
  { title: "Design", copy: "Architecture, security, migration waves, and success metrics agreed up front." },
  { title: "Build", copy: "Hands-on implementation, automation, and validation with your teams." },
  { title: "Support", copy: "24/7 response, observability, and continuous improvement." },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
            <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Secure, modern technology delivery end to end.</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Cloud migration, cybersecurity uplift, automation, and custom applications delivered by a Lagos-based team with
              proven results and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-400 text-blue-950 font-semibold shadow-lg hover:bg-yellow-300 transition-transform hover:scale-105"
              >
                Talk with an architect
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-transform hover:scale-105"
              >
                How we work
              </Link>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">What we do</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Built for transformation</h2>
                <p className="text-lg text-gray-600 mt-3">
                  We blend architecture, security, automation, and product thinking so your rollout is safe and sustainable.
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start md:self-auto inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-white transition-transform hover:-translate-y-0.5"
              >
                Read our insights
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">{service.tag}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{service.title}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.color === "emerald"
                          ? "bg-emerald-100 text-emerald-700"
                          : service.color === "purple"
                          ? "bg-purple-100 text-purple-700"
                          : service.color === "orange"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {service.features.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full mt-6 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
                  >
                    Get a tailored plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-yellow-500 tracking-wide">Why us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What makes Future Logix different</h2>
                <p className="text-lg text-gray-600 mt-3">
                  Secure by default, Lagos-based delivery, and ownership from discovery through support.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                Learn about the team
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="uppercase text-xs font-bold text-blue-600 tracking-wide mb-2">Engagement</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How we deliver</h2>
              <p className="text-lg text-gray-700">
                A repeatable playbook that reduces risk, aligns teams, and keeps you covered after go-live.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div key={step.title} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-gray-900 uppercase">{step.title}</p>
                  </div>
                  <p className="text-gray-700 text-sm">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gradient-to-r from-[#123072] to-[#0B1D4D] text-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide">Start a project</p>
              <h2 className="text-3xl font-bold mt-2">Let us design your migration, security uplift, or next build.</h2>
              <p className="text-blue-100 mt-2">We will map your goals, timeline, and success metrics in a free consultation.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                Book a consultation
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-white/50 text-white font-semibold hover:bg-white/10 transition-transform hover:-translate-y-0.5"
              >
                See recent work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
