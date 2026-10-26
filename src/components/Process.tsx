"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: "01",
    title: "Idea y estrategia",
    description: "Entendemos qué necesitás resolver, para quién y qué tiene que lograr el proyecto.",
  },
  {
    number: "02",
    title: "Diseño UI/UX",
    description: "Diseñamos la interfaz y la validamos con vos antes de escribir código.",
  },
  {
    number: "03",
    title: "Desarrollo y animación",
    description: "Lo construimos con las interacciones y animaciones ya definidas.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Lo publicamos y lo ajustamos según cómo lo use la gente de verdad.",
  },
];

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" ref={sectionRef} className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading watermark="Proceso" title="Cómo" accent="trabajamos" />

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-[var(--overlay-3)]" />
          <div
            ref={lineRef}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-emerald"
          />

          <ul className="space-y-12">
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex gap-6">
                <span className="glass relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading text-sm tracking-wide text-ink-muted">
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
