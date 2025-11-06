"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import "@/assets/css/ContactSection.css";

export default function ContactSectionLight3D() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null);

  // 🩵 Animated logic network (particle system)
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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 1,
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
        ctx.fillStyle = "rgba(0,188,212,0.6)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(0,188,212,0.1)";
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

  // ✨ Card 3D Tilt + Glow
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card, .contact-modal");
    cards.forEach((card) => {
      const glow = document.createElement("div");
      glow.className =
        "absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 pointer-events-none mix-blend-screen";
      glow.style.background =
        "radial-gradient(circle at center, rgba(0,188,212,0.25), transparent 70%)";
      card.appendChild(glow);

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y - rect.height / 2) / 20;
        const rotateY = (x - rect.width / 2) / 20;

        gsap.to(card, {
          rotateX,
          rotateY,
          scale: 1.05,
          transformPerspective: 900,
          transformOrigin: "center",
          boxShadow:
            "0 20px 40px rgba(0,188,212,0.15), 0 0 30px rgba(0,188,212,0.1)",
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(glow, {
          opacity: 1,
          x: (x - rect.width / 2) / 5,
          y: (y - rect.height / 2) / 5,
          duration: 0.4,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.to(glow, { opacity: 0, x: 0, y: 0, duration: 0.6 });
      });
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-[var(--bg)] text-[var(--text)] px-6 pb-24 overflow-hidden"
    >
      {/* 🌐 Background grid + network */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,188,212,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,188,212,0.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div>

      {/* Glow aura */}
      <div className="absolute top-20 left-1/3 w-[350px] h-[350px] bg-[var(--accent)]/15 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-16 right-1/3 w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[160px] rounded-full"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900">
          Let’s <span className="text-[var(--accent)]">Connect</span>
        </h2>
        <div className="h-[2px] w-24 mx-auto mt-4 bg-[var(--accent)] rounded-full"></div>
        <p className="mt-5 text-gray-600 max-w-lg mx-auto text-sm sm:text-base">
          Open to collaborations, challenges, or meaningful technical
          conversations.
        </p>
      </motion.div>

      {/* 📬 Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="contact-card relative z-10 border border-[var(--accent)]/20 bg-white/90 backdrop-blur-xl 
                   rounded-2xl p-8 max-w-lg w-full text-center 
                   shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,188,212,0.2)] 
                   transition-all duration-500 transform-gpu"
      >
        <h3 className="text-lg font-semibold text-[var(--accent)] tracking-wide uppercase">
          Get In Touch
        </h3>
        <p className="mt-3 text-gray-800">📧 steffy.jk20158@gmail.com</p>
        <p className="text-gray-800">📞 +91 7069214086</p>
        <a
          href="https://linkedin.com/in/steffy-khristi"
          target="_blank"
          className="block mt-3 text-[var(--accent)] hover:text-gray-800 transition-colors"
        >
          LinkedIn Profile ↗
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 border border-[var(--accent)]/40 text-[var(--accent)] rounded-md hover:bg-[var(--accent)]/10 transition-all duration-300"
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
              className="contact-modal relative border border-[var(--accent)]/30 bg-white/90 backdrop-blur-xl 
                         rounded-2xl p-8 max-w-md w-full text-center 
                         shadow-[0_8px_40px_rgba(0,188,212,0.15)] transform-gpu"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent)] mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-[var(--accent)]/20 rounded-md bg-transparent 
                             focus:border-[var(--accent)]/50 outline-none text-gray-800 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-[var(--accent)]/20 rounded-md bg-transparent 
                             focus:border-[var(--accent)]/50 outline-none text-gray-800 placeholder-gray-500"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full p-3 border border-[var(--accent)]/20 rounded-md bg-transparent 
                             focus:border-[var(--accent)]/50 outline-none text-gray-800 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 border border-[var(--accent)]/40 rounded-md text-[var(--accent)] 
                             hover:bg-[var(--accent)]/10 font-medium transition-all"
                >
                  Send Message
                </button>
              </form>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-gray-500 hover:text-[var(--accent)] text-sm transition-all"
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
