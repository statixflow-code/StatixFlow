"use client";

import { FaRocket, FaGraduationCap, FaAward, FaUsers, FaStar } from "react-icons/fa";

export default function HeroSection() {
  const stats = [
    { label: "Active Learners", value: "1000+", icon: FaUsers, color: "text-[#07889f]" },
    { label: "Specialized Courses", value: "50+", icon: FaGraduationCap, color: "text-[#25d462]" },
    { label: "Placement Rate", value: "98%", icon: FaAward, color: "text-[#07889f]" },
    { label: "Student Rating", value: "4.9 / 5.0", icon: FaStar, color: "text-amber-400" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-30 md:pb-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-sky-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#07889f_1.2px,transparent_1.2px)] bg-size-[32px_32px] opacity-25" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-radial from-[#25d462]/35 via-[#07889f]/25 to-transparent rounded-full blur-3xl animate-pulse-glow" />

        <div className="absolute -top-10 -left-10 w-100 h-100 bg-linear-to-tr from-[#07889f]/45 via-[#25d462]/30 to-transparent rounded-full blur-3xl animate-blob-1" />

        <div className="absolute top-16 -right-12 w-110 h-110 bg-linear-to-br from-[#25d462]/45 via-[#07889f]/35 to-transparent rounded-full blur-3xl animate-blob-2" />

        <div className="absolute -bottom-24 left-1/4 w-130 h-130 bg-linear-to-tr from-[#02295d]/35 via-[#07889f]/30 to-[#25d462]/20 rounded-full blur-3xl animate-blob-3" />

        <div className="absolute top-1/4 left-1/6 w-6 h-6 rounded-full bg-[#25d462] shadow-[0_0_20px_#25d462] animate-particle-1" />
        <div className="absolute top-1/2 right-1/5 w-8 h-8 rounded-full bg-[#07889f] shadow-[0_0_25px_#07889f] animate-particle-2" />
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-[#25d462] shadow-[0_0_18px_#fbbf24] animate-particle-3" />
        <div className="absolute top-1/3 right-1/4 w-7 h-7 rounded-full bg-[#25d462] shadow-[0_0_22px_#25d462] animate-particle-1" style={{ animationDelay: "3s" }} />
      </div>

      <div className="flex items-center justify-center relative z-10">
         <img src="/sf.png" alt="Statixflow" className="w-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
         

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#02295d] leading-[1.15]">
            Master Future-Ready Skills with{" "}
            <span className="gradient-text-accent">Statixflow</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#02295d]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Accelerate your career with industry-tailored courses, hands-on live labs, and direct referral support for top tech roles.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-linear-to-r from-[#02295d] via-[#07889f] to-[#25d462] text-white text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FaRocket className="text-lg group-hover:translate-x-1 transition-transform text-[#25d462]" />
              Explore All Courses
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/80 hover:bg-white text-[#02295d] text-base font-semibold border-2 border-[#02295d]/15 shadow-md hover:border-[#07889f] transition-all duration-300 flex items-center justify-center"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="liquid-glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className={`p-3 rounded-xl bg-white shadow-md ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="text-2xl" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#02295d]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#07889f]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
