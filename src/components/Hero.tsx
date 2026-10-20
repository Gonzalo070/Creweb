"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "./SiteHeader";
import HistoriaYaVisual from "./HistoriaYaVisual";
import SpotlightTiltCard from "./SpotlightTiltCard";
import { FEATURED } from "@/lib/projects";

const spring = { stiffness: 55, damping: 18, mass: 0.7 };

// El texto gigante se desvanece hacia abajo, como en la referencia.
const TITLE_MASK = "linear-gradient(to bottom, black 35%, transparent 96%)";

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);

  // Mouse (-0.5 a 0.5) + scroll: cada capa se mueve a distinta velocidad,
  // y esa diferencia es lo que da la sensación de profundidad.
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sx = useSpring(mvX, spring);
  const sy = useSpring(mvY, spring);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start start", "end start"],
  });

  // Capa más lejana: el texto gigante
  const titleX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  // Capa intermedia: palabras manuscritas
  const wordsX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const wordsY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  // Capa más cercana: la imagen del proyecto
  const visualX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const visualMouseY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const visualScrollY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const visualY = useTransform(
    [visualMouseY, visualScrollY],
    ([a, b]: number[]) => a + b
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <section id="top" className="px-3 pt-3 md:px-5 md:pt-5">
      <div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hero-frame relative isolate overflow-hidden rounded-[2rem] border border-[var(--overlay-border)] md:rounded-[2.75rem]"
      >
        <div className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-6 md:min-h-[860px] md:px-12 md:pb-10">
          <h1 className="sr-only">Creweb: micro apps y sitios web a medida</h1>

          <SiteHeader />

          {/* Capa 0: texto gigante de fondo */}
          <motion.div
            aria-hidden="true"
            style={{ x: titleX, y: titleY }}
            className="pointer-events-none absolute inset-x-0 top-28 z-0 flex select-none justify-center md:top-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              style={{ WebkitMaskImage: TITLE_MASK, maskImage: TITLE_MASK }}
              className="block font-heading text-[clamp(6.5rem,29vw,25rem)] uppercase leading-[0.85] tracking-tight text-ink/[0.09]"
            >
              Creweb
            </motion.div>
          </motion.div>

          {/* Capa 2: la imagen del proyecto, con flotación, parallax y tilt 3D */}
          <div className="relative z-20 mx-auto mt-8 w-[78%] max-w-[340px] md:absolute md:left-1/2 md:top-[92px] md:mt-0 md:w-[400px] md:max-w-none md:-translate-x-1/2">
            <motion.div style={{ x: visualX, y: visualY }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                >
                  <SpotlightTiltCard maxTilt={9} spotlightColor="rgba(0,0,0,0)" spotlightSize={1}>
                    <HistoriaYaVisual className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
                  </SpotlightTiltCard>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Capa 1: palabras manuscritas (desktop: a los lados de la imagen) */}
          <motion.div
            aria-hidden="true"
            style={{ x: wordsX, y: wordsY }}
            className="absolute left-12 top-[300px] z-10 hidden md:block"
          >
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            >
              <p className="font-script text-7xl leading-none text-neon-cyan [text-shadow:0_0_40px_rgba(254,20,19,0.45)] lg:text-8xl">
                Micro
              </p>
              <p className="mt-3 max-w-[16rem] font-script text-3xl leading-tight text-ink lg:text-4xl">
                Diseñadas y programadas para vos.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            style={{ x: wordsX, y: wordsY }}
            className="absolute right-12 top-[270px] z-10 hidden md:block"
          >
            <motion.p
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
              className="font-script text-7xl leading-none text-neon-cyan [text-shadow:0_0_40px_rgba(254,20,19,0.45)] lg:text-8xl"
            >
              apps
            </motion.p>
          </motion.div>

          {/* Palabras manuscritas (mobile: debajo de la imagen) */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="relative z-10 mt-4 text-center md:hidden"
          >
            <p className="font-script text-6xl leading-none text-neon-cyan [text-shadow:0_0_36px_rgba(254,20,19,0.45)]">
              Micro apps
            </p>
            <p className="mt-2 font-script text-2xl text-ink">Diseñadas y programadas para vos.</p>
          </motion.div>

          <div className="flex-1 md:hidden" />

          {/* Bloque inferior izquierdo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
            className="relative z-30 mt-10 max-w-xs md:absolute md:bottom-10 md:left-12 md:mt-0"
          >
            <p className="font-heading text-2xl uppercase tracking-wide text-ink">Proyectos reales</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Micro apps y sitios que diseñamos y programamos de punta a punta. Lo que ves acá está
              online y se puede probar.
            </p>
          </motion.div>

          {/* Tarjeta inferior derecha: proyecto destacado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
            className="relative z-30 mt-6 w-full max-w-xs md:absolute md:bottom-10 md:right-12 md:mt-0 md:w-[240px]"
          >
            <SpotlightTiltCard maxTilt={8} spotlightColor="rgba(77,99,255,0.22)" className="rounded-3xl">
              <a href="#proyectos" className="glass-strong flex flex-col gap-3 rounded-3xl p-5">
                <p className="font-heading text-xl uppercase leading-tight tracking-wide text-ink">
                  Proyecto destacado
                </p>
                <p className="text-xs leading-relaxed text-ink-muted">
                  <span className="font-medium text-ink">{FEATURED.name}</span>: {FEATURED.tagline}
                </p>
                <span className="mt-1 flex items-center justify-between text-xs text-ink">
                  Ver proyecto
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--overlay-border-strong)]">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </span>
              </a>
            </SpotlightTiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
