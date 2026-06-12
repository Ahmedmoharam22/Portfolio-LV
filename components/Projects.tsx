"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// داتا المشاريع مجهزة بالمسارات الداخلية
export const projectsData = [
  {
    id: "shams-pharmacy",
    title: "Shams Pharmacy Platform",
    category: "Enterprise Healthcare & E-Commerce",
    description:
      "A comprehensive localized pharmacy platform featuring dynamic multi-location selectors, Google Maps routing, and optimized PWA synchronization.",
    tags: [
      "Nuxt.js",
      "Vue.js",
      "Vuex",
      "Ant Design Vue",
      "Google Maps API",
      "Nuxt i18n",
      "vuetify",
    ],
    image: "/shams.webp",
    liveLink: "https://shamspharmacy.com/",
    whyBuilt:
      "Designed to modernize pharmacy operations by introducing automated multi-regional branch navigation and smooth user cart preservation on unstable networks.",
    gallery: [
      "../g2sk3su8ygo1nfk8blko.webp",
      "../gkbqptgsvrumuortev5o.webp",
      "../epsmbjeglqhfpbuplwhi.webp",
      "../ttsd9zwirnyija97twad.webp",
      "../mx89hurzqgqqmn3dcmuu.webp",
    ],
  },

  {
    id: "al-noor-medical",
    title: "Al-Noor Clinic Management",
    category: "Enterprise Health SaaS",
    description:
      "A comprehensive medical clinic management ecosystem featuring dynamic scheduling, role-based authentication, and secure health logging.",
    tags: [
      "React.js",
      "React Query",
      "TanStack Query",
      "Zod",
      "React Hook Form",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/alnoor-main.webp",
    liveLink: "#",
    whyBuilt:
      "Engineered to replace manual medical logging with a high-throughput secure scheduling mechanism, reducing patient overlap and encrypting internal clinical operations.",
    gallery: [
      "../pv5daz7kky8ctqvw1pxx.webp",
      "../xyokmjohsp3acsqrq31e.webp",
      "../vdo8gtlnzsneve8dpg53.webp",
      "/alnoor.webp",
      "../jnt9d7iqnjgguamq85d2.webp"
    ],
  },

  {
    id: "tawsila-app",
    title: "Tawsila Logistics",
    category: "Mobility & Logistics Platform",
    description:
      "A high-performance mobility application designed for streamlined ride tracking and optimized logistics coordination.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "RESTful API",
    ],
    image: "/tawsila.webp",
    liveLink: "#",
    whyBuilt:
      "Developed to orchestrate dynamic fleet coordination and deliver low-latency location-tracking services for delivery operations.",
    gallery: [
      "../datcdryumvxdxow0egqk.webp",
      "../x2bwcewcqghakldnvgdy.webp",
      "../npho5eyumicmiqocljqk.webp",
      "../eeeeeeeeeeeeeeeee.webp",
    ],
  },
  {
  id: "community-portal",
  title: "Community Management & Contest Hub",
  category: "Social Impact & Institutional Portal",
  description: "A comprehensive digital hub engineered to connect a community of 500+ users, featuring a custom CMS for real-time news updates, charity event management, and a secure platform for managing institutional contests like Quran recitation and sports tournaments.",
  tags: [
    "React.js", 
    "React Query",
    "Framer Motion",
    "Node.js", 
    "MongoDB", 
    "JWT Auth", 
    "Tailwind CSS", 
    "Express", 
    "Server-Side Validation"
  ],
  image: "/bbblujv12cdmj2j6wynq.webp",
  liveLink: "https://el-sayigh.webamz.com/", 
  whyBuilt: "Developed to digitize community interaction, providing a transparent, automated solution for managing local news, charity events, and professional multi-user contests.",
  gallery: [
    "../eka5nujcqnizqzttdip6.webp",
    "../gebtihgwo4s3slif9s4w.webp",
    "../v2n7bzgipksrogjsbfzn.webp",
  ]
},
  {
    id: "apex-store",
    title: "Apex Enterprise Store",
    category: "Global E-Commerce Ecosystem",
    description:
      "An enterprise-grade, high-performance global e-commerce platform built around a secure scalable identity, modern state machine, and optimized cache handling.",
    tags: [
      "Next.js 16",
      "React 19",
      "Zustand",
      "TanStack Query",
      "Shadcn UI",
      "Zod",
    ],
    image: "/cg4yvbckdgxlnxbaiwsx.webp",
    liveLink: "https://hero-ecommerce.vercel.app",
    whyBuilt:
      "Built to fulfill the need for an ultra-fast, global marketplace capable of fluid client-side rendering while ensuring zero lag in state synchronizations and strict type-safe checkout forms.",
    gallery: [
      "../bp2mrbbwqxoaz8ra9fh4.webp",
      "../pfxey8iewic02b5czzar.webp",
      "../n5bz4wfhk2kb1kiblnqv.webp",
      "/apex.webp",
      ],
  },
];

const Projects = () => {
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
        },
      );

      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: containerRef },
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
            Featured Architecture & Works
          </h2>
        </div>

        {/* List Grid */}
        <div className="flex flex-col gap-32">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
            >
              {/* Left: Enhanced Container for Full Screenshots */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl w-full aspect-video relative border border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority={project.id === "apex-store"}
                  className="object-contain object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02] filter grayscale contrast-[1.05] group-hover:grayscale-0"
                />
              </div>

              {/* Right Details */}
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* التوجيه لصفحة التفاصيل الديناميكية */}
                <Link
                  href={`/projects/${project.id}`}
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
      </div>
    </section>
  );
};

export default Projects;
