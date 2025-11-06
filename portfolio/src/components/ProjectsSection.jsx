"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "TruePay – Digital Loan Management Platform",
      description:
        "High-performance digital lending system built with FastAPI to manage user onboarding, KYC verification, loan applications, and repayment workflows. Integrated Surepass API for secure PAN, Aadhaar, and bank validations, with Celery + Redis for async background processing and production deployment via NGINX, Uvicorn, and PostgreSQL.",
      tech: [
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "NGINX",
        "Surepass API",
      ],
    },
    {
      title: "Unibox – Unified Chat Platform",
      description:
        "Unified chat platform integrating WhatsApp, Telegram, and internal messaging into one interface with real-time communication and multi-platform sync.",
      tech: [
        "Django",
        "React",
        "PostgreSQL",
        "WebSockets",
        "Django Channels",
        "Telethon",
      ],
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

  // ✨ Subtle cyan particle background (theme-aligned)
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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,246,0.8)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(0,255,246,0.12)";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pb-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden"
    >
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Featured <span className="text-[var(--accent)]">Projects</span>
        </h2>
        <div className="h-[2px] w-28 mx-auto mt-4 bg-[var(--accent)] rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          A collection of real-world systems engineered with precision,
          scalability, and purpose.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(0,255,246,0.35)",
              borderColor: "rgba(0,255,246,0.5)",
            }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-[var(--accent)]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[var(--accent)] mb-3">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs md:text-sm font-medium rounded-full text-gray-200 border border-[var(--accent)]/30 bg-[var(--accent)]/10 hover:bg-[var(--accent)]/15 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
