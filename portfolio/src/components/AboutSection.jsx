"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.set(
          [".about-header", ".about-query", ".about-desc", ".about-card"],
          {
            autoAlpha: 0,
            y: 40,
          }
        );

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.to(".about-header", { y: 0, autoAlpha: 1 })
          .to(".about-query", { y: 0, autoAlpha: 1 }, "-=0.4")
          .to(".about-desc", { y: 0, autoAlpha: 1 }, "-=0.3")
          .to(".about-card", {
            y: 0,
            autoAlpha: 1,
            stagger: 0.15,
            ease: "power4.out",
          });
      }, ref);
      ScrollTrigger.refresh();
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="about-section relative min-h-screen flex flex-col justify-center items-center px-6 pb-24 text-[var(--text)] overflow-hidden"
    >
      {/* Glow & grid background */}
      <div className="about-glow" aria-hidden />
      <div className="about-grid" aria-hidden />

      {/* Header */}
      <div className="text-center mb-10 relative z-10 about-header">
        <h2 className="title mono text-[var(--accent)] mb-2">
          /profile/about_me
        </h2>
        <p className="subtle text-sm">data.lastUpdated = NOW()</p>
      </div>

      {/* Query-style text */}
      <div className="about-query mono text-[0.85rem] text-[var(--accent-2)]/80 mb-4 z-10">
        <span className="text-[var(--accent)]">SELECT</span> mindset,
        principles, purpose <span className="text-[var(--accent)]">FROM</span>{" "}
        steffy_khristi <span className="text-[var(--accent)]">WHERE</span> type
        = 'engineer';
      </div>

      {/* Description */}
      <div className="about-desc max-w-3xl text-center leading-relaxed text-sm sm:text-base md:text-lg subtle relative z-10">
        I’m{" "}
        <span className="text-[var(--accent)] font-semibold">
          Steffy Khristi
        </span>
        , a software engineer who thrives on structure, clarity, and purpose. I
        see logic as art — every system I build balances precision and emotion.
        My curiosity fuels innovation, while discipline shapes it into
        practical, elegant solutions.
      </div>

      {/* Cards as database entries */}
      <div className="about-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl w-full z-10">
        {[
          {
            key: "mindset",
            value:
              "Curiosity first. Logic follows. I question everything until it makes sense — then I build.",
          },
          {
            key: "principles",
            value:
              "Loyalty and precision define my work. I don’t chase speed — I chase quality and truth.",
          },
          {
            key: "purpose",
            value:
              "To merge logic, emotion, and creativity into systems that make people’s lives better.",
          },
        ].map((entry, i) => (
          <div key={i} className="about-card card-hover">
            <div className="about-card-header mono text-[var(--accent)]">
              field: <span className="text-[var(--accent-2)]">{entry.key}</span>
            </div>
            <p className="about-card-value text-sm sm:text-base">
              {entry.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
