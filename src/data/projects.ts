export type ProjectStatus = "live" | "in-development" | "completed" | "archived";
export interface ProjectInterface {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  status: ProjectStatus;
  liveLink: string;
  whyBuilt: string;
  gallery: string[];
  year?: number;
  order: number;
  isVisible: boolean;
}

export const projects: ProjectInterface[] = [
  // shams-pharmacy
  {
    slug: "shams-pharmacy",
    title: "Shams Pharmacy Platform",
    category: "Enterprise Healthcare & E-Commerce",
    description:
      "A comprehensive localized pharmacy platform featuring dynamic multi-location selectors, Google Maps routing, and optimized PWA synchronization.",
    tags: ["Nuxt.js", "Vue.js", "Vuex", "Ant Design Vue", "Google Maps API", "Nuxt i18n", "vuetify"],
    image: "/shams.webp",
    status: "live",
    liveLink: "https://shamspharmacy.com/",
    whyBuilt:
      "Designed to modernize pharmacy operations by introducing automated multi-regional branch navigation and smooth user cart preservation on unstable networks.",
    gallery: [
      "/g2sk3su8ygo1nfk8blko.webp",
      "/gkbqptgsvrumuortev5o.webp",
      "/epsmbjeglqhfpbuplwhi.webp",
      "/ttsd9zwirnyija97twad.webp",
      "/mx89hurzqgqqmn3dcmuu.webp",
    ],
    order: 1,
    isVisible: true,
  },
  // al-noor-medical
  {
    slug: "al-noor-medical",
    title: "Al-Noor Clinic Management",
    category: "Enterprise Health SaaS",
    description:
      "A comprehensive medical clinic management ecosystem featuring dynamic scheduling, role-based authentication, and secure health logging.",
    tags: ["React.js", "React Query", "TanStack Query", "Zod", "React Hook Form", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/alnoor-main.webp",
    status: "in-development",
    liveLink: "#",
    whyBuilt:
      "Engineered to replace manual medical logging with a high-throughput secure scheduling mechanism, reducing patient overlap and encrypting internal clinical operations.",
    gallery: ["/pv5daz7kky8ctqvw1pxx.webp", "/xyokmjohsp3acsqrq31e.webp", "/vdo8gtlnzsneve8dpg53.webp", "/alnoor.webp", "/jnt9d7iqnjgguamq85d2.webp"],
    order: 2,
    isVisible: true,
  },
  // tawsila-app
  {
    slug: "tawsila-app",
    title: "Tawsila Logistics",
    category: "Mobility & Logistics Platform",
    description:
      "A high-performance mobility application designed for streamlined ride tracking and optimized logistics coordination.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit", "RESTful API"],
    image: "/tawsila.webp",
    status: "in-development",
    liveLink: "#",
    whyBuilt:
      "Developed to orchestrate dynamic fleet coordination and deliver low-latency location-tracking services for delivery operations.",
    gallery: ["/datcdryumvxdxow0egqk.webp", "/x2bwcewcqghakldnvgdy.webp", "/npho5eyumicmiqocljqk.webp"],
    order: 3,
    isVisible: true,
  },
  // community-portal
  {
    slug: "community-portal",
    title: "Community Management & Contest Hub",
    category: "Social Impact & Institutional Portal",
    description:
      "A comprehensive digital hub engineered to connect a community of 500+ users, featuring a custom CMS for real-time news updates, charity event management, and a secure platform for managing institutional contests.",
    tags: ["React.js", "React Query", "Framer Motion", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Express", "Server-Side Validation"],
    image: "/bbblujv12cdmj2j6wynq.webp",
    status: "completed",
    liveLink: "https://el-sayigh.webamz.com/",
    whyBuilt:
      "Developed to digitize community interaction, providing a transparent, automated solution for managing local news, charity events, and professional multi-user contests.",
    gallery: ["/eka5nujcqnizqzttdip6.webp", "/gebtihgwo4s3slif9s4w.webp", "/v2n7bzgipksrogjsbfzn.webp"],
    order: 4,
    isVisible: true,
  },
  // apex-store
  {
    slug: "apex-store",
    title: "Apex Enterprise Store",
    category: "Global E-Commerce Ecosystem",
    description:
      "An enterprise-grade, high-performance global e-commerce platform built around a secure scalable identity, modern state machine, and optimized cache handling.",
    tags: ["Next.js 16", "React 19", "Zustand", "TanStack Query", "Shadcn UI", "Zod"],
    image: "/cg4yvbckdgxlnxbaiwsx.webp",
    status: "live",
    liveLink: "https://hero-ecommerce.vercel.app",
    whyBuilt:
      "Built to fulfill the need for an ultra-fast, global marketplace capable of fluid client-side rendering while ensuring zero lag in state synchronizations and strict type-safe checkout forms.",
    gallery: ["/bp2mrbbwqxoaz8ra9fh4.webp", "/pfxey8iewic02b5czzar.webp", "/n5bz4wfhk2kb1kiblnqv.webp", "/apex.webp"],
    order: 5,
    isVisible: true,
  },
  // marsa-alam-local-guide
  {
    slug: "marsa-alam-local-guide",
    title: "Marsa Alam Local Guide",
    category: "Travel & Tourism Platform",
    description:
      "A high-performance, multi-language tourism & tour booking platform engineered with SSR, dynamic swipe galleries, and interactive scroll-driven UI features.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "i18n (Multi-language)", "Lucide React"],
    image: "/guide-1.webp",
    status: "live",
    liveLink: "https://marsaallam-guide.vercel.app",
    whyBuilt:
      "Engineered to provide travelers with an ultra-responsive, immersive booking experience featuring seamless multi-language navigation, touch-enabled media galleries, and dynamic theme transitions.",
    gallery: ["/guide-1.webp", "/guide-2.webp", "/guide-3.webp", "/guide-4.webp"],
    order: 6,
    isVisible: true,
  },
  // epoxy-flooring-landing
  {
    slug: "epoxy-flooring-landing",
    title: "Epoxy Flooring Landing",
    category: "E-Commerce & Service Platform",
    description:
      "A high-performance, multi-language tourism & tour booking platform engineered with SSR, dynamic swipe galleries, and interactive scroll-driven UI features.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "i18n (Multi-language)", "Lucide React"],
    image: "/epoxy-2.webp",
    status: "live",
    liveLink: "https://epoxy-experts.vercel.app",
    whyBuilt:
      "Engineered to provide travelers with an ultra-responsive, immersive booking experience featuring seamless multi-language navigation, touch-enabled media galleries, and dynamic theme transitions.",
    gallery: ["/epoxy-experts.webp", "/epoxy-2.webp", "/epoxy-3.webp", "/epoxy-4.webp"],
    order: 7,
    isVisible: true,
  },
  // mr-nashaat-platform
  {
    slug: "mr-nashaat-platform",
    title: "Mr. Nashaat Educational Platform",
    category: "EdTech & Learning Management System",
    description:
      "An interactive educational platform designed for seamless online learning, course management, structured lesson delivery, and student engagement.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "REST API",
    ],
    image: "/mr-nashaat-2.webp",
    status: "in-development",
    liveLink: "https://mr-nashaat-platfom.vercel.app/",
    whyBuilt:
      "Built to provide a high-performance, accessible, and intuitive e-learning experience that streamlines course distribution, student tracking, and interactive study modules.",
    gallery: [
      "/mr-nashaat-3.webp",
      "/mr-nashaat-4.webp",
      "/mr-nashaat-1.webp",
      "/mr-nashaat-5.webp",
    ],
    order: 8,
    isVisible: true,
  },
  // rawy-stories-platform
  {
    slug: "rawy-stories-platform",
    title: "Rawy (Bakr Stories) Consulting Platform",
    category: "Consulting & Content Management Platform",
    description:
      "An interactive digital platform focused on spiritual consulting and real-life inspirational stories, designed for high performance, smooth content navigation, and seamless user engagement.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "REST API",
      "mongoDB",
    ],
    image: "/bakr-5.webp",
    status: "in-development",
    liveLink: "https://bakr-ismail-rawy.vercel.app/",
    whyBuilt:
      "Developed for Mr. Bakr Ismail to deliver an exceptional user experience, solve performance bottlenecks, and showcase transformative consulting stories in a structured and accessible digital space.",
    gallery: [
      "/bakr-1.webp",
      "/bakr-2.webp",
      "/bakr-3.webp",
      "/bakr-4.webp",
    ],
    order: 9,
    isVisible: true,
  },
  // elanor-luxury-perfumes
  {
    slug: "elanor-luxury-perfumes",
    title: "Elanor Luxury Perfumes",
    category: "Luxury E-Commerce Platform",
    description:
      "A high-end luxury e-commerce experience crafted for premium fragrance showcase, featuring dynamic product filtering, seamless cart interactions, and modern responsive design.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn-ui",
      "Zod",
      "TanStack Query",
      "gsap-animation",
      "react-hook-form",
    ],
    image: "/elanor-5.webp",
    status: "in-development",
    liveLink: "https://elanor-luxury-perfumes.vercel.app/",
    whyBuilt:
      "Built to elevate the online presence of a boutique luxury perfume brand with pixel-perfect UI animations, lightning-fast client-side navigation, and an intuitive checkout flow.",
    gallery: [
      "/elanor-1.webp",
      "/elanor-2.webp",
      "/elanor-3.webp",
      "/elanor-4.webp",
    ],
    order: 10,
    isVisible: true,
  },
  // tahway-quran-competition
  {
    slug: "tahway-quran-competition",
    title: "Tahway Quran Competition Platform",
    category: "Community & Educational Registration Platform",
    description:
      "A localized high-performance registration and management platform for the annual Quran Memorization Competition in Tahway, featuring multi-tier contestant categorization, dynamic validation, and automated participant tracking.",
    tags: [
      "React 19",
      "Express.js",
      "MongoDB",
      "Tailwind CSS v4",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Framer Motion",
      "SheetJS (XLSX)",
    ],
    image: "/thway-1.webp",
    status: "in-development",
    liveLink: "#",
    whyBuilt:
      "Engineered to digitize registration for 8 distinct Quran memorization tiers, streamline contestant data management for organizers, enable seamless export of participant registries to Excel, and deliver a smooth Arabic UI.",
    gallery: [
      "/thway-1.webp",
      "/thway-2.webp",
      "/thway-3.webp",
      "/thway-4.webp",
    ],
    order: 11,
    isVisible: true,
  },
];

// ---------------------------------------------------------------------------
// Helper functions — read directly from the static array above.
// Add a new project object to the array and it automatically appears everywhere.
// ---------------------------------------------------------------------------

/** Returns a single visible project by its slug, or undefined. */
export function getProjectBySlug(slug: string): ProjectInterface | undefined {
  return projects.find((p) => p.slug === slug && p.isVisible);
}

/** Returns all visible projects sorted by their display order. */
export function getAllVisibleProjects(): ProjectInterface[] {
  return projects
    .filter((p) => p.isVisible)
    .sort((a, b) => a.order - b.order);
}

/**
 * Returns featured projects for the homepage.
 * By default returns the first `limit` visible projects ordered by `order`.
 */
export function getFeaturedProjects(limit = 3): ProjectInterface[] {
  return getAllVisibleProjects().slice(0, limit);
}