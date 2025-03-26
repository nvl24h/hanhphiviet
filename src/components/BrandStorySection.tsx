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
    title = "Di Sản Tinh Hoa Của Chúng Tôi",
    subtitle = "Truyền Thống & Chất Lượng",
    description = "Được thành lập tại trái tim của Việt Nam, Hành Phi Việt đã gìn giữ và phát triển nghệ thuật làm hành phi cao cấp qua nhiều thế hệ. Công thức gia truyền bí mật của chúng tôi được truyền lại qua từng năm tháng, lưu giữ trọn vẹn hương vị đậm đà và độ giòn hoàn hảo, giúp sản phẩm trở nên khác biệt. Chúng tôi tuyển chọn những củ hành tốt nhất, trồng trên những vùng đất màu mỡ của nông thôn Việt Nam, và chế biến theo phương pháp truyền thống kết hợp với tiêu chuẩn chất lượng hiện đại. Mỗi mẻ hành phi đều được làm thủ công với sự tỉ mỉ, đảm bảo chất lượng đồng nhất và hương vị tuyệt hảo, góp phần nâng tầm mọi món ăn.",
    imageUrl = "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80",
    imageAlt = "Traditional Vietnamese cooking with fried shallots",
    ctaText = "Khám Phá Fanpage Của Chúng Tôi",
    onCtaClick = () => console.log("CTA clicked"),
}) => {
    return (
        <section className="w-full py-20 bg-white" id="brand-story">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-purple-900/10"></div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-purple-600 text-lg font-medium mb-2">{subtitle}</h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                                <div className="w-20 h-1 bg-purple-700 mb-6"></div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">{description}</p>

                            <Button
                                onClick={() => window.open("https://www.facebook.com/hanhphiviet")}
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
