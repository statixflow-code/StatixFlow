"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileDrawer from "@/components/MobileDrawer";
import HeroSection from "@/components/HeroSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import CoursesSection from "@/components/CoursesSection";
import CourseDetailModal from "@/components/CourseDetailModal";
import EnrollmentModal from "@/components/EnrollmentModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState(null);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState(null);

  const handleOpenEnrollModal = (course) => {
    setSelectedCourseForEnroll(course);
  };

  const handleOpenDetailModal = (course) => {
    setSelectedCourseForDetail(course);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar onOpenMobileMenu={() => setIsMobileDrawerOpen(true)} />

      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      <main className="grow">
        <HeroSection />

        <AnnouncementsSection />

        <CoursesSection
          onSelectCourseForEnroll={handleOpenEnrollModal}
          onSelectCourseForDetail={handleOpenDetailModal}
        />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />

      {selectedCourseForDetail && (
        <CourseDetailModal
          course={selectedCourseForDetail}
          onClose={() => setSelectedCourseForDetail(null)}
          onEnroll={(course) => {
            setSelectedCourseForDetail(null);
            setSelectedCourseForEnroll(course);
          }}
        />
      )}

      {selectedCourseForEnroll && (
        <EnrollmentModal
          course={selectedCourseForEnroll}
          onClose={() => setSelectedCourseForEnroll(null)}
        />
      )}
    </div>
  );
}
