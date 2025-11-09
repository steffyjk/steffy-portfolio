import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-12 bg-black text-white overflow-x-hidden"
      style={{ transform: `translateY(${parallaxY}px)`, opacity }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight animate-fade-in">
          Backend.
          <br />
          Supercharged.
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Robust, scalable, and efficient backend systems.
          <br />
          Built with precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-all transform hover:scale-105">
            View Projects
          </button>
          <button className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full text-lg font-medium transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image - Centered & Floating */}
      <div className="relative z-0 mt-16 w-full max-w-6xl mx-auto animate-float">
        <div className="relative w-full aspect-video">
          <img
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1600&q=90"
            alt="Backend Architecture"
            className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-900/50"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-3xl"></div>

          {/* Edge highlight - Apple signature detail */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-60 animate-fade-in-delay-3">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll-down {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(8px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1.2s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 1.2s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fadeIn 1.2s ease-out 0.9s forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </section>
  );
}
