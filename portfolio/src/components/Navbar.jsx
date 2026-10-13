"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/85 border-b border-white/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 text-white">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-lg tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Steffy Khristi
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 hover:text-gray-300 transition ${
                isActive(link.href) ? "text-white" : "text-gray-200"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                />
              )}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            download
            className="px-3 py-1.5 rounded-lg border border-blue-400/40 bg-blue-500/10 hover:bg-blue-500/25 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
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
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            download
            className="block text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}
