'use client';

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getBlogPosts } from "../data/blogPosts";

export default function Home() {
  const [openConsultationDialog, setOpenConsultationDialog] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);

  const handleOpenConsultationDialog = () => {
    setOpenConsultationDialog(true);
  };

  const handleCloseConsultationDialog = () => {
    setOpenConsultationDialog(false);
  };

  useEffect(() => {
    // Get the 3 most recent published posts
    const posts = getBlogPosts()
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    setRecentPosts(posts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1436A2] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transform Your Business with
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400 leading-tight">
            Future-Ready IT Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Leading digital transformation consultancy in Lagos, Nigeria.
            We specialize in cloud migration, cybersecurity, and business automation.
          </p>
          <button
            onClick={handleOpenConsultationDialog}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-700 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Free Consultation
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Our Core Services</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Comprehensive solutions to drive your digital transformation</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#1854CE]">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Cloud Migration & AWS Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless migration to AWS with optimized architecture and cost efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Cybersecurity Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive security assessment and protection for your digital assets.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Business Process Automation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline operations with intelligent automation and workflow optimization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                Custom Application Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Web, mobile, and IoT solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Why Partner with Future Logix?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Deep understanding of the Nigerian business landscape and regulatory environment.
                </p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  Successfully delivered 100+ projects across various industries in West Africa.
                </p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock technical support to ensure your systems run smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20 bg-blue-50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="italic mb-4 text-gray-700">
                  &ldquo;Future Logix transformed our entire IT infrastructure. Their cloud migration
                  saved us 40% on operational costs while improving our system reliability.&rdquo;
                </p>
                <p className="font-semibold text-blue-700">
                  - CEO, Lagos Manufacturing Company
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="italic mb-4 text-gray-700">
                  &ldquo;The cybersecurity audit revealed critical vulnerabilities we didn&apos;t know existed.
                  Their solutions protected us from potential threats.&rdquo;
                </p>
                <p className="font-semibold text-blue-700">
                  - CTO, Financial Services Firm
                </p>
              </div>
            </div>
          </div>

          {/* Latest Blog Posts */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Latest Insights</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 text-center">
              Stay updated with our latest thoughts on digital transformation and IT trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        post.color === 'green' ? 'bg-green-100 text-green-700' :
                        post.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-blue-600 font-bold text-xs">FL</span>
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p>{new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline">
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Visit Our Blog →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] p-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Future Logix</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Subscribe to our newsletter and get the latest insights on digital transformation,
                cloud computing, and cybersecurity delivered straight to your inbox.
              </p>
            </div>
            <div className="h-[500px]">
              <iframe
                aria-label='Newsletter'
                frameBorder="0"
                style={{height:'500px', width:'99%', border:'none'}}
                src='https://forms.zohopublic.com/futurelogixlimited1/form/Newsletter1/formperma/yeW6uR7bcwKHUtjbzYpkdMojnM484BrKqqVOfZJiFEM'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      {openConsultationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-blue-700">Free Consultation</h2>
              <button
                onClick={handleCloseConsultationDialog}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="p-0">
              <iframe
                title="Free Consultation Form"
                className="w-full h-[600px] border-none rounded-b-2xl"
                src="https://forms.zohopublic.com/futurelogixlimited1/form/Consultationform/formperma/nLvIySWd-5puLbQ5LKOnomYpzX0oZStSTR9GYVIPgII"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}