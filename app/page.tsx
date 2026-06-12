// import Capabilities from "@/components/Capabilities";
import Hero from "@/components/Hero";
import TechckStack from "@/components/TeckStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <WhatsAppButton />
      <Hero />
      <About />
      <TechckStack />
      <Projects />
      {/* <Capabilities /> */}
      <Contact />
    </main>
  );
}
