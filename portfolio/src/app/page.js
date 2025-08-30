"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      {/* Animated Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center"
      >
        Hi, I’m <span className="text-blue-600">Steffy Khristi</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl"
      >
        Software Engineer specializing in{" "}
        <span className="font-semibold">Python, Django, React & Full-Stack Development</span>.  
        I build scalable apps with clean code & modern UI.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/Steffy_Resume.pdf"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <Link
          href="/contact"
          className="px-5 py-3 border border-gray-700 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Optional Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-12"
      >
        <img
          src="animated_girl.jpg"
          alt="Steffy Khristi"
          className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg object-cover"
        />
      </motion.div>
    </main>
  );
}
