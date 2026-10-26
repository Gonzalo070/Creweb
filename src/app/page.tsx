import Link from "next/link";
import { ArrowUpRight, Blocks, Globe2, UsersRound, Wand2 } from "lucide-react";
import Hero from "@/components/Hero";

const DESTINATIONS = [
  { href: "/micro-apps", title: "Biblioteca de micro apps", description: "Herramientas web listas para resolver tareas concretas.", icon: Blocks, label: "Explorar catálogo" },
  { href: "/paginas-a-medida", title: "Páginas a medida", description: "Un sitio propio, pensado para tu marca y tus objetivos.", icon: Globe2, label: "Conocer el servicio" },
  { href: "/nosotros", title: "Sobre Creweb", description: "Quiénes somos y cómo pensamos cada producto digital.", icon: UsersRound, label: "Conocernos" },
  { href: "/crear-mi-web", title: "Crear tu propia web", description: "Un espacio de creación web que estamos preparando.", icon: Wand2, label: "Ver qué se viene" },
];

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">Explorá Creweb</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">Elegí por dónde empezar</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-muted">Cada espacio tiene su propia página para que encuentres rápido lo que buscás.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map(({ href, title, description, icon: Icon, label }) => (
            <Link key={href} href={href} className="depth-card group rounded-3xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-6 hover:border-[var(--overlay-border-strong)] hover:bg-[var(--overlay-2)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-ink-muted">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neon-cyan">{label}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
