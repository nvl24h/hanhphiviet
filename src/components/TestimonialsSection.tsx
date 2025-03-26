import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsSectionProps {
  testimonials?: Array<{
    id: number;
    quote: string;
    customerName: string;
    rating: number;
    customerImage?: string;
  }>;
  className?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      id: 1,
      quote:
        "The crispy texture and rich flavor of Hành Phi Việt's fried shallots have transformed my cooking. It's a premium product that adds the perfect finishing touch to any dish.",
      customerName: "Jane Nguyen",
      rating: 5,
      customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    {
      id: 2,
      quote:
        "I've tried many fried shallot brands, but Hành Phi Việt stands out for its exceptional quality and authentic flavor. It's become an essential ingredient in my kitchen.",
      customerName: "Michael Tran",
      rating: 5,
      customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      quote:
        "As a chef, I'm very particular about ingredients. Hành Phi Việt's premium fried shallots deliver consistent quality and enhance every dish I create.",
      customerName: "Sarah Lee",
      rating: 4,
      customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 4,
      quote:
        "The depth of flavor in these fried shallots is remarkable. They elevate even the simplest dishes to restaurant quality. Worth every penny!",
      customerName: "David Pham",
      rating: 5,
      customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ],
  className,
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className={cn(
        "py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why chefs and home cooks alike trust Hành Phi Việt for the
            finest premium fried shallots
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden relative h-[300px] md:h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <TestimonialCard
                  quote={testimonials[currentIndex].quote}
                  customerName={testimonials[currentIndex].customerName}
                  rating={testimonials[currentIndex].rating}
                  customerImage={testimonials[currentIndex].customerImage}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white p-3 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white p-3 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-purple-600" : "bg-purple-200 hover:bg-purple-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-20"></div>
    </section>
  );
};

export default TestimonialsSection;
