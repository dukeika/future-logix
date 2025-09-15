'use client';

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <h2 className="text-3xl font-bold text-blue-700 mb-6">Get In Touch</h2>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Whether you&apos;re looking to migrate to the cloud, enhance your cybersecurity,
                    or automate your business processes, our team is here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-blue-600 font-medium">+234 (0) 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-green-600 font-medium">info@futurelogix.tech</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Location</h3>
                        <p className="text-purple-600 font-medium">Lekki, Lagos, Nigeria</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-orange-100 rounded-full p-3 mr-4">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-orange-600 font-medium">Mon-Fri: 9AM-6PM WAT</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">💬</div>
                    <h3 className="font-semibold text-blue-700 mb-2">Live Chat</h3>
                    <p className="text-gray-600 text-sm">Available 24/7</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">📱</div>
                    <h3 className="font-semibold text-green-700 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Quick responses</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] p-6">
                    <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                    <p className="text-blue-100">We&apos;ll get back to you within 24 hours</p>
                  </div>
                  <div className="h-[500px]">
                    <iframe
                      aria-label='Contact Us'
                      frameBorder="0"
                      style={{height:'500px', width:'99%', border:'none'}}
                      src='https://forms.zohopublic.com/futurelogixlimited1/form/ContactUs/formperma/ZQ_j41Nb--BJM2NyfGWPmJOunK9U77k5gO9dH1PeDWs'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Schedule a Free Consultation</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to discuss your IT needs? Schedule a free consultation with our experts
                to explore how we can help transform your business.
              </p>
              <button
                onClick={() => {
                  window.open('https://forms.zohopublic.com/futurelogixlimited1/form/Consultationform/formperma/nLvIySWd-5puLbQ5LKOnomYpzX0oZStSTR9GYVIPgII', '_blank');
                }}
                className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book Free Consultation →
              </button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Find Us</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] p-4">
                <h3 className="text-xl font-semibold text-white">Our Location in Lagos</h3>
              </div>
              <div className="h-[400px]">
                <iframe
                  title="Future Logix Location"
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6989746352243!2d3.601536!3d6.439244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b1b4b1b4b1%3A0x1b4b1b4b1b4b1b4b!2sLekki%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Stats */}
        <section className="py-16 bg-gradient-to-r from-[#1854CE] to-[#1436A2] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <p className="text-blue-100">Support Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">&lt; 2hrs</div>
                <p className="text-blue-100">Response Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <p className="text-blue-100">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">5★</div>
                <p className="text-blue-100">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}