"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A soft radial glow that trails the cursor across the whole site.
 * Skipped entirely on touch devices and for reduced-motion users.
 */
export default function GlowCursor() {
  const [enabled, setEnabled] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full
                 mix-blend-screen opacity-40"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
      }}
    />
  );
}
