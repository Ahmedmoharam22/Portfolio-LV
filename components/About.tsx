"use client";

import { useRef } from "react";
import Image from "next/image"; // الأداء الأعلى والأسرع للصور في Next.js
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // أنيميشن دخول الهيدر عند السكرول
    gsap.fromTo(
      ".about-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // أنيميشن الـ GSAP لظهور عناصر السكشن بتتابع (Stagger) فخم
    gsap.fromTo(
      ".about-reveal",
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15, // التتابع الزمني بين النص والصورة والـ Metrics
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full bg-zinc-950 py-32 px-6 md:px-12 md:py-48 border-t border-zinc-900 relative select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="about-header opacity-0 mb-24 flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            ABOUT <span className="text-zinc-700">ME</span>
          </h2>
        </div>

        {/* Layout Grid: 3-Column Luxury Architecture */}
        <div className="about-content grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Column 1: The Editorial Narrative (Lg: 4/12) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-zinc-400 text-sm md:text-base font-light leading-relaxed tracking-wide font-sans order-2 lg:order-1">
            <p className="about-reveal opacity-0 text-white font-semibold text-lg uppercase leading-tight">
              I bridge the gap between rigorous computer engineering principles and high-end frontend aesthetics.
            </p>
            <p className="about-reveal opacity-0">
              I'm Ahmed Moharam, Frontend Developer. I can help your company to achieve more success and achievements in the software industry by building, debugging, and even deploying web applications.
            </p>
            <p className="about-reveal opacity-0">
              I mainly work on Web Development with Next/React JS, TypeScript, with an interest in other programming languages ex: JavaScript and more.
            </p>
          </div>

          {/* Column 2: Big Clear Portrait Image (No layers, No grayscale, 100% crystal clear) */}
          <div className="about-reveal opacity-0 lg:col-span-4 w-full aspect-[3/4] relative rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl bg-zinc-900 order-1 lg:order-2 group">
            <Image
              src="/about.webp" // حط صورتك في فولدر public بالاسم والامتداد ده بالملي
              alt="Ahmed Moharam - Frontend Architect"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              // الصورة واضحة تماماً، والتأثير الوحيد هو زووم ناعم جداً عند الهوفر لبث الحيوية
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          {/* Column 3: Premium Minimalist Metrics Display (Lg: 4/12) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-6 order-3 lg:order-3">

            <div className="about-reveal opacity-0">
              <span className="block text-5xl md:text-6xl font-black text-amber-500 mb-3 tracking-tighter">500+</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium leading-relaxed">
                Active Users Managed via Custom CMS
              </span>
            </div>

            <div className="about-reveal opacity-0">
              <span className="block text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">40%</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium leading-relaxed">
                API Overhead Reduction Achieved
              </span>
            </div>

            <div className="about-reveal opacity-0 col-span-1 sm:col-span-2 pt-8 border-t border-zinc-900 mt-2">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
                <span className="size-1 rounded-full bg-amber-500" />
                <span>ECOSYSTEM FOCUS</span>
              </div>
              <span className="block text-sm text-zinc-400 font-light leading-relaxed font-sans">
                Feature-Based Architecture, Server-State Optimization, Automating Refactoring Workflows via Advanced Prompt Engineering.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;