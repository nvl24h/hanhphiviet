import React from "react";
import { Star } from "lucide-react";
import { cn } from "../lib/utils";

interface TestimonialCardProps {
  quote: string;
  customerName: string;
  rating: number;
  customerImage?: string;
  className?: string;
}

const TestimonialCard = ({
  quote = "The crispy texture and rich flavor of Hành Phi Việt's fried shallots have transformed my cooking. It's a premium product that adds the perfect finishing touch to any dish.",
  customerName = "Jane Nguyen",
  rating = 5,
  customerImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6 shadow-md border border-purple-100 flex flex-col h-full",
        "transition-all duration-300 hover:shadow-lg hover:border-purple-300",
        className,
      )}
    >
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-300">
            <img
              src={customerImage}
              alt={`${customerName}'s avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {customerName}
          </h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} mr-1`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="relative">
          <span className="text-purple-600 text-4xl absolute -top-2 -left-2 opacity-30">
            &ldquo;
          </span>
          <p className="text-gray-600 italic relative z-10 pl-4 pr-4">
            {quote}
          </p>
          <span className="text-purple-600 text-4xl absolute -bottom-5 -right-2 opacity-30">
            &rdquo;
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
