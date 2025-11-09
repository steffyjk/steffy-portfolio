"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // --- UPDATED PROJECTS ARRAY ---
  const projects = [
    {
      id: 1,
      title: "TruePay",
      subtitle: "Digital Loan Management Platform",
      description:
        "High-performance digital lending system built with FastAPI to manage user onboarding, KYC verification, loan applications, and repayment workflows.",
      tech: [
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "NGINX",
        "Surepass API",
      ],
      status: "Production",
      year: "2024",
      color: "#2997ff",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      metrics: ["99.9% Uptime", "10K+ Users", "50ms Response"],
    },
    {
      id: 2,
      title: "Unibox",
      subtitle: "Unified Chat Platform",
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
      status: "Production",
      year: "2024",
      color: "#bf5af2",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1200&q=80",
      metrics: ["3 Platforms", "Real-time", "E2E Encrypted"],
    },
    {
      id: 3,
      title: "VENUS",
      subtitle: "Tender Management System",
      description:
        "Full-stack vendor & tender management solution with real-time updates, modular Angular frontend, and Azure-powered CI/CD.",
      tech: ["Angular", "Django", "RxJS", "PostgreSQL", "Azure DevOps"],
      status: "Production",
      year: "2023",
      color: "#ff375f",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      metrics: ["500+ Vendors", "Real-time", "Auto Scaling"],
    },
    {
      id: 4,
      title: "Project Management",
      subtitle: "Enterprise PMS",
      description:
        "Robust platform to streamline project planning, execution, and monitoring with dynamic Angular UI and secure DRF APIs.",
      tech: ["AngularTS", "Django Rest Framework", "PostgreSQL", "Redis"],
      status: "Production",
      year: "2023",
      color: "#ff9f0a",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      metrics: ["100+ Projects", "Team Collaboration", "Analytics"],
    },
    {
      id: 5,
      title: "TMS",
      subtitle: "Task Management System",
      description:
        "Intuitive solution for task organization, assignment, and tracking with Angular frontend and DRF backend integration.",
      tech: ["AngularTS", "Django Rest Framework"],
      status: "Production",
      year: "2023",
      color: "#32d74b",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
      metrics: ["1000+ Tasks", "Team Sync", "99% Uptime"],
    },
    {
      id: 6,
      title: "Job Portal",
      subtitle: "Microservices Architecture",
      description:
        "Developed producer-consumer with RabbitMQ for microservices communication, added dynamic filters for recruiters to refine candidate searches.",
      tech: ["RabbitMQ", "Microservices", "Django/Flask"],
      status: "Production",
      year: "2022",
      color: "#ff9f0a",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
      metrics: ["Async Jobs", "Smart Filters", "Scalable"],
    },
    {
      id: 7,
      title: "Bank Management System",
      subtitle: "Secure Online Banking",
      description:
        "Secure Flask application for online banking with account management, transactions, Razorpay integration, and Celery for async tasks.",
      tech: ["Flask", "Celery", "PostgreSQL", "Razorpay"],
      status: "Production",
      year: "2022",
      color: "#ff375f",
      image:
        "https://images.unsplash.com/photo-1501167786227-4cba60f605ca?auto=format&fit=crop&w=1200&q=80",
      metrics: ["Secure TX", "Async Tasks", "Razorpay"],
    },
    {
      id: 8,
      title: "NetBanking APIs",
      subtitle: "RESTful Banking Service",
      description:
        "RESTful API version of the Bank Management System for handling secure banking operations programmatically.",
      tech: ["Flask-RESTful", "Celery", "PostgreSQL"],
      status: "Production",
      year: "2021",
      color: "#bf5af2",
      image:
        "https://images.unsplash.com/photo-1518458028785-8a98d6729033?auto=format&fit=crop&w=1200&q=80",
      metrics: ["JWT Auth", "High-Volume", "Developer API"],
    },
    {
      id: 9,
      title: "MakeMyTrip Clone",
      subtitle: "Travel Booking Platform",
      description:
        "Clone of MakeMyTrip with RESTful endpoints for flights, hotels, and holiday packages along with Razorpay payments.",
      tech: ["Django Rest Framework", "Celery", "PostgreSQL", "Razorpay"],
      status: "Personal",
      year: "2021",
      color: "#2997ff",
      image:
        "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1200&q=80",
      metrics: ["Flight APIs", "Hotel Booking", "Payments"],
    },
    {
      id: 10,
      title: "Pinterest Clone",
      subtitle: "Image Sharing Platform",
      description:
        "Web app replicating Pinterest functionality: pinning images, creating boards, following users, and engaging with content.",
      tech: ["Django", "Celery", "PostgreSQL"],
      status: "Personal",
      year: "2020",
      color: "#32d74b",
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
      metrics: ["Image Upload", "User Boards", "Social Feed"],
    },
    {
      id: 11,
      title: "Web Scrapers",
      subtitle: "Automated Data Extraction",
      description:
        "Developed scrapers for internal company portal, LinkedIn, Pinterest, and YouTube with scheduling support.",
      tech: ["Selenium", "Scrapy", "Cronjob"],
      status: "Internal Tool",
      year: "2020",
      color: "#ff9f0a",
      image:
        "https://images.unsplash.com/photo-1614741122473-39b2f3d8a340?auto=format&fit=crop&w=1200&q=80",
      metrics: ["4+ Platforms", "Scheduled", "Data Pipeline"],
    },
  ];

  // Track when section enters viewport
  const { scrollYProgress: sectionProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track scroll within the sticky section
  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // Smooth progress for animations
  const smoothStickyProgress = useSpring(stickyProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate active project based on scroll within sticky section
  const projectProgress = useTransform(
    smoothStickyProgress,
    [0, 1],
    [0, projects.length - 0.5]
  );

  // Update active project
  useMotionValueEvent(projectProgress, "change", (latest) => {
    const newActive = Math.floor(latest);
    if (
      newActive !== activeProject &&
      newActive >= 0 &&
      newActive < projects.length
    ) {
      setActiveProject(newActive);
    }
  });

  // Track when we're in the projects section
  useMotionValueEvent(sectionProgress, "change", (latest) => {
    setIsInView(latest > 0.1 && latest < 0.9);
  });

  return (
    <section
      ref={containerRef}
      className="relative py-10 bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center  max-w-4xl mx-auto px-6"
      >
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
          Featured <span className="text-[var(--accent)]">Projects</span>
        </h2>
        <div
          className="h-[1px] w-24 mx-auto mb-8"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        ></div>
        <p className="text-xl text-[var(--subtle)] leading-relaxed max-w-2xl mx-auto">
          Scroll to journey through each project. Built with precision,
          engineered for scale.
        </p>
      </motion.div>

      {/* Sticky Scroll Section */}
      <div ref={stickyRef} className="relative h-[1100vh]">
        {/* --- DYNAMIC HEIGHT: Changed h-[400vh] to h-[1100vh] to account for 11 projects --- */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--bg)] to-black"></div>
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), 
                                linear-gradient(to right, var(--accent) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
                y: useTransform(stickyProgress, [0, 1], [0, -200]),
              }}
            />
          </div>

          {/* Progress Dots */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center gap-4">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    background:
                      index === activeProject ? project.color : "var(--subtle)",
                    border:
                      index === activeProject
                        ? `2px solid ${project.color}`
                        : "2px solid var(--line)",
                  }}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => {
                    // Calculate scroll position within the sticky section
                    const section = stickyRef.current;
                    const scrollTop =
                      (index / projects.length) *
                      (section.scrollHeight - window.innerHeight);
                    window.scrollTo({
                      top: section.offsetTop + scrollTop,
                      behavior: "smooth",
                    });
                  }}
                />
              ))}
            </div>
          </div>

          {/* Projects Display */}
          <div className="relative w-full max-w-6xl mx-auto h-full flex items-center px-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                activeProject={activeProject}
                scrollProgress={stickyProgress}
                isInView={isInView}
                totalProjects={projects.length} // Pass the total length
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--subtle)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              opacity: useTransform(
                stickyProgress,
                [0, 0.1, 0.9, 1],
                [1, 0, 0, 1]
              ),
            }}
          >
            <div className="w-6 h-10 border-2 border-[var(--subtle)] rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-[var(--subtle)] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-sm font-medium">
              Scroll to explore projects
            </span>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--line)]"
            style={{ scaleX: stickyProgress }}
          >
            <div className="h-full bg-[var(--accent)]" />
          </motion.div>
        </div>
      </div>

      {/* Next Section Spacer */}
      <div className="h-20"></div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  activeProject,
  scrollProgress,
  isInView,
  totalProjects, // Accept the prop
}) {
  const cardRef = useRef(null);

  // Calculate card visibility based on scroll and active state
  const cardVisibility = useTransform(
    scrollProgress,
    [
      (index - 0.5) / totalProjects, // Use the prop
      index / totalProjects, // Use the prop
      (index + 0.5) / totalProjects, // Use the prop
    ],
    [0, 1, 0]
  );

  const scale = useTransform(cardVisibility, [0, 1], [0.8, 1]);
  const opacity = useTransform(cardVisibility, [0, 1], [0, 1]);
  const y = useTransform(cardVisibility, [0, 1], [100, 0]);

  const isActive = index === activeProject;

  return (
    <motion.div
      ref={cardRef}
      className={`absolute inset-0 flex items-center justify-center ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        opacity,
        scale,
        y,
        zIndex: isActive ? 30 : 20 - Math.abs(index - activeProject),
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        {/* Project Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow: useTransform(
              cardVisibility,
              [0, 1],
              ["0 0 0px rgba(0,0,0,0)", `0 0 80px ${project.color}30`]
            ),
          }}
          whileHover={{ scale: isActive ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="aspect-video relative overflow-hidden rounded-3xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                scale: useTransform(cardVisibility, [0, 1], [1, 1.1]),
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Status Badge */}
            <motion.div
              className="absolute top-6 right-6"
              style={{ opacity: cardVisibility }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl bg-black/40 text-white border border-white/20">
                {project.status}
              </span>
            </motion.div>
          </div>

          {/* Floating Tech Stack */}
          <motion.div
            className="absolute -bottom-6 left-6 right-6"
            style={{
              opacity: cardVisibility,
              y: useTransform(cardVisibility, [0, 1], [20, 0]),
            }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-xl border"
                  style={{
                    background: "rgba(0,0,0,0.8)",
                    borderColor: project.color,
                    color: "white",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="space-y-6"
          style={{
            opacity: cardVisibility,
            x: useTransform(cardVisibility, [0, 1], [50, 0]),
          }}
        >
          {/* Title & Year */}
          <div className="space-y-2">
            <motion.span
              className="text-sm font-medium px-4 py-2 rounded-full border backdrop-blur-sm inline-block"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
                color: project.color,
              }}
            >
              {project.year}
            </motion.span>
            <h3 className="text-5xl lg:text-6xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-xl text-[var(--subtle)]">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-[var(--subtle)]">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl font-semibold"
                  style={{ color: project.color }}
                >
                  {metric.split(" ")[0]}
                </div>
                <div className="text-sm text-[var(--subtle)] mt-1">
                  {metric.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 backdrop-blur-xl border mt-6"
            style={{
              background: project.color,
              color: "white",
              borderColor: project.color,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${project.color}40`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Study
            <svg
              className="w-5 h-5 ml-2 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
