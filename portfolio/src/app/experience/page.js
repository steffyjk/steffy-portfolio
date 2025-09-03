"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tracewave Transparency Pvt. Ltd.",
      period: "Jan 2025 – Present",
      details: [
        "Specializing in Python backend development with Django.",
        "Building scalable web applications & REST APIs.",
        "Collaborating with frontend teams for feature delivery.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Mars Intelligence Private Limited",
      period: "Oct 2023 – Dec 2024",
      details: [
        "Led vendor management web application development.",
        "Led team of 20 people & managed daily scrum meetings.",
        "Designed system architecture & managed Scrum meetings.",
        "Integrated Angular + Django + RxJS with PostgreSQL & Azure.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Inexture Solutions LLP",
      period: "Dec 2021 – Oct 2023",
      details: [
        "Built APIs with Flask-RESTful & Django REST Framework.",
        "Worked on relational & NoSQL databases.",
        "Implemented AWS deployment & web scraping solutions.",
      ],
    },
    {
      role: "Python Trainee Intern",
      company: "InfoLabz",
      period: "Dec 2019 – Jan 2020",
      details: [
        "Learned Python fundamentals & IoT technologies.",
        "Worked on Arduino hardware & interactive systems.",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 sm:p-10 md:p-14 lg:p-20">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] bg-blue-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12 sm:mb-16 relative z-10"
      >
        🏆 Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-500/40 ml-6 space-y-12 sm:space-y-14 md:space-y-16 max-w-4xl mx-auto z-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-8"
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
    </section>
  );
}
