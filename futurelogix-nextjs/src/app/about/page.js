'use client';

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Future Logix</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Leading IT solutions and digital transformation consultancy in Lagos, Nigeria
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses across Nigeria and West Africa with cutting-edge IT solutions
                  that drive digital transformation and sustainable growth. We bridge the gap between
                  traditional business operations and modern technology.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-500">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the leading digital transformation partner for businesses in Africa,
                  recognized for our innovation, expertise, and commitment to client success
                  in the evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">The principles that guide everything we do</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
                <div className="text-6xl mb-6">💡</div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay at the forefront of technology trends to provide cutting-edge solutions
                  that give our clients a competitive advantage.
                </p>
              </div>

              <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-semibold text-green-700 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering the highest quality solutions and services
                  that exceed our clients' expectations.
                </p>
              </div>

              <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build long-term relationships with our clients, acting as trusted advisors
                  throughout their digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">About Our Company</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Founded</h3>
                  <p className="text-blue-600 font-bold text-2xl">2020</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-blue-600 font-bold text-xl">Lekki, Lagos, Nigeria</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects Delivered</h3>
                  <p className="text-blue-600 font-bold text-2xl">100+</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Future Logix Limited is a leading IT solutions and digital transformation consultancy
                  based in Lekki, Lagos, Nigeria. We specialize in helping businesses across various
                  industries modernize their operations through strategic technology implementation.
                </p>
                <p className="text-lg">
                  Our team of experienced professionals brings together expertise in cloud computing,
                  cybersecurity, business process automation, and custom application development.
                  We serve small and medium enterprises, corporations, and government organizations
                  throughout Nigeria and West Africa.
                </p>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Focus Areas:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">☁️</span>
                    <span className="text-gray-700">Cloud Migration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🔒</span>
                    <span className="text-gray-700">Cybersecurity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">⚡</span>
                    <span className="text-gray-700">Automation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-2">💻</span>
                    <span className="text-gray-700">Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}