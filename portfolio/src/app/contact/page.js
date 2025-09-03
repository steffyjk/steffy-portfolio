"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null);

  // ✨ Particle background
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

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139,92,246,0.8)";
        ctx.fill();

        for (let j = i; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(59,130,246,0.15)";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4 overflow-hidden">
      {/* Galaxy Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Let’s Connect
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Whether it’s web development, automation, or your next big idea — I’d
          love to collaborate.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-lg mx-auto mt-12 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition">
          <p className="text-lg font-semibold">Get In Touch</p>
          <p className="mt-2">📧 steffy.jk20158@gmail.com</p>
          <p>📞 +91 7069214086</p>
          <a
            href="https://linkedin.com/in/steffy-khristi"
            target="_blank"
            className="block mt-2 text-blue-400 hover:text-blue-300 transition"
          >
            LinkedIn
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/40 rounded-xl shadow hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition"
          >
            Send Me a Message
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Send Me a Message
              </h3>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-blue-400/40 text-white py-3 rounded-lg shadow hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition"
                >
                  Send Message
                </button>
              </form>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-2 text-gray-400 hover:text-white transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
