"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-line", {
        width: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".about-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.from(".about-grid", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-6 pb-24 bg-[var(--bg)] text-[var(--text)] relative overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="about-title text-3xl sm:text-4xl font-bold tracking-tight uppercase">
          About <span className="text-[var(--accent)]">Me</span>
        </h2>
        <div className="about-line h-[2px] w-32 mx-auto mt-3 bg-[var(--accent)] rounded-full"></div>
      </div>

      {/* Main Description */}
      <div className="about-desc max-w-3xl text-center text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
        I’m{" "}
        <span className="text-[var(--accent)] font-semibold">
          Steffy Khristi
        </span>
        , a software engineer who thrives on structure, clarity, and impact. I
        see logic as art — building precise systems that balance technology and
        emotion. My curiosity drives my exploration of emerging tools, and my
        discipline turns complexity into clean, scalable results. I believe
        great code mirrors the mind: clear, deliberate, and deeply human.
      </div>

      {/* Info Grid */}
      <div className="about-grid mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl text-center">
        <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02] hover:border-[var(--accent)]/60 transition-all">
          <h3 className="text-[var(--accent)] text-sm uppercase tracking-widest mb-3">
            Mindset
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Curiosity first. Logic follows. I question everything until it makes
            sense — then I build.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02] hover:border-[var(--accent)]/60 transition-all">
          <h3 className="text-[var(--accent)] text-sm uppercase tracking-widest mb-3">
            Principles
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Loyalty and precision define my work. I don’t chase speed — I chase
            quality and truth.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02] hover:border-[var(--accent)]/60 transition-all">
          <h3 className="text-[var(--accent)] text-sm uppercase tracking-widest mb-3">
            Purpose
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To merge logic, emotion, and creativity into systems that make
            people’s lives better.
          </p>
        </div>
      </div>
    </section>
  );
}
