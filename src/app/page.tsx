import dynamic from "next/dynamic";
import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero-section";
import type React from "react";

// Dynamically import components that are not above the fold
const ServicesSection = dynamic(
  () => import("@/app/components/services-section"),
);
const AboutSection = dynamic(() => import("@/app/components/about-section"));
const ProjectsSection = dynamic(
  () => import("@/app/components/projects-section"),
);
const ExperienceSection = dynamic(
  () => import("@/app/components/experience-section"),
);
const ClientsSection = dynamic(
  () => import("@/app/components/clients-section"),
);
const ContactSection = dynamic(
  () => import("@/app/components/contact-section"),
);
const CTASection = dynamic(() => import("@/app/components/cta-section"));

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ClientsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
