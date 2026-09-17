# NovaStudio — Landing Page

Landing page para estudio de diseño y desarrollo web (Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP).

## Instalación

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Estructura

```
app/
  layout.tsx        → fuentes (Space Grotesk + Inter), metadata
  page.tsx           → ensambla las secciones
  globals.css         → tokens de color, utilidades glass/circuit
components/
  Navbar.tsx           → barra flotante con glassmorphism
  Hero.tsx             → titular + FloatingCards
  FloatingCards.tsx    → composición de tarjetas animadas del hero
  Services.tsx         → grid de 3 servicios con hover glow
  Portfolio.tsx        → showroom con revelado por scroll
  Process.tsx          → línea de tiempo con GSAP ScrollTrigger
  FutureTeaser.tsx     → aviso discreto del builder no-code
  CTAFooter.tsx        → formulario de contacto + footer
tailwind.config.ts      → paleta neón/DeFi, sombras glow, keyframes float
```

## Pensado para escalar hacia el builder no-code

- **Componentes desacoplados de datos**: `Services`, `Portfolio` y `Process`
  reciben su contenido desde arrays tipados dentro de cada archivo. El día
  que exista un backend o CMS para el builder, esos arrays se reemplazan por
  `fetch`/props sin tocar el JSX ni las animaciones.
- **Tokens centralizados**: todos los colores y sombras neón viven en
  `tailwind.config.ts`. Si el builder necesita temas por cliente, alcanza con
  generar variantes de esos tokens (o exponerlos como CSS variables) en vez
  de tocar componentes individuales.
- **`"use client"` acotado**: solo los componentes que animan o manejan
  estado (Navbar, Hero, Services, Portfolio, Process, FutureTeaser,
  CTAFooter) son client components. `app/page.tsx` y `app/layout.tsx` se
  mantienen como server components, dejando espacio para que el builder
  inyecte datos server-side (por ejemplo, contenido editado por el usuario)
  sin duplicar lógica de cliente.

## Notas de accesibilidad y rendimiento

- Los estados de foco visibles están definidos globalmente en `globals.css`.
- Las animaciones respetan `prefers-reduced-motion`.
- El `ScrollTrigger` de GSAP se limpia con `gsap.context().revert()` para
  evitar fugas de memoria al desmontar el componente.
