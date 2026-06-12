"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projectsData } from "@/components/Projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const project = projectsData.find((p) => p.id === id);

  useGSAP(() => {
    if (!project) return;
    
    gsap.fromTo(
      ".reveal-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [id] });

  if (!project) {
    return (
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center gap-4 text-white">
        <p className="font-mono text-xs text-zinc-500">PROJECT ARCHITECTURE NOT FOUND</p>
        <button onClick={() => router.push("/")} className="text-sm uppercase font-bold tracking-widest text-amber-500 border border-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-900">
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12 antialiased select-none">
      <div className="max-w-5xl mx-auto">
        
        <button 
          onClick={() => router.push("/#projects")}
          className="reveal-item flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white mb-16 transition-colors group"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="transition-transform group-hover:-translate-x-1 cursor-pointer">BACK TO SYSTEM PORTFOLIO</span>
        </button>

        <div className="reveal-item mb-12">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">{project.category}</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mt-2">{project.title}</h1>
        </div>

        <div className="reveal-item w-full rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900 aspect-video mb-16 shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain object-top"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-900 pt-12 mb-20">
          
          <div className="reveal-item lg:col-span-4 flex flex-col gap-8">
            <div>
              <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">ARCHITECTURE TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-1.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.liveLink !== "#" && (
              <div>
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">PRODUCTION DEPLOYMENT</h4>
                <Link 
                  href={project.liveLink} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase bg-zinc-900 border border-zinc-800 text-amber-500 hover:bg-amber-400 hover:text-black hover:border-amber-400 font-bold px-4 py-2.5 rounded-lg transition-all"
                >
                  <span>Launch Live App</span>
                  <FiExternalLink />
                </Link>
              </div>
            )}
          </div>

          <div className="reveal-item lg:col-span-8 flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-zinc-200 mb-4 font-mono">Executive Context & Purpose</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-base tracking-wide">
                {project.whyBuilt}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-zinc-200 mb-4 font-mono">Engineering Implementation Details</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-base tracking-wide">
                {project.description} This production layer requires rigorous state isolation, fine-tuned bundle constraints, and smooth interface routing to sustain modern corporate performance benchmarks.
              </p>
            </div>
          </div>

        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="reveal-item border-t border-zinc-900 pt-12">
            <h3 className="text-lg font-bold uppercase tracking-wide text-zinc-200 mb-8 font-mono">Interface & Dashboard Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-zinc-900 bg-zinc-900 aspect-video shadow-lg group">
                  <img 
                    src={imgUrl} 
                    alt={`${project.title} view ${idx + 1}`} 
                    className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}