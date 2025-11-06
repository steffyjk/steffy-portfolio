"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/WorkSection.css";

gsap.registerPlugin(ScrollTrigger);

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
        "Managed a team of 20 engineers through daily scrums.",
        "Architected system design and ensured seamless feature delivery.",
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
        "Implemented AWS deployment & web scraping pipelines.",
      ],
    },
    {
      role: "Python Trainee Intern",
      company: "InfoLabz",
      period: "Dec 2019 – Jan 2020",
      details: [
        "Learned Python fundamentals & IoT systems.",
        "Worked on Arduino hardware and interactive devices.",
      ],
    },
  ];

  // GSAP reveal animation
  useLayoutEffect(() => {
    let ctx;
    requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.set([".work-header", ".log-entry"], { autoAlpha: 0, y: 40 });
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.8 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });
        tl.to(".work-header", { y: 0, autoAlpha: 1 }).to(
          ".log-entry",
          { y: 0, autoAlpha: 1, stagger: 0.15 },
          "-=0.3"
        );
      }, ref);
      ScrollTrigger.refresh();
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="work-section relative min-h-screen flex flex-col items-center px-6 py-24 text-[var(--text)] overflow-hidden"
    >
      {/* Grid + glow background */}
      <div className="work-grid" aria-hidden></div>

      {/* Header */}
      <div className="work-header text-center mb-10 z-10">
        <h2 className="title mono text-[var(--accent)] mb-2">
          /table/professional_experience
        </h2>
        <p className="subtle text-sm">
          query:{" "}
          <span className="text-[var(--accent-2)]">
            SELECT * FROM work_log ORDER BY period DESC;
          </span>
        </p>
      </div>

      {/* Log Console */}
      <div className="work-log mono max-w-5xl w-full z-10">
        {experiences.map((exp, i) => (
          <div key={i} className="log-entry">
            <div className="log-meta">
              <span className="log-time">[{exp.period}]</span>
              <span className="log-marker">⟳</span>
              <span className="log-role text-[var(--accent)]">{exp.role}</span>
              <span className="log-company text-[var(--accent-2)]">
                @{exp.company}
              </span>
            </div>
            <ul className="log-details">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
