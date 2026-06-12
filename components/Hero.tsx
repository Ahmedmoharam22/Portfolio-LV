"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Premium Cinematic Opening Sequence
    tl.fromTo(
      ".reveal-tag",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    )
      .fromTo(
        ".reveal-title",
        { opacity: 0, scale: 0.93, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.4, stagger: 0.2 },
        "-=0.9"
      )
      .fromTo(
        ".reveal-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1"
      )
      .fromTo(
        ".reveal-cta",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.8"
      );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-luxury-black flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12 pt-16 text-center"
    >
      {/* Editorial Luxury Ambient Lights (Centered Alignment) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gold-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Premium Badge Identifier */}
        <div className="reveal-tag opacity-0 mb-5 flex items-center justify-center gap-3">
          <span className="w-5 h-[1px] bg-gold-accent" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold-accent font-semibold">
            {/* Architecting Next-Gen Interfaces */}
            Who I Am
          </span>
          <span className="w-5 h-[1px] bg-gold-accent" />
        </div>

        {/* Deeply Meaningful Frontend Headlines (Optimized Scale) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-luxury-white tracking-tight leading-[1.15] mb-5 max-w-3xl">
          <div className="overflow-hidden block py-1">
            <span className="reveal-title block">I'm Ahmed Moharam, </span>
          </div>
          <div className="overflow-hidden block py-1">
            <span className="reveal-title block text-transparent bg-clip-text bg-gradient-to-r from-luxury-white via-luxury-white to-gold-accent">
              Frontend Developer.
            </span>
          </div>
        </h1>

        {/* High-End Empowering Frontend Statement (Compact Font) */}
        <p className="reveal-desc opacity-0 text-luxury-muted max-w-xl text-xs md:text-sm leading-relaxed tracking-wide mb-8 font-light">
          I shape the modern web by transforming abstract architectural logic into pixel-perfect, hyper-performant digital reality. Specializing in highly reactive interfaces, fluid motion systems, and clean modular codebases.
        </p>

        {/* Call to Actions (Optimized Centered Row) */}
        <div className="reveal-cta opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2.5 bg-luxury-white text-luxury-black font-semibold px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-gold-accent hover:text-luxury-black transition-all duration-400 shadow-xl w-full sm:w-auto"
          >
            <span>Explore Architecture</span>
            <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 border border-white/10 text-luxury-white px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.2em] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
          >
            <span>Initiate Inquiry</span>
          </a>
        </div>

      </div>

      {/* Luxury Geometric Subtle Grid Background overlay (Centered Focus) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
    </section>
  );
};

export default Hero;