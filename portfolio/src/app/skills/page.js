"use client";
import { motion } from "framer-motion";

const skills = {
  frontend: ["React", "Next.js", "Angular", "JavaScript", "TypeScript", "RxJS", "HTML", "CSS", "Tailwind"],
  backend: ["Python", "Django", "Flask", "DRF", "Node.js", "WebSockets", "RabbitMQ"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  cloud: ["AWS", "Azure", "EC2", "S3"],
  tools: ["Git", "GitHub", "Docker", "Figma", "VS Code", "PyCharm"],
};

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
          >
            <h3 className="capitalize font-semibold text-lg mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm border rounded-full bg-gray-50 hover:bg-gray-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
