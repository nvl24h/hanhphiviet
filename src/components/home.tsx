import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BrandStorySection from "./BrandStorySection";
import ProductFeaturesSection from "./ProductFeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import { Phone, MessageCircle } from "lucide-react";

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

            <div className="fixed bottom-10 right-4 flex flex-col space-y-3 z-50">
                <a
                    href="tel:+84836280977"
                    className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    aria-label="Call"
                >
                    <Phone size={24} />
                </a>
                <a
                    href="https://www.facebook.com/hanhphiviet"
                    className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    aria-label="Chat Facebook"
                >
                    <MessageCircle size={24} />
                </a>
            </div>
        </div>
    );
};

export default Home;
