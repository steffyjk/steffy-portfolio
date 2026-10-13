"use client";
import { motion } from "framer-motion";

export default function Experience() {
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
      <motion.h2
        // initial={{ opacity: 0, y: -40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12 sm:mb-16 relative z-10"
      >
        🏆 Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-500/40 ml-6 w-full px-6 z-10">
      
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            // initial={{ opacity: 0, y: 40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-8 mb-4"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[1.6rem] top-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.9)] animate-pulse"></div>

            {/* Experience Card */}
            <div className="rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                {exp.role}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-20 mb-12 sm:mb-16 relative z-10"
      >
        🎓 Education
      </motion.h2>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-3 relative z-10 max-w-6xl mx-auto mb-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 sm:p-7 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="font-semibold text-lg sm:text-xl text-white">{edu.degree}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              {edu.institute} • {edu.period}
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold text-blue-400">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
