"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightTiltCard from "./SpotlightTiltCard";
import HistoriaYaVisual from "./HistoriaYaVisual";
import { PROJECTS } from "@/lib/projects";

// Ilustración de cada proyecto, por slug. Si un proyecto nuevo no tiene,
// se muestra solo el bloque de texto.
const VISUALS: Record<string, ComponentType<{ className?: string }>> = {
  historiaya: HistoriaYaVisual,
};

export default function Projects() {
  return (
    <section id="biblioteca" className="relative px-3 py-20 md:px-5 md:py-28">
      <div className="mx-auto max-w-6xl px-3 md:px-0">
        <SectionHeading
          watermark="Micro apps"
          title="Biblioteca de"
          accent="micro apps"
          description="Herramientas web pequeñas, enfocadas y listas para resolver tareas concretas. Abrí una ficha para conocerla o probala directamente."
        />

        <div className="mt-12 space-y-5">
          {PROJECTS.map((project) => {
            const Visual = VISUALS[project.slug];
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="frame relative overflow-hidden rounded-[2rem] border border-[var(--overlay-border)] md:rounded-[2.5rem]"
              >
                {/* Nombre del proyecto como marca de agua, igual que el título del hero */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -left-2 select-none whitespace-nowrap font-display text-[clamp(6rem,19vw,15rem)] font-semibold leading-none tracking-tight text-ink/[0.035]"
                >
                  {project.name}
                </span>

                <div className="relative grid items-center gap-10 p-6 sm:p-10 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:p-14">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.status === "online" && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--overlay-border)] bg-[var(--overlay-1)] px-3 py-1 text-xs text-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald shadow-glow-emerald" />
                          Online
                        </span>
                      )}
                      <span className="text-sm text-ink-muted">{project.category}</span>
                    </div>

                    <h3 className="mt-5 font-display text-5xl font-semibold leading-none tracking-tight text-ink md:text-7xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 font-display text-lg font-medium leading-snug text-neon-cyan md:text-xl">
                      {project.tagline}
                    </p>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                      {project.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-cyan/15">
                            <Check className="h-3 w-3 text-neon-cyan" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Conocer la micro app
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                      {project.appUrl && (
                        <a
                          href={project.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--overlay-border-strong)] px-6 py-3 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]"
                        >
                          Ingresar a la app
                        </a>
                      )}
                    </div>
                  </div>

                  {Visual && (
                    <SpotlightTiltCard
                      maxTilt={8}
                      spotlightColor="rgba(0,0,0,0)"
                      spotlightSize={1}
                      className="mx-auto max-w-[380px]"
                    >
                      <Visual className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
                    </SpotlightTiltCard>
                  )}
                </div>
              </motion.article>
            );
          })}

          {/* Invitación al próximo proyecto: no es un proyecto falso, es un llamado a contacto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5 rounded-[2rem] border border-dashed border-[var(--overlay-border-strong)] bg-[var(--overlay-1)] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neon-violet/10">
                <Lightbulb className="h-5 w-5 text-neon-violet" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  Tu idea puede ser la próxima
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Si tenés una micro app o un sitio en la cabeza, lo diseñamos y lo construimos juntos.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="whitespace-nowrap rounded-lg border border-[var(--overlay-border-strong)] px-6 py-3 text-center text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]"
            >
              Contanos tu idea
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
