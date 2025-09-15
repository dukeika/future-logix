'use client';

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getBlogPosts } from "../../data/blogPosts";

const categories = [
  { name: "Cloud Computing", icon: "☁️", count: 12, color: "blue" },
  { name: "Cybersecurity", icon: "🔒", count: 8, color: "green" },
  { name: "Automation", icon: "⚡", count: 6, color: "purple" },
  { name: "Development", icon: "💻", count: 10, color: "orange" }
];

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Filter to show only published posts
    const posts = getBlogPosts().filter(post => post.published);
    setBlogPosts(posts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Insights, tips, and trends in IT solutions and digital transformation
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#1854CE] to-[#1436A2] rounded-2xl text-white p-12 mb-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mr-4">
                    Featured Article
                  </span>
                  <span className="text-blue-200">December 15, 2024</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  The Future of Cloud Computing in Nigeria
                </h2>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Exploring how cloud adoption is transforming businesses across West Africa
                  and what it means for the future of enterprise technology.
                </p>
                <Link href="/blog/1">
                  <button className="bg-white text-blue-700 hover:bg-yellow-400 hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                    Read Full Article →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`h-2 ${
                    post.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    post.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    post.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`}></div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        post.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        post.color === 'green' ? 'bg-green-100 text-green-700' :
                        post.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 text-gray-800 hover:${
                      post.color === 'blue' ? 'text-blue-600' :
                      post.color === 'green' ? 'text-green-600' :
                      post.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    } transition-colors`}>
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">FL</span>
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p>{new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <button className={`font-semibold hover:underline ${
                          post.color === 'blue' ? 'text-blue-600 hover:text-blue-800' :
                          post.color === 'green' ? 'text-green-600 hover:text-green-800' :
                          post.color === 'purple' ? 'text-purple-600 hover:text-purple-800' :
                          'text-orange-600 hover:text-orange-800'
                        }`}>
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Stay Updated</h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights on digital transformation,
                cloud computing, and cybersecurity delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />
                <button className="bg-gradient-to-r from-[#1854CE] to-[#1645B8] hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                  <div className={`bg-gradient-to-br ${
                    category.color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200' :
                    category.color === 'green' ? 'from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200' :
                    category.color === 'purple' ? 'from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200' :
                    'from-orange-50 to-orange-100 border-orange-200 hover:from-orange-100 hover:to-orange-200'
                  } rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2`}>
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className={`font-bold text-lg mb-2 ${
                      category.color === 'blue' ? 'text-blue-700' :
                      category.color === 'green' ? 'text-green-700' :
                      category.color === 'purple' ? 'text-purple-700' :
                      'text-orange-700'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.count} articles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}