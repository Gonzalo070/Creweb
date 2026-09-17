"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

const PROJECTS = [
  { name: "Aura Cosmetics", type: "Tienda online", accent: "from-neon-violet/25" },
  { name: "Fintra", type: "Landing page", accent: "from-neon-cyan/25" },
  { name: "Estudio Marlén", type: "Sitio corporativo", accent: "from-neon-emerald/25" },
  { name: "Runway Coffee", type: "Tienda online", accent: "from-neon-cyan/25" },
];

// La animación de entrada/salida depende de la dirección (1 = avanzar, -1 = retroceder),
// por eso las variants toman "direction" como parámetro custom.
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Portfolio() {
  // Guardamos índice y dirección juntos para que la animación sepa hacia
  // dónde deslizar cada vez que cambia el proyecto activo.
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const project = PROJECTS[index];

  const paginate = (step: number) => {
    setIndex(([current]) => {
      const next = (current + step + PROJECTS.length) % PROJECTS.length;
      return [next, step];
    });
  };

  const goTo = (target: number) => {
    setIndex(([current]) => [target, target > current ? 1 : -1]);
  };

  return (
    <section id="portafolio" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-balance max-w-md text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Proyectos que ya están vendiendo
          </h2>
          <a
            href="#contacto"
            className="text-sm text-neon-cyan underline decoration-neon-cyan/30 underline-offset-4 hover:decoration-neon-cyan"
          >
            Quiero uno así
          </a>
        </div>

        <div className="relative mt-14">
          <SpotlightTiltCard maxTilt={6} spotlightColor="rgba(0, 240, 255, 0.12)" spotlightSize={420}>
            <div className="relative h-72 overflow-hidden rounded-3xl border border-[var(--overlay-border)] sm:h-80">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={project.name}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.accent} to-base-surface`}
                >
                  <span className="font-display text-2xl font-semibold text-ink/20 sm:text-3xl">
                    {project.name}
                  </span>

                  <div className="glass-strong absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{project.name}</p>
                      <p className="text-xs text-ink-faint">{project.type}</p>
                    </div>
                    <span className="text-xs text-ink-faint">
                      {index + 1} / {PROJECTS.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SpotlightTiltCard>

          {/* Flechas: pegadas a los bordes de la tarjeta, ocultas en mobile por espacio */}
          <button
            type="button"
            aria-label="Proyecto anterior"
            onClick={() => paginate(-1)}
            className="glass absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-ink transition-colors hover:text-neon-cyan sm:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Siguiente proyecto"
            onClick={() => paginate(1)}
            className="glass absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full text-ink transition-colors hover:text-neon-cyan sm:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* En mobile las flechas bajan junto a los puntos, para no salirse de la pantalla */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Proyecto anterior"
              onClick={() => paginate(-1)}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-neon-cyan sm:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-label={`Ir al proyecto ${p.name}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-neon-cyan" : "w-1.5 bg-[var(--overlay-3)]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Siguiente proyecto"
              onClick={() => paginate(1)}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-neon-cyan sm:hidden"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}