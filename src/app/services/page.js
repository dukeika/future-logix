'use client';

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const services = [
  {
    title: "Cloud Migration & AWS Consulting",
    icon: "☁️",
    description: "Seamless migration to AWS cloud with optimized architecture, cost efficiency, and enhanced security. We handle everything from assessment to deployment.",
    features: ["AWS Architecture Design", "Data Migration", "Cost Optimization", "Performance Monitoring", "Security Setup"],
    color: "blue",
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-500",
    textColor: "text-blue-700"
  },
  {
    title: "Cybersecurity Solutions",
    icon: "🔒",
    description: "Comprehensive security assessment and protection for your digital assets. Protect your business from evolving cyber threats.",
    features: ["Security Audits", "Threat Detection", "Compliance Management", "Employee Training", "Incident Response"],
    color: "green",
    bgColor: "from-green-50 to-green-100",
    borderColor: "border-green-500",
    textColor: "text-green-700"
  },
  {
    title: "Business Process Automation",
    icon: "⚡",
    description: "Streamline operations with intelligent automation and workflow optimization. Reduce manual work and increase efficiency.",
    features: ["Workflow Analysis", "Process Automation", "Integration Solutions", "Performance Analytics", "Change Management"],
    color: "purple",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-500",
    textColor: "text-purple-700"
  },
  {
    title: "Custom Application Development",
    icon: "💻",
    description: "Web, mobile, and IoT solutions tailored to your business needs. From concept to deployment, we build scalable applications.",
    features: ["Web Development", "Mobile Apps", "IoT Solutions", "API Development", "Maintenance & Support"],
    color: "orange",
    bgColor: "from-orange-50 to-orange-100",
    borderColor: "border-orange-500",
    textColor: "text-orange-700"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Comprehensive IT solutions to transform your business operations
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Transform Your Business</h2>
              <p className="text-lg text-gray-600">Choose from our comprehensive range of IT solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`bg-gradient-to-br ${service.bgColor} rounded-t-2xl p-8 text-center border-b-4 ${service.borderColor}`}>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="p-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Features:</h4>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${service.textColor} mr-3 font-bold text-lg`}>✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <button className={`w-full bg-gradient-to-r from-[#1854CE] to-[#1645B8] hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200`}>
                        Get Quote →
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Tailored Solutions</h3>
                <p className="text-gray-600">
                  Customized approach to meet your specific business needs and objectives.
                </p>
              </div>
              <div className="text-center bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Fast Implementation</h3>
                <p className="text-gray-600">
                  Quick deployment with minimal disruption to your business operations.
                </p>
              </div>
              <div className="text-center bg-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of successful implementations across various industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1854CE] to-[#1436A2] text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Contact us today for a free consultation and discover how our IT solutions
                can drive your digital transformation.
              </p>
              <Link href="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  Schedule Free Consultation →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}