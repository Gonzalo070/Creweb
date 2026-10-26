import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import CTAFooter from "@/components/CTAFooter";
import "./globals.css";

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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Fraunces:ital,opsz,wght,SOFT,WONK@1,9..144,100..900,100,1&display=swap"
          rel="stylesheet"
        />
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
