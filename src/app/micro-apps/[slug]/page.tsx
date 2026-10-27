import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import HistoriaYaVisual from "@/components/HistoriaYaVisual";
import { PROJECTS } from "@/lib/projects";

const VISUALS: Record<string, ComponentType<{ className?: string }>> = { historiaya: HistoriaYaVisual };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return { title: "Micro app no encontrada | Creweb" };
  return { title: `${project.name} | Biblioteca Creweb`, description: project.description };
}

export default async function MicroAppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();
  const Visual = VISUALS[project.slug];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
      <Link href="/micro-apps" className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"><ArrowLeft className="h-4 w-4" />Volver a la biblioteca</Link>
      <div className="depth-card mt-8 grid overflow-hidden rounded-[2rem] border border-[var(--overlay-border)] bg-[var(--overlay-1)] md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-h-[320px] items-center justify-center border-b border-[var(--overlay-border)] bg-[radial-gradient(ellipse_at_50%_55%,rgba(244,235,208,0.12),transparent_70%),linear-gradient(145deg,rgba(244,235,208,0.06),var(--overlay-1))] p-5 md:min-h-[600px] md:border-b-0 md:border-r">
          {Visual && <Visual className="h-auto max-h-[560px] w-full max-w-[440px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]" />}
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-neon-cyan">{project.category}</span>
            {project.status === "online" && <span className="inline-flex items-center gap-2 rounded-full border border-[var(--overlay-border)] px-3 py-1 text-xs text-ink"><span className="h-1.5 w-1.5 rounded-full bg-neon-emerald" />Disponible</span>}
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">{project.name}</h1>
          <p className="font-subtitle mt-4 text-lg leading-relaxed text-neon-cyan md:text-xl">{project.tagline}</p>
          <p className="font-subtitle mt-5 text-sm leading-relaxed text-ink-muted md:text-base">{project.description}</p>
          <h2 className="mt-8 font-display text-lg font-extrabold text-ink">Qué podés hacer</h2>
          <ul className="mt-4 space-y-3">
            {project.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-cyan/15"><Check className="h-3 w-3 text-neon-cyan" strokeWidth={3} /></span>{feature}</li>)}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-neon-cyan px-5 py-3 text-sm font-medium text-base-bg transition hover:bg-neon-emerald">Conocer HistoriaYa<ArrowUpRight className="h-4 w-4" /></a>
            {project.appUrl && <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[var(--overlay-border-strong)] px-5 py-3 text-sm text-ink transition hover:bg-[var(--overlay-2)]">Abrir la app<ArrowUpRight className="h-4 w-4" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}
