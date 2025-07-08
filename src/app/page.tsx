import HeroSection from "@/app/components/hero-section";
import ServicesSection from "@/app/components/services-section";
import AboutSection from "@/app/components/about-section";
import ProjectsSection from "@/app/components/projects-section";
import CTASection from "@/app/components/cta-section";
import ExperienceSection from "@/app/components/experience-section";
import ClientsSection from "@/app/components/clients-section";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <ServicesSection/>
          <AboutSection/>
          <ProjectsSection/>
          <ExperienceSection/>
          <ClientsSection/>
          <CTASection/>
    </main>
  );
}
