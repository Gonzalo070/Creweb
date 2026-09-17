"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: "01",
    title: "Idea y estrategia",
    description: "Entendemos tu negocio, tu público y qué necesita lograr el sitio.",
  },
  {
    number: "02",
    title: "Diseño UI/UX",
    description: "Prototipamos la interfaz y la validamos con vos antes de escribir código.",
  },
  {
    number: "03",
    title: "Desarrollo y animación",
    description: "Construimos el sitio con las interacciones y animaciones definidas.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Publicamos, medimos y ajustamos según el comportamiento real de usuarios.",
  },
];

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" ref={sectionRef} className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Cómo trabajamos, paso a paso
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-emerald"
          />

          <ul className="space-y-12">
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex gap-6 pl-0">
                <span className="glass relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-ink-muted">
                  {step.number}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
