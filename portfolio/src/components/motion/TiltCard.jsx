"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * 3D tilt container. Card rotates toward the cursor with a spring and a
 * glare highlight that follows the pointer. Gracefully no-ops for
 * reduced-motion / touch users (flat card, static sheen).
 */
export default function TiltCard({ children, className = "", max = 8, glare = true }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const sx = useSpring(rawX, { stiffness: 180, damping: 20 });
  const sy = useSpring(rawY, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], [30, 70]);
  const glareY = useTransform(sy, [0, 1], [30, 70]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14) 0%, transparent 55%)`;

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left) / r.width);
    rawY.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    rawX.set(0.5);
    rawY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        />
      )}
    </motion.div>
  );
}
