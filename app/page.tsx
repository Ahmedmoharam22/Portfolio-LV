// import Capabilities from "@/components/Capabilities";
import Hero from "@/components/Hero";
import TechckStack from "@/components/TeckStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Stats from "@/components/Stats";
import { projects } from "@/src/data/projects";

export default function Home() {
  const totalProjects = projects.filter((project) => project.isVisible).length;

  return (
    <main className="relative min-h-screen w-full bg-luxury-black overflow-x-hidden">
      <WhatsAppButton />
      <Hero />
      <div className="relative z-20 my-8">
        <Stats totalProjectsCount={totalProjects} />
      </div>
      <About />
      <TechckStack />
      <Projects />
      {/* <Capabilities /> */}
      <Contact />
    </main>
  );
}


