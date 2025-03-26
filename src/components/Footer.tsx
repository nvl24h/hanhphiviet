import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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
  companyName = "Hành Phi Việt",
  email = "contact@hanhphiviet.com",
  phone = "+84 123 456 789",
  address = "123 Nguyen Hue Street, Ho Chi Minh City, Vietnam",
  socialLinks = {
    facebook: "https://facebook.com/hanhphiviet",
    instagram: "https://instagram.com/hanhphiviet",
    twitter: "https://twitter.com/hanhphiviet",
  },
}: FooterProps) => {
  return (
    <footer className="w-full bg-purple-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{companyName}</h3>
          <p className="text-purple-200 max-w-xs">
            Premium quality fried shallots, crafted with tradition and
            excellence.
          </p>
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
              <Instagram size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-purple-200">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition-colors"
              >
                {email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors"
              >
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
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-purple-200">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#brand-story"
                className="hover:text-white transition-colors"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#product-features"
                className="hover:text-white transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <Button className="mt-4 bg-white text-purple-900 hover:bg-purple-100">
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
