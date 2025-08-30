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
    <section className="relative border-l border-gray-300 ml-4 pl-6">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[1.6rem] top-1 w-3 h-3 bg-black rounded-full"></div>

            {/* Animated Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">{exp.role}</h3>
              <p className="text-sm text-gray-500">
                {exp.company} • {exp.period}
              </p>
              <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
