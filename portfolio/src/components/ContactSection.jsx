"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null);

  // 🩵 Subtle cyan logic particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.8 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,246,0.8)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(0,255,246,0.15)";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[var(--bg)] text-[var(--text)] px-6 pb-24 overflow-hidden"
    >
      {/* 🧩 Particle Grid Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40"
      ></canvas>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00FFF6 1px, transparent 1px), linear-gradient(to bottom, #00FFF6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Let’s <span className="text-[var(--accent)]">Connect</span>
        </h2>
        <div className="h-[2px] w-24 mx-auto mt-4 bg-[var(--accent)] rounded-full"></div>
        <p className="mt-5 text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          Open to collaborations, problem-solving discussions, or deep technical
          conversations.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl p-8 max-w-lg w-full text-center hover:border-[var(--accent)]/40 transition-all duration-300"
      >
        <h3 className="text-lg font-semibold text-[var(--accent)] tracking-wide uppercase">
          Get In Touch
        </h3>
        <p className="mt-3 text-gray-300">📧 steffy.jk20158@gmail.com</p>
        <p className="text-gray-300">📞 +91 7069214086</p>
        <a
          href="https://linkedin.com/in/steffy-khristi"
          target="_blank"
          className="block mt-3 text-[var(--accent)] hover:text-white transition-colors"
        >
          LinkedIn Profile ↗
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 border border-[var(--accent)]/50 text-[var(--accent)] rounded-md hover:bg-[var(--accent)]/10 transition-all duration-300"
        >
          Send Message
        </button>
      </motion.div>

      {/* ✉️ Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-[var(--accent)]/40 bg-white/[0.02] backdrop-blur-md rounded-xl p-8 max-w-md w-full text-center shadow-[0_0_25px_rgba(0,255,246,0.2)]"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent)] mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-white/10 rounded-md bg-transparent focus:border-[var(--accent)]/60 outline-none text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-white/10 rounded-md bg-transparent focus:border-[var(--accent)]/60 outline-none text-white placeholder-gray-500"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full p-3 border border-white/10 rounded-md bg-transparent focus:border-[var(--accent)]/60 outline-none text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 border border-[var(--accent)]/50 rounded-md hover:bg-[var(--accent)]/10 text-[var(--accent)] font-medium transition-all"
                >
                  Send Message
                </button>
              </form>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-gray-400 hover:text-[var(--accent)] text-sm transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
