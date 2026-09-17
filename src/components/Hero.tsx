"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import FloatingCards from "./FloatingCards";
import SpotlightTiltCard from "./SpotlightTiltCard";
import HeroVisual from "./HeroVisual";

// Revelado en capas: cada elemento entra con blur + escala + slide-up,
// simulando profundidad (como si las capas de un mockup se fueran
// enfocando una por una), no solo un fade-in plano.
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.97, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Posición del mouse relativa al centro de la sección, de -0.5 a 0.5.
  // Con esto movemos la ilustración de fondo y las FloatingCards a
  // distinta velocidad: parallax en capas = sensación de profundidad 3D.
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.6 };
  const springX = useSpring(mvX, springConfig);
  const springY = useSpring(mvY, springConfig);

  const visualX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const visualY = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const cardsX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const cardsY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
    >
      <div aria-hidden="true" className="bg-hero pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        style={{ x: visualX, y: visualY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <HeroVisual />
      </motion.div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/[0.06] px-3.5 py-1.5 text-xs text-neon-cyan"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Diseño &amp; desarrollo web de alta conversión
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl"
          >
            Transformamos tu marca en una experiencia digital inolvidable
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Construimos sitios web, tiendas online y landing pages pensadas
            para convertir visitantes en clientes, con animaciones cuidadas y
            tiempos de carga que no espantan a nadie.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <SpotlightTiltCard
              maxTilt={0}
              spotlightColor="rgba(11, 15, 23, 0.22)"
              spotlightSize={180}
              className="inline-block rounded-full"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neon-cyan px-6 py-3.5 text-sm font-medium text-base-bg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Iniciar mi proyecto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </SpotlightTiltCard>

            <SpotlightTiltCard
              maxTilt={0}
              spotlightColor="rgba(0, 240, 255, 0.14)"
              spotlightSize={180}
              className="inline-block rounded-full"
            >
              <a
                href="#portafolio"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--overlay-border)] px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-[var(--overlay-border-strong)]"
              >
                Ver portafolio
              </a>
            </SpotlightTiltCard>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-6 text-xs text-ink-faint"
          >
            <span>+40 proyectos entregados</span>
            <span className="h-1 w-1 rounded-full bg-ink-faint/60" />
            <span>Entrega promedio: 3 semanas</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ x: cardsX, y: cardsY }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}