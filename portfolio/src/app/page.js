// =============================
// Minimal changes: add spacing containers that work with your existing sections.
// =============================
"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillSection from "@/components/skillSection";
import WorkSection from "@/components/WorkSection";

export default function Page() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <section id="home" className="section-gap">
        <div className="container-pad">
          <HeroSection />
        </div>
      </section>

      <section id="about" className="section-gap">
        <div className="container-pad card card-hover p-6">
          <AboutSection />
        </div>
      </section>

      <section id="skill" className="section-gap">
        <div className="container-pad">
          <SkillSection />
        </div>
      </section>

      <section id="projects" className="section-gap">
        <div className="container-pad">
          <ProjectsSection />
        </div>
      </section>
      <section id="work" className="section-gap">
        <div className="container-pad">
          <WorkSection />
        </div>
      </section>
      <section id="contact" className="section-gap">
        <div className="container-pad">
          <div className="console p-6">
            {/* optional puzzle-esque header */}
            <div className="flex items-center justify-between mb-4">
              <span className="chip mono">status: connected</span>
              <span className="mono subtle">role=backend • mode=solver</span>
            </div>
            <ContactSection />
          </div>
        </div>
      </section>
    </div>
  );
}
