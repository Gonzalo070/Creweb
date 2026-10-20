import type { Metadata } from "next";
import { Anton, Caveat_Brush, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

// Titulares condensados en mayúsculas (hero y secciones)
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

// Acentos manuscritos en violeta
const caveat = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creweb — Micro apps y sitios web a medida",
  description:
    "Diseñamos y programamos micro apps y sitios web de punta a punta. Mirá los proyectos que ya están online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${anton.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Aplica el tema guardado (o el del sistema) antes del primer paint,
            para que no se vea un flash del tema equivocado al cargar. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('creweb-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
