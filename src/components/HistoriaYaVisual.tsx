import { useId } from "react";

/**
 * Imagen promocional de HistoriaYa, dibujada en SVG: un celular con un pedido
 * de estudios en pantalla, firma digital, dictado por voz y un certificado
 * asomando detrás. Usa el color de marca de la app (#0F5B7A) y se integra al
 * tema claro/oscuro en los "chips" flotantes.
 *
 * Si más adelante querés reemplazarla por una captura o render real, alcanza
 * con cambiar el contenido de este componente por un <Image src="/historiaya.png" />.
 */
export default function HistoriaYaVisual({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `hy-${name}-${uid}`;
  const ref = (name: string) => `url(#${id(name)})`;

  const waveLeft = [
    { x: 150, h: 12 },
    { x: 164, h: 26 },
    { x: 178, h: 18 },
    { x: 192, h: 34 },
  ];
  const waveRight = [
    { x: 245, h: 34 },
    { x: 259, h: 18 },
    { x: 273, h: 26 },
    { x: 287, h: 12 },
  ];

  return (
    <svg
      viewBox="0 0 440 560"
      role="img"
      aria-label="Ilustración de HistoriaYa: un celular con un pedido de estudios, firma digital y dictado por voz"
      className={className}
      style={{ fontFamily: '"Fraunces", system-ui, sans-serif' }}
    >
      <defs>
        <radialGradient id={id("glow")} cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#1fb6d6" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#0F5B7A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0F5B7A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("screen")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F5B7A" />
          <stop offset="100%" stopColor="#0a2f40" />
        </linearGradient>
        <linearGradient id={id("edge")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FE1413" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4D63FF" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={id("mic")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0F5B7A" />
        </linearGradient>
        <filter id={id("shadow")} x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Resplandor de fondo */}
      <ellipse cx="220" cy="300" rx="215" ry="245" fill={ref("glow")} />

      {/* Certificado asomando por detrás, inclinado */}
      <g transform="rotate(-9 110 340)">
        <rect x="26" y="248" width="150" height="196" rx="12" fill="#ffffff" fillOpacity="0.93" />
        <rect x="26" y="248" width="150" height="26" rx="12" fill="#0F5B7A" />
        <rect x="26" y="262" width="150" height="12" fill="#0F5B7A" />
        <text x="40" y="266" fontSize="10" fontWeight="600" fill="#fff">
          Certificado médico
        </text>
        <rect x="40" y="288" width="104" height="6" rx="3" fill="#cfd8de" />
        <rect x="40" y="302" width="118" height="6" rx="3" fill="#e1e7eb" />
        <rect x="40" y="316" width="84" height="6" rx="3" fill="#e1e7eb" />
        <rect x="40" y="330" width="110" height="6" rx="3" fill="#e1e7eb" />
        <circle cx="62" cy="402" r="15" fill="none" stroke="#0F5B7A" strokeWidth="2" opacity="0.55" />
        <path d="M56 402 l5 5 l9 -11" fill="none" stroke="#0F5B7A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Celular */}
      <g filter={ref("shadow")}>
        <rect x="120" y="24" width="200" height="430" rx="38" fill="#0a1118" stroke={ref("edge")} strokeWidth="2.5" />
      </g>
      <rect x="130" y="34" width="180" height="410" rx="30" fill={ref("screen")} />
      <rect x="190" y="42" width="60" height="8" rx="4" fill="#0a1118" />

      {/* Encabezado de la app */}
      <text x="148" y="76" fontSize="14" fontWeight="700" fill="#fff">
        HistoriaYa
      </text>
      <circle cx="290" cy="71" r="9" fill="#fff" fillOpacity="0.16" />
      <path d="M290 66v10M285 71h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

      {/* Documento: pedido de estudios */}
      <rect x="142" y="92" width="156" height="214" rx="12" fill="#ffffff" fillOpacity="0.97" />
      <rect x="142" y="92" width="156" height="28" rx="12" fill="#0F5B7A" />
      <rect x="142" y="106" width="156" height="14" fill="#0F5B7A" />
      <text x="154" y="111" fontSize="10" fontWeight="600" fill="#fff">
        Pedido de estudios
      </text>
      <rect x="252" y="99" width="36" height="15" rx="7.5" fill="#fff" fillOpacity="0.22" />
      <text x="270" y="110" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">
        PDF
      </text>

      <rect x="154" y="132" width="92" height="6" rx="3" fill="#cfd8de" />
      <rect x="154" y="144" width="60" height="6" rx="3" fill="#e1e7eb" />

      {[164, 184, 204].map((y, i) => (
        <g key={y}>
          <rect x="154" y={y} width="12" height="12" rx="3" fill="#0F5B7A" />
          <path d={`M157 ${y + 6} l3 3 l5 -6`} fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="173" y={y + 3} width={[82, 62, 92][i]} height="6" rx="3" fill="#cfd8de" />
        </g>
      ))}

      {/* Firma digital */}
      <path
        d="M156 268 c10 -22 18 12 28 -6 s14 -18 22 -2 s16 10 26 -8 s14 6 28 -2"
        fill="none"
        stroke="#0F5B7A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line x1="154" y1="282" x2="286" y2="282" stroke="#cfd8de" />
      <text x="154" y="296" fontSize="7" fill="#7b8a94">
        Firma del profesional
      </text>

      {/* Dictado por voz */}
      <text x="220" y="332" fontSize="10" fill="#fff" fillOpacity="0.78" textAnchor="middle">
        Dictando…
      </text>
      {[...waveLeft, ...waveRight].map((b) => (
        <rect key={b.x} x={b.x} y={368 - b.h / 2} width="5" height={b.h} rx="2.5" fill="#22d3ee" fillOpacity="0.9" />
      ))}
      <circle cx="220" cy="368" r="28" fill={ref("mic")} />
      <circle cx="220" cy="368" r="28" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <g transform="translate(220 368)">
        <rect x="-6" y="-15" width="12" height="22" rx="6" fill="#fff" />
        <path d="M-11 -2 a11 11 0 0 0 22 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="9" x2="0" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </g>
      <rect x="190" y="428" width="60" height="4" rx="2" fill="#fff" fillOpacity="0.35" />

      {/* Chips flotantes (se adaptan al tema) */}
      {[
        { x: 270, y: 62, w: 156, label: "Dictado por voz", dot: "#FE1413" },
        { x: 4, y: 150, w: 132, label: "Firma digital", dot: "#4D63FF" },
        { x: 298, y: 300, w: 124, label: "PDF listo", dot: "#9FB0FF" },
      ].map((chip) => (
        <g key={chip.label}>
          <rect
            x={chip.x}
            y={chip.y}
            width={chip.w}
            height="34"
            rx="17"
            fill="var(--color-base-surface)"
            fillOpacity="0.88"
            stroke="var(--overlay-border-strong)"
          />
          <circle cx={chip.x + 18} cy={chip.y + 17} r="5" fill={chip.dot} />
          <text x={chip.x + 32} y={chip.y + 21.5} fontSize="12" fontWeight="600" fill="var(--color-ink)">
            {chip.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
