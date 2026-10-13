"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import { Marquee, Reveal } from "../components/motion/Reveal";
import Magnetic from "../components/motion/Magnetic";
import TiltCard from "../components/motion/TiltCard";
import { ScrambleText } from "../components/motion/TextMotion";

const RIBBON = [
  "Python", "Django", "DRF", "FastAPI", "PostgreSQL", "Celery", "Redis",
  "AWS", "Azure", "React", "Next.js", "AI & LLM", "RAG", "WebSockets", "NGINX",
];

const STORY_SENTENCE = [
  "I", "turn", "complex", "business", "requirements", "into",
  "reliable,", "intelligent,", "scalable", "digital", "systems.",
];
const EMPHASIZED = new Set(["reliable,", "intelligent,", "scalable", "digital", "systems."]);

const DOMAINS = [
  {
    icon: "⚙️",
    title: "Backend Architecture",
    text: "Multi-tenant Django/DRF & FastAPI systems — API design, license engines, audit trails, and data isolation done right.",
    tags: ["Django", "DRF", "FastAPI", "Multi-Tenant"],
  },
  {
    icon: "🧠",
    title: "AI & LLM Systems",
    text: "AI coaching platforms, question-generation engines, RAG pipelines, and custom evaluation frameworks powered by LLMs.",
    tags: ["Claude", "RAG", "Evaluations", "AI Pipelines"],
  },
  {
    icon: "🚀",
    title: "Cloud & Performance",
    text: "AWS/Azure deployments, ETL, table partitioning, materialized views and N+1 hunts that keep heavy data fast.",
    tags: ["AWS", "Azure", "PostgreSQL", "DevOps"],
  },
];

/** One word of the scroll-lit story. Hooks live here, one per word. */
function StoryWord({ word, progress, start, end, emphasized }) {
  const color = useTransform(
    progress,
    [start, end],
    emphasized ? ["#374151", "#a78bfa"] : ["#374151", "#e5e7eb"]
  );
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.45em]">
      {word}
    </motion.span>
  );
}

export default function Home() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });
  const storyOpacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0, 1, 1, 0.4]);
  const n = STORY_SENTENCE.length;

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Hero />

      {/* Tech ribbon — moves without being asked to */}
      <div className="relative border-y border-blue-500/20 bg-black/60 py-5 backdrop-blur-md">
        <Marquee items={RIBBON} className="mx-auto" itemClassName="text-sm sm:text-base text-gray-300 font-mono" />
      </div>

      {/* Scroll-pinned story: words light up as you scroll */}
      <div ref={storyRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6">
          <motion.p
            style={{ opacity: storyOpacity }}
            aria-label={STORY_SENTENCE.join(" ")}
            className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold text-center leading-snug"
          >
            {STORY_SENTENCE.map((w, i) => (
              <StoryWord
                key={i}
                word={w}
                progress={scrollYProgress}
                start={i / n}
                end={(i + 1) / n}
                emphasized={EMPHASIZED.has(w)}
              />
            ))}
          </motion.p>
        </div>
      </div>

      {/* What I do — tilted glass cards */}
      <section className="relative px-6 py-24 sm:py-28 overflow-hidden">
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6">
              <ScrambleText text="What I Build" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
              Three terrains where I&apos;ve shipped the most — hover to get closer.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3 mb-24">
            {DOMAINS.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.15}>
                <TiltCard max={7}>
                  <article className="h-full rounded-2xl p-7 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/25 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:border-purple-400/50 transition-all duration-300">
                    <span className="text-4xl" aria-hidden="true">{d.icon}</span>
                    <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">{d.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">{d.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {d.tags.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs rounded-full text-gray-200 bg-blue-600/20 border border-blue-400/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Closing CTA band */}
          <Reveal x={0} y={30}>
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="rounded-3xl bg-gray-950/90 px-8 py-12 sm:px-14 text-center backdrop-blur-xl">
                <h2 className="text-2xl sm:text-4xl font-extrabold">
                  Have an idea that needs a&nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    solid backend?
                  </span>
                </h2>
                <p className="mt-3 text-gray-400 max-w-xl mx-auto">
                  From requirement analysis to production deployment — let&apos;s make it real.
                </p>
                <Magnetic strength={0.4} className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600/70 to-purple-600/70 border border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.75)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Let&apos;s Talk <span aria-hidden="true">→</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
