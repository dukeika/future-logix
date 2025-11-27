'use client';

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getBlogPosts } from "../data/blogPosts";

const services = [
  {
    title: "Cloud Migration & AWS Consulting",
    tag: "Cloud-first",
    description: "Assess, architect, and migrate workloads to AWS with cost, resilience, and performance baked in.",
    items: ["Landing zones and security guardrails", "Data migration and modernization", "FinOps and ongoing optimization"],
    color: "blue",
  },
  {
    title: "Cybersecurity Solutions",
    tag: "Secure by Design",
    description: "Harden infrastructure and applications with assessments, monitoring, and incident response playbooks.",
    items: ["Security audits and compliance", "Threat detection and response", "Employee awareness and training"],
    color: "emerald",
  },
  {
    title: "Business Process Automation",
    tag: "Automation",
    description: "Eliminate manual work with workflow redesign, integrations, and analytics to keep teams moving faster.",
    items: ["Process mapping and redesign", "Integration across business apps", "Performance dashboards"],
    color: "purple",
  },
  {
    title: "Custom Application Development",
    tag: "Build",
    description: "Web, mobile, and IoT solutions tailored to your operations, from concept to launch and support.",
    items: ["Product discovery and UX", "API-first engineering", "Launch, support, and iteration"],
    color: "orange",
  },
];

const proofPoints = [
  { label: "Projects Delivered", value: "100+", detail: "Enterprise and SME transformations across West Africa" },
  { label: "Support Availability", value: "24/7", detail: "Always-on support to keep your systems live" },
  { label: "Founded", value: "2020", detail: "Built in Lagos with deep local expertise" },
  { label: "Response Time", value: "< 2 hrs", detail: "Average first-response for support tickets" },
];

const values = [
  { title: "Local Expertise", copy: "We navigate Nigerian regulations and realities so your rollout is compliant and practical." },
  { title: "Excellence", copy: "Secure defaults, architecture reviews, and testing discipline on every project." },
  { title: "Partnership", copy: "Training, documentation, and continued optimization after go-live." },
];

const steps = [
  { title: "Discover & Assess", copy: "Workshops to understand goals, current stack, risks, and quick wins." },
  { title: "Design & Plan", copy: "Architecture, security controls, migration waves, and success metrics agreed up front." },
  { title: "Build & Migrate", copy: "Hands-on implementation, automation, and validation with your teams." },
  { title: "Support & Optimize", copy: "24/7 support, observability, and ongoing optimization to keep you ahead." },
];

const clientStories = [
  {
    quote: "Future Logix moved us to AWS without disruption. We cut costs and gained resilience overnight.",
    name: "CEO, Manufacturing Group",
  },
  {
    quote: "Their cybersecurity audit exposed critical gaps and guided us to a safer, compliant posture.",
    name: "CTO, Financial Services",
  },
];

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [consultationStatus, setConsultationStatus] = useState("");

  useEffect(() => {
    const posts = getBlogPosts()
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    setRecentPosts(posts);
  }, []);

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
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-6">
                Lagos-built. Cloud-ready. Secure.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform your business with secure cloud, automation, and modern engineering.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-8">
                Future Logix is a digital transformation partner helping Nigerian and West African
                organizations migrate to the cloud, secure their operations, and automate how work gets done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation"
                  className="bg-yellow-400 text-blue-950 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-transform hover:scale-105 text-center"
                >
                  Book a free consultation
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-transform hover:scale-105"
                >
                  Explore services
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-blue-100">
                {proofPoints.map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="font-semibold">{item.label}</div>
                    <p className="text-xs mt-1 text-blue-50">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/40">
              <p className="uppercase text-xs font-bold text-blue-700 mb-2">What we deliver</p>
              <h3 className="text-2xl font-bold mb-4">Your roadmap to resilient technology</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  Cloud landing zones, identity, and cost controls tailored to your business.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  Security posture assessments with remediation plans and incident runbooks.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                  Automation that connects teams, tools, and data for faster delivery.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  Modern applications built with API-first thinking and reliable support.
                </li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-sm font-semibold text-blue-900">Based in Lekki, Lagos</p>
                <p className="text-sm text-gray-700">
                  Serving SMEs, enterprises, and government teams across Nigeria and West Africa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Services</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Built for end-to-end transformation</h2>
                <p className="text-lg text-gray-600 mt-3">
                  Cloud, cybersecurity, automation, and custom development delivered by teams who ship and support.
                </p>
              </div>
              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
              >
                Talk with an architect
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700">
                        {service.tag}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
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
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-700">
                        <span className="mt-1 w-2 h-2 rounded-full bg-gray-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Engagement</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Proven delivery approach</h2>
                <p className="text-lg text-gray-600 mt-4">
                  We combine discovery, secure architecture, hands-on build, and continuous optimization to de-risk change.
                </p>
                <div className="mt-6 space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-700">{step.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-inner">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What success looks like</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-blue-700 mb-1">40%+</p>
                    <p className="text-sm text-gray-700">Ops cost savings after cloud migration</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-green-700 mb-1">24/7</p>
                    <p className="text-sm text-gray-700">Support and incident response coverage</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-purple-700 mb-1">100+</p>
                    <p className="text-sm text-gray-700">Projects delivered across industries</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-orange-700 mb-1">2 hrs</p>
                    <p className="text-sm text-gray-700">Average first-response SLA</p>
                  </div>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    Lagos-based team with regional delivery experience.
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    Security-first mindset for regulated sectors.
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    Automation to shorten lead time and reduce manual work.
                  </div>
                  <div className="flex gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                    Clear documentation and training for your teams.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-[#0B1D4D] via-[#0F285F] to-[#0A1A3F] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide">Why Future Logix</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">A partner built for your region</h2>
                <p className="text-lg text-blue-100 mt-3 max-w-3xl">
                  We blend global best practices with deep local understanding so migrations, security, and automation land smoothly.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                Contact the team
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Results</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Clients we have guided</h2>
                <p className="text-lg text-gray-600 mt-3">
                  From manufacturing to finance, teams trust us to modernize without downtime.
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start md:self-auto inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-white transition-transform hover:-translate-y-0.5"
              >
                Read our insights
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {clientStories.map((story) => (
                <div key={story.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-3xl text-yellow-400 mb-4">&quot;</div>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">{story.quote}</p>
                  <p className="text-sm font-semibold text-blue-700">{story.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest blog */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Insights</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Latest from the Future Logix blog</h2>
                <p className="text-lg text-gray-600 mt-3">
                  Practical guidance on cloud, security, automation, and software delivery.
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start md:self-auto inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:-translate-y-0.5 transition-transform"
              >
                View all articles
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.color === "blue"
                          ? "bg-blue-100 text-blue-700"
                          : post.color === "green"
                          ? "bg-green-100 text-green-700"
                          : post.color === "purple"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-700">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                        FL
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-800">{post.author}</p>
                        <p>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="font-semibold text-blue-700 hover:underline">
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation form */}
        <section id="consultation" className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="uppercase text-xs font-bold text-blue-600 tracking-wide mb-2">Consultation</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a consultation</h2>
              <p className="text-lg text-gray-700 mb-4">
                Tell us what you need — cloud migration, security uplift, automation, or a new build. We will respond with
                a proposed plan and next steps.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  Same-day acknowledgements during business hours.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  We will propose slots for a call based on your preferred time.
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                  All details route to the admin dashboard for follow-up.
                </li>
              </ul>
              {consultationStatus && (
                <p className="mt-4 text-sm font-semibold text-blue-800">{consultationStatus}</p>
              )}
            </div>

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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
