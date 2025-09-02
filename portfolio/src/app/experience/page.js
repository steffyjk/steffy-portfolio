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
      role: "Software Engineer [ Team Lead ]",
      company: "Mars Intelligence Private Limited",
      period: "Oct 2023 – Dec 2024",
      details: [
        "Led vendor management web application development.",
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
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        🏆 Experience
      </h2>
      <div className="relative border-l border-gray-700 ml-6 space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="relative pl-6"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.45rem] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"></div>

            {/* Experience Card */}
            <div className="border border-gray-700 rounded-2xl p-6 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2">
              <h3 className="font-semibold text-xl text-white">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
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
