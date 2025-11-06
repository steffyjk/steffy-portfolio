"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = {
  Backend: [
    "Python",
    "Django",
    "Flask",
    "DRF",
    "Node.js",
    "WebSockets",
    "RabbitMQ",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "RxJS",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  Cloud: ["AWS", "Azure", "EC2", "S3"],
  Tools: ["Git", "GitHub", "Docker", "Figma", "VS Code", "PyCharm"],
};

export default function SkillSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✨ Animate header first
      gsap.from(".skills-title", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(".skills-line", {
        width: 0,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(".skills-desc", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      // 🔹 Animate cards after header
      gsap.to(".skill-card", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.4,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-6 pb-24 bg-[var(--bg)] text-[var(--text)] relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="skills-title text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Technical <span className="text-[var(--accent)]">Expertise</span>
        </h2>
        <div className="skills-line h-[2px] w-28 mx-auto mt-4 bg-[var(--accent)] rounded-full"></div>
        <p className="skills-desc text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          A structured ecosystem of tools, languages, and frameworks I use to
          turn logic into reliable systems.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full text-center z-10">
        {Object.entries(skills).map(([category, items], i) => (
          <div
            key={i}
            className="skill-card opacity-0 translate-y-10 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl hover:border-[var(--accent)]/50 transition-all duration-300"
          >
            <h3 className="text-[var(--accent)] text-lg font-semibold uppercase tracking-widest mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {items.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 text-xs font-medium text-gray-200 border border-[var(--accent)]/30 rounded-full bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle background grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00FFF6 1px, transparent 1px), linear-gradient(to bottom, #00FFF6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>
    </section>
  );
}
