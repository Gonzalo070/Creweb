"use client";

import { motion } from "framer-motion";
import { Blocks, HeartHandshake, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    icon: Blocks,
    title: "Ideas que se pueden usar",
    description: "Creamos herramientas digitales concretas, simples de entender y accesibles desde cualquier dispositivo.",
  },
  {
    icon: HeartHandshake,
    title: "Trabajo en equipo",
    description: "Escuchamos a las personas que van a usar cada producto y construimos con objetivos claros.",
  },
  {
    icon: Lightbulb,
    title: "Diseño con propósito",
    description: "Cada pantalla y cada función existe para hacer más fácil una tarea o acercar una idea a su gente.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          watermark="Creweb"
          title="Somos"
          accent="Creweb"
          description="Un equipo que transforma ideas en productos digitales útiles. Construimos micro apps propias y también acompañamos a marcas y proyectos a crear su espacio en internet."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
