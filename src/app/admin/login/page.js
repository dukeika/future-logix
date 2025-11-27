'use client';

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const dynamic = "force-dynamic";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
      } else {
        const redirect = searchParams.get("redirect") || "/admin";
        router.push(redirect);
      }
    } catch {
      setError("Unable to login right now. Please try again.");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#0B1D4D] via-[#123072] to-[#0A1A3F] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#3B82F6,transparent_35%),radial-gradient(circle_at_bottom_right,#EAB308,transparent_30%)]" />
          <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
            <p className="uppercase text-xs font-bold text-yellow-300 tracking-wide mb-3">Admin</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Sign in to the dashboard</h1>
            <p className="text-blue-100 text-lg">Enter the admin password to view submissions and manage content.</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-md mx-auto px-4">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
              {reason === "missing-password" && (
                <p className="text-sm font-semibold text-red-700 mb-4">
                  ADMIN_PASSWORD is not set on the server. Set it in your environment to enable login.
                </p>
              )}
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Admin password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter password"
                  />
                </div>
                {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {loading ? "Signing in..." : "Sign in"}
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

export default function AdminLogin() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-700">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
