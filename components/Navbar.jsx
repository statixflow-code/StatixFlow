"use client";

import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function Navbar({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "courses", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Courses", href: "#courses", id: "courses" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-lg shadow-[#02295d]/10 border-b border-gray-100"
          : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <a href="#hero" className="flex items-center focus:outline-none">
            <img
              src="/sf1.png"
              alt="Statixflow Logo"
              className="h-10 md:h-15 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#02295d] text-white shadow-md shadow-[#02295d]/20"
                      : "text-[#02295d] hover:text-[#07889f] hover:bg-[#07889f]/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#courses"
              className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#07889f] to-[#25d462] text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <FaRocket className="text-xs" />
              Explore Courses
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={onOpenMobileMenu}
              type="button"
              className="p-2.5 rounded-xl text-[#02295d] bg-[#07889f]/10 hover:bg-[#07889f]/20 focus:outline-none transition-colors"
              aria-label="Open mobile menu"
            >
              <HiMenu className="text-2xl text-[#02295d]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
