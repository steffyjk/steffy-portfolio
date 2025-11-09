"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// 1. Data remains the same
const experiences = [
  {
    year: "2025",
    role: "Senior Software Engineer",
    company: "Tracewave Transparency",
    tagline: "Leading backend architecture",
    description:
      "Specializing in Python backend development with Django. Building scalable web applications and REST APIs that power transparent supply chains.",
    tech: ["Python", "Django", "FastAPI", "PostgreSQL"],
    color: "#2997ff",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2023",
    role: "Software Engineer",
    company: "Mars Intelligence",
    tagline: "Team leadership & architecture",
    description:
      "Led vendor management web application development. Managed team of 20 people and designed system architecture with Angular and Django.",
    tech: ["Angular", "Django", "RxJS", "Azure"],
    color: "#bf5af2",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2021",
    role: "Associate Software Engineer",
    company: "Inexture Solutions",
    tagline: "Full-stack development",
    description:
      "Built APIs with Flask-RESTful and Django REST Framework. Implemented AWS deployment and web scraping solutions.",
    tech: ["Flask", "DRF", "AWS", "MongoDB"],
    color: "#ff375f",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2019",
    role: "Python Trainee",
    company: "InfoLabz",
    tagline: "Foundation building",
    description:
      "Learned Python fundamentals and IoT technologies. Worked on Arduino hardware and interactive systems.",
    tech: ["Python", "IoT", "Arduino"],
    color: "#ff9f0a",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function WorkSection() {
  // 2. Set up refs and scroll hooks for horizontal scroll
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Create the horizontal 'x' transform
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", `-${100 - 100 / experiences.length}%`]
  );

  // 4. (Premium Effect) Create transforms for the background color
  const steps = experiences.map((_, i) => i / (experiences.length - 1));
  const colors = experiences.map((exp) => exp.color);

  const gradientColor1 = useTransform(smoothProgress, steps, colors);
  const gradientColor2 = useTransform(
    smoothProgress,
    steps,
    [...colors.slice(1), colors[colors.length - 1]] // Shift colors for 2nd gradient
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{
        background: "var(--bg)",
        // 5. Set height to give scroll room, no more scroll-jacking
        height: `${experiences.length * 100}vh`,
      }}
    >
      {/* 6. Main Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 opacity-10 blur-[150px]"
            style={{
              background: `radial-gradient(circle at 30% 50%, ${gradientColor1}, transparent 70%)`,
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-10 blur-[150px]"
            style={{
              background: `radial-gradient(circle at 70% 50%, ${gradientColor2}, transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(var(--line) 1px, transparent 1px),
                linear-gradient(to right, var(--line) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Section Header */}
        <div className="relative z-10 text-center mb-12 lg:mb-16 px-6">
          <div className="inline-block mb-4">
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--subtle)" }}
            >
              <motion.div
                className="w-8 h-[1px]"
                style={{ background: gradientColor1 }}
              />
              <span>CAREER JOURNEY</span>
              <motion.div
                className="w-8 h-[1px]"
                style={{ background: gradientColor1 }}
              />
            </div>
          </div>
          <h2
            className="text-4xl lg:text-6xl font-semibold tracking-tight mb-3"
            style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            Experience.
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--subtle)" }}
          >
            {experiences.length} roles • {new Date().getFullYear() - 2019} years
            of building scalable systems
          </p>
        </div>

        {/* 7. Horizontal Track */}
        <motion.div
          className="flex z-10"
          style={{ x }} // This drives the horizontal scroll
        >
          {experiences.map((exp, idx) => {
            // 8. Per-card "pop-in" animation
            const cardStart = idx / experiences.length;
            const cardEnd = (idx + 1) / experiences.length;
            const cardProgress = useTransform(
              smoothProgress,
              [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
              [0, 1, 1, 0]
            );
            const scale = useTransform(cardProgress, [0, 1], [0.9, 1]);
            const opacity = useTransform(cardProgress, [0, 1], [0.7, 1]);

            return (
              // 9. Card "Page"
              <motion.div
                key={idx}
                className="w-screen flex-shrink-0 flex items-start justify-center px-8 lg:px-16"
                style={{ scale, opacity, perspective: "2000px" }}
              >
                {/* 10. Card Content (Reusing your card design) */}
                <div
                  className="w-full max-w-5xl rounded-[2.5rem] overflow-hidden backdrop-blur-2xl"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    border: `1px solid ${exp.color}40`,
                    boxShadow: `0 40px 100px -20px ${exp.color}30`,
                  }}
                >
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Left: Image */}
                    <div className="relative overflow-hidden h-64 lg:h-auto">
                      <img
                        src={exp.image}
                        alt={exp.role}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 opacity-60"
                        style={{
                          background: `linear-gradient(135deg, ${exp.color}40, transparent)`,
                        }}
                      />
                      <div className="absolute top-6 left-6">
                        <div
                          className="px-5 py-2 rounded-full backdrop-blur-xl font-bold text-xl"
                          style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            color: exp.color,
                            border: `2px solid ${exp.color}`,
                          }}
                        >
                          {exp.year}
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <div
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl"
                          style={{
                            background: "rgba(0, 0, 0, 0.6)",
                            border: `1px solid ${exp.color}40`,
                          }}
                        >
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: exp.color }}
                          />
                          <span className="text-xs font-medium text-white">
                            {exp.tagline}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="p-6 lg:p-10 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div>
                          <h3
                            className="text-2xl lg:text-3xl font-semibold mb-2 tracking-tight"
                            style={{
                              color: "var(--text)",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {exp.role}
                          </h3>
                          <p
                            className="text-lg lg:text-xl font-medium"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <p
                          className="text-sm lg:text-base leading-relaxed"
                          style={{ color: "var(--subtle)" }}
                        >
                          {exp.description}
                        </p>
                        <div className="space-y-2 pt-2">
                          <p
                            className="text-xs uppercase tracking-wider font-semibold"
                            style={{ color: "var(--subtle)" }}
                          >
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-sm"
                                style={{
                                  background: "rgba(255, 255, 255, 0.05)",
                                  border: "1px solid var(--line)",
                                  color: "var(--text)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
        >
          <span className="text-xs" style={{ color: "var(--subtle)" }}>
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
            style={{ color: "var(--subtle)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
