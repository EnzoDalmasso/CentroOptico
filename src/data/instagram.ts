import type { InstagramPost } from "@/types/catalog";

/**
 * Publicaciones simuladas para la demo. Pueden reemplazarse por capturas
 * reales del perfil o conectarse más adelante a la API de Instagram.
 */
export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    image: { src: "/images/instagram/ig-1.jpg", alt: "Retrato de mujer con anteojos de armazón oscuro" },
    caption: "Nuevos armazones de acetato",
  },
  {
    id: "ig-2",
    image: { src: "/images/instagram/ig-2.jpg", alt: "Exhibidor con anteojos de colores" },
    caption: "Una pared llena de estilos",
  },
  {
    id: "ig-3",
    image: { src: "/images/instagram/ig-3.jpg", alt: "Mujer con anteojos de sol aviador dorados" },
    caption: "Temporada de sol",
  },
  {
    id: "ig-4",
    image: { src: "/images/instagram/ig-4.jpg", alt: "Armazones dorados sobre papel claro" },
    caption: "Detalles en dorado",
  },
  {
    id: "ig-5",
    image: { src: "/images/instagram/ig-5.jpg", alt: "Hombre sonriente con anteojos" },
    caption: "Tu estilo, tu mirada",
  },
  {
    id: "ig-6",
    image: { src: "/images/instagram/ig-6.jpg", alt: "Anteojos de sol junto a una cartera" },
    caption: "El accesorio que completa el look",
  },
];
