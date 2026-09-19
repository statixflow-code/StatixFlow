"use client";

import { HiX } from "react-icons/hi";
import { FaHome, FaBookOpen, FaInfoCircle, FaEnvelope, FaRocket } from "react-icons/fa";

export default function MobileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navLinks = [
    { name: "Home", href: "#hero", icon: FaHome },
    { name: "Courses", href: "#courses", icon: FaBookOpen },
    { name: "About Us", href: "#about", icon: FaInfoCircle },
    { name: "Contact Us", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      <div
        className="fixed inset-0 bg-[#02295d]/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl border-r border-[#07889f]/20 flex flex-col justify-between z-10">
        <div>
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <a href="#hero" onClick={onClose} className="flex items-center focus:outline-none">
              <img
                src="/sf1.png"
                alt="Statixflow Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-[#02295d] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <HiX className="text-2xl" />
            </button>
          </div>

          <div className="p-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-[#02295d] hover:bg-[#07889f]/10 hover:text-[#07889f] transition-all"
                >
                  <Icon className="text-lg text-[#07889f]" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="p-5 border-t border-gray-100">
          <a
            href="#courses"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-[#07889f] to-[#25d462] text-white font-bold text-center shadow-md flex items-center justify-center gap-2"
          >
            <FaRocket className="text-sm" />
            Explore Courses
          </a>
          <p className="text-center text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} Statixflow Academy
          </p>
        </div>
      </div>
    </div>
  );
}
