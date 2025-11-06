"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/SkillSection.css";

gsap.registerPlugin(ScrollTrigger);

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

  useLayoutEffect(() => {
    let ctx;
    requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.set([".skill-header", ".skill-block", ".skill-item"], {
          autoAlpha: 0,
          y: 40,
        });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.8 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.to(".skill-header", { y: 0, autoAlpha: 1 })
          .to(".skill-block", { y: 0, autoAlpha: 1, stagger: 0.15 }, "-=0.2")
          .to(".skill-item", { y: 0, autoAlpha: 1, stagger: 0.02 }, "-=0.4");
      }, ref);
      ScrollTrigger.refresh();
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="skill"
      ref={ref}
      className="skill-section relative min-h-screen flex flex-col justify-center items-center px-6 py-24 text-[var(--text)] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="skill-grid" aria-hidden />

      {/* Header */}
      <div className="skill-header text-center mb-10 z-10">
        <h2 className="title mono text-[var(--accent)] mb-2">
          /dataset/technical_expertise
        </h2>
        <p className="subtle text-sm">
          status: <span className="text-[var(--accent)]">connected</span> •
          query:{" "}
          <span className="text-[var(--accent-2)]">
            SELECT * FROM skillset;
          </span>
        </p>
      </div>

      {/* Skill data table */}
      <div className="skill-data max-w-5xl w-full z-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-block card-hover">
            <div className="skill-category mono text-[var(--accent)]">
              {category.toLowerCase()}:
            </div>
            <div className="skill-items">
              {items.map((skill, i) => (
                <span key={i} className="skill-item mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
