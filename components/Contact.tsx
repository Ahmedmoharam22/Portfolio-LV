"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      // Reveal header and columns smoothly on scroll
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".contact-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Luxury-grade basic client validation concept matching your Zod ecosystem focus
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let currentErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      currentErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.includes("@")) {
      currentErrors.email = "Provide a valid executive email.";
      isValid = false;
    }
    if (formData.message.length < 10) {
      currentErrors.message = "Brief must be at least 10 characters.";
      isValid = false;
    }

    setErrors(currentErrors);
    if (isValid) {
      console.log("Secure Brief Inquire Payload:", formData);
      // Ready to be integrated with your dashboard API route later
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/[0.03] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="contact-header opacity-0 mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-medium block mb-4">
            Collaboration Portal
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-luxury-white tracking-tight">
            Let's Work Together
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Channels */}
          <div className="contact-animate opacity-0 lg:col-span-5 flex flex-col gap-12 items-center text-center lg:items-start lg:text-left">
            {/*Direct Channels*/}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xs uppercase tracking-[0.3em] text-luxury-muted font-bold mb-4">
                Direct Channels
              </h3>
              <a
                href="mailto:ahmed.moharam.work@gmail.com"
                className="text-xl font-serif text-luxury-white hover:text-gold-accent transition-colors block mb-2 break-all" // break-all عشان الإيميل مايطلعش برة الشاشة
              >
                ahmed.moharam.work@gmail.com
              </a>
              <a
                href="tel:+201092635055"
                className="text-sm font-mono text-luxury-muted hover:text-gold-accent transition-colors block"
              >
                +20 109 263 5055
              </a>
            </div>

            {/*Digital Presence*/}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xs uppercase tracking-[0.3em] text-luxury-muted font-bold mb-4">
                Digital Presence
              </h3>
              <div className="flex flex-col items-center lg:items-start gap-3 text-sm font-medium tracking-wider">
                <a
                  href="https://www.linkedin.com/in/a7medmoharam/"
                  target="_blank"
                  className="text-luxury-white hover:text-gold-accent transition-colors flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <LiaLinkedin
                    size={25}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://github.com/Ahmedmoharam22"
                  target="_blank"
                  className="text-luxury-white hover:text-gold-accent transition-colors flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <LiaGithub
                    size={25}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquire Brief Form */}
          <div className="contact-animate opacity-0 lg:col-span-7 bg-luxury-gray/20 border border-white/[0.03] p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Ahmed Mohamed..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-transparent border-b border-white/10 py-3 text-sm text-luxury-white focus:outline-none focus:border-gold-accent transition-colors font-light tracking-wide"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 font-mono tracking-wide">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted font-bold">
                  Secure Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g., alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-transparent border-b border-white/10 py-3 text-sm text-luxury-white focus:outline-none focus:border-gold-accent transition-colors font-light tracking-wide"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-mono tracking-wide">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message / Brief Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted font-bold">
                  Project Brief or Ecosystem Scope
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the architectural scope or institutional requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-transparent border-b border-white/10 py-3 text-sm text-luxury-white focus:outline-none focus:border-gold-accent transition-colors font-light tracking-wide resize-none leading-relaxed"
                />
                {errors.message && (
                  <span className="text-[10px] text-red-400 font-mono tracking-wide">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-luxury-white text-luxury-black font-semibold py-4 rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-gold-accent hover:text-luxury-black transition-all duration-400 shadow-xl cursor-pointer active:scale-[0.98]"
              >
                <span>Send</span>
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
