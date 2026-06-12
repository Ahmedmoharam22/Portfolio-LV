"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCode, FiLayers, FiZap, FiArrowUpRight } from "react-icons/fi";

// تسجيل الـ Plugin الخاص بالـ ScrollTrigger لـ Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن ظهور كروت الخدمات تتابعياً (Stagger) بمجرد دخول السكشن في الشاشة
      gsap.from(".animate-service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // يبدأ الأنيميشن أول ما السكشن يظهر بنسبة 25% في الشاشة
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });

      // أنيميشن نبض خفيف للتوهج الخلفي
      gsap.to(".service-glow", {
        opacity: 0.06,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const servicesData = [
    {
      icon: <FiCode className="text-xl text-blue-400" />,
      title: "Next.js 15 Architecture",
      desc: "Architecting high-performance web applications with advanced Server Components (RSC), optimized data fetching, and ironclad type-safety using TypeScript."
    },
    {
      icon: <FiLayers className="text-xl text-purple-400" />,
      title: "Scalable Micro-Frontends",
      desc: "Structuring complex enterprise-grade single page apps using Feature-Based Modular Design and Atomic principles. Ensuring seamless code maintainability."
    },
    {
      icon: <FiZap className="text-xl text-amber-400" />,
      title: "Fluid UI & Interaction",
      desc: "Breathing life into layouts with premium GSAP scroll animations, responsive Tailwind layouts, and reactive interaction models while maintaining performance."
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black text-white py-24 px-6 sm:px-12 md:px-20 flex flex-col justify-center overflow-hidden select-none border-t border-zinc-900/50"
    >
      {/* شبكة الخطوط البرمجية الخلفية لتوحيد الهوية */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      {/* التوهج الخلفي المحدث (Zero Warnings) */}
      <div className="service-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] sm:size-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none opacity-30" />

      {/* الـ Header الخاص بالسكشن */}
      <div className="animate-service-card relative z-10 max-w-3xl mb-16 flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>CORE CAPABILITIES</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-none">
          TURNING COMPLEX CODE <br />
          <span className="text-zinc-600">INTO FLUID</span> EXPERIENCES
        </h2>
      </div>

      {/* شبكة الخدمات النظيفة (Services Grid) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="animate-service-card group bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[280px] sm:h-[320px] transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-950/90"
          >
            <div>
              {/* صندوق الأيقونة النظيف */}
              <div className="size-11 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                {service.icon}
              </div>
              
              {/* عنوان الخدمة */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              {/* وصف الخدمة السنيور */}
              <p className="text-zinc-500 font-sans text-xs sm:text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {service.desc}
              </p>
            </div>

            {/* سهم مؤشر شيك أسفل الكارت */}
            <div className="flex justify-end text-zinc-700 group-hover:text-white transition-colors">
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;