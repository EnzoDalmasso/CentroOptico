/**
 * Configuración central del negocio.
 *
 * Todo lo que identifica a la óptica (nombre, contacto, ubicación, horarios y
 * textos principales) vive acá. Para reutilizar el sitio con otro cliente
 * alcanza con editar este archivo y los datos de `src/data/`.
 *
 * Los campos marcados con `isPlaceholder: true` son datos DEMO que todavía
 * deben confirmarse con la clienta; el sitio los señala visualmente.
 */

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  legalName: string;
  siteUrl: string;
  tagline: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  whatsapp: {
    /** Número en formato internacional, sólo dígitos (ej. 549XXXXXXXXXX). */
    number: string;
    displayNumber: string;
    defaultMessage: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  location: {
    address: string;
    city: string;
    /** Consulta usada para abrir Google Maps ("Cómo llegar"). */
    mapsQuery: string;
    isPlaceholder: boolean;
  };
  hours: {
    schedule: OpeningHours[];
    note: string;
    isPlaceholder: boolean;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Video decorativo opcional (mp4/webm liviano). Si no existe, se usa la imagen. */
    video?: { mp4?: string; webm?: string };
    image: { src: string; alt: string };
  };
}

export const business: BusinessConfig = {
  name: "Centro Óptico Ale Domesi",
  shortName: "Ale Domesi",
  legalName: "Centro Óptico Alejandra Domesi",
  // Reemplazar por el dominio definitivo (o la URL de Vercel) antes de publicar.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://centro-optico-ale-domesi.vercel.app",
  tagline: "Tu visión es muy importante para nosotros.",
  seo: {
    title: "Centro Óptico Ale Domesi | Anteojos y servicios ópticos",
    description:
      "Centro Óptico Ale Domesi. Descubrí nuestra selección de anteojos, servicios ópticos y atención personalizada. Consultanos por WhatsApp.",
    keywords: [
      "óptica",
      "anteojos",
      "anteojos de sol",
      "anteojos recetados",
      "armazones",
      "lentes de contacto",
      "Centro Óptico Ale Domesi",
    ],
  },
  whatsapp: {
    // Número publicado en la bio de Instagram del local (wa.me/5493471689038).
    number: "5493471689038",
    displayNumber: "+54 9 3471 68-9038",
    defaultMessage: "Hola! Quería hacer una consulta sobre los anteojos de Centro Óptico Ale Domesi.",
  },
  instagram: {
    handle: "@centrooptico.aledomesi",
    url: "https://www.instagram.com/centrooptico.aledomesi/",
  },
  location: {
    // DEMO: completar con la dirección real del local.
    address: "Dirección del local",
    city: "Ciudad, Santa Fe",
    mapsQuery: "Centro Óptico Alejandra Domesi",
    isPlaceholder: true,
  },
  hours: {
    // DEMO: horarios de referencia, confirmar con la óptica.
    schedule: [
      { days: "Lunes a viernes", hours: "9:00 – 12:30 · 16:30 – 20:00" },
      { days: "Sábados", hours: "9:00 – 12:30" },
    ],
    note: "Te recomendamos consultar por WhatsApp antes de acercarte.",
    isPlaceholder: true,
  },
  hero: {
    eyebrow: "Centro Óptico Ale Domesi",
    title: "Encontrá el estilo que te representa.",
    subtitle:
      "Una selección de anteojos y soluciones ópticas pensadas para combinar diseño, comodidad y calidad.",
    image: {
      src: "/images/hero/hero.jpg",
      alt: "Mujer con anteojos de armazón metálico dorado en un ambiente cálido",
    },
  },
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Anteojos", href: "#anteojos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;
