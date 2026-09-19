"use client";

import { HiX, HiArrowLeft } from "react-icons/hi";
import { FaClock, FaUserGraduate, FaLayerGroup, FaCheckCircle, FaRocket, FaQuoteLeft, FaTrophy, FaLaptopCode, FaBookOpen } from "react-icons/fa";

export default function CourseDetailModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  const safeParseJSON = (jsonStr, fallback = []) => {
    if (!jsonStr) return fallback;
    try {
      return typeof jsonStr === "string" ? JSON.parse(jsonStr) : jsonStr;
    } catch {
      return fallback;
    }
  };

  const features = safeParseJSON(course.keyFeatures, []);
  const tags = safeParseJSON(course.tags, []);
  const modules = safeParseJSON(course.modules, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#f8fafc] overflow-y-auto w-full h-full flex flex-col animate-in fade-in duration-200">
      <header className="sticky top-0 z-40 bg-[#02295d]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between shadow-lg">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90 hover:text-[#25d462] transition-colors focus:outline-none"
        >
          <HiArrowLeft className="text-lg" />
          <span>Back to Courses</span>
        </button>

        <div className="hidden md:flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#07889f] text-white text-xs font-extrabold uppercase tracking-wider">
            {course.category}
          </span>
          <h2 className="text-sm font-extrabold text-white truncate max-w-md">
            {course.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onEnroll(course);
            }}
            className="px-4 py-2 rounded-xl bg-linear-to-r from-[#07889f] to-[#25d462] text-white text-xs sm:text-sm font-extrabold shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <FaRocket className="text-xs" />
            <span>Enroll Now</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close dialogue"
          >
            <HiX className="text-xl" />
          </button>
        </div>
      </header>

      <main className="grow">
        <div className="relative bg-[#02295d] text-white py-14 sm:py-20 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover filter blur-xs"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-[#02295d] via-[#02295d]/95 to-transparent" />

          <div className="relative max-w-5xl mx-auto space-y-6">
            <div className="flex items-center flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#07889f] text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                {course.category}
              </span>
              {course.badge && (
                <span className="px-3.5 py-1.5 rounded-full bg-[#25d462] text-[#02295d] text-xs font-extrabold shadow-md">
                  {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-white/85 text-base sm:text-xl max-w-3xl leading-relaxed font-normal">
              {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15 max-w-4xl text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-white/60 font-medium block uppercase text-[11px] tracking-wider">Instructor</span>
                <span className="font-extrabold text-white flex items-center gap-2">
                  <FaUserGraduate className="text-[#07889f] text-base" />
                  <span className="truncate">{course.instructor}</span>
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-white/60 font-medium block uppercase text-[11px] tracking-wider">Duration</span>
                <span className="font-extrabold text-white flex items-center gap-2">
                  <FaClock className="text-[#25d462] text-base" />
                  <span>{course.duration}</span>
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-white/60 font-medium block uppercase text-[11px] tracking-wider">Skill Level</span>
                <span className="font-extrabold text-white flex items-center gap-2">
                  <FaLayerGroup className="text-[#07889f] text-base" />
                  <span>{course.level}</span>
                </span>
              </div>
            
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-12">
          {course.keyOutcome && (
            <div className="p-6 rounded-3xl bg-linear-to-r from-[#25d462]/15 via-[#07889f]/15 to-[#02295d]/10 border-2 border-[#25d462]/40 flex items-center gap-4 shadow-md">
              <div className="p-4 rounded-2xl bg-[#25d462] text-[#02295d] text-2xl shrink-0 shadow-lg">
                <FaTrophy />
              </div>
              <div>
                <span className="text-[#07889f] text-xs font-black uppercase tracking-wider block">Career Outcome</span>
                <p className="text-lg sm:text-xl font-extrabold text-[#02295d]">
                  {course.keyOutcome}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-4">
            <h3 className="text-2xl font-extrabold text-[#02295d] flex items-center gap-3">
              <FaBookOpen className="text-[#07889f]" />
              <span>Comprehensive Course Overview</span>
            </h3>
            <p className="text-[#02295d]/85 text-base sm:text-lg leading-relaxed">
              {course.fullDescription || course.description}
            </p>
          </div>

          {features.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-6">
              <h3 className="text-2xl font-extrabold text-[#02295d] flex items-center gap-3">
                <FaCheckCircle className="text-[#25d462]" />
                <span>What You Will Master (Key Highlights)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#07889f]/5 border border-[#07889f]/15 flex items-start gap-3 text-sm text-[#02295d] font-semibold"
                  >
                    <FaCheckCircle className="text-[#25d462] shrink-0 mt-0.5 text-lg" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {modules.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-extrabold text-[#02295d] flex items-center gap-3">
                  <FaLaptopCode className="text-[#07889f]" />
                  <span>Full Curriculum & Modules ({modules.length} Modules)</span>
                </h3>
                <span className="text-xs font-bold text-[#07889f] bg-[#07889f]/10 px-3 py-1 rounded-full w-max">
                  100% Practical & Hands-on
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#07889f] hover:shadow-md transition-all space-y-2"
                  >
                    <span className="text-xs font-black text-[#07889f] uppercase tracking-wider">
                      Module {idx + 1}
                    </span>
                    <h4 className="font-extrabold text-[#02295d] text-base leading-snug">
                      {mod.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#02295d]/75 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-4">
              <h4 className="text-sm font-extrabold text-[#02295d] uppercase tracking-wider">
                Technologies & Tools Covered:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-[#07889f]/10 text-[#07889f] text-xs font-extrabold border border-[#07889f]/20 shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {course.testimonial && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#02295d] text-white space-y-3 shadow-xl relative overflow-hidden">
              <FaQuoteLeft className="text-[#07889f] text-4xl opacity-40" />
              <p className="text-base sm:text-lg italic font-medium leading-relaxed relative z-10">
                {course.testimonial}
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="sticky bottom-0 z-40 bg-white border-t border-gray-200 p-4 sm:px-8 flex items-center justify-between gap-4 shadow-2xl">
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-xl border border-gray-300 text-[#02295d] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors"
        >
          Close Syllabus
        </button>

        <button
          onClick={() => {
            onClose();
            onEnroll(course);
          }}
          className="px-8 py-3 rounded-xl bg-linear-to-r from-[#02295d] via-[#07889f] to-[#25d462] text-white text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl hover:scale-102 transition-all flex items-center gap-2"
        >
          <FaRocket className="text-xs" />
          <span>Enroll in this Course</span>
        </button>
      </footer>
    </div>
  );
}

