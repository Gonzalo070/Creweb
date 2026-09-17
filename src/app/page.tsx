import Navbar from "@/components/Navbar";
import BrandBadge from "@/components/BrandBadge";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FutureTeaser from "@/components/FutureTeaser";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="relative">
      <BrandBadge />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <FutureTeaser />
      <CTAFooter />
    </main>
  );
}