"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { VscClose, VscDashboard } from "react-icons/vsc";

const navLinks = [
  { name: "Index", path: "/" },
  { name: "About", path: "#about" },
  { name: "Tech Stack", path: "#tech-stack" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 ${scrolled ? "bg-luxury-black/60 backdrop-blur-xl border-b border-white/[0.04] !py-4" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Editorial Logo */}
        <Link href="/" className="text-xl font-black tracking-widest uppercase text-luxury-white group">
          A7medMO<span className="text-gold-accent transition-all duration-300 group-hover:pl-1">.</span>
        </Link>

        {/* Sophisticated Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-xs uppercase tracking-[0.3em] text-luxury-muted hover:text-luxury-white transition-colors duration-300 relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-6">
          {/* Executive Dashboard Portal */}
          {/* <Link
            href="/dashboard"
            className="hidden sm:flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-luxury-white bg-white/[0.02] hover:bg-luxury-white hover:text-luxury-black hover:border-luxury-white transition-all duration-400 font-medium"
          >
            <VscDashboard size={14} />
            <span>Console</span>
          </Link> */}

          {/* Trigger for Premium Minimal Mobile Overlay */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-luxury-white p-2 hover:opacity-70 transition cursor-pointer"
          >
            {mobileMenu ? <VscClose size={24} /> : <HiOutlineMenuAlt4 size={24} />}
          </button>
        </div>
      </div>

      {/* Luxury Full-Screen Mobile Drawer Alternative */}
      <div
        className={`fixed inset-0 top-[73px] w-full h-[calc(100vh-73px)] bg-luxury-black/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center px-12 border-t border-white/[0.04] ${mobileMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenu(false)}
              className="font-serif text-4xl text-luxury-white hover:text-gold-accent transition-colors duration-300 self-start"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            href="/dashboard"
            onClick={() => setMobileMenu(false)}
            className="mt-6 flex items-center gap-2 text-gold-accent font-mono text-sm tracking-wider uppercase"
          >
            <VscDashboard size={16} />
            <span>Access Console</span>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;