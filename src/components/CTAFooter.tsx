"use client";

import { motion } from "framer-motion";
import { AtSign, Link2, MessageCircle } from "lucide-react";

export default function CTAFooter() {
  return (
    <>
      <section id="contacto" className="relative px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-strong mx-auto max-w-3xl rounded-3xl p-10 text-center shadow-glow-cyan sm:p-14"
        >
          <h2 className="text-balance mx-auto max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Contanos qué querés construir
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            Respondemos en menos de 24 horas con una propuesta concreta,
            sin vueltas.
          </p>

          <form
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-neon-cyan/50"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-neon-cyan px-6 py-3 text-sm font-medium text-base-bg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Empezar
            </button>
          </form>

          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            <MessageCircle className="h-4 w-4" />
            o escribinos directo por WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} Creweb. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-ink-muted hover:text-ink">
              <AtSign className="h-4.5 w-4.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-ink-muted hover:text-ink">
              <Link2 className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}