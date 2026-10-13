"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar pinned to the top of the viewport that fills with scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] origin-left
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
    />
  );
}
