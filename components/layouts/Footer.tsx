"use client";

import Link from "next/link";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  // Direct communication and social nodes based on your executive coordinates
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/a7medmoharam/",
      icon: <FaLinkedin size={16} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Ahmedmoharam22",
      icon: <SiGithub size={16} />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/201092635055",
      icon: <SiWhatsapp size={16} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-luxury-black border-t border-white/[0.03] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright Narrative */}
        <div className="text-[11px] font-mono tracking-wider text-luxury-muted text-center md:text-left">
          © {new Date().getFullYear()} Ahmed Moharam. All Architecture Reserved.
        </div>

        {/* Center Side: Premium Social Icons Group */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 rounded-full border border-white/[0.03] bg-white/[0.01] flex items-center justify-center text-luxury-muted hover:text-gold-accent hover:border-gold-accent/30 hover:bg-gold-accent/[0.02] transition-all duration-400 group relative"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
              {/* Subtle Luxury Glow Backdrop */}
              <span className="absolute inset-0 rounded-full bg-gold-accent/10 opacity-0 blur-md transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Right Side: Back to Top Trigger */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-luxury-muted hover:text-luxury-white transition-colors duration-300 group cursor-pointer"
        >
          <span>Back to Top</span>
          <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
            <FiArrowUp size={12} />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
