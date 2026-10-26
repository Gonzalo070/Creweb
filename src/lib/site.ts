/**
 * Datos centrales del sitio. Todo lo que aparece en la web y es
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
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Páginas a medida", href: "/paginas-a-medida" },
  { label: "Crear tu web", href: "/crear-mi-web" },
  { label: "Micro apps", href: "/micro-apps" },
];
