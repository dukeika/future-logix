'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/FUTURELOGIX.png"
            alt="Future Logix Logo"
            width={120}
            height={60}
            className="mr-3 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-1">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-gray-700 font-semibold hover:text-[#1854CE] hover:bg-blue-50 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-lg text-gray-700 font-semibold hover:text-[#1854CE] hover:bg-blue-50 transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/services"
            className="px-4 py-2 rounded-lg text-gray-700 font-semibold hover:text-[#1854CE] hover:bg-blue-50 transition-all duration-200"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-lg text-gray-700 font-semibold hover:text-[#1854CE] hover:bg-blue-50 transition-all duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="ml-2 bg-[#1854CE] hover:bg-[#1645B8] text-white font-semibold px-6 py-2 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}