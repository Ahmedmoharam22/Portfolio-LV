"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiLayoutGridLine, RiCpuLine, RiServerLine, RiTerminalBoxLine } from "react-icons/ri";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. Premium Services Data
const services = [
  {
    icon: <RiLayoutGridLine size={24} />,
    title: "Premium Frontend Architecture",
    description: "Engineering immersive visual experiences with ultra-high-end design patterns, structural micro-frontends, and cinematic animations utilizing React 19, Next.js 16, and GSAP."
  },
  {
    icon: <RiCpuLine size={24} />,
    title: "Intelligent AI Systems",
    description: "Architecting autonomous travel planners, smart booking engines, and multi-agent systems designed to translate raw LLM capabilities into business assets."
  },
  {
    icon: <RiServerLine size={24} />,
    title: "Scalable Backend Ecosystems",
    description: "Designing hyper-efficient RESTful APIs, decoupled microservices, secure authorization workflows, and distributed databases crafted for enterprise scalability."
  }
];

// 2. High-End Organized Tech Stack
const techStack = {
  frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "GSAP", "Framer Motion"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Clean Code Architecture"],
  database: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"]
};

const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal section header
    gsap.fromTo(
      ".capabilities-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".capabilities-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Staggered reveal for service rows
    gsap.fromTo(
      ".service-card",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-wrapper",
          start: "top 80%",
        }
      }
    );

    // Fade up for tech categories
    gsap.fromTo(
      ".tech-category",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".tech-wrapper",
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="skills"
      ref={containerRef}
      className="w-full bg-luxury-black py-32 px-6 md:px-12 border-t border-white/[0.03] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="capabilities-header opacity-0 mb-28">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-medium block mb-4">
            Expertise & Stack
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-luxury-white tracking-tight">
            Capabilities Ecosystem
          </h2>
        </div>

        {/* Part 1: Core Services / Solutions */}
        <div className="services-wrapper grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 bg-luxury-gray/40 border border-white/[0.04] p-10 rounded-2xl relative group hover:border-white/10 transition-all duration-400"
            >
              <div className="text-gold-accent mb-6 bg-white/[0.02] w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.05] group-hover:bg-gold-accent group-hover:text-luxury-black transition-all duration-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-luxury-white mb-4 group-hover:text-gold-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-luxury-muted text-sm font-light leading-relaxed tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;