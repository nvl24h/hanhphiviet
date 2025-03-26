import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BrandStorySection from "./BrandStorySection";
import ProductFeaturesSection from "./ProductFeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      hero: heroRef,
      story: storyRef,
      features: featuresRef,
      testimonials: testimonialsRef,
      footer: footerRef,
    };

    const ref = sectionMap[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onScrollToSection={scrollToSection} />

      <div ref={heroRef}>
        <HeroSection onCtaClick={() => scrollToSection("features")} />
      </div>

      <div ref={storyRef}>
        <BrandStorySection onCtaClick={() => scrollToSection("features")} />
      </div>

      <div ref={featuresRef}>
        <ProductFeaturesSection />
      </div>

      <div ref={testimonialsRef}>
        <TestimonialsSection />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
