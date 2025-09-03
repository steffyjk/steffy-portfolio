"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import profilePic from "../assets/animated_girl.jpg";

export default function Home() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

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
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Particle Galaxy Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139,92,246,0.8)";
        ctx.fill();

        for (let j = i; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(59,130,246,0.15)";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-black via-gray-900 to-black 
                 text-white overflow-hidden px-6"
    >
      {/* Galaxy Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Hero Content */}
      <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-center relative z-10">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Steffy Khristi
        </span>
      </h1>

      <p className="hero-subtitle mt-6 text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl relative z-10">
        Backend Software Engineer specializing in{" "}
        <span className="font-semibold text-white">
          Python, Django, AngularTs, NextJs, Scalable APIs & Generative AI
        </span>
        .
      </p>

      <p className="hero-desc mt-4 text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl leading-relaxed relative z-10">
        I design and build{" "}
        <span className="text-white font-medium">robust backend systems, RESTful APIs, and AI-driven applications</span>. 
        With expertise in{" "}
        <span className="text-white font-medium">cloud deployment (AWS, Azure), real-time systems, and Generative AI integration</span>, 
        I help transform complex ideas into reliable, intelligent, and scalable digital solutions.
      </p>

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
    </main>
  );
}
