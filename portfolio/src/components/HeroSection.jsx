"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import profile from "../assets/animated_girl.jpg";
import "@/assets/css/HeroSection.css"; // 🧩 Custom style layer for Cipher theme

export default function HeroSection() {
  const ref = useRef(null);
  const tiltRef = useRef(null);
  const glowRef = useRef(null);

  // Intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-query", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-tag", { y: 10, opacity: 0, duration: 0.5 })
        .from(".hero-title span", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        })
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
        .from(
          ".hero-img",
          { opacity: 0, scale: 0.9, duration: 0.8, ease: "power4.out" },
          "-=0.4"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  // Interactive tilt
  useEffect(() => {
    const card = tiltRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = (x - rect.width / 2) / rect.width;
      const dy = (y - rect.height / 2) / rect.height;
      gsap.to(card, {
        rotateY: dx * 10,
        rotateX: -dy * 10,
        ease: "power3.out",
        duration: 0.6,
      });
      gsap.to(glow, { x: dx * 40, y: dy * 40, opacity: 0.8, duration: 0.6 });
    };

    const reset = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6 });
      gsap.to(glow, { x: 0, y: 0, opacity: 0.4, duration: 0.6 });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="hero-section relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-24 px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Moving radial glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(98,244,170,0.15)_0%,_transparent_65%)] pointer-events-none transition-all duration-700"
      />

      {/* Left: Console Text */}
      <div className="z-10 flex flex-col gap-6 max-w-xl lg:max-w-lg">
        {/* Top Query */}
        <div className="hero-query mono text-[0.8rem] text-[var(--accent)]/80">
          <span className="text-[var(--accent-2)]">query&gt;</span> SELECT *
          FROM <span className="text-[var(--accent)]">strategic_creator</span>{" "}
          WHERE role = “engineer”;
        </div>

        <span className="hero-tag uppercase tracking-[0.25em] text-[var(--accent)] text-xs font-semibold">
          Logical • Bold • Curious • Practical • Deep
        </span>

        <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <span>I Build Systems</span>
          <br />
          <span className="text-[var(--accent)]">That Think</span>
        </h1>

        <p className="hero-desc text-sm md:text-base subtle leading-relaxed">
          I turn ideas into structured, scalable systems — engineered with
          logic, fueled by curiosity, and refined through precision. Execution
          over noise. Purpose over perfection.
        </p>

        {/* Simulated command prompt */}
        <div className="hero-console mono text-[0.85rem] mt-2">
          <span className="text-[var(--accent-2)]">$</span>{" "}
          <span className="text-[var(--accent)]">execute()</span>
          <span className="hero-cursor">█</span>
        </div>
      </div>

      {/* Right: Portrait */}
      <div
        ref={tiltRef}
        className="hero-img relative will-change-transform"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <div className="absolute inset-0 w-[270px] h-[270px] md:w-[340px] md:h-[340px] bg-[var(--accent)]/10 blur-3xl rounded-full"></div>

        <Image
          src={profile}
          alt="Steffy Khristi Portrait"
          width={340}
          height={340}
          className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full object-cover border border-[var(--accent)]/40 shadow-[0_0_40px_rgba(98,244,170,0.3)] relative z-10"
        />

        {/* Outer orbit ring */}
        <div className="absolute -inset-8 border border-[var(--accent)]/20 rounded-full"></div>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--accent)]/60"></div>
      </div>
    </section>
  );
}
