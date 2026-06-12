"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiShadcnui, SiGit, SiPostman, SiFigma,
  SiMongodb, SiNodedotjs, SiExpress, SiZod,
  SiClaude, SiOpenai
} from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stackCategories = [
  {
    title: "Core Architecture & Languages",
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
    ]
  },
  {
    title: "Frameworks & State Management",
    items: [
      { name: "Next.js 15/16", icon: <SiNextdotjs className="text-white" /> },
      { name: "React 19", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "TanStack Query", icon: <TbCloudComputing className="text-[#FF4154]" /> },
      { name: "Zustand / Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "Tailwind v4", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="text-white" /> },
    ]
  },
  {
    title: "Backend & Ecosystem Tools",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white/80" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Zod & Validation", icon: <SiZod className="text-[#3E67B1]" /> },
      { name: "Git / GitHub", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Postman / Figma", icon: <SiPostman className="text-[#FF6C37]" /> },
    ]
  },
  {
    title: "AI-Driven Engineering",
    items: [
      { name: "Claude AI", icon: <SiClaude className="text-[#D97706]" /> },
      { name: "ChatGPT (Codex)", icon: <SiOpenai className="text-[#10A37F]" /> },
      {
        name: "Cursor AI",
        icon: (
          <img
            src="/download.png"
            className="size-5 object-contain opacity-80 mix-blend-screen"
            alt="Cursor AI"
          />
        )
      },
    ]
  }
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // فانكشن حساب حركة الماوس وتحديث الـ Spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useGSAP(() => {
    // أنيميشن فخم للهيدر
    gsap.fromTo(
      ".stack-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".stack-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // ستاجر أنيميشن خفيف لظهور التك تولز
    const categories = gsap.utils.toArray(".stack-group");
    categories.forEach((group: any) => {
      gsap.fromTo(
        group.querySelectorAll(".stack-item"),
        { opacity: 0, scale: 0.95, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      id="tech-stack"
      ref={containerRef}
      className="w-full bg-black py-32 px-6 md:px-12 border-t border-zinc-900/80 select-none"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="stack-header opacity-0 mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-mono font-medium block mb-4">
            Engineered Toolkit
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Core Proficiencies
          </h2>
        </div>

        {/* Categories Cascade Grid */}
        <div className="flex flex-col gap-16">
          {stackCategories.map((category, catIdx) => (
            <div key={catIdx} className="stack-group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

              {/* Category Label (Left) */}
              <div className="lg:col-span-4 py-2">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-amber-500" />
                  {category.title}
                </h3>
              </div>

              {/* Items Grid (Right) */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    onMouseMove={handleMouseMove}
                    className="stack-item opacity-0 relative overflow-hidden bg-zinc-950/40 border border-zinc-900/60 rounded-xl p-5 flex items-center gap-4 group hover:border-zinc-800 hover:bg-zinc-950/80 transition-all duration-300"
                  >
                    {/* طبقة الـ Spotlight اللامعة تحت الماوس */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                      style={{
                        background: `radial-gradient(100px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.06), transparent 80%)`
                      }}
                    />

                    {/* خط توهج مايكروسكوبي حاد على الحواف */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl border border-blue-500/10"
                      style={{
                        maskImage: `radial-gradient(70px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)`,
                        WebkitMaskImage: `radial-gradient(70px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)`
                      }}
                    />

                    {/* Dynamic Tech Icon */}
                    <div className="relative z-10 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg] filter drop-shadow-[0_0_8px_rgba(255,255,255,0.02)] flex items-center justify-center">
                      {item.icon}
                    </div>

                    {/* Tech Name */}
                    <span className="relative z-10 text-xs tracking-wider text-zinc-400 font-medium group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;