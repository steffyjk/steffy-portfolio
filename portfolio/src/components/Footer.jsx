"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-[var(--accent)]/20 bg-[var(--bg)] text-[var(--text)] overflow-hidden py-10 px-6 flex flex-col items-center justify-center"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00FFF6 1px, transparent 1px), linear-gradient(to bottom, #00FFF6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Faint corner glow */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[var(--accent)]/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--accent)]/10 blur-[100px]"></div>

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center gap-4"
      >
        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--accent)]">
          Steffy Khristi
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-base max-w-md">
          Logical systems thinker • Emotionally precise creator • Passionate
          about clarity, structure, and purpose.
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-3 text-sm font-medium">
          <a
            href="mailto:steffy.jk20158@gmail.com"
            className="hover:text-[var(--accent)] transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/steffy-khristi"
            target="_blank"
            className="hover:text-[var(--accent)] transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-[var(--accent)] transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Divider line */}
        <div className="h-[1px] w-32 bg-[var(--accent)]/30 my-4"></div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Steffy Khristi — Engineered with Logic ⚙️
        </p>
      </motion.div>
    </footer>
  );
}
