"use client";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";
import { Marquee, Reveal } from "../../components/motion/Reveal";
import { ScrambleText } from "../../components/motion/TextMotion";

const skills = {
  backend: [
    "Python",
    "Django",
    "Django REST Framework",
    "Flask",
    "FastAPI",
    "Celery",
    "WebSockets",
  ],
  frontend: [
    "Angular",
    "RxJS",
    "PrimeNG",
    "Bootstrap",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  database: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "SQLite3",
    "Elasticsearch",
  ],
  "cloud & devops": [
    "AWS EC2",
    "AWS S3",
    "Elastic Beanstalk",
    "AWS RDS",
    "Secrets Manager",
    "Azure",
    "Azure DevOps",
    "NGINX",
  ],
  "ai & llm": ["Anthropic Claude", "Retrieval-Augmented Generation (RAG)"],
  "web scraping": ["Scrapy", "Selenium", "Cronjob"],
  tools: ["VS Code", "PyCharm", "Git", "GitHub", "Figma"],
};

const pill = {
  hidden: { opacity: 0, scale: 0.4, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export default function Skills() {
  return (
    <section className="relative min-h-screen flex flex-col md:justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-4 pt-32 pb-24 md:px-8 lg:px-16">
      <ParticleBackground count={80} speed={0.6} linkDist={120} particleColor="rgba(99,102,241,0.8)" linkColor="rgba(139,92,246,0.15)" />

      {/* Parallax-ish drifting glow orbs behind the grid */}
      <div className="absolute top-24 left-[18%] w-72 h-72 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute bottom-16 right-[15%] w-80 h-80 bg-purple-600/15 blur-[130px] rounded-full pointer-events-none animate-float" />

      {/* Title */}
      <Reveal y={0}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 sm:mb-8 z-10 relative">
          <ScrambleText
            text="My Tech Universe"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            delay={100}
          />
        </h1>
      </Reveal>

      {/* Tagline ribbon */}
      <div className="relative z-10 w-full max-w-4xl border-y border-blue-500/15 bg-black/40 py-3 mb-12 sm:mb-16 backdrop-blur-md">
        <Marquee
          items={["7 Categories", "50+ Technologies", "Production-Ready", "Backend First", "AI Enabled", "Cloud Deployed"]}
          className="mx-auto w-full"
          itemClassName="text-xs sm:text-sm text-purple-200/80 font-mono tracking-wider uppercase"
          reverse
        />
      </div>

      {/* Skills Grid */}
      <div className="grid gap-10 sm:gap-12 md:gap-14 md:grid-cols-2 lg:grid-cols-3 relative z-10 w-full max-w-7xl">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Category with growing underline */}
            <h3 className="capitalize font-semibold text-lg sm:text-xl md:text-2xl text-white mb-5 relative inline-block">
              {category}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.3 + (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 w-14 h-[3px] origin-left bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </h3>

            {/* Pills — cascading spring pop-in */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {items.map((skill, j) => (
                <motion.span
                  key={skill}
                  variants={pill}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.15 + j * 0.06 }}
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
                             transition-colors duration-300 hover:border-pink-400/50"
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
