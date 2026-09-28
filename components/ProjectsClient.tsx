"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiExternalLink, FiInfo } from "react-icons/fi";
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
      className="w-full bg-zinc-950 py-28 px-6 md:px-12 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="projects-header opacity-0 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-mono block mb-3 font-semibold">
              Selected Works
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Featured Projects
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
            Real-world digital applications and enterprise solutions built with performance, high scalability, and clean code architecture.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-zinc-800 rounded-2xl">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              No projects published yet
            </p>
          </div>
        ) : (
          /* List Grid */
          <div className="flex flex-col gap-24">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="project-card opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-8 hover:border-amber-500/40 transition-all duration-500 shadow-2xl group"
              >
                {/* Left: Image Container */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl w-full aspect-video relative border border-zinc-800/80 bg-zinc-950/80 shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />  
                  {/* Subtle Top-Right Live Indicator Tag */}
                  {project.liveLink && (
                    <div className="absolute top-4 right-4 z-10 bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-amber-400 px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-2 shadow-lg">
                      <span className={`w-2 h-2 rounded-full ${project.status === "live"
                        ? "bg-emerald-500"
                        : project.status === "in-development"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                        }`} />
                      {project.status}
                    </div>
                  )}
                </div>

                {/* Right: Details & Call To Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-2 block font-medium">
                      {project.category}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={`${project.slug}-tag-${tagIdx}-${tag}`}
                          className="text-[11px] font-mono tracking-wide text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 px-3 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clear Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 font-bold py-3.5 px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-400/20 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={15} />
                      </Link>
                    )}

                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 hover:text-white font-semibold py-3.5 px-5 rounded-xl transition-all duration-300 active:scale-95"
                    >
                      <span>Case Study</span>
                      <FiInfo size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}