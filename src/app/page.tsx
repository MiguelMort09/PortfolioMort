import Header from "./components/header";
import HeroSection from "@/app/components/hero-section";
import ServicesSection from "@/app/components/services-section";
import AboutSection from "@/app/components/about-section";
import ProjectsSection from "@/app/components/projects-section";
import CTASection from "@/app/components/cta-section";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
          <Header/>
          <main>
              <HeroSection/>
              <ServicesSection/>
              <AboutSection/>
              <ProjectsSection/>
              {/*<ExperienceSection/>*/}
              {/*<ClientsSection/>*/}
              {/*<TestimonialsSection/>*/}
              <CTASection/>
        </main>
        <Footer/>
      </div>
  );
}
