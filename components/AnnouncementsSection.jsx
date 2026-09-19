"use client";

import { useState, useEffect } from "react";
import { FaBullhorn, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

export default function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const res = await fetch("/api/announcements");
        const data = await res.json();
        if (data.success && data.announcements.length > 0) {
          setAnnouncements(data.announcements);
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements]);

  if (loading || announcements.length === 0) return null;

  const currentItem = announcements[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <section className="py-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="liquid-glass rounded-3xl p-6 md:p-8 shadow-xl border border-[#07889f]/20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 h-56 sm:h-64 rounded-2xl overflow-hidden relative shadow-md group">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#02295d]/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-[#25d462] text-[#02295d] text-xs font-extrabold uppercase tracking-wide shadow-md">
                  {currentItem.badgeText || "Announcement"}
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-2 text-[#07889f] font-bold text-sm">
                <FaBullhorn className="text-base animate-pulse text-[#25d462]" />
                <span>Latest Update</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#02295d] leading-snug">
                {currentItem.title}
              </h3>

              <p className="text-[#02295d]/80 text-base leading-relaxed">
                {currentItem.content}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={currentItem.link || "#courses"}
                  className="inline-flex items-center gap-2 font-bold text-[#07889f] hover:text-[#25d462] transition-colors group"
                >
                  <span>Explore Details</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>

                {announcements.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-white border border-[#02295d]/10 text-[#02295d] hover:bg-[#07889f] hover:text-white transition-colors"
                      aria-label="Previous announcement"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <span className="text-xs font-bold text-[#02295d]">
                      {currentIndex + 1} / {announcements.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-white border border-[#02295d]/10 text-[#02295d] hover:bg-[#07889f] hover:text-white transition-colors"
                      aria-label="Next announcement"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
