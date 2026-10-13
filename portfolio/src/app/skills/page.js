"use client";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

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

export default function Skills() {
  return (
    <section className="relative min-h-screen flex flex-col md:justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-4 pt-32 pb-24 md:px-8 lg:px-16">
      {/* Decorative particle background */}
      <ParticleBackground count={80} speed={0.6} linkDist={120} particleColor="rgba(99,102,241,0.8)" linkColor="rgba(139,92,246,0.15)" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-12 sm:mb-16 z-10"
      >
        My Tech Universe
      </motion.h1>

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
