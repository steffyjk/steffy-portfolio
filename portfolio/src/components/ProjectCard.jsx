"use client";
import { motion } from "framer-motion";
import TiltCard from "./motion/TiltCard";

/**
 * Flagship project card: scroll-revealed, 3D tilt toward cursor with glare.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard max={6}>
        <article className="group h-full rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 hover:border-purple-400/60 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] transition-all duration-300 flex flex-col justify-between">
          <div>
            <span className="inline-block mb-3 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full text-blue-200 bg-blue-500/20 border border-blue-400/40 group-hover:text-pink-200 group-hover:border-pink-400/40 transition-colors duration-300">
              {project.context}
            </span>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
              {project.title}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed flex-grow">
              {project.description}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full text-gray-200 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/40 backdrop-blur-md"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}
