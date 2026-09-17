"use client";

import { motion } from "framer-motion";
import { Rocket, ShoppingBag, Building2, type LucideIcon } from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "cyan" | "violet" | "emerald";
};

const SERVICES: Service[] = [
  {
    icon: Rocket,
    title: "Landing pages de alta conversión",
    description:
      "Páginas de una sola pantalla enfocadas en un objetivo: que el visitante deje sus datos o compre, sin distracciones.",
    accent: "cyan",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online",
    description:
      "E-commerce con checkout fluido, pagos integrados y catálogos que cargan rápido incluso con cientos de productos.",
    accent: "violet",
  },
  {
    icon: Building2,
    title: "Sitios corporativos y portafolios",
    description:
      "Presencia web a medida para marcas que necesitan transmitir seriedad y criterio propio, no una plantilla genérica.",
    accent: "emerald",
  },
];

const ACCENT_STYLES = {
  cyan: {
    ring: "group-hover:border-neon-cyan/40",
    glow: "group-hover:shadow-glow-cyan",
    icon: "bg-neon-cyan/10 text-neon-cyan",
    spotlight: "rgba(0, 240, 255, 0.16)",
  },
  violet: {
    ring: "group-hover:border-neon-violet/40",
    glow: "group-hover:shadow-glow-violet",
    icon: "bg-neon-violet/10 text-neon-violet",
    spotlight: "rgba(138, 43, 226, 0.18)",
  },
  emerald: {
    ring: "group-hover:border-neon-emerald/40",
    glow: "group-hover:shadow-glow-emerald",
    icon: "bg-neon-emerald/10 text-neon-emerald",
    spotlight: "rgba(0, 255, 135, 0.16)",
  },
} as const;

export default function Services() {
  return (
    <section id="servicios" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Un sitio para cada etapa de tu negocio
          </h2>
          <p className="mt-4 text-ink-muted">
            Elegís qué necesitás hoy; nosotros nos encargamos de que funcione
            bien de entrada, no solo que se vea bien.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const styles = ACCENT_STYLES[service.accent];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <SpotlightTiltCard
                  maxTilt={8}
                  spotlightColor={styles.spotlight}
                  className="h-full"
                >
                  <div
                    className={`group relative h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 shadow-card-inset transition-all duration-300 ${styles.ring} ${styles.glow}`}
                  >
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${styles.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                </SpotlightTiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}