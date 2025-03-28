import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    imageUrl: string;
}

const FeatureCard = ({
    title = "Premium Quality",
    description = "Carefully selected shallots for the perfect crunch and flavor in every bite.",
    icon,
    imageUrl = "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
}: FeatureCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
            <div className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className="p-6 bg-white">
                <div className="flex items-center mb-3">
                    <div className="mr-3 text-purple-700">{icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

interface ProductFeaturesSectionProps {
    title?: string;
    subtitle?: string;
    features?: FeatureCardProps[];
}

const ProductFeaturesSection = ({
    title = "Vì Sao Chọn Hành Phi Cao Cấp Của Chúng Tôi",
    subtitle = "Khám phá lý do khiến Hành Phi Việt trở thành lựa chọn ưu tiên của những người đam mê ẩm thực cũng như đầu bếp chuyên nghiệp.",
    features = [
        {
            title: "Sản Phẩm Chọn Lọc",
            description: "Hành tím được lựa chọn cẩn thận để có độ giòn và hương vị hoàn hảo trong từng miếng cắn.",
            icon: (
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
                    className="lucide lucide-award"
                >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
            ),
            imageUrl: "/hanh-cu-kinh-mon.jpg",
        },
        {
            title: "Hương vị đích thực",
            description: "Hành già Hải Dương kèm công thức truyền thống làm tăng thêm vị ngọt tự nhiên của hành tím.",
            icon: (
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
                    className="lucide lucide-utensils"
                >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
            ),
            imageUrl: "/hươngvi.jpg",
        },
        {
            title: "Sử Dụng Đa Dạng",
            description: "Hành phi có thể được sử dụng đa dạng trong nhiều món ăn. Món nước, Món khô, Món gỏi & salad, chiên, xào...",
            icon: (
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
                    className="lucide lucide-chef-hat"
                >
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                    <line x1="6" x2="18" y1="17" y2="17" />
                </svg>
            ),
            imageUrl: "/hành phi nhiều món ăn.jpg",
        },
        {
            title: "Không chất bảo quản",
            description: "Được làm từ nguyên liệu hành ta tự nhiên 100%, không chất phụ gia hay chất bảo quản.",
            icon: (
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
                    className="lucide lucide-leaf"
                >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
            ),
            imageUrl: "/khong chat bao quan.jpg",
        },
    ],
}: ProductFeaturesSectionProps) => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white" id="features">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            imageUrl={feature.imageUrl}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button
                        className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
                        onClick={() => window.open("https://shopee.vn/hanhphiviet", "_blank")}
                    >
                        Xem sản phẩm trên Shopee
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductFeaturesSection;
