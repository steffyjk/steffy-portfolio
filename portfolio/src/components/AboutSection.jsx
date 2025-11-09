import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div
            className={`h-[1px] w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        {/* Main Description */}
        <div
          className={`max-w-4xl mx-auto text-center text-gray-400 leading-relaxed text-lg sm:text-xl lg:text-2xl mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I'm <span className="text-white font-medium">Steffy Khristi</span>, a
          software engineer who thrives on structure, clarity, and impact. I see
          logic as art — building precise systems that balance technology and
          emotion. My curiosity drives my exploration of emerging tools, and my
          discipline turns complexity into clean, scalable results. I believe
          great code mirrors the mind: clear, deliberate, and deeply human.
        </div>

        {/* Info Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300">
            <h3 className="text-blue-400 text-sm uppercase tracking-widest mb-4 font-medium">
              Mindset
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Curiosity first. Logic follows. I question everything until it
              makes sense — then I build.
            </p>
          </div>

          <div className="group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300">
            <h3 className="text-blue-400 text-sm uppercase tracking-widest mb-4 font-medium">
              Principles
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Loyalty and precision define my work. I don't chase speed — I
              chase quality and truth.
            </p>
          </div>

          <div className="group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300">
            <h3 className="text-blue-400 text-sm uppercase tracking-widest mb-4 font-medium">
              Purpose
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              To merge logic, emotion, and creativity into systems that make
              people's lives better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
