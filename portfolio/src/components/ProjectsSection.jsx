"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const ref = useRef(null);

  const projects = [
    {
      title: "TruePay – Digital Loan Management Platform",
      description:
        "High-performance digital lending system with FastAPI, async task queues, and secure KYC verification using Surepass API.",
      tech: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Surepass API"],
    },
    {
      title: "Unibox – Unified Chat Platform",
      description:
        "Cross-network chat integration with WhatsApp, Telegram, and internal channels via Django + WebSockets.",
      tech: ["Django", "React", "PostgreSQL", "Django Channels", "Telethon"],
    },
    {
      title: "VENUS Tender Management System",
      description:
        "Full-stack vendor & tender platform with Angular and Django, featuring real-time updates and Azure CI/CD.",
      tech: ["Angular", "Django", "PostgreSQL", "Azure DevOps"],
    },
    {
      title: "Bank Management APIs",
      description:
        "RESTful API system handling secure financial operations with Flask and PostgreSQL.",
      tech: ["Flask", "Celery", "PostgreSQL"],
    },
    {
      title: "MakeMyTrip Clone",
      description:
        "Travel booking backend featuring REST APIs, Razorpay payments, and scalable data models.",
      tech: ["Django REST", "PostgreSQL", "Celery", "Razorpay"],
    },
    {
      title: "Pinterest Clone",
      description:
        "Media-sharing application with boards, pins, and real-time engagement.",
      tech: ["Django", "Celery", "PostgreSQL"],
    },
  ];

  // GSAP animations
  useLayoutEffect(() => {
    let ctx;
    requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.set([".proj-header", ".proj-row"], { autoAlpha: 0, y: 40 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.8 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.to(".proj-header", { autoAlpha: 1, y: 0 }).to(
          ".proj-row",
          { autoAlpha: 1, y: 0, stagger: 0.12 },
          "-=0.2"
        );
      }, ref);

      ScrollTrigger.refresh();
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="projects-section relative min-h-screen flex flex-col items-center px-6 pb-24 text-[var(--text)] overflow-hidden"
    >
      {/* Background grid */}
      <div className="projects-grid" aria-hidden />

      {/* Header */}
      <div className="proj-header text-center mb-10 z-10">
        <h2 className="title mono text-[var(--accent)] mb-2">
          /table/featured_projects
        </h2>
        <p className="subtle text-sm">
          query:{" "}
          <span className="text-[var(--accent-2)]">
            SELECT title, stack, description FROM project_log;
          </span>
        </p>
      </div>

      {/* Table */}
      <div className="proj-table max-w-6xl w-full mono text-sm">
        <div className="proj-table-header">
          <span>ID</span>
          <span>PROJECT_TITLE</span>
          <span>STACK</span>
          <span>DESCRIPTION</span>
        </div>

        {projects.map((p, i) => (
          <div key={i} className="proj-row">
            <span className="proj-id subtle">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="proj-title text-[var(--accent)]">{p.title}</span>
            <span className="proj-tech">{p.tech.join(", ")}</span>
            <span className="proj-desc subtle">{p.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
