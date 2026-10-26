"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-5 md:px-5 md:pt-8">
      <div
        className="hero-frame hero-orbit-frame relative isolate min-h-[min(720px,calc(100svh-7rem))] overflow-hidden rounded-[1.5rem] border border-[var(--overlay-border)] md:rounded-[2rem]"
      >
        <div className="relative z-10 flex min-h-[min(720px,calc(100svh-7rem))] flex-col px-5 pb-8 md:px-12 md:pb-10">
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-16 text-center md:pb-20 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="hero-eyebrow rounded-full px-4 py-2 text-xs font-medium tracking-wide md:text-sm">
                Una biblioteca de micro apps + ideas hechas a medida
              </span>
              <h1 className="mt-7 max-w-4xl font-display text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
                Pequeñas herramientas.
                <br className="hidden sm:block" />
                <span className="hero-title-accent">Grandes soluciones.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg md:mt-7">
                Explorá micro apps listas para usar, conocé quiénes somos y descubrí todo lo que podemos crear para tu proyecto.
              </p>
              <Link href="/micro-apps" className="hero-cta mt-8 inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5 md:mt-9">
                Explorar biblioteca
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/30">
                  <ArrowDown className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link href="/paginas-a-medida" className="mt-3 text-sm text-ink-muted underline decoration-[var(--overlay-border-strong)] underline-offset-4 transition-colors hover:text-ink">
                Conocer las páginas a medida
              </Link>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-[var(--overlay-border)] pt-4 text-[11px] uppercase tracking-[0.16em] text-ink-faint sm:text-xs">
            <span>Micro apps y páginas web</span>
            <span className="hidden sm:inline">Hecho en Mendoza, para cualquier lugar</span>
            <Link href="/micro-apps" className="transition-colors hover:text-ink">Explorar la biblioteca ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
