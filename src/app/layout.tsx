import type { Metadata } from "next";
import { Big_Shoulders_Display, Fraunces } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import CTAFooter from "@/components/CTAFooter";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "100 900",
  style: "italic",
  axes: ["SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "100 900",
  variable: "--font-big-shoulders",
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
      className={`${fraunces.variable} ${bigShoulders.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Aplica el tema guardado (o el del sistema) antes del primer paint,
            para que no se vea un flash del tema equivocado al cargar. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('creweb-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <div className="relative isolate min-h-screen">
          <CodeAtmosphere />
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
