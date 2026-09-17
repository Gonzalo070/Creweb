/**
 * Ilustración decorativa: una plataforma isométrica con un "browser" y
 * nodos de red conectados, evocando un producto digital en construcción.
 * Es un SVG propio (no una foto externa) para que:
 *  - no dependa de assets pesados ni de licencias de imagen,
 *  - se recoloree solo entre modo oscuro/claro usando las CSS vars del tema.
 * Vive como capa de fondo detrás del texto y las FloatingCards, por eso es
 * aria-hidden y no interactúa con el mouse (pointer-events-none).
 */
export default function HeroVisual() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 800"
      className="absolute inset-0 h-full w-full opacity-[0.35] md:opacity-[0.45]"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="platformStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-neon-cyan)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-neon-violet)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Plataforma isométrica */}
      <g transform="translate(560,300)" opacity="0.8">
        <polygon
          points="0,-40 340,110 0,260 -340,110"
          fill="none"
          stroke="url(#platformStroke)"
          strokeWidth="1.5"
        />
        <polygon
          points="0,-10 260,90 0,190 -260,90"
          fill="none"
          stroke="var(--color-neon-cyan)"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* "Browser" flotando sobre la plataforma */}
        <g transform="translate(-130,-190)">
          <rect
            x="0"
            y="0"
            width="260"
            height="170"
            rx="14"
            fill="var(--color-base-surface)"
            fillOpacity="0.5"
            stroke="var(--color-neon-cyan)"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <line x1="0" y1="30" x2="260" y2="30" stroke="var(--color-neon-cyan)" strokeOpacity="0.3" />
          <circle cx="18" cy="15" r="4" fill="var(--color-neon-violet)" fillOpacity="0.5" />
          <circle cx="34" cy="15" r="4" fill="var(--color-neon-emerald)" fillOpacity="0.5" />
          <circle cx="50" cy="15" r="4" fill="var(--color-neon-cyan)" fillOpacity="0.5" />
          <rect x="20" y="52" width="150" height="10" rx="5" fill="var(--color-ink)" fillOpacity="0.14" />
          <rect x="20" y="74" width="210" height="10" rx="5" fill="var(--color-ink)" fillOpacity="0.1" />
          <rect x="20" y="96" width="120" height="10" rx="5" fill="var(--color-ink)" fillOpacity="0.1" />
          <rect x="20" y="122" width="70" height="26" rx="13" fill="var(--color-neon-cyan)" fillOpacity="0.28" />
        </g>

        {/* Nodos de red conectados, sugiriendo integraciones/datos */}
        <g stroke="var(--color-neon-violet)" strokeOpacity="0.35" strokeWidth="1">
          <line x1="0" y1="-10" x2="230" y2="45" />
          <line x1="0" y1="-10" x2="-230" y2="45" />
          <line x1="0" y1="-10" x2="0" y2="-190" />
        </g>
        <circle cx="230" cy="45" r="6" fill="var(--color-neon-emerald)" fillOpacity="0.55" />
        <circle cx="-230" cy="45" r="6" fill="var(--color-neon-cyan)" fillOpacity="0.55" />
        <circle cx="0" cy="-10" r="7" fill="var(--color-neon-violet)" fillOpacity="0.6" />
      </g>

      {/* Puntos sueltos, para dar sensación de profundidad/estrellas sutiles */}
      {[
        [120, 120], [1040, 160], [960, 480], [140, 560], [780, 90], [260, 300], [1080, 350],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 2.5 : 1.6}
          fill="var(--color-neon-cyan)"
          fillOpacity="0.4"
        />
      ))}
    </svg>
  );
}