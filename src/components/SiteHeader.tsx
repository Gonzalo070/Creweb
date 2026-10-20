"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "@/lib/site";

/**
 * Header integrado al hero: no flota ni es una cápsula aparte, vive dentro
 * del marco del hero (logo a la izquierda, navegación al centro, acciones a
 * la derecha), como en la referencia de diseño.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-40 flex items-center justify-between pt-6 md:pt-8"
    >
      <a href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name}, inicio`}>
        <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-neon-cyan/10">
          <Sparkles className="h-4 w-4 text-neon-cyan" strokeWidth={2.5} />
          <span className="absolute inset-0 rounded-lg bg-neon-cyan/30 blur-md" />
        </span>
        <span className="font-heading text-2xl uppercase leading-none tracking-wide text-ink">
          {SITE.name}
        </span>
      </a>

      <nav
        aria-label="Principal"
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="#contacto"
          className="hidden rounded-lg border border-[var(--overlay-border-strong)] px-5 py-2.5 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)] sm:inline-block"
        >
          Hablemos
        </a>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong absolute right-0 top-full mt-3 w-60 rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base text-ink-muted hover:bg-[var(--overlay-2)] hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
