"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "../../components/motion/Reveal";
import { ScrambleText } from "../../components/motion/TextMotion";

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.55"],
  });
  // The timeline line literally draws itself as you scroll
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Zentech Softech India Pvt. Ltd. | Ahmedabad, Gujarat",
      period: "Jan 2026 – Present",
      details: [
        "Architect and maintain scalable backend systems using Python, Django, and DRF, owning the full feature lifecycle — requirement analysis, API/database design, third-party integrations, performance tuning, testing, and production deployment.",
        "Lead database architecture decisions including PostgreSQL performance tuning, table partitioning, and materialized views to support high-throughput data operations.",
        "Partner with frontend engineers, QA, and stakeholders to translate business requirements into robust technical solutions and resolve production issues with minimal downtime.",
        "Mentor and technically guide junior developers, conducting code reviews and enforcing engineering best practices across the team.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Tracewave Transparency Pvt. Ltd. | Ahmedabad, Gujarat",
      period: "Jan 2025 – Dec 2025",
      details: [
        "Designed and delivered scalable, production-grade REST APIs and web applications using Python and Django.",
        "Led client-facing communication and demo preparation, coordinating with frontend teams to plan and deliver features on schedule.",
        "Contributed to database design and API architecture decisions, ensuring maintainable and efficient backend systems.",
      ],
    },
    {
      role: "Software Engineer",
      company: "MaRS Planning & Engineering Services Pvt. Ltd. | Ahmedabad, Gujarat",
      period: "Oct 2023 – Dec 2024",
      details: [
        "Delivered robust, scalable full-stack applications using Django, Angular, and RxJS; independently managed two internal products from concept to production.",
        "Led a cross-functional team building a vendor management web application, owning system architecture, UI design, and backend implementation.",
        "Ran Scrum ceremonies and sprint planning, ensuring on-time delivery aligned with business goals.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Inexture Solutions LLP | Ahmedabad, Gujarat",
      period: "Dec 2021 – Oct 2023",
      details: [
        "Built full-stack applications and REST APIs using Flask, Django, Flask-RESTful, and Django REST Framework.",
        "Worked across relational and NoSQL databases, AWS cloud deployment, and web scraping pipelines using Scrapy and Selenium.",
      ],
    },
    {
      role: "Python Trainee (Internship)",
      company: "InfoLabz | Ahmedabad, Gujarat",
      period: "Dec 2019 – Jan 2020",
      details: [
        "Completed hands-on training in Python backend development.",
        "Built small-scale REST APIs and applications using Flask and Django.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech Computer Engineering",
      score: "9.68 CGPA",
      institute: "Indus University | Ahmedabad",
      period: "2018 – 2022",
    },
    {
      degree: "Higher Secondary Certificate (Science Stream)",
      score: "78.92%",
      institute: "Higher Secondary School",
      period: "2016 – 2018",
    },
    {
      degree: "Secondary School Certification",
      score: "83.85%",
      institute: "Secondary School",
      period: "2015 – 2016",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 pt-32 pb-28 sm:px-10 sm:pb-32 md:px-14 lg:px-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-blue-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Title */}
      <Reveal y={0}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 relative z-10">
          <ScrambleText
            text="Experience"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            delay={120}
          />
        </h1>
      </Reveal>

      {/* Timeline */}
      <div ref={timelineRef} className="relative ml-2 sm:ml-6 w-full px-2 sm:px-6 z-10">
        {/* Base track */}
        <div className="absolute left-0 sm:left-[3px] top-0 bottom-0 w-[2px] bg-blue-500/15 rounded-full" />
        {/* The line that draws itself with scroll */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-0 sm:left-[3px] top-0 bottom-0 w-[2px] origin-top rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 mb-4"
          >
            {/* Pulsing timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.2 }}
              className="absolute left-[7px] sm:left-[10px] top-3 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.9)]"
            >
              <span className="absolute inset-1 rounded-full bg-white/80" />
            </motion.div>

            {/* Experience card */}
            <div className="group rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:border-purple-400/50 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1.5">
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                {exp.role}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 marker:text-purple-400">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <Reveal y={0}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 sm:mb-16 relative z-10">
          🎓&nbsp;
          <ScrambleText
            text="Education"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            delay={140}
          />
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-3 relative z-10 max-w-6xl mx-auto mb-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl p-6 sm:p-7 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:border-purple-400/50 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-2 [transform-style:preserve-3d]"
          >
            <h3 className="font-semibold text-lg sm:text-xl text-white">{edu.degree}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              {edu.institute} • {edu.period}
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold text-blue-400 group-hover:text-purple-300 transition-colors duration-300">
              {edu.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
