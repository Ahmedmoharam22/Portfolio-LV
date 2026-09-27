"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import type { ProjectInterface } from "@/src/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  projects: ProjectInterface[];
}

export default function ProjectsClient({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: unknown) => {
        gsap.fromTo(
          card as Element,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef, dependencies: [projects] }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full bg-zinc-950 py-32 px-6 md:px-12 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="projects-header opacity-0 mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-mono block mb-4">
            Selected Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Featured Architecture &amp; Works
          </h2>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              No projects published yet
            </p>
          </div>
        ) : (
          /* List Grid */
          <div className="flex flex-col gap-32">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="project-card opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
              >
                {/* Left: Image */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl w-full aspect-video relative border border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02] filter grayscale contrast-[1.05] group-hover:grayscale-0"
                  />
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-3 block">
                    {project.category}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight group-hover:text-amber-400 transition-colors duration-300 uppercase">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={`${project.slug}-tag-${tagIdx}-${tag}`}
                        className="text-[10px] font-mono tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}

                    className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white hover:text-amber-400 font-bold transition-colors duration-300 self-start group/link"
                  >
                    <span>View Project Specs</span>
                    <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover/link:border-amber-400 group-hover/link:bg-amber-400 group-hover/link:text-black transition-all duration-300">
                      <FiArrowUpRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
