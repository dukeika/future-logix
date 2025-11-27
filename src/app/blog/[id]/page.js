'use client';

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "../../../data/blogPosts";

const categoryColor = (color) => {
  switch (color) {
    case "blue":
      return "bg-blue-100 text-blue-700 border-blue-500";
    case "green":
      return "bg-green-100 text-green-700 border-green-500";
    case "purple":
      return "bg-purple-100 text-purple-700 border-purple-500";
    case "orange":
      return "bg-orange-100 text-orange-700 border-orange-500";
    default:
      return "bg-blue-100 text-blue-700 border-blue-500";
  }
};

const gradientColor = (color) => {
  switch (color) {
    case "blue":
      return "from-blue-500 to-blue-600";
    case "green":
      return "from-green-500 to-green-600";
    case "purple":
      return "from-purple-500 to-purple-600";
    case "orange":
      return "from-orange-500 to-orange-600";
    default:
      return "from-blue-500 to-blue-600";
  }
};

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundPost = getBlogPost(params.id);

      if (foundPost && foundPost.published) {
        setPost(foundPost);

        const allPosts = getBlogPosts().filter((p) => p.published && p.id !== foundPost.id);
        const sameCategory = allPosts.filter((p) => p.category === foundPost.category).slice(0, 2);
        const other = allPosts.filter((p) => p.category !== foundPost.category).slice(0, 3 - sameCategory.length);
        setRelatedPosts([...sameCategory, ...other]);
      } else {
        router.push("/blog");
      }

      setLoading(false);
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Post not found</h1>
            <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
            <Link href="/blog">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Back to blog</button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        <section className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-600 flex items-center gap-2">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 border ${categoryColor(post.color)}`}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">FL</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none text-gray-800">
              <div className="space-y-6 leading-relaxed">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Category:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${categoryColor(post.color)}`}>
                  {post.category}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-blue-700">
                <button className="font-semibold hover:underline">Share on LinkedIn</button>
                <button className="font-semibold hover:underline">Share on Twitter</button>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Related articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <article
                    key={related.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200 border border-gray-100"
                  >
                    <div className={`h-2 bg-gradient-to-r ${gradientColor(related.color)}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColor(related.color)}`}>
                          {related.category}
                        </span>
                        <span className="text-gray-500 text-xs">{related.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 hover:text-blue-700 transition-colors">
                        <Link href={`/blog/${related.id}`}>{related.title}</Link>
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">{related.excerpt}</p>
                      <Link href={`/blog/${related.id}`} className="text-blue-700 hover:underline font-semibold text-sm">
                        Read more
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-gradient-to-br from-[#1854CE] to-[#1436A2] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to put these ideas into practice?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Speak with our consultants about cloud migration, security uplift, automation, or a custom build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Schedule a consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/50 text-white font-semibold hover:bg-white/10 transition-transform hover:scale-105"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
