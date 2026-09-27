'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

interface StatsProps {
  totalProjectsCount?: number;
  totalProjects?: number;
}

export default function Stats({ totalProjectsCount, totalProjects }: StatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = totalProjectsCount ?? totalProjects ?? 0;

  console.log("Stats component rendered with count:", count);

  const stats: StatItem[] = [
    {
      value: count,
      suffix: '+',
      label: 'Completed Projects',
      description: 'Delivered with precision & scalability',
    },
    {
      value: 2,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Building modern web applications',
    },
    {
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Focus on performance & UX detail',
    },
    {
      value: 100,
      suffix: 'K+',
      label: 'Lines of Code',
      description: 'Clean, maintainable & production-ready',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = containerRef.current?.querySelectorAll('.stat-number');

      counters?.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute('data-target') || '0', 10);

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              refreshPriority: 1,
            },
            onUpdate: function () {
              const current = Math.ceil(Number(this.targets()[0].innerText) || 0);
              counter.textContent = current.toLocaleString();
            },
          }
        );
      });

      // Animate card entrance with explicit opacity fallback
      gsap.fromTo(
        '.stat-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            refreshPriority: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [count]);

  return (
    <section ref={containerRef} className="relative z-20 py-20 px-6 max-w-7xl mx-auto">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="stat-card relative group p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-500 backdrop-blur-md shadow-xl hover:shadow-amber-500/5 visible"
          >
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-baseline space-x-1">
              <span
                className="stat-number text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-white via-zinc-200 to-amber-400 bg-clip-text text-transparent"
                data-target={stat.value}
              >
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-3xl font-bold text-amber-500">{stat.suffix}</span>
              )}
            </div>

            <h3 className="mt-3 text-lg font-semibold text-zinc-100 tracking-wide">
              {stat.label}
            </h3>

            {stat.description && (
              <p className="mt-1 text-sm text-zinc-400 font-light leading-relaxed">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
