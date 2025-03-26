import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  onScrollToSection?: (section: string) => void;
}

const Navbar = ({ onScrollToSection = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(section);
  };

  const navLinks = [
    { name: "Home", section: "hero" },
    { name: "Our Story", section: "story" },
    { name: "Features", section: "features" },
    { name: "Testimonials", section: "testimonials" },
    { name: "Contact", section: "footer" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-purple-50",
        isScrolled
          ? "py-2 shadow-md bg-white/90 backdrop-blur-sm"
          : "py-4 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-800 tracking-tight">
            Hành Phi Việt
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleNavClick(link.section)}
              className={cn(
                "text-purple-700 hover:text-purple-900 font-medium transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                "after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full",
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Order Now Button */}
        <Button
          className="hidden md:flex bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open("#", "_blank")}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Order Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 transition-all duration-300">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleNavClick(link.section)}
              className="text-purple-700 hover:text-purple-900 font-medium py-2 border-b border-purple-100"
            >
              {link.name}
            </button>
          ))}
          <Button
            className="bg-purple-700 hover:bg-purple-800 text-white w-full py-2 rounded-full mt-4"
            onClick={() => window.open("#", "_blank")}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Order Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
