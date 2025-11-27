'use client';

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost, getCategories } from "../../data/blogPosts";

const statusBadge = (status) => {
  const base = "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold";
  if (status === "resolved") return `${base} bg-green-100 text-green-700`;
  if (status === "in-progress") return `${base} bg-yellow-100 text-yellow-800`;
  return `${base} bg-gray-100 text-gray-700`;
};

export default function Admin() {
  const [contacts, setContacts] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories] = useState(getCategories());
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // { type, item }
  const [detailNote, setDetailNote] = useState("");
  const [detailStatus, setDetailStatus] = useState("new");
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Cloud Computing",
    author: "Future Logix Team",
    readTime: "5 min read",
    color: "blue",
    published: false,
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const [contactRes, consultRes] = await Promise.all([fetch("/api/contact"), fetch("/api/consultations")]);
      const contactJson = await contactRes.json();
      const consultJson = await consultRes.json();
      setContacts(contactJson.items || []);
      setConsultations(consultJson.items || []);
      setPosts(getBlogPosts());
    } catch {
      // ignore for demo
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateStatus = async (type, id, status, note = "") => {
    const endpoint = type === "contact" ? "/api/contact" : "/api/consultations";
    await fetch(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, note }),
    });
    setDetailNote("");
    loadData();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (category) => {
    const categoryData = categories.find((cat) => cat.name === category);
    setFormData((prev) => ({
      ...prev,
      category,
      color: categoryData ? categoryData.color : "blue",
    }));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (isEditing && editingPost) {
      updateBlogPost(editingPost.id, formData);
    } else {
      addBlogPost(formData);
    }
    setPosts(getBlogPosts());
    resetForm();
  };

  const handleEditPost = (post) => {
    setIsEditing(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content || "",
      category: post.category,
      author: post.author,
      readTime: post.readTime,
      color: post.color,
      published: post.published,
    });
    setShowForm(true);
  };

  const handleDeletePost = (id) => {
    if (confirm("Delete this post?")) {
      deleteBlogPost(id);
      setPosts(getBlogPosts());
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/admin/session", { method: "DELETE" });
    } finally {
      window.location.href = "/admin/login";
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Cloud Computing",
      author: "Future Logix Team",
      readTime: "5 min read",
      color: "blue",
      published: false,
    });
    setIsEditing(false);
    setEditingPost(null);
    setShowForm(false);
  };

  const handleSelectItem = (item, type) => {
    setSelectedItem({ ...item, type });
    setDetailNote(item.note || "");
    setDetailStatus(item.status || "new");
  };

  const renderTable = (items, type) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Topic</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Message</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={`${type}-${item.id}`} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-600">{new Date(item.createdAt).toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.topic || "General"}</td>
                <td className="px-4 py-3">
                  <span className={statusBadge(item.status)}>{item.status || "new"}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">
                  {item.message || item.notes || "-"}
                </td>
                <td className="px-4 py-3 text-sm text-blue-700 space-x-2">
                  <button onClick={() => handleSelectItem(item, type)} className="hover:underline">
                    View
                  </button>
                  <button onClick={() => updateStatus(type, item.id, "in-progress")} className="hover:underline">
                    Mark in-progress
                  </button>
                  <button onClick={() => updateStatus(type, item.id, "resolved")} className="hover:underline">
                    Mark resolved
                  </button>
                  <a href={`mailto:${item.email}`} className="hover:underline">
                    Respond
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Client Communications Dashboard</h1>
                <p className="text-lg text-blue-100">View contact submissions, consultation bookings, and respond quickly.</p>
              </div>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                Sign out
              </button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs font-semibold text-blue-700 uppercase">Admin dashboard</p>
            <p className="text-sm text-gray-700">
              View submissions, add notes, update status, and manage blog posts from one place.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Contact Messages ({contacts.length})</h2>
                <button
                  onClick={loadData}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-white"
                >
                  Refresh
                </button>
              </div>
              {loading && <p className="text-sm text-gray-600 mb-2">Refreshing...</p>}
              {renderTable(contacts, "contact")}
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Consultation Requests ({consultations.length})</h2>
                <button
                  onClick={loadData}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-white"
                >
                  Refresh
                </button>
              </div>
              {loading && <p className="text-sm text-gray-600 mb-2">Refreshing...</p>}
              {renderTable(consultations, "consultations")}
            </div>

            {selectedItem && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-700">{selectedItem.type === "contact" ? "Contact" : "Consultation"}</p>
                    <h3 className="text-xl font-bold text-gray-900">{selectedItem.name}</h3>
                    <p className="text-sm text-gray-700">{selectedItem.email}</p>
                    {selectedItem.phone && <p className="text-sm text-gray-700">Phone: {selectedItem.phone}</p>}
                    <p className="text-sm text-gray-700">Topic: {selectedItem.topic || "General"}</p>
                    <p className="text-sm text-gray-700">Status: <span className={statusBadge(selectedItem.status)}>{selectedItem.status || "new"}</span></p>
                    <p className="text-xs text-gray-500">Submitted: {new Date(selectedItem.createdAt).toLocaleString()}</p>
                  </div>
                  <button onClick={() => setSelectedItem(null)} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                    ×
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Message</p>
                  <div className="text-sm text-gray-900 whitespace-pre-wrap bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                    {selectedItem.message || selectedItem.notes || "No message provided."}
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Internal note</label>
                    <textarea
                      value={detailNote}
                      onChange={(e) => setDetailNote(e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add context or next steps"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Status</label>
                    <select
                      value={detailStatus}
                      onChange={(e) => setDetailStatus(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In-progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => updateStatus(selectedItem.type, selectedItem.id, detailStatus, detailNote)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700"
                      >
                        Save note & status
                      </button>
                      <a
                        href={`mailto:${selectedItem.email}`}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-white"
                      >
                        Respond via email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Blog Posts ({posts.length})</h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      resetForm();
                      setShowForm(true);
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700"
                  >
                    + Add Post
                  </button>
                  <button
                    onClick={() => setPosts(getBlogPosts())}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-white"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              {showForm && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{isEditing ? "Edit Post" : "Create Post"}</h3>
                    <button onClick={resetForm} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                      ×
                    </button>
                  </div>
                  <form className="space-y-4" onSubmit={handleSubmitPost}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Title *</label>
                        <input
                          name="title"
                          required
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Post title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Category *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {categories.map((cat) => (
                            <option key={cat.name} value={cat.name}>
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Author</label>
                        <input
                          name="author"
                          value={formData.author}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">Read Time</label>
                        <input
                          name="readTime"
                          value={formData.readTime}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1">Excerpt *</label>
                      <textarea
                        name="excerpt"
                        required
                        rows={3}
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Short description shown in listings"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1">Content *</label>
                      <textarea
                        name="content"
                        required
                        rows={8}
                        value={formData.content}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Full post content"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="text-sm text-gray-800">Publish immediately</label>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
                      >
                        {isEditing ? "Update Post" : "Create Post"}
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-5 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{post.excerpt}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                              {post.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                post.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {post.published ? "Published" : "Draft"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium space-x-2">
                            <button onClick={() => handleEditPost(post)} className="text-blue-600 hover:text-blue-900 font-semibold">
                              Edit
                            </button>
                            <button onClick={() => handleDeletePost(post.id)} className="text-red-600 hover:text-red-900 font-semibold">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
