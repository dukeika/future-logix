'use client';

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "../../../data/blogPosts";

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

        // Get related posts from the same category
        const allPosts = getBlogPosts().filter(p => p.published && p.id !== foundPost.id);
        const sameCategoryPosts = allPosts.filter(p => p.category === foundPost.category).slice(0, 2);
        const otherPosts = allPosts.filter(p => p.category !== foundPost.category).slice(0, 3 - sameCategoryPosts.length);
        setRelatedPosts([...sameCategoryPosts, ...otherPosts]);
      } else {
        router.push('/blog'); // Redirect to blog page if post not found
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Back to Blog
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-700 border-blue-500';
      case 'green': return 'bg-green-100 text-green-700 border-green-500';
      case 'purple': return 'bg-purple-100 text-purple-700 border-purple-500';
      case 'orange': return 'bg-orange-100 text-orange-700 border-orange-500';
      default: return 'bg-blue-100 text-blue-700 border-blue-500';
    }
  };

  const getGradientColor = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'green': return 'from-green-500 to-green-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Blog Post Header */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${getCategoryColor(post.color)}`}>
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">FL</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* Tags/Category */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.color)}`}>
                    {post.category}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Share on LinkedIn
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Share on Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`h-2 bg-gradient-to-r ${getGradientColor(relatedPost.color)}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(relatedPost.color)}`}>
                          {relatedPost.category}
                        </span>
                        <span className="text-gray-500 text-xs">{relatedPost.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {relatedPost.excerpt}
                      </p>

                      <Link href={`/blog/${relatedPost.id}`}>
                        <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline">
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1854CE] to-[#1436A2] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get expert guidance on implementing the solutions discussed in this article.
            </p>
            <Link href="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                Schedule Free Consultation →
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}