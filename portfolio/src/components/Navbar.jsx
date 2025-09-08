"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/85 border-b border-white/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 text-white">
        {/* Logo / Name */}
        <span className="font-bold text-lg tracking-wide">Steffy Khristi</span>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/skills" className="text-white hover:text-gray-300 transition">
            Skills
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/experience" className="text-white hover:text-gray-300 transition">
            Experience
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/terms" className="text-white hover:text-gray-300 transition">
            Terms of Service
          </Link>
          <Link href="/refund" className="text-white hover:text-gray-300 transition">
            Refund Policy
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger (Menu) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/20 px-6 py-4 space-y-4 text-sm font-semibold">
          <Link
            href="/"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Terms of Service
          </Link>
          <Link
            href="/refund"
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Refund Policy
          </Link>
        </div>
      )}
    </header>
  );
}
