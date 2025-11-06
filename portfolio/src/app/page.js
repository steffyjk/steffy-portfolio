"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillSection from "@/components/skillSection";
import WorkSection from "@/components/WorkSection";

export default function Page() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skill">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="projects">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
