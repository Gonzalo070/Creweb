"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import CodeWorkbench from "./CodeWorkbench";

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-5 md:px-5 md:pt-8">
      <div className="hero-frame relative isolate overflow-hidden rounded-[1.5rem] border border-[var(--overlay-border)] md:rounded-[2rem]">
        <div className="relative z-10 grid min-h-[min(760px,calc(100svh-7rem))] items-center gap-2 px-5 pb-8 pt-10 md:px-10 md:pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative z-10 flex flex-col items-center py-10 text-center md:py-16 lg:items-start lg:py-20 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide md:text-sm">
                <span className="hero-live-dot" /> Desarrollo digital, en otra dimensión
              </span>
              <h1 className="mt-7 max-w-4xl font-display text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
                Ideas que toman forma.
                <br className="hidden sm:block" />
                <span className="hero-title-accent">Experiencias que se sienten.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg md:mt-7">
                Diseñamos micro apps y páginas web con profundidad, movimiento y atención a cada detalle.
              </p>
              <Link href="/micro-apps" className="hero-cta mt-8 inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5 md:mt-9">
                Explorar biblioteca
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/30">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
              <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
                <Link href="/paginas-a-medida" className="text-sm text-ink-muted underline decoration-[var(--overlay-border-strong)] underline-offset-4 transition-colors hover:text-ink">Páginas a medida</Link>
                <Link href="/nosotros" className="text-sm text-ink-muted underline decoration-[var(--overlay-border-strong)] underline-offset-4 transition-colors hover:text-ink">Conocé Creweb</Link>
              </div>
            </motion.div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[720px] py-4 lg:py-0">
            <CodeWorkbench />
          </div>
        </div>
      </div>
    </section>
  );
}
