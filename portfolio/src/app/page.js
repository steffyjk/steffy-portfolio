"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import profilePic from "../assets/animated_girl.jpg";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero intro
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".hero-btn",
          { opacity: 0, scale: 0.8, stagger: 0.2, duration: 0.6 },
          "-=0.4"
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
        );
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <main
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-black via-gray-900 to-black 
                 text-white overflow-hidden px-6"
    >
      <h1 className="hero-title text-5xl md:text-6xl font-extrabold text-center">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Steffy Khristi
        </span>
      </h1>

      <p className="hero-subtitle mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        Software Engineer specializing in{" "}
        <span className="font-semibold text-white">
          Python, Django, React & Full-Stack Development
        </span>
        . I build scalable apps with clean code & modern UI.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/Steffy_Resume.pdf"
          className="hero-btn px-6 py-3 rounded-xl shadow 
                     bg-gradient-to-r from-blue-500 to-purple-600 
                     text-white font-medium 
                     hover:scale-105 transition transform backdrop-blur-md"
        >
          Download Resume
        </a>
        <a
          href="/contact"
          className="hero-btn px-6 py-3 rounded-xl shadow 
                     border border-gray-600 bg-white/10 backdrop-blur-md 
                     text-gray-200 hover:bg-white/20 hover:text-white 
                     transition"
        >
          Contact Me
        </a>
      </div>

      <div className="hero-img mt-12">
        <Image
          src={profilePic}
          width={400}
          height={400}
          alt="Steffy Khristi"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full 
                     border-4 border-blue-500/60 
                     shadow-[0_0_25px_rgba(59,130,246,0.7)] 
                     object-cover"
        />
      </div>
    </main>
  );
}
