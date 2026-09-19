"use client";

import { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaGraduationCap, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function EnrollmentModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    phone: "",
    collegeName: "",
    department: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  if (!course) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.userName || !formData.userEmail || !formData.phone || !formData.collegeName || !formData.department) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseId: course.id,
          courseTitle: course.title,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message || "Enrollment confirmed! Check your email for details.");
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setFormData({
          userName: "",
          userEmail: "",
          phone: "",
          collegeName: "",
          department: "",
        });
      } else {
        setErrorMsg(data.error || "Failed to submit enrollment. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#02295d]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="glass-modal relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        <div className="bg-linear-to-r from-[#02295d] via-[#07889f] to-[#02295d] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <HiX className="text-xl" />
          </button>
          <div className="flex items-center gap-2 text-[#25d462] font-bold text-xs uppercase tracking-wider mb-1">
            <FaGraduationCap className="text-base" />
            <span>Course Registration</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight pr-8">
            {course.title}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Instructor: {course.instructor} • Duration: {course.duration}
          </p>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          {successMsg ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#25d462]/20 text-[#25d462] rounded-full flex items-center justify-center mx-auto text-3xl">
                <FaCheckCircle />
              </div>
              <h4 className="text-2xl font-extrabold text-[#02295d]">
                Enrollment Successful!
              </h4>
              <p className="text-[#02295d]/80 text-sm max-w-md mx-auto leading-relaxed">
                {successMsg}
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-[#02295d] text-white font-bold text-sm shadow-md hover:bg-[#07889f] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  required
                  placeholder="tony stark"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  required
                  placeholder="tony@gmail.com"
                  value={formData.userEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 9999999999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1.5">
                    College Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    required
                    placeholder="XYZ Collage"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1.5">
                    Department <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    required
                    placeholder="Computer Science"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-[#07889f] via-[#02295d] to-[#25d462] text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="animate-spin text-base" />
                      <span>Submitting Enrollment...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Confirm & Register</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
