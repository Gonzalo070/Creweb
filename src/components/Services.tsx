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
    title: "Micro apps a medida",
    description:
      "Herramientas web pensadas para resolver una tarea puntual y que funcionan desde el celular o la computadora, como HistoriaYa.",
    accent: "cyan",
  },
  {
    icon: Globe,
    title: "Landing pages y sitios web",
    description:
      "Páginas claras y rápidas para presentar tu marca, tu servicio o tu proyecto, con diseño propio y no una plantilla genérica.",
    accent: "violet",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online",
    description:
      "Catálogo, carrito y medios de pago integrados, para que vender por internet sea simple para vos y para tus clientes.",
    accent: "emerald",
  },
];

const ACCENT_STYLES = {
  cyan: {
    ring: "group-hover:border-neon-cyan/40",
    glow: "group-hover:shadow-glow-cyan",
    icon: "bg-neon-cyan/10 text-neon-cyan",
    spotlight: "rgba(254, 20, 19, 0.16)",
  },
  violet: {
    ring: "group-hover:border-neon-violet/40",
    glow: "group-hover:shadow-glow-violet",
    icon: "bg-neon-violet/10 text-neon-violet",
    spotlight: "rgba(77, 99, 255, 0.2)",
  },
  emerald: {
    ring: "group-hover:border-neon-emerald/40",
    glow: "group-hover:shadow-glow-emerald",
    icon: "bg-neon-emerald/10 text-neon-emerald",
    spotlight: "rgba(159, 176, 255, 0.16)",
  },
} as const;

export default function Services() {
  return (
    <section id="servicios" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          watermark="Hacemos"
          title="Qué"
          accent="construimos"
          description="Elegís qué necesitás hoy. Nos encargamos de que funcione bien de entrada, no solo de que se vea bien."
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
                    className={`group relative h-full rounded-3xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-7 shadow-card-inset transition-all duration-300 ${styles.ring} ${styles.glow}`}
                  >
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${styles.icon}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-heading text-2xl uppercase leading-tight tracking-wide text-ink">
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
