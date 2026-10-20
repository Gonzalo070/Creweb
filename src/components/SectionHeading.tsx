"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  /** Palabra gigante y tenue detrás del título (mismo recurso que el hero) */
  watermark: string;
  /** Parte del título en Anton, en mayúsculas */
  title: string;
  /** Parte manuscrita en violeta */
  accent: string;
  description?: string;
};

export default function SectionHeading({ watermark, title, accent, description }: SectionHeadingProps) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap font-heading text-[clamp(5rem,17vw,14rem)] uppercase leading-none text-ink/[0.06]"
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
        <h2 className="font-heading text-5xl uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
          {title}{" "}
          <span className="font-script text-[1.1em] normal-case tracking-normal text-neon-violet [text-shadow:0_0_36px_rgba(138,43,226,0.4)]">
            {accent}
          </span>
        </h2>
        {description && (
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">{description}</p>
        )}
      </motion.div>
    </div>
  );
}
