import Hero from "@/components/Hero";
import PlanetBackdrop from "@/components/PlanetBackdrop";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FutureTeaser from "@/components/FutureTeaser";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="relative isolate">
      <PlanetBackdrop />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <FutureTeaser />
        <CTAFooter />
      </div>
    </main>
  );
}
