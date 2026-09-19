"use client";

import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
  FaNetworkWired,
  FaProjectDiagram,
  FaFileAlt,
  FaUserCheck,
  FaHistory,
  FaTools,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaCheck,
  FaRocket,
} from "react-icons/fa";

export default function AboutSection() {
  const features = [
    {
      title: "1-on-1 Expert Mentorship",
      desc: "Direct access to senior software architects for code reviews, architectural guidance, and career advice.",
      badge: "Personalized Support",
      icon: FaChalkboardTeacher,
      color: "text-[#07889f]",
    },
    {
      title: "Production Live Sandboxes",
      desc: "Practice on interactive cloud environments and containerized labs mimicking real microservices.",
      badge: "Hands-on Practice",
      icon: FaLaptopCode,
      color: "text-[#25d462]",
    },
    {
      title: "ISO 9001:2015 Certified",
      desc: "Earn industry-accredited, shareable certificates backed by ISO standards and Govt. MSME recognition.",
      badge: "Government Recognized",
      icon: FaCertificate,
      color: "text-[#07889f]",
    },
    {
      title: "Direct Hiring Network",
      desc: "Get referred directly to hiring managers across 100+ partner tech startups and MNC enterprises.",
      badge: "Placement Referrals",
      icon: FaNetworkWired,
      color: "text-[#25d462]",
    },
    {
      title: "Real-World Capstone Projects",
      desc: "Build production-grade applications with CI/CD, database ORMs, security hardening, and deployment.",
      badge: "Production Ready",
      icon: FaProjectDiagram,
      color: "text-[#07889f]",
    },
    {
      title: "Resume & Portfolio Hardening",
      desc: "Transform your GitHub, technical resume, and LinkedIn presence to stand out to engineering recruiters.",
      badge: "Career Branding",
      icon: FaFileAlt,
      color: "text-[#25d462]",
    },
    {
      title: "Mock Technical Interviews",
      desc: "Rigorous simulated 1-on-1 interviews covering System Design, Data Structures, and Live Coding.",
      badge: "Interview Prep",
      icon: FaUserCheck,
      color: "text-[#07889f]",
    },
    {
      title: "Lifetime Curriculum Access",
      desc: "Unlimited access to updated course recordings, starter boilerplates, and private repository templates.",
      badge: "Lifetime Access",
      icon: FaHistory,
      color: "text-[#25d462]",
    },
    {
      title: "Modern Industry Tech Stack",
      desc: "Master cutting-edge tools including Next.js, AWS, Kubernetes, Terraform, Playwright, and PostgreSQL.",
      badge: "Cutting-Edge Tools",
      icon: FaTools,
      color: "text-[#07889f]",
    },
    {
      title: "Flexible Hybrid Learning",
      desc: "Choose between interactive live online cohorts or immersive classroom bootcamps with flexible timing.",
      badge: "Online & Offline",
      icon: FaGraduationCap,
      color: "text-[#25d462]",
    },
    {
      title: "DevSecOps & Security Focus",
      desc: "Learn built-in security practices, cloud governance, and compliance fundamentals across all learning paths.",
      badge: "Enterprise Security",
      icon: FaShieldAlt,
      color: "text-[#07889f]",
    },
    {
      title: "Active Tech Alumni Network",
      desc: "Connect with thousands of ambitious learners, alumni, and tech mentors in private community channels.",
      badge: "Vibrant Community",
      icon: FaUsers,
      color: "text-[#25d462]",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#25d462]/10 text-[#02295d] text-xs font-extrabold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#02295d] tracking-tight">
            Empowering the Next Generation of Tech Leaders
          </h2>
          <p className="text-[#02295d]/80 text-base sm:text-lg leading-relaxed">
            Statixflow is built to bridge the gap between academic theory and real-world engineering excellence through immersive curriculum and industry partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="liquid-glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center ${item.color} text-2xl`}>
                      <Icon />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#07889f]/10 text-[#07889f]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#02295d]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#02295d]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#07889f] border-t border-gray-100">
                  <FaCheck className="text-[#25d462]" />
                  <span>Verified Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl p-8 md:p-10 border border-[#07889f]/20 bg-[url('/bg3.jpeg')] bg-center bg-cover text-white flex items-center justify-end">
          <div>
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Accelerate Your Career?
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Join thousands of successful graduates working at top companies worldwide.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#courses"
                className="px-8 py-3.5 mt-10 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#07889f] to-[#25d462] text-white font-bold text-sm shadow-xl hover:scale-105 transition-all shrink-0"
              >
                <FaRocket className="text-xs" />
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
