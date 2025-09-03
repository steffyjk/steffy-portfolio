"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Unibox – Unified Chat Platform",
      description:
        "Unified chat platform integrating WhatsApp, Telegram, and internal messaging into one interface with real-time communication and multi-platform sync.",
      tech: ["Django", "React", "PostgreSQL", "WebSockets", "Django Channels", "Telethon"],
    },
    {
      title: "VENUS Tender Management System",
      description:
        "Full-stack vendor & tender management solution with real-time updates, modular Angular frontend, and Azure-powered CI/CD.",
      tech: ["Angular", "Django", "RxJS", "PostgreSQL", "Azure DevOps"],
    },
    {
      title: "PMS – Project Management System",
      description:
        "Robust platform to streamline project planning, execution, and monitoring with dynamic Angular UI and secure DRF APIs.",
      tech: ["AngularTS", "Django Rest Framework"],
    },
    {
      title: "TMS – Task Management System",
      description:
        "Intuitive solution for task organization, assignment, and tracking with Angular frontend and DRF backend integration.",
      tech: ["AngularTS", "Django Rest Framework"],
    },
    {
      title: "Job Portal",
      description:
        "Developed producer-consumer with RabbitMQ for microservices communication, added dynamic filters for recruiters to refine candidate searches.",
      tech: ["RabbitMQ", "Microservices", "Django/Flask"],
    },
    {
      title: "Bank Management System",
      description:
        "Secure Flask application for online banking with account management, transactions, Razorpay integration, and Celery for async tasks.",
      tech: ["Flask", "Celery", "PostgreSQL", "Razorpay"],
    },
    {
      title: "NetBanking APIs",
      description:
        "RESTful API version of the Bank Management System for handling secure banking operations programmatically.",
      tech: ["Flask-RESTful", "Celery", "PostgreSQL"],
    },
    {
      title: "MakeMyTrip Clone",
      description:
        "Clone of MakeMyTrip with RESTful endpoints for flights, hotels, and holiday packages along with Razorpay payments.",
      tech: ["Django Rest Framework", "Celery", "PostgreSQL", "Razorpay"],
    },
    {
      title: "Pinterest Clone",
      description:
        "Web app replicating Pinterest functionality: pinning images, creating boards, following users, and engaging with content.",
      tech: ["Django", "Celery", "PostgreSQL", "Chrome Extension"],
    },
    {
      title: "Web Scrapers",
      description:
        "Developed scrapers for internal company portal, LinkedIn, Pinterest, and YouTube with scheduling support.",
      tech: ["Selenium", "Scrapy", "Cronjob"],
    },
  ];

  const canvasRef = useRef(null);

  // ✨ Particle background
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
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
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
            ctx.lineWidth = 0.5;
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
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 sm:p-10 md:p-14 lg:p-20 overflow-hidden">
      {/* Particle Galaxy Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12 sm:mb-16 z-10"
      >
        🚀 My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(139,92,246,0.6), 0px 0px 45px rgba(59,130,246,0.5)",
            }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/30 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">{p.title}</h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed flex-grow">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(59,130,246,0.8)",
                  }}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full text-gray-200 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/40 backdrop-blur-md transition"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
