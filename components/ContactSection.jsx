"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheckCircle } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", msg: "Please fill out all required fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", msg: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f8fafc] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#07889f]/10 text-[#07889f] text-xs font-extrabold uppercase tracking-wider">
            Reach Out To Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02295d] tracking-tight">
            We Are Here To Help You
          </h2>
          <p className="text-[#02295d]/70 text-base">
            Have questions regarding course curricula, enrollment requirements, or custom corporate training? Contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#07889f] text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-[#02295d] text-base">Email Support</h4>
                <p className="text-sm text-[#02295d]/70 mt-0.5">Send us your queries anytime</p>
                <a
                  href="statixflow@gmail.com"
                  className="text-sm font-semibold text-[#07889f] hover:text-[#25d462] transition-colors mt-1 block"
                >
                  statixflow@gmail.com
                </a>
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#25d462] text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-[#02295d] text-base">Call Us</h4>
                
                <p className="text-sm font-semibold text-[#02295d] mt-1">
                 Kalyan Sir +91 98606 90498
                </p>
                 <p className="text-sm font-semibold text-[#02295d] mt-1">
               Sanchit Mohite +91 70287 00587
                </p>
                 <p className="text-sm font-semibold text-[#02295d] mt-1">
              Sanket Mohite +91 72493 34520
                </p>
                 
              </div>
            </div>

            <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#07889f] text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-[#02295d] text-base">Headquarters</h4>
                <p className="text-sm text-[#02295d]/75 mt-0.5 leading-relaxed">
                  ● Statix Flow- IT Training Center, 403 Nikam galli, At Nerle, Taluka-Walwa, Dist-Sangli,
Maharashtra - 415406, India
                </p>
                <p className="text-sm text-[#02295d]/75 mt-0.5 leading-relaxed">
                  ● Statix Flow- IT Training Center, Sai saheb society, shiv Sai lane, opposite lotus hospital, Pimple Saudagar, Pimpri-chinchwad, Maharashtra - 411027, India
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#07889f]/20 shadow-xl">
              <h3 className="text-2xl font-extrabold text-[#02295d] mb-6">
                Send Us a Message
              </h3>

              {status.msg && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm font-semibold flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.type === "success" && <FaCheckCircle className="text-emerald-600" />}
                  <span>{status.msg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="tony stark"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tony@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Course Syllabus Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#02295d] mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm liquid-glass-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-[#02295d] to-[#07889f] hover:from-[#07889f] hover:to-[#25d462] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="animate-spin text-base" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
