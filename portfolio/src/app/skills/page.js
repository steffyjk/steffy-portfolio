"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const skills = {
  backend: [
    "Python",
    "Django",
    "Flask",
    "DRF",
    "Node.js",
    "WebSockets",
    "RabbitMQ",
  ],
  frontend: [
    "React",
    "Next.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "RxJS",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  cloud: ["AWS", "Azure", "EC2", "S3"],
  tools: ["Git", "GitHub", "Docker", "Figma", "VS Code", "PyCharm"],
};

export default function Skills() {
  const canvasRef = useRef(null);

  // 🎇 Particle background animation
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
    for (let i = 0; i < 80; i++) {
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
        ctx.fillStyle = "rgba(99,102,241,0.8)";
        ctx.fill();

        for (let j = i; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = "rgba(139,92,246,0.15)";
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

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-4 md:px-8 lg:px-16">
      {/* ✨ Background particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12 sm:mb-16 z-10"
      >
        🚀 My Tech Universe
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid gap-10 sm:gap-12 md:gap-14 md:grid-cols-2 lg:grid-cols-3 relative z-10 w-full max-w-7xl">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="flex flex-col"
          >
            {/* Category */}
            <h3 className="capitalize font-semibold text-lg sm:text-xl md:text-2xl text-white mb-5 relative inline-block">
              {category}
              <span className="absolute -bottom-2 left-0 w-14 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {items.map((skill, j) => (
                <motion.span
                  key={j}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, 2, -2, 0],
                    boxShadow:
                      "0px 0px 20px rgba(59,130,246,0.9), 0px 0px 40px rgba(139,92,246,0.8)",
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full text-white 
                             bg-gradient-to-r from-blue-600/30 to-purple-600/30 
                             border border-blue-400/40 backdrop-blur-md 
                             shadow-[0_0_10px_rgba(139,92,246,0.3)] cursor-pointer 
                             transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
