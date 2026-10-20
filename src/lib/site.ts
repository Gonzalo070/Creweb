/**
 * Datos centrales del sitio. Todo lo que aparece en la landing y es
 * "dato de contacto" sale de acá, para tocar en un solo lugar.
 */
export const SITE = {
  name: "Creweb",
  github: "https://github.com/Gonzalo070",

  // Completá estos dos para activar los botones de contacto del final.
  // Si quedan vacíos, el botón correspondiente no se muestra (no hay datos falsos).
  // WhatsApp: código de país + área + número, solo dígitos. Ej: "5492614000000"
  whatsapp: "",
  email: "",
};

export const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];
