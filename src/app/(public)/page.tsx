import HeroSection from "@/components/sections/HeroSection";
import CodeStripSection from "@/components/sections/CodeStripSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsPreviewSection from "@/components/sections/ProjectsPreviewSection";
import WhySection from "@/components/sections/WhySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CodeStripSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
