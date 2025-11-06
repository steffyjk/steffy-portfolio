"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    let ctx;

    requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        // 🌟 Subtle pulsing glow animation
        gsap.to(".footer-glow", {
          opacity: 0.15,
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 3,
        });

        // 🌀 Fade-in reveal when in view
        gsap.from(".footer-wrapper", {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            once: true,
          },
        });
      }, ref);
      ScrollTrigger.refresh();
    });

    return () => ctx?.revert();
  }, []);

  return (
    <footer
      ref={ref}
      id="footer"
      className="relative border-t border-[var(--accent)]/20 bg-[var(--bg)] text-[var(--text)] overflow-hidden py-12 px-6 flex flex-col items-center justify-center"
    >
      {/* 🧩 Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,188,212,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,188,212,0.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div>

      {/* 🌊 Ambient glow blobs */}
      <div className="footer-glow absolute top-0 left-0 w-72 h-72 bg-[var(--accent)]/20 blur-[140px]"></div>
      <div className="footer-glow absolute bottom-0 right-0 w-72 h-72 bg-[var(--accent)]/20 blur-[140px]"></div>

      {/* 🌐 Main Footer Content */}
      <div className="footer-wrapper relative z-10 w-full max-w-5xl flex flex-col items-center text-center gap-4">
        {/* Name */}
        <h3 className="text-2xl font-bold tracking-tight text-[var(--accent)]">
          Steffy Khristi
        </h3>

        {/* Tagline */}
        <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
          Logical systems thinker • Emotionally precise creator • Passionate
          about clarity, structure, and purpose.
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-4 text-sm font-medium">
          {[
            { name: "Email", href: "mailto:steffy.jk20158@gmail.com" },
            {
              name: "LinkedIn",
              href: "https://linkedin.com/in/steffy-khristi",
              target: "_blank",
            },
            {
              name: "GitHub",
              href: "https://github.com/",
              target: "_blank",
            },
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.target || "_self"}
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                textShadow: "0px 0px 10px rgba(0,188,212,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="footer-link text-gray-700 cursor-pointer transition-all duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Divider line */}
        <div className="h-[1px] w-24 bg-[var(--accent)]/30 my-5"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Steffy Khristi — Engineered with Logic ⚙️
        </p>
      </div>

      {/* ⚡ Flowing line animation (bottom sweep) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
      />
    </footer>
  );
}
