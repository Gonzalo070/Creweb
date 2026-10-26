"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightTiltCard from "./SpotlightTiltCard";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "cyan" | "violet" | "emerald";
};

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Una web hecha para tu marca",
    description:
      "Diseñamos y desarrollamos páginas claras, rápidas y adaptadas a tu identidad, tus objetivos y las necesidades de tus clientes.",
    accent: "cyan",
  },
  {
    icon: Globe,
    title: "Diseño y contenido con intención",
    description:
      "Ordenamos la información para que cada sección comunique lo importante y ayude a las personas a dar el siguiente paso.",
    accent: "violet",
  },
  {
    icon: ShoppingBag,
    title: "Preparada para crecer",
    description:
      "Construimos una base flexible que puede sumar nuevas páginas, integraciones y funciones a medida que crece tu proyecto.",
    accent: "emerald",
  },
];

const ACCENT_STYLES = {
  cyan: {
    ring: "group-hover:border-neon-cyan/40",
    glow: "group-hover:shadow-glow-cyan",
    icon: "bg-neon-cyan/10 text-neon-cyan",
    spotlight: "rgba(105, 230, 199, 0.14)",
  },
  violet: {
    ring: "group-hover:border-neon-violet/40",
    glow: "group-hover:shadow-glow-violet",
    icon: "bg-neon-violet/10 text-neon-violet",
    spotlight: "rgba(139, 202, 181, 0.16)",
  },
  emerald: {
    ring: "group-hover:border-neon-emerald/40",
    glow: "group-hover:shadow-glow-emerald",
    icon: "bg-neon-emerald/10 text-neon-emerald",
    spotlight: "rgba(56, 184, 145, 0.14)",
  },
} as const;

export default function Services() {
  return (
    <section id="servicios" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          watermark="A medida"
          title="Páginas web"
          accent="a medida"
          description="Cada proyecto tiene su historia. Diseñamos una experiencia propia que explica lo que hacés, transmite confianza y convierte visitas en consultas."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const styles = ACCENT_STYLES[service.accent];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              >
                <SpotlightTiltCard maxTilt={8} spotlightColor={styles.spotlight} className="h-full">
                  <div
                    className={`depth-card group relative h-full rounded-3xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-7 shadow-card-inset transition-all duration-300 ${styles.ring} ${styles.glow}`}
                  >
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${styles.icon}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-tight tracking-tight text-ink md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.description}</p>
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
