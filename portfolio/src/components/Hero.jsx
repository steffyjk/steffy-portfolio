"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import Magnetic from "./motion/Magnetic";
import { Typewriter, Counter } from "./motion/TextMotion";
import profilePic from "../assets/animated_girl.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const wordAnim = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ROLES = [
  "Senior Software Engineer",
  "Python · Django · DRF · FastAPI",
  "Scalable Backend Systems",
  "AI & RAG Application Builder",
  "Cloud-Native Problem Solver",
];

const STATS = [
  { to: 4, suffix: "+", label: "Years Experience", decimals: 0 },
  { to: 20, suffix: "+", label: "Production Projects", decimals: 0 },
  { to: 9.68, suffix: "", label: "CGPA · B.Tech", decimals: 2 },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Scroll choreography: content lifts & dims, orb drifts slower (parallax)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden px-6 pt-28 pb-16"
    >
      <ParticleBackground speed={0.6} linkDist={100} />

      {/* Glowing ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] items-center gap-10 md:gap-6"
      >
        {/* ---- Left: copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08]"
          >
            {["Hi, I'm"].map((w, i) => (
              <motion.span key={i} variants={wordAnim} className="inline-block mr-3">
                {w}
              </motion.span>
            ))}
            {"Steffy Khristi".split(" ").map((w, i) => (
              <motion.span
                key={w}
                variants={wordAnim}
                className="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 font-mono"
          >
            &gt;&nbsp;
            <Typewriter phrases={ROLES} className="text-purple-300" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl"
          >
            I architect and build&nbsp;
            <span className="text-white font-medium">robust backend systems, RESTful APIs, and database architectures</span>
            . With expertise in&nbsp;
            <span className="text-white font-medium">performance optimization, cloud deployment (AWS, Azure), and AI-driven applications</span>,
            I own the end-to-end feature lifecycle — turning complex business requirements into reliable, intelligent, and scalable digital solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-10 gap-y-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                href="/projects"
                className="inline-block px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600/70 to-purple-600/70 border border-blue-400/40 shadow-[0_0_18px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects <span aria-hidden="true">→</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="inline-block px-7 py-3 rounded-xl font-semibold text-white bg-white/5 border border-blue-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* ---- Right: profile orb ---- */}
        <motion.div
          style={{ y: orbY, rotate: orbRotate }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1.3, 0.36, 1] }}
          className="relative mx-auto md:mx-0 md:justify-self-end"
        >
          <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-600/40 blur-3xl animate-pulse" />

          {/* Rotating gradient gimbal */}
          <div className="animate-spin-slow absolute -inset-3 sm:-inset-4 rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.7),rgba(139,92,246,0.35),rgba(236,72,153,0.5),rgba(59,130,246,0.7))] [mask-image:radial-gradient(farthest-side,transparent_calc(100%-4px),black_calc(100%-4px))]" />

          <div className="relative">
            <div className="animate-float rounded-full p-[4px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_45px_rgba(59,130,246,0.8)]">
              <div className="rounded-full overflow-hidden bg-gray-900">
                <Image
                  src={profilePic}
                  width={400}
                  height={400}
                  alt="Steffy Khristi"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-xl"
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
