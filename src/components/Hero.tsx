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
        <div
          aria-hidden="true"
          className="hero-planet"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="hero-planet-map"
          >
            <path d="M85 132l32-28 43-7 18-22 42 8 14 18 32 5 12 24-18 17-27 2-13 19-24 5-5 26-18 8-9 32-21 7-14-27-19-17-13-39-27-17-9-16z" />
            <path d="M239 244l31 10 19 31-7 30 17 25-15 39-14 48-20 34-16-30-5-41-18-31 5-40-13-33 8-26z" />
            <path d="M432 124l25-19 34 4 11 17 29 3 15-12 44 4 26-16 45 7 22 17 34-2 35 19 23 3 19 26-24 14-28-5-21 17-25-9-21 17-33-3-14 23-28-1-20 16-27-7-15-27-22-4-12-22-27-2-10-29-25-8-13-19-28 2z" />
            <path d="M490 220l31 4 18 25-3 33-19 23-8 40-24 41-15 49-23-14-6-37-19-26 11-31-9-29 18-20 2-34 22-24z" />
            <path d="M697 324l35-8 34 14 16 25-15 22-30 1-22-17-29-10z" />
            <path d="M830 205l8-5 8 9-7 9zM385 173l9-4 7 9-7 7zM775 259l8-3 5 8-8 4z" />
          </svg>
          <div className="hero-planet-grid" />
          <div className="hero-planet-atmosphere" />
        </div>

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
