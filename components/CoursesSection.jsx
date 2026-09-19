"use client";

import { useState, useEffect } from "react";
import {
  FaClock,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaQuoteLeft,
  FaTrophy,
  FaCloud,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";

export default function CoursesSection({ onSelectCourseForEnroll, onSelectCourseForDetail }) {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSyllabusId, setExpandedSyllabusId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        if (data.success && data.courses.length > 0) {
          setCourses(data.courses);
          const uniqueCats = ["All", ...new Set(data.courses.map((c) => c.category))];
          setCategories(uniqueCats);
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  const toggleSyllabus = (courseId) => {
    setExpandedSyllabusId((prev) => (prev === courseId ? null : courseId));
  };

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const safeParseJSON = (jsonStr, fallback = []) => {
    if (!jsonStr) return fallback;
    try {
      return typeof jsonStr === "string" ? JSON.parse(jsonStr) : jsonStr;
    } catch {
      return fallback;
    }
  };

  return (
    <section id="courses" className="py-20 bg-[#f8fafc] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-[#07889f]/10 text-[#07889f] text-xs font-extrabold uppercase tracking-wider border border-[#07889f]/20">
            Professional Certification Programs
          </span>
          <h2 className="text-3xl mt-3 sm:text-4xl font-extrabold text-[#02295d] tracking-tight">
            Industry-Grade Courses & Internships
          </h2>
          <p className="text-[#02295d]/75 text-base sm:text-lg">
            Master real-world tech stacks with hands-on labs, comprehensive modules, and direct career referrals.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#02295d] text-white shadow-lg shadow-[#02295d]/20 scale-105"
                  : "bg-white text-[#02295d] border border-gray-200 hover:border-[#07889f] hover:text-[#07889f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-96 rounded-3xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => {
              const features = safeParseJSON(course.keyFeatures, []);
              const tags = safeParseJSON(course.tags, []);

              return (
                <div
                  key={course.id}
                  className="liquid-glass-card rounded-3xl overflow-hidden border border-[#07889f]/20 shadow-xl bg-white flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={course.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#02295d]/90 via-[#02295d]/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#07889f] text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="px-3 py-1 rounded-full bg-[#25d462] text-[#02295d] text-xs font-extrabold shadow-md">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                        <FaClock className="text-[#25d462]" />
                        {course.duration}
                      </span>
                     
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col grow justify-between space-y-5">
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#02295d] tracking-tight leading-snug group-hover:text-[#07889f] transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-[#02295d]/80 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {course.description}
                      </p>

                      {features.length > 0 && (
                        <div className="pt-2 border-t border-gray-100 space-y-2">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#07889f]">
                            Key Highlights:
                          </h4>
                          <ul className="space-y-2">
                            {features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#02295d] font-medium">
                                <FaCheckCircle className="text-[#25d462] shrink-0 mt-0.5 text-sm" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                            {features.length > 4 && (
                              <li className="text-xs font-bold text-[#07889f] pl-5">
                                + {features.length - 4} more module topics
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 shrink-0">
                      <button
                        onClick={() => onSelectCourseForDetail(course)}
                        className="flex-1 px-4 py-3 rounded-xl border border-[#07889f]/40 text-[#07889f] hover:bg-[#07889f] hover:text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <span>View Syllabus</span>
                        <FaChevronDown className="text-xs -rotate-90 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={() => onSelectCourseForEnroll(course)}
                        className="flex-1 px-4 py-3 rounded-xl bg-linear-to-r from-[#02295d] via-[#07889f] to-[#25d462] text-white text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl hover:scale-102 transition-all flex items-center justify-center gap-2"
                      >
                        <FaRocket className="text-xs" />
                        <span>Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
