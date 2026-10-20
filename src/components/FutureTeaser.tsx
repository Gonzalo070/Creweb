"use client";

import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

export default function FutureTeaser() {
  return (
    <section id="vision" className="px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <SpotlightTiltCard maxTilt={5} spotlightColor="rgba(138, 43, 226, 0.16)" spotlightSize={360}>
          <div className="glass flex flex-col items-start gap-4 rounded-3xl border-neon-violet/20 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neon-violet/10">
                <Wand2 className="h-5 w-5 text-neon-violet" />
              </span>
              <div>
                <p className="font-heading text-2xl uppercase tracking-wide text-ink">
                  Muy pronto: diseñá tu propia web
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Estamos construyendo un builder self-service para que armes y publiques tu sitio sin
                  escribir código.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="whitespace-nowrap rounded-lg border border-[var(--overlay-border-strong)] px-5 py-2.5 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]"
            >
              Avisame cuando esté
            </a>
          </div>
        </SpotlightTiltCard>
      </motion.div>
    </section>
  );
}
