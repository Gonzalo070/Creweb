"use client";

import { useMemo, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import HistoriaYaVisual from "./HistoriaYaVisual";
import { PROJECTS } from "@/lib/projects";

const VISUALS: Record<string, ComponentType<{ className?: string }>> = {
  historiaya: HistoriaYaVisual,
};

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...new Set(PROJECTS.map((project) => project.category))];
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return PROJECTS.filter((project) => {
      const matchesCategory = category === "Todas" || project.category === category;
      const searchableText = `${project.name} ${project.category} ${project.tagline} ${project.description}`.toLocaleLowerCase("es");
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <section id="biblioteca" className="relative px-3 py-20 md:px-5 md:py-28">
      <div className="mx-auto max-w-6xl px-3 md:px-0">
        <SectionHeading
          watermark="Micro apps"
          title="Explorá la"
          accent="biblioteca"
          description="Elegí una herramienta, conocé lo que puede hacer y empezá a usarla. La colección crece con cada nueva idea que ponemos en marcha."
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-5 border-b border-[var(--overlay-border)] pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-ink">Catálogo de micro apps</p>
              <p className="mt-1 text-sm text-ink-muted">Encontrá una herramienta para lo que necesitás.</p>
            </div>
            <label className="flex h-11 w-full items-center gap-2.5 rounded-xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] px-3 text-ink-muted md:max-w-xs">
              <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="sr-only">Buscar en la biblioteca</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar herramientas..."
                className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-2 py-5" aria-label="Filtrar por categoría">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${category === item ? "bg-neon-cyan text-white" : "border border-[var(--overlay-border)] text-ink-muted hover:bg-[var(--overlay-2)] hover:text-ink"}`}
              >
                {item}
              </button>
            ))}
            <span className="ml-auto text-xs text-ink-faint" aria-live="polite">
              {filteredProjects.length} {filteredProjects.length === 1 ? "herramienta" : "herramientas"}
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => {
                const Visual = VISUALS[project.slug];
                return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--overlay-border)] bg-[var(--frame-base)] transition duration-300 hover:-translate-y-1 hover:border-[var(--overlay-border-strong)] hover:shadow-glow-cyan"
                  >
                    <div className="relative flex aspect-[1.35/1] items-center justify-center overflow-hidden border-b border-[var(--overlay-border)] bg-[radial-gradient(ellipse_at_50%_60%,rgba(20,152,184,0.25),transparent_70%),linear-gradient(145deg,rgba(15,91,122,0.2),var(--overlay-1))] p-3">
                      {project.status === "online" && (
                        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-[var(--overlay-border)] bg-[var(--frame-base)]/90 px-3 py-1.5 text-[11px] font-medium text-ink backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald shadow-glow-emerald" />
                          Disponible
                        </span>
                      )}
                      {Visual && <Visual className="h-full w-full object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.04]" />}
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.12em] text-neon-cyan">{project.category}</span>
                        {project.status === "online" && (
                          <span className="rounded-md bg-neon-emerald/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neon-emerald">Lista para usar</span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">{project.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.features.slice(0, 2).map((feature) => (
                          <span key={feature} className="rounded-lg border border-[var(--overlay-border)] px-2.5 py-1.5 text-xs text-ink-muted">{feature}</span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--overlay-border)] pt-4">
                        <Link
                          href={`/micro-apps/${project.slug}`}
                          className="group/link inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neon-cyan px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neon-emerald"
                        >
                          Ver detalles
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                        {project.appUrl && (
                          <a
                            href={project.appUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center rounded-xl border border-[var(--overlay-border-strong)] px-4 py-3 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]"
                          >
                            Abrir app
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-dashed border-[var(--overlay-border-strong)] bg-[var(--overlay-1)] p-6 sm:p-7"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-violet/10 text-neon-violet">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">Colección en crecimiento</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">¿Qué herramienta te gustaría encontrar?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">Estamos sumando nuevas ideas a la biblioteca. Contanos qué tarea te gustaría resolver con una micro app.</p>
                </div>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neon-cyan transition-colors hover:text-ink">
                  Proponer una idea <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.aside>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--overlay-border-strong)] px-6 py-14 text-center">
              <p className="font-display text-lg font-medium text-ink">No encontramos herramientas con esa búsqueda.</p>
              <button type="button" onClick={() => { setQuery(""); setCategory("Todas"); }} className="mt-3 text-sm text-neon-cyan hover:text-ink">Limpiar filtros</button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div>
              <p className="font-display text-lg font-semibold text-ink">¿Tenés una idea para una micro app?</p>
              <p className="mt-1 text-sm text-ink-muted">La próxima herramienta de la biblioteca podría nacer de tu proyecto.</p>
            </div>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[var(--overlay-border-strong)] px-5 py-3 text-sm text-ink transition-colors hover:bg-[var(--overlay-2)]">
              Hablemos <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
