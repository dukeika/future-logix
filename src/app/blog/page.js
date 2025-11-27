'use client';

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getBlogPosts } from "../../data/blogPosts";

const categories = [
  { name: "Cloud Computing", color: "blue", count: 12 },
  { name: "Cybersecurity", color: "green", count: 8 },
  { name: "Automation", color: "purple", count: 6 },
  { name: "Development", color: "orange", count: 10 },
];

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const posts = getBlogPosts().filter((post) => post.published);
    setBlogPosts(posts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
            <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide mb-3">Insights</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Ideas on cloud, security, and automation.</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Practical guidance from the Future Logix team on digital transformation for Nigerian and West African organizations.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#1854CE] to-[#1436A2] rounded-2xl text-white p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                    Featured
                  </span>
                  <span className="text-blue-100 text-sm">December 15, 2024</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">The Future of Cloud Computing in Nigeria</h2>
                <p className="text-lg text-blue-100 max-w-3xl mb-6">
                  How cloud adoption is transforming businesses across West Africa and what it means for enterprise technology.
                </p>
                <Link
                  href="/blog/1"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-800 font-semibold shadow hover:bg-yellow-400 hover:text-blue-900 transition-transform hover:scale-105"
                >
                  Read full article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Latest articles</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Fresh thinking from the team</h2>
                <p className="text-lg text-gray-600 mt-3">Guides on cloud migration, cybersecurity, automation, and modern engineering.</p>
              </div>
              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
              >
                Talk with us
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 border border-gray-100"
                >
                  <div
                    className={`h-2 ${
                      post.color === "blue"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : post.color === "green"
                        ? "bg-gradient-to-r from-green-500 to-green-600"
                        : post.color === "purple"
                        ? "bg-gradient-to-r from-purple-500 to-purple-600"
                        : "bg-gradient-to-r from-orange-500 to-orange-600"
                    }`}
                  />
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-700">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">FL</div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">{post.author}</p>
                          <p>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="font-semibold text-blue-700 hover:underline">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase text-xs font-bold text-blue-600 tracking-wide">Browse</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Read by category</h2>
                <p className="text-lg text-gray-600 mt-3">Cloud, security, automation, and development topics.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`rounded-2xl p-6 text-center border-2 transition-all duration-200 hover:-translate-y-1 shadow-sm ${
                    category.color === "blue"
                      ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                      : category.color === "green"
                      ? "bg-green-50 border-green-200 hover:bg-green-100"
                      : category.color === "purple"
                      ? "bg-purple-50 border-purple-200 hover:bg-purple-100"
                      : "bg-orange-50 border-orange-200 hover:bg-orange-100"
                  }`}
                >
                  <h3
                    className={`font-bold text-lg mb-2 ${
                      category.color === "blue"
                        ? "text-blue-700"
                        : category.color === "green"
                        ? "text-green-700"
                        : category.color === "purple"
                        ? "text-purple-700"
                        : "text-orange-700"
                    }`}
                  >
                    {category.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{category.count} articles</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
