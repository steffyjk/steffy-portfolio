"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero intro
      const tl = gsap.timeline();
      tl.from(".hero-title", { y: -50, opacity: 0, duration: 1, ease: "power4.out" })
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-btn", { opacity: 0, scale: 0.8, stagger: 0.2, duration: 0.6 }, "-=0.4")
        .from(".hero-img", { opacity: 0, scale: 0.5, rotate: 15, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.3");
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <main ref={heroRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 overflow-hidden">
      <h1 className="hero-title text-5xl md:text-6xl font-extrabold text-center">
        Hi, I’m <span className="text-blue-600">Steffy Khristi</span>
      </h1>

      <p className="hero-subtitle mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl">
        Software Engineer specializing in{" "}
        <span className="font-semibold">Python, Django, React & Full-Stack Development</span>.  
        I build scalable apps with clean code & modern UI.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/Steffy_Resume.pdf"
          className="hero-btn px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <a
          href="/contact"
          className="hero-btn px-5 py-3 border border-gray-700 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="hero-img mt-12">
        <img
          src="/profile.jpg"
          alt="Steffy Khristi"
          className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg object-cover"
        />
      </div>
    </main>
  );
}
