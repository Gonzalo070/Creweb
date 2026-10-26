"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-[var(--overlay-border)] bg-base-bg/85 px-4 backdrop-blur-xl md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3.5 md:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE.name}, inicio`}>
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-neon-cyan/10">
            <Sparkles className="h-4 w-4 text-neon-cyan" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-lg bg-neon-cyan/30 blur-md" />
          </span>
          <span className="font-heading text-2xl uppercase leading-none tracking-wide text-ink">{SITE.name}</span>
        </Link>

        <nav aria-label="Principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-[13px] transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-muted"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contacto" className="hidden rounded-lg border border-[var(--overlay-border-strong)] px-4 py-2.5 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)] sm:inline-block">
            Hablemos
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong absolute right-4 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl p-4 md:right-8 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-base hover:bg-[var(--overlay-2)] hover:text-ink ${pathname === link.href ? "text-ink" : "text-ink-muted"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contacto" onClick={() => setOpen(false)} className="mt-1 block rounded-lg px-3 py-2.5 text-base text-neon-cyan hover:bg-[var(--overlay-2)]">
                  Hablemos
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
