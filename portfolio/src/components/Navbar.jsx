"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import ThemeToggle from "@/components/ThemeToggle";
import "@/assets/css/Navbar.css"; // 🔥 custom navbar-only styling

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", to: "home" },
      { name: "About", to: "about" },
      { name: "Skills", to: "skills" },
      { name: "Projects", to: "projects" },
      { name: "Experience", to: "experience" },
      { name: "Contact", to: "contact" },
    ],
    []
  );

  const idFallback = useMemo(
    () => ({
      skills: "skill",
      experience: "projects",
    }),
    []
  );

  function scrollToId(id) {
    let target = id;
    if (typeof document !== "undefined" && !document.getElementById(target)) {
      target = idFallback[id] || id;
    }
    scroller.scrollTo(target, { smooth: true, duration: 600, offset: -80 });
    setOpen(false);
  }

  // Track active section
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = [
      "home",
      "about",
      "skills",
      "skill",
      "projects",
      "experience",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.6, 1] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [idFallback]);

  return (
    <header className="nav fixed top-0 left-0 w-full z-50 text-[var(--text)] border-b border-[var(--border)] backdrop-blur-lg bg-[var(--bg)]/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Brand */}
        <motion.button
          onClick={() => scrollToId("home")}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono tracking-[0.18em] text-sm sm:text-base font-semibold text-[var(--accent)] select-none a-underline"
        >
          STEFFY / KHRISTI
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-[0.8rem] uppercase">
          {navItems.map((item) => {
            const selected =
              active === item.to || active === idFallback[item.to];
            return (
              <button
                key={item.to}
                onClick={() => scrollToId(item.to)}
                className="relative cursor-pointer subtle hover:text-[var(--accent)] transition-colors"
                aria-label={`Go to ${item.name}`}
              >
                <span className="tracking-wide">{item.name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-all duration-300 ${
                    selected ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}

          {/* Route chip */}
          <span className="chip mono ml-2 hidden lg:inline-flex">
            route:/{active}
          </span>
        </div>

        {/* Right side: Theme toggle + Sidebar trigger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden text-[var(--accent)] text-2xl focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="sidebar-drawer"
            >
              <div className="sidebar-header">
                <span className="chip mono">nav: active</span>
                <span className="mono subtle">mode=solver</span>
              </div>
              <div className="sidebar-links">
                {navItems.map((item) => (
                  <button
                    key={item.to}
                    className={`sidebar-link ${
                      active === item.to ? "active" : ""
                    }`}
                    onClick={() => scrollToId(item.to)}
                    aria-label={`Go to ${item.name}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="sidebar-footer">
                <ThemeToggle />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
