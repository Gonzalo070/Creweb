"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Proceso", href: "#proceso" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  // Cierra el menú móvil si se agranda la ventana
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-40 flex justify-center px-4"
    >
      {/* Dock: cápsula centrada, dedicada solo a navegación y CTA */}
      <nav
        className={`flex items-center gap-1.5 rounded-full border border-[var(--overlay-border)] px-2 py-2 backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? "bg-base-surface/80 shadow-glow-cyan" : "bg-[var(--overlay-1)]"
        }`}
      >
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-[var(--overlay-2)] hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <a
          href="#contacto"
          className="hidden rounded-full bg-neon-cyan px-4 py-2 text-sm font-medium text-base-bg transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-block"
        >
          Cotizar proyecto
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2.5 text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute top-16 w-[calc(100%-2rem)] max-w-xs rounded-3xl p-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 inline-block rounded-full bg-neon-cyan px-4 py-2 text-sm font-medium text-base-bg"
              >
                Cotizar proyecto
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}