import React from "react";
import { Button } from "./ui/button";

interface BrandStorySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  title = "Our Heritage of Excellence",
  subtitle = "Tradition Meets Quality",
  description = "Founded in the heart of Vietnam, Hành Phi Việt has been crafting premium fried shallots for generations. Our secret family recipe has been passed down through the years, preserving the authentic flavor and perfect crispiness that makes our product stand out. We carefully select only the finest shallots, grown in the fertile soils of Vietnam's countryside, and fry them to golden perfection using traditional methods combined with modern quality standards. Every batch is handcrafted with attention to detail, ensuring consistent quality and exceptional taste that elevates any dish it touches.",
  imageUrl = "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80",
  imageAlt = "Traditional Vietnamese cooking with fried shallots",
  ctaText = "Discover Our Story",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <section className="w-full py-20 bg-white" id="brand-story">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-purple-900/10"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-600 text-lg font-medium mb-2">
                  {subtitle}
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
                <div className="w-20 h-1 bg-purple-700 mb-6"></div>
              </div>

              <p className="text-gray-700 leading-relaxed">{description}</p>

              <Button
                onClick={onCtaClick}
                className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
