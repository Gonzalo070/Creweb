import { Check, Wand2 } from "lucide-react";
import PageIntro from "@/components/PageIntro";

const PLANNED_STEPS = [
  "Elegir una base de diseño para tu proyecto",
  "Personalizar textos, imágenes y colores",
  "Publicar tu página con una dirección propia",
];

export const metadata = { title: "Creador de páginas web | Creweb", description: "Estamos preparando una herramienta para que puedas diseñar tu propia página web." };

export default function WebsiteBuilderPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="En preparación"
        title="Tu próxima web empieza"
        accent="con una idea"
        description="Estamos diseñando una herramienta para que puedas armar tu página web a tu ritmo, con una guía sencilla desde el primer paso hasta su publicación."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div className="hero-frame rounded-[2rem] border border-[var(--overlay-border)] p-7 sm:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-violet/10 text-neon-violet"><Wand2 className="h-6 w-6" /></span>
          <h2 className="mt-6 font-display text-2xl font-semibold text-ink">Un proceso simple para crear tu sitio</h2>
          <ul className="mt-6 space-y-4">
            {PLANNED_STEPS.map((step) => <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink-muted"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-cyan/15"><Check className="h-3 w-3 text-neon-cyan" /></span>{step}</li>)}
          </ul>
          <p className="mt-7 rounded-xl border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-4 text-sm text-ink-muted">Todavía estamos trabajando en esta herramienta. Si querés contarnos qué te gustaría poder hacer, escribinos.</p>
        </div>
        <div className="flex flex-col justify-between rounded-[2rem] border border-[var(--overlay-border)] bg-[var(--overlay-1)] p-7 sm:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neon-cyan">Mientras tanto</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Podemos crearla con vos</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">Si necesitás tener tu sitio en marcha hoy, mirá el servicio de páginas a medida y contanos qué estás imaginando.</p>
          </div>
          <a href="/paginas-a-medida" className="mt-8 inline-flex items-center justify-center rounded-xl bg-neon-cyan px-5 py-3 text-sm font-medium text-white transition hover:bg-neon-emerald">Ver páginas a medida</a>
        </div>
      </section>
    </div>
  );
}
