import React from "react";
import { Facebook, Mail, Phone, MapPin, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
    companyName?: string;
    email?: string;
    phone?: string;
    address?: string;
    socialLinks?: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
    };
}

const Footer = ({
    companyName = "HÀNH PHI VIỆT",
    email = "info@hanhphiviet.com",
    phone = "0836.280.977",
    address = "Tổ dân phố cơ khi, Cổ Bì, Gia Lâm, Hà Nội",
    socialLinks = {
        facebook: "https://www.facebook.com/hanhphiviet",
        Shopee: "https://shopee.vn/hanhphiviet",
        Zalo: "https://zalo.me/0836280977",
    },
}: FooterProps) => {
    return (
        <footer className="w-full bg-purple-900 text-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{companyName}</h3>
                    <p className="text-purple-200 max-w-xs">Hành Phi Việt - Nông Sản Việt Nam</p>
                    <div className="flex space-x-4 pt-2">
                        <a
                            href={socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                        >
                            <ShoppingBag size={20} />
                        </a>
                        <a
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liên hệ chúng tôi</h3>
                    <ul className="space-y-3 text-purple-200">
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                                {email}
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} />
                            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                                {phone}
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin size={16} className="mt-1" />
                            <span>{address}</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liên kết nhanh</h3>
                    <ul className="space-y-2 text-purple-200">
                        <li>
                            <a href="http://hanhphiviet.com/" className="hover:text-white transition-colors">
                                Website
                            </a>
                        </li>
                        <li>
                            <a href="https://shopee.vn/hanhphiviet" className="hover:text-white transition-colors">
                                Shopee
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/hanhphiviet" className="hover:text-white transition-colors">
                                Fanpage
                            </a>
                        </li>
                        <li>
                            <a href="https://zalo.me/0836280977" className="hover:text-white transition-colors">
                                Zalo Chat
                            </a>
                        </li>
                    </ul>
                    <Button
                        className="mt-4 bg-white text-purple-900 hover:bg-purple-100"
                        onClick={() => window.open("https://shopee.vn/hanhphiviet")}
                    >
                        Order Now
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-purple-700 text-center text-purple-300 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
                </p>
                <div className="mt-2 flex justify-center space-x-6">
                    <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
