"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg tracking-[0.15em] font-bold text-[var(--accent)]">
          STEFFY / KRISTI
        </h1>
        <div className="hidden md:flex gap-10 text-sm uppercase font-semibold">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-70}
              className="cursor-pointer text-gray-300 hover:text-[var(--accent)] transition-all tracking-wide"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        <button
          className="md:hidden text-[var(--accent)]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10 flex flex-col text-center py-4 space-y-3">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-60}
              className="text-gray-300 hover:text-[var(--accent)] text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}
