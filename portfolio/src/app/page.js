"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import ParticleBackground from "../components/ParticleBackground";
import profilePic from "../assets/animated_girl.jpg";

export default function Home() {
  const heroRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".hero-desc",
          { y: 40, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            scale: 0.5,
            rotate: 15,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3"
        )
        .from(
          ".hero-cta > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-black via-gray-900 to-black
                 text-white overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Galaxy Background */}
      <ParticleBackground speed={0.6} linkDist={100} />

      {/* Hero Content */}
      <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-center relative z-10">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Steffy Khristi
        </span>
      </h1>

      <p className="hero-subtitle mt-6 text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl relative z-10">
        Senior Software Engineer with{" "}
        <span className="font-semibold text-white">4+ years of experience</span>{" "}
        specializing in{" "}
        <span className="font-semibold text-white">
          Python, Django, DRF, FastAPI & Scalable Backend Systems
        </span>
        .
      </p>

      <p className="hero-desc mt-4 text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl leading-relaxed relative z-10">
        I architect and build{" "}
        <span className="text-white font-medium">robust backend systems, RESTful APIs, and database architectures</span>.{" "}
        With expertise in{" "}
        <span className="text-white font-medium">performance optimization, cloud deployment (AWS, Azure), and AI-driven applications</span>,{" "}
        I own the end-to-end feature lifecycle — from requirement analysis and API design to deployment —
        turning complex business requirements into reliable, intelligent, and scalable digital solutions.
      </p>

      {/* CTAs */}
      <div className="hero-cta mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600/60 to-purple-600/60 border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300"
        >
          View Projects
        </Link>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-xl font-semibold text-white bg-white/5 border border-blue-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Profile Orb */}
      <div className="hero-img mt-10 sm:mt-12 relative z-10">
        <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-600/40 blur-3xl animate-pulse"></div>
        <Image
          src={profilePic}
          width={400}
          height={400}
          alt="Steffy Khristi"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full
                     border-4 border-blue-500/60
                     shadow-[0_0_35px_rgba(59,130,246,0.8)]
                     object-cover relative z-10"
        />
      </div>
    </div>
  );
}
