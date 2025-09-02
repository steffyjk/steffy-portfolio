"use client";
import { motion } from "framer-motion";

const skills = {
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
  backend: [
    "Python",
    "Django",
    "Flask",
    "DRF",
    "Node.js",
    "WebSockets",
    "RabbitMQ",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  cloud: ["AWS", "Azure", "EC2", "S3"],
  tools: ["Git", "GitHub", "Docker", "Figma", "VS Code", "PyCharm"],
};

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        💡 Skills
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="border border-gray-700 rounded-2xl p-6 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="capitalize font-semibold text-xl text-white mb-5">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-sm border border-gray-500 rounded-full text-gray-200 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
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
