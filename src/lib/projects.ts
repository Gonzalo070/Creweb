export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  /** Landing pública del proyecto */
  url: string;
  /** Acceso directo a la app, si existe */
  appUrl?: string;
  status: "online" | "soon";
  /** Color de marca del proyecto */
  accent: string;
};

/**
 * Para sumar un proyecto nuevo: agregá un objeto acá y, si tiene ilustración
 * propia, registrala en VISUALS dentro de components/Projects.tsx.
 */
export const PROJECTS: Project[] = [
  {
    slug: "historiaya",
    name: "HistoriaYa",
    category: "Micro app para salud",
    tagline: "Pedidos, historia clínica y certificados en PDF, con firma digital.",
    description:
      "Una herramienta para médicos y equipos de salud: cargás al paciente una sola vez, escribís o dictás por voz, firmás y descargás el PDF listo. Funciona desde el celular o la computadora, sin instalar nada.",
    features: [
      "Pedidos de estudios, con más de 50 para elegir",
      "Historia clínica con dictado por voz",
      "Certificados médicos con tu firma digital",
      "Tu hospital en el encabezado de cada PDF",
    ],
    url: "https://historiaya.netlify.app/",
    appUrl: "https://historiaya.netlify.app/app/",
    status: "online",
    accent: "#0F5B7A",
  },
];

export const FEATURED = PROJECTS[0];
