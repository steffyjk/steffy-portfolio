"use client";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

const flagshipProjects = [
  {
    title: "Rolevance — AI Roleplay & Coaching for Life Sciences",
    description:
      "Multi-tenant AI coaching platform with MFA authentication, organization management, and role-based access control. Designed license/credit management and usage APIs (allocation, deduction, reclaim, reassignment, audit tracking), the PBCS scoring framework, and org-level data isolation.",
    tech: ["Django", "DRF", "PostgreSQL", "AWS", "Multi-Tenant", "MFA"],
    context: "Professional",
  },
  {
    title: "EasyInterviews — AI-Powered Hiring Platform",
    description:
      "Hiring platform with job management, JobFit criteria, multi-round interviews, candidate management, and recruiter dashboard APIs. AI-powered question generation and custom evaluation frameworks with dynamic JobFit extraction from job descriptions, plus JobBoard integration and compliance.",
    tech: ["Django", "DRF", "PostgreSQL", "AWS", "AI Evaluation"],
    context: "Professional",
  },
  {
    title: "Cinelytics — Cinema Analytics Platform",
    description:
      "Cinema advertising analytics platform with master-list management, user-level permissions, and production bug resolution. Improved DB performance via N+1 query optimization, Materialized Views, and table partitioning; integrated AWS Secrets Manager into ETL processes for data-intensive calculations.",
    tech: ["Django", "DRF", "PostgreSQL", "AWS Secrets Manager", "ETL"],
    context: "Professional",
  },
  {
    title: "TruePay — Digital Loan Management Platform",
    description:
      "High-performance loan management system built with FastAPI covering user onboarding, KYC, loan applications, and repayment workflows. Advanced KYC verification (PAN, Aadhaar, Bank, CIBIL) via Surepass API, Celery + Redis async processing, Razorpay payments, and production-grade NGINX/Uvicorn deployment.",
    tech: ["FastAPI", "Razorpay", "PostgreSQL", "Pydantic", "Firebase", "Celery + Redis"],
    context: "Professional",
  },
  {
    title: "Unibox — Unified Chat Platform",
    description:
      "Unified chat platform integrating WhatsApp, Telegram, and internal messaging into one interface. Real-time communication with WebSockets and Django Channels, Telegram integration via Telethon, and multi-platform synchronization across asynchronous microservices.",
    tech: ["Django", "Django Channels", "WebSockets", "Telethon", "FastAPI", "Golang"],
    context: "Professional",
  },
  {
    title: "VenusTM & EarthPM — Tender, Project & Task Management",
    description:
      "Two interconnected management platforms built on a shared Angular + Django REST Framework architecture: VenusTM for tender/project tracking and EarthPM for task management. Dynamic, modular frontend with RxJS for reactive data handling; deployed and maintained on Azure with Azure DevOps CI/CD.",
    tech: ["Angular", "RxJS", "DRF", "PostgreSQL", "Azure", "Azure DevOps"],
    context: "Professional",
  },
];

const otherWork = [
  {
    title: "Job Portal",
    context: "Professional",
    tech: ["RabbitMQ", "Microservices", "Django/Flask"],
  },
  {
    title: "Bank Management System",
    context: "Personal",
    tech: ["Flask", "Celery", "PostgreSQL", "Razorpay"],
  },
  {
    title: "NetBanking APIs",
    context: "Personal",
    tech: ["Flask-RESTful", "Celery", "PostgreSQL"],
  },
  {
    title: "MakeMyTrip Clone",
    context: "Personal",
    tech: ["DRF", "Celery", "PostgreSQL", "Razorpay"],
  },
  {
    title: "Pinterest Clone",
    context: "Personal",
    tech: ["Django", "Celery", "PostgreSQL", "Chrome Extension"],
  },
  {
    title: "Web Scrapers — LinkedIn, Pinterest, YouTube",
    context: "Professional",
    tech: ["Selenium", "Scrapy", "Cronjob"],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 pt-32 pb-28 sm:px-10 sm:pb-32 md:px-14 lg:px-20 overflow-hidden">
      {/* Decorative particle background */}
      <ParticleBackground speed={0.7} />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 sm:mb-6 z-10 relative"
      >
        Projects
      </motion.h1>
      <p className="text-center text-sm sm:text-base text-gray-400 mb-12 sm:mb-16 relative z-10 max-w-2xl mx-auto">
        Production platforms delivered across my roles — Highlighted flagship systems,
        followed by supporting work and personal builds.
      </p>

      {/* Flagship Projects Grid */}
      <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
        {flagshipProjects.map((p, i) => (
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
            <div>
              <span className="inline-block mb-3 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full text-blue-200 bg-blue-500/20 border border-blue-400/40">
                {p.context}
              </span>
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">{p.title}</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed flex-grow">
                {p.description}
              </p>
            </div>
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

      {/* Other Work */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold text-center text-white mt-24 sm:mt-32 mb-10 sm:mb-12 relative z-10"
      >
        Other Work
      </motion.h2>

      <div className="max-w-5xl mx-auto relative z-10 space-y-3">
        {otherWork.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl px-4 sm:px-6 py-4 backdrop-blur-md bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-xs sm:text-[11px] font-semibold uppercase tracking-wider w-24 shrink-0 text-gray-400">
              {p.context}
            </span>
            <span className="font-semibold text-sm sm:text-base text-white sm:w-56 shrink-0">
              {p.title}
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 text-[11px] sm:text-xs rounded-full text-gray-300 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30"
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
