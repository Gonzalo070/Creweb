"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  /** Palabra grande y tenue detrás del título. */
  watermark: string;
  /** Título principal de la sección. */
  title: string;
  /** Acento en el color principal del sitio. */
  accent: string;
  description?: string;
};

export default function SectionHeading({ watermark, title, accent, description }: SectionHeadingProps) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="section-watermark pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap font-display text-[clamp(5rem,17vw,14rem)] font-extrabold leading-none tracking-tight text-ink/[0.035]"
      >
        {watermark}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative pt-10 md:pt-16"
      >
        <h2 className="heading-depth font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}{" "}
          <span className="font-display text-neon-cyan [text-shadow:0_0_32px_rgba(244,235,208,0.2)]">
            {accent}
          </span>
        </h2>
        {description && (
          <p className="font-subtitle mt-5 max-w-md text-base leading-relaxed text-ink-muted">{description}</p>
        )}
      </motion.div>
    </div>
  );
}
