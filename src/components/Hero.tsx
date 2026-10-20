"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SiteHeader from "./SiteHeader";

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-3 md:px-5 md:pt-5">
      <div
        className="hero-frame hero-orbit-frame relative isolate min-h-[calc(100svh-0.75rem)] overflow-hidden rounded-[1.5rem] border border-[var(--overlay-border)] md:min-h-[calc(100svh-1.25rem)] md:rounded-[2rem]"
      >
        <div className="relative z-10 flex min-h-[calc(100svh-0.75rem)] flex-col px-5 pb-8 md:min-h-[calc(100svh-1.25rem)] md:px-12 md:pb-10">
          <SiteHeader />

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-16 text-center md:pb-20 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="hero-eyebrow rounded-full px-4 py-2 text-xs font-medium tracking-wide md:text-sm">
                Software hecho a tu medida
              </span>
              <h1 className="mt-7 max-w-4xl font-display text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
                Ideas que toman forma.
                <br className="hidden sm:block" />
                <span className="hero-title-accent">Experiencias que conectan.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg md:mt-7">
                Diseñamos y programamos sitios web y micro apps para llevar tu próximo proyecto más lejos.
              </p>
              <a href="#proyectos" className="hero-cta mt-8 inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5 md:mt-9">
                Conocé nuestro trabajo
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/30">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-[var(--overlay-border)] pt-4 text-[11px] uppercase tracking-[0.16em] text-ink-faint sm:text-xs">
            <span>Diseño &amp; desarrollo digital</span>
            <span className="hidden sm:inline">Hecho en Mendoza, para cualquier lugar</span>
            <a href="#proyectos" className="transition-colors hover:text-ink">Scroll para explorar ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}
