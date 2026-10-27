"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

export default function CTAFooter() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
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

          <p className="font-subtitle relative mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            Contanos qué querés construir y vemos cómo hacerlo realidad. Respondemos por WhatsApp o
            Instagram.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center gap-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={primary}>
              <MessageCircle className="h-4 w-4" />
              Escribinos por WhatsApp
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={secondary}>
              <AtSign className="h-4 w-4" />
              Instagram {SITE.instagramHandle}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {mailHref && (
              <a href={mailHref} className={secondary}>
                <Mail className="h-4 w-4" />
                Enviar un email
              </a>
            )}
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--overlay-border)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Instagram
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
