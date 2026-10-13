"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Generic scroll-reveal wrapper: children fade/slide in the first time
 * they enter the viewport.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  x = 0,
  once = true,
  duration = 0.7,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Infinite horizontal marquee. Content is duplicated and tracks itself
 * with a CSS animation (keys in globals.css). Pauses on hover.
 */
export function Marquee({ items, reverse = false, className = "", itemClassName = "" }) {
  const reduce = useReducedMotion();
  const row = (key) => (
    <div key={key} className={`flex shrink-0 items-center ${itemClassName}`} aria-hidden={key === "b"}>
      {items.map((it, i) => (
        <span key={i} className="mx-4 sm:mx-6 flex items-center gap-2 whitespace-nowrap">
          {it}
          <span className="text-purple-400/70 select-none">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden w-full group ${className}`}
      style={reduce ? undefined : { maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={`flex w-max ${reduce ? "" : reverse ? "marquee-reverse group-hover:[animation-play-state:paused]" : "marquee-track group-hover:[animation-play-state:paused]"}`}
        style={reduce ? { width: "100%", overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } : undefined}
      >
        {reduce ? row("a") : [row("a"), row("b")]}
      </div>
    </div>
  );
}
