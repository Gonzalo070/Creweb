import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import PlanetBackdrop from "@/components/PlanetBackdrop";
import CTAFooter from "@/components/CTAFooter";
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

export const metadata: Metadata = {
  title: "Creweb — Biblioteca de micro apps y páginas web a medida",
  description:
    "Explorá nuestra biblioteca de micro apps, conocé Creweb y descubrí cómo crear una página web a medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
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
      <body>
        <div className="relative isolate min-h-screen">
          <PlanetBackdrop />
          <div className="relative z-10">
            <SiteHeader />
            <main>{children}</main>
            <CTAFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
