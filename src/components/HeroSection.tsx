import React from "react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    backgroundImage?: string;
    productImage?: string;
}

const HeroSection = ({
    title = "Nông Sản Việt Nam",
    subtitle = "Nâng tầm món ăn của bạn với hành phi vàng giòn, thơm ngon của Việt Nam – được chế biến tỉ mỉ để mang đến hương vị đậm đà và độ giòn hoàn hảo.",
    ctaText = "Mua Ngay",
    onCtaClick = () => window.open("https://shopee.vn/hanhphiviet", "_blank"),
    backgroundImage = "linear-gradient(to right, #4c1d95, #7e22ce)",
    productImage = "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80",
}: HeroSectionProps) => {
    return (
        <section
            className="relative w-full h-[800px] flex items-center bg-purple-900 overflow-hidden"
            style={{ background: backgroundImage }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-300"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Text content */}
                <div className="md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="block">Hành Phi Việt</span>
                        <span className="block mt-2">{title}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-purple-100 max-w-lg">{subtitle}</p>
                    <Button
                        // onClick={onCtaClick}
                        onClick={() => window.open("https://shopee.vn/hanhphiviet")}
                        size="lg"
                        className={cn(
                            "bg-white text-purple-900 hover:bg-purple-100 hover:text-purple-900",
                            "text-lg px-8 py-6 rounded-full font-semibold transition-all",
                            "shadow-lg hover:shadow-xl"
                        )}
                    >
                        {ctaText}
                    </Button>
                </div>

                {/* Product image */}
                <div className="md:w-1/2 relative">
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <img src={productImage} alt="Premium Fried Shallots" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white text-purple-900 px-6 py-3 rounded-full shadow-lg font-semibold">
                        Sản phẩm chất lượng cao
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
                <span className="text-sm mb-2">Khám Phá Câu Chuyện</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
