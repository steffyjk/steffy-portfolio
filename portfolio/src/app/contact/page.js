"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl mt-4 font-extrabold">Let’s Connect</h2>
        <p className="mt-4 text-lg text-gray-300">
          Whether it’s web development, automation, or your next big idea — I’d
          love to collaborate.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-lg mx-auto mt-12 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-center">
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
          className="mt-6 px-6 py-3 bg-white/10 border border-white/20 rounded-xl shadow hover:bg-white/20 transition"
        >
          Send Me a Message
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
              <h3 className="text-2xl font-bold text-center">
                Send Me a Message
              </h3>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                />
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-white/20 border border-white/30 text-white py-3 rounded-lg shadow hover:bg-white/30 transition"
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
