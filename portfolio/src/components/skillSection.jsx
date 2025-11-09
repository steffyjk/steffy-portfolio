import { useState, useEffect } from "react";

const skillsData = {
  Backend: {
    title: "Backend",
    description:
      "Robust server-side architectures that scale. Building the foundation of reliable systems with clean, efficient code.",
    skills: [
      "Python",
      "Django",
      "Flask",
      "DRF",
      "Node.js",
      "WebSockets",
      "RabbitMQ",
    ],
    color: "#2997ff",
    icon: "⚡",
    position: { top: "20%", left: "15%" },
  },
  Frontend: {
    title: "Frontend",
    description:
      "Modern interfaces that feel alive. Creating seamless user experiences with cutting-edge frameworks and precision.",
    skills: [
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
    color: "#bf5af2",
    icon: "✨",
    position: { top: "35%", left: "12%" },
  },
  Database: {
    title: "Database",
    description:
      "Data persistence engineered for performance. Optimizing queries and structures for lightning-fast access.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
    color: "#ff375f",
    icon: "🗄️",
    position: { top: "50%", left: "15%" },
  },
  Cloud: {
    title: "Cloud & DevOps",
    description:
      "Scalable infrastructure in the cloud. Deploying and managing systems that grow with demand.",
    skills: ["AWS", "Azure", "EC2", "S3", "Docker", "CI/CD"],
    color: "#ff9f0a",
    icon: "☁️",
    position: { top: "65%", left: "18%" },
  },
  Tools: {
    title: "Tools & Workflow",
    description:
      "Precision tooling for modern development. Streamlining workflows with industry-standard tools.",
    skills: ["Git", "GitHub", "Docker", "Figma", "VS Code", "PyCharm"],
    color: "#32d74b",
    icon: "🛠️",
    position: { top: "80%", left: "15%" },
  },
};

export default function SkillSection() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'hotspot'

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionScroll = Math.max(0, -rect.top);
        setScrollY(sectionScroll);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeSkill = skillsData[activeCategory];

  // Parallax calculations
  const parallaxY = scrollY * 0.3;
  const scale = Math.min(1.1, 1 + scrollY * 0.0002);
  const opacity = Math.max(0.3, 1 - scrollY * 0.001);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-32 relative overflow-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Animated background gradients */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${activeSkill.color}20, transparent 60%)`,
          transform: `translateY(${parallaxY * 0.5}px)`,
        }}
      ></div>
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse-slow"
        style={{ background: activeSkill.color }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-[100px] opacity-15 animate-pulse-slower"
        style={{ background: activeSkill.color }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          Technical <span style={{ color: "var(--accent)" }}>Expertise</span>
        </h2>
        <div
          className="h-[1px] w-24 mx-auto mt-6"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--accent), transparent)",
          }}
        ></div>
        <p
          className="text-lg sm:text-xl mt-6 max-w-2xl mx-auto"
          style={{ color: "var(--subtle)" }}
        >
          A structured ecosystem of tools, languages, and frameworks
        </p>

        {/* View Mode Toggle */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-white/10 border-white/30"
                : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
            } border backdrop-blur-sm`}
          >
            📱 Grid View
          </button>
          <button
            onClick={() => setViewMode("hotspot")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              viewMode === "hotspot"
                ? "bg-white/10 border-white/30"
                : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05]"
            } border backdrop-blur-sm`}
          >
            🎯 Interactive View
          </button>
        </div>
      </div>

      {/* Main Content - Conditional Rendering based on View Mode */}
      {viewMode === "grid" ? (
        // Grid View (Enhanced from second version)
        <div
          className={`relative z-10 w-full max-w-[1400px] mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transform: `translateY(${parallaxY * 0.15}px) scale(${scale})`,
            opacity: opacity,
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Sidebar - Category Selector */}
            <div className="w-full lg:w-[280px] flex-shrink-0 space-y-3">
              {Object.keys(skillsData).map((category, i) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-white/10 shadow-lg"
                      : "bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                  style={{
                    border: `1px solid ${
                      activeCategory === category
                        ? "rgba(255,255,255,0.2)"
                        : "var(--line)"
                    }`,
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skillsData[category].icon}
                    </span>
                    <div className="flex-1">
                      <div
                        className={`text-sm font-medium transition-colors ${
                          activeCategory === category
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {skillsData[category].title}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeCategory === category
                          ? "rotate-0 opacity-100"
                          : "rotate-180 opacity-0 group-hover:opacity-30"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: "var(--accent)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Content - Active Skill Display */}
            <div className="flex-1 min-h-[500px]">
              <div
                key={activeCategory}
                className="animate-fadeIn p-10 rounded-3xl relative overflow-hidden backdrop-blur-sm"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  boxShadow: `0 20px 60px ${activeSkill.color}20`,
                }}
              >
                {/* Gradient accent - animated */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse-slow"
                  style={{ background: activeSkill.color }}
                ></div>

                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(${activeSkill.color} 1px, transparent 1px), linear-gradient(to right, ${activeSkill.color} 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl animate-bounce-subtle">
                      {activeSkill.icon}
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {activeSkill.title}
                    </h3>
                  </div>

                  <p
                    className="text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl"
                    style={{ color: "var(--subtle)" }}
                  >
                    {activeSkill.description}
                  </p>

                  {/* Skills Pills with stagger animation */}
                  <div className="flex flex-wrap gap-3">
                    {activeSkill.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="animate-fadeInScale px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                        style={{
                          background: `${activeSkill.color}15`,
                          border: `1px solid ${activeSkill.color}40`,
                          color: activeSkill.color,
                          animationDelay: `${i * 50}ms`,
                          boxShadow: `0 4px 20px ${activeSkill.color}20`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats with animated counters */}
                  <div
                    className="mt-10 pt-8 border-t"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      <div className="group cursor-default">
                        <div
                          className="text-3xl font-semibold transition-transform group-hover:scale-110"
                          style={{ color: activeSkill.color }}
                        >
                          {activeSkill.skills.length}+
                        </div>
                        <div
                          className="text-sm mt-1"
                          style={{ color: "var(--subtle)" }}
                        >
                          Technologies
                        </div>
                      </div>
                      <div className="group cursor-default">
                        <div
                          className="text-3xl font-semibold transition-transform group-hover:scale-110"
                          style={{ color: activeSkill.color }}
                        >
                          100%
                        </div>
                        <div
                          className="text-sm mt-1"
                          style={{ color: "var(--subtle)" }}
                        >
                          Production Ready
                        </div>
                      </div>
                      <div className="hidden sm:block group cursor-default">
                        <div
                          className="text-3xl font-semibold transition-transform group-hover:scale-110"
                          style={{ color: activeSkill.color }}
                        >
                          3+
                        </div>
                        <div
                          className="text-sm mt-1"
                          style={{ color: "var(--subtle)" }}
                        >
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Hotspot View (Enhanced from first version)
        <div
          className={`relative w-full max-w-[1400px] mx-auto h-[700px] rounded-3xl overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transform: `translateY(${parallaxY * 0.15}px) scale(${scale})`,
            opacity: opacity,
          }}
        >
          {/* Background Image/Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* You can replace this with an actual image */}
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90"
              alt="Technical Architecture"
              className="w-full h-full object-cover opacity-40"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          </div>

          {/* Hotspot Buttons */}
          {Object.entries(skillsData).map(([category, data]) => (
            <div
              key={category}
              className="absolute animate-fadeIn"
              style={{
                top: data.position.top,
                left: data.position.left,
              }}
            >
              {/* Hotspot Button */}
              <button
                onClick={() => setActiveCategory(category)}
                className={`relative w-14 h-14 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
                  activeCategory === category
                    ? "bg-white/20 scale-110"
                    : "bg-black/40 hover:bg-black/60"
                }`}
                style={{
                  border: `2px solid ${
                    activeCategory === category
                      ? data.color
                      : "rgba(255,255,255,0.3)"
                  }`,
                  boxShadow:
                    activeCategory === category
                      ? `0 0 20px ${data.color}60`
                      : "none",
                }}
              >
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-lg">
                  {data.icon}
                </div>

                {/* Pulsing ring when active */}
                {activeCategory === category && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-75"
                    style={{ borderColor: data.color, borderWidth: "2px" }}
                  ></div>
                )}
              </button>

              {/* Enhanced Pop-up Tooltip */}
              {activeCategory === category && (
                <div
                  className="absolute left-20 top-1/2 -translate-y-1/2 w-96 animate-slideIn"
                  style={{ zIndex: 50 }}
                >
                  <div
                    className="p-8 rounded-3xl backdrop-blur-xl shadow-2xl"
                    style={{
                      background: "rgba(0, 0, 0, 0.85)",
                      border: `1px solid ${data.color}40`,
                      boxShadow: `0 20px 60px ${data.color}30`,
                    }}
                  >
                    {/* Arrow pointing to hotspot */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-4 rotate-45"
                      style={{
                        background: "rgba(0, 0, 0, 0.85)",
                        borderLeft: `1px solid ${data.color}40`,
                        borderBottom: `1px solid ${data.color}40`,
                      }}
                    ></div>

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{data.icon}</span>
                      <h3
                        className="text-2xl font-semibold"
                        style={{ color: data.color }}
                      >
                        {data.title}
                      </h3>
                    </div>

                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {data.description}
                    </p>

                    {/* Skills in tooltip */}
                    <div className="flex flex-wrap gap-2">
                      {data.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            background: `${data.color}20`,
                            color: data.color,
                            border: `1px solid ${data.color}40`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {data.skills.length > 4 && (
                        <span
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            background: `${data.color}20`,
                            color: data.color,
                            border: `1px solid ${data.color}40`,
                          }}
                        >
                          +{data.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-black/60 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <button
              className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-black/60 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Current Category Display */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div
              className="px-6 py-3 rounded-full backdrop-blur-xl inline-flex items-center gap-3"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                border: `1px solid ${activeSkill.color}40`,
              }}
            >
              <span className="text-2xl">{activeSkill.icon}</span>
              <span className="text-white font-medium">
                {activeSkill.title}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.15);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
