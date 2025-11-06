"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../assets/animated_girl.jpg";
import gsap from "gsap";

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.from(".hero-desc", {
        y: 25,
        opacity: 0,
        duration: 1.15,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(".hero-img", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-24 px-6 pt-28 pb-20"
    >
      {/* Left — Text */}
      <div className="flex flex-col gap-6 max-w-xl lg:max-w-lg">
        {/* Tag */}
        <span className="uppercase tracking-[0.25em] text-[var(--accent)] text-xs font-semibold">
          Strategic. Curious. Precise.
        </span>

        {/* Title */}
        <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="text-[var(--text)]">I Build Systems</span>
          <br />
          <span className="text-[var(--accent)]">That Think</span>
        </h1>

        {/* Subtitle */}
        <h2 className="hero-sub text-lg md:text-xl font-medium text-gray-300">
          Software Engineer & Logic-Driven Creator
        </h2>

        {/* Description */}
        <p className="hero-desc text-sm md:text-base text-gray-400 leading-relaxed">
          I turn ideas into structured, scalable systems — engineered with
          logic, fueled by curiosity, and refined through discipline. I believe
          in execution, precision, and intentional creativity.
        </p>
      </div>

      {/* Right — Image / Orb */}
      <div className="relative hero-img">
        <div className="absolute inset-0 rounded-full w-[270px] h-[270px] md:w-[330px] md:h-[330px] bg-[var(--accent)]/10 blur-2xl"></div>

        <Image
          src={profile}
          alt="Steffy Khristi Portrait"
          width={330}
          height={330}
          className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full object-cover border border-[var(--accent)]/40 shadow-[0_0_30px_rgba(0,255,246,0.25)]"
        />

        {/* Subtle grid lines */}
        <div
          className="absolute -inset-6 -z-10 opacity-30 border border-white/5 rounded-xl
                        [mask-image:linear-gradient(to_bottom,white,transparent)]"
        ></div>

        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--accent)]/60"></div>
      </div>
    </section>
  );
}
