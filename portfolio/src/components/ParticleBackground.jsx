"use client";
import { useRef, useEffect } from "react";

/**
 * Interactive particle constellation canvas.
 * - Particles drift and repel from the cursor, and lines connect them to it.
 * - Decorative only: marked aria-hidden so screen readers skip it.
 * - Cancels its animation frame on unmount (no zombie RAF loops).
 * - Renders a single static frame when the user prefers reduced motion or
 *   on touch devices (cursor effects are meaningless there).
 */
export default function ParticleBackground({
  count = 70,
  speed = 0.6,
  particleColor = "rgba(139,92,246,0.8)",
  linkColor = "rgba(59,130,246,0.15)",
  linkDist = 100,
  interactive = true,
  className = "absolute inset-0 z-0",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reactive = interactive && !reduceMotion && finePointer;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
        r: Math.random() * 2 + 1,
      });
    }

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (reactive) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
    }

    const REPEL_DIST = 120;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.strokeStyle = linkColor;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        // Links from cursor to nearby particles — the "site sees you" moment
        if (reactive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_DIST * 1.6) {
            const alpha = 0.5 * (1 - dist / (REPEL_DIST * 1.6));
            ctx.strokeStyle = `rgba(139,92,246,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });
    };

    let raf;
    if (reduceMotion) {
      draw(); // one static frame — no animation
    } else {
      const animate = () => {
        particles.forEach((p) => {
          if (reactive) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < REPEL_DIST && dist > 0.001) {
              // Gentle push away from the cursor
              const force = (REPEL_DIST - dist) / REPEL_DIST;
              p.x += (dx / dist) * force * 2.2;
              p.y += (dy / dist) * force * 2.2;
            }
          }
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        draw();
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (reactive) {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count, speed, particleColor, linkColor, linkDist, interactive]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className}></canvas>;
}
