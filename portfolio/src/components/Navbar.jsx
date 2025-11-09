"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-center relative">
        {/* Logo/Name - Left */}
        <div
          className="absolute left-6 font-semibold text-base tracking-tight cursor-pointer text-white hover:text-white/70 transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Steffy Khristi
        </div>

        {/* Center Nav Items */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs text-white/70 hover:text-white transition-colors duration-200 font-normal"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Right */}
        <button className="md:hidden absolute right-6 text-white/70 hover:text-white transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
