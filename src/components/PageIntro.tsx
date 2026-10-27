import type { ReactNode } from "react";

export default function PageIntro({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-8 pt-14 md:px-8 md:pb-12 md:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">{eyebrow}</p>
      <h1 className="heading-depth mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-7xl">
        {title} <span className="text-neon-cyan">{accent}</span>
      </h1>
      <p className="font-subtitle mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{description}</p>
      {children}
    </header>
  );
}
