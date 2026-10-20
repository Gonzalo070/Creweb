"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

export default function CTAFooter() {
  const whatsappHref = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : null;
  const mailHref = SITE.email ? `mailto:${SITE.email}` : null;

  const primary =
    "inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-6 py-3 text-sm font-medium text-base-bg transition-transform hover:scale-[1.02] active:scale-[0.98]";
  const secondary =
    "inline-flex items-center gap-2 rounded-lg border border-[var(--overlay-border-strong)] px-6 py-3 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]";

  return (
    <>
      <section id="contacto" className="px-3 py-16 md:px-5 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-frame relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--overlay-border)] p-8 sm:p-12 md:rounded-[2.5rem] md:p-16"
        >
          <SectionHeading watermark="Hablemos" title="Hablemos" accent="de tu idea" />

          <p className="relative mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            Contanos qué querés construir y vemos cómo hacerlo realidad.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center gap-3">
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={primary}>
                <MessageCircle className="h-4 w-4" />
                Escribinos por WhatsApp
              </a>
            )}
            {mailHref && (
              <a href={mailHref} className={whatsappHref ? secondary : primary}>
                <Mail className="h-4 w-4" />
                Enviar un email
              </a>
            )}
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={whatsappHref || mailHref ? secondary : primary}
            >
              Ver GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--overlay-border)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
