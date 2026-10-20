import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FutureTeaser from "@/components/FutureTeaser";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Services />
      <Process />
      <FutureTeaser />
      <CTAFooter />
    </main>
  );
}
