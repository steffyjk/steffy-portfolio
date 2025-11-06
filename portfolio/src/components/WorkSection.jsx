"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WorkSection() {
  const ref = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".exp-line", { width: 0, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from(".exp-card", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pb-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="exp-title text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Professional <span className="text-[var(--accent)]">Experience</span>
        </h2>
        <div className="exp-line h-[2px] w-28 mx-auto mt-4 bg-[var(--accent)] rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          A journey through roles that refined my logic, leadership, and
          engineering precision.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl border-l border-[var(--accent)]/30 pl-8">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card relative mb-10">
            {/* Node marker */}
            <div className="absolute -left-[1.2rem] top-3 w-5 h-5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"></div>

            {/* Experience card */}
            <div className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-xl hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-[var(--accent)] mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Background grid */}
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
