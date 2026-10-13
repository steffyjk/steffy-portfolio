"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

export const GITHUB_URL = "https://github.com/steffyjk";
export const LINKEDIN_URL = "https://www.linkedin.com/in/steffy-khristi/";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  // Opens the visitor's email client with a pre-filled message — works without a backend.
  const openMail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;
    if (!name || !email || !message) return;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`;
    const subject = `Portfolio enquiry from ${name}`;
    window.location.href = `mailto:steffy.jk2018@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-32 pb-24 px-4 overflow-hidden">
      {/* Galaxy Background */}
      <ParticleBackground count={60} />

      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Let’s Connect
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Whether it’s backend engineering, automation, or your next big idea — I’d
          love to collaborate.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-lg mx-auto mt-12 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition">
          <p className="text-lg font-semibold">Get In Touch</p>
          <a href="mailto:steffy.jk2018@gmail.com" className="block mt-3 hover:text-blue-300 transition">
            📧 steffy.jk2018@gmail.com
          </a>
          <p className="mt-1">📞 +91 7069214086</p>
          <p className="mt-1">📍 Ahmedabad, Gujarat, India</p>

          <div className="mt-4 flex flex-wrap gap-4 text-blue-400">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="hover:text-blue-300 transition"
            >
              Resume (PDF)
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/40 rounded-xl shadow hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition"
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
              className="bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-2xl shadow-2xl w-full max-w-md p-6 mx-4"
            >
              <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Send Me a Message
              </h2>
              <form onSubmit={openMail} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  aria-label="Your name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Your email"
                  required
                  placeholder="Your Email"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  aria-label="Your phone number"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <textarea
                  rows={4}
                  name="message"
                  aria-label="Your message"
                  required
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
    </section>
  );
}
