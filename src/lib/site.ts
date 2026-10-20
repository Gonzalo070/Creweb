/**
 * Datos centrales del sitio. Todo lo que aparece en la landing y es
 * "dato de contacto" sale de acá, para tocar en un solo lugar.
 */
export const SITE = {
  name: "Creweb",

  // WhatsApp: código de país + área + número, solo dígitos.
  whatsapp: "5492613287819",
  whatsappMessage: "Hola Creweb, quiero consultar por un proyecto.",

  instagram: "https://www.instagram.com/creweb.software/",
  instagramHandle: "@creweb.software",

  // Opcional: si lo completás, aparece un botón de email en el contacto.
  email: "",
};

export const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];
