"use client";

import { FaWhatsapp , FaGlobe , FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-[url('/bg1.jpg')] bg-center bg-cover text-white pt-16 pb-12 border-t border-[#07889f]/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
                <a href="#hero" className="flex items-center focus:outline-none">
            <img
              src="/sf1.png"
              alt="Statixflow Logo"
              className="h-10 md:h-15 w-auto object-contain"
            />
          </a>
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Empowering global tech talents with expert mentorship, practical cloud labs, and direct industry referrals.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917028700587?text=Hello%20Statixflow!%20I'm%20interested%20in%20your%20courses.%20Could%20you%20please%20give%20me%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2.5 rounded-xl bg-white/20 hover:bg-white/10 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a href="#contact" className="p-2.5 rounded-xl bg-white/20 hover:bg-white/10 hover:text-blue-600 transition-colors">
                <IoCall />
              </a>
              <a href="mailto:statixflow@gmail.com" className="p-2.5 rounded-xl bg-white/20 hover:bg-white/10 hover:text-red-500 transition-colors">
                <MdEmail />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/20 hover:bg-white/10 hover:text-blue-500 transition-colors">
                <FaGlobe />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#25d462] text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:text-[#25d462] transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#25d462] transition-colors">Courses</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#25d462] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#25d462] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#07889f] text-sm uppercase tracking-wider mb-4">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#contact" className="hover:text-[#07889f] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#07889f] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#07889f] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#07889f] transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Statixflow Academy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            An ISO 9001:2015 Certified Institute & Registered under Ministry of MSME, Govt. of India.
          </p>
        </div>
      </div>
    </footer>
  );
}
