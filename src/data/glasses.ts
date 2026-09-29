import type { Glasses, GlassesWithBrand } from "@/types/catalog";
import { brandsById } from "./brands";

/**
 * Modelos DEMO. Nombres y marcas son ficticios y sirven sólo para mostrar
 * cómo se ve el catálogo. Para agregar un modelo: sumar un objeto a la lista
 * y colocar la imagen en `public/images/products/`.
 */
export const glasses: Glasses[] = [
  {
    id: "riviera",
    name: "Riviera",
    brandId: "atelier-solare",
    type: "sol",
    style: "clasico",
    image: { src: "/images/products/riviera.jpg", alt: "Anteojos de sol redondos con armazón dorado y lentes verdes" },
    tagline: "Redondo, metálico y luminoso",
    description:
      "Un clásico de silueta redonda con armazón metálico fino. Liviano y fácil de combinar, ideal para quienes buscan un estilo sobrio con un guiño retro.",
    features: ["Armazón metálico dorado", "Lentes verde botella", "Plaquetas regulables", "Protección UV400"],
    tags: ["Redondo", "Metal", "Unisex"],
  },
  {
    id: "noir",
    name: "Noir",
    brandId: "maison-lumiere",
    type: "sol",
    style: "clasico",
    image: { src: "/images/products/noir.jpg", alt: "Anteojos de sol negros con frente superior marcado", position: "50% 55%" },
    tagline: "Presencia en negro absoluto",
    description:
      "Frente superior marcado y lentes oscuros degradé. Un diseño con carácter que enmarca la mirada sin perder elegancia.",
    features: ["Frente de acetato negro", "Puente metálico", "Lentes degradé gris", "Protección UV400"],
    tags: ["Browline", "Acetato", "Unisex"],
    isNew: true,
  },
  {
    id: "rose",
    name: "Rosé",
    brandId: "atelier-solare",
    type: "sol",
    style: "moderno",
    image: { src: "/images/products/rose.jpg", alt: "Anteojos de sol cat-eye con armazón claro y lentes rosados" },
    tagline: "Cat-eye suave y femenino",
    description:
      "Líneas cat-eye suavizadas y lentes en tono rosado degradé. Un modelo delicado que ilumina el rostro y acompaña looks de día.",
    features: ["Armazón en tono nude", "Lentes rosados degradé", "Varillas finas", "Protección UV400"],
    tags: ["Cat-eye", "Femenino", "Degradé"],
  },
  {
    id: "palma",
    name: "Palma",
    brandId: "maison-lumiere",
    type: "sol",
    style: "clasico",
    image: { src: "/images/products/palma.jpg", alt: "Dos anteojos de sol de acetato carey sobre fondo amarillo" },
    tagline: "Carey cálido para el verano",
    description:
      "Acetato carey de tonos miel en una forma rectangular suave. Pensado para acompañar todo el verano con estilo y comodidad.",
    features: ["Acetato carey", "Bisagras reforzadas", "Lentes marrones", "Protección UV400"],
    tags: ["Carey", "Rectangular", "Unisex"],
  },
  {
    id: "azur",
    name: "Azur",
    brandId: "vento",
    type: "sol",
    style: "clasico",
    image: { src: "/images/products/azur.jpg", alt: "Anteojos de sol estilo aviador sobre fondo azul petróleo" },
    tagline: "El aviador, reinterpretado",
    description:
      "Una reinterpretación del aviador con doble puente y lentes oscuros. Un modelo versátil que funciona tanto en la ciudad como en la ruta.",
    features: ["Doble puente metálico", "Lentes gris oscuro", "Terminales de silicona", "Protección UV400"],
    tags: ["Aviador", "Metal", "Unisex"],
  },
  {
    id: "eclipse",
    name: "Eclipse",
    brandId: "vento",
    type: "sol",
    style: "moderno",
    image: { src: "/images/products/eclipse.jpg", alt: "Anteojos de sol negros sobre fondo durazno" },
    tagline: "Geometría urbana",
    description:
      "Formas marcadas y un frente amplio que protege sin resignar estilo. Para quienes prefieren un look contemporáneo y audaz.",
    features: ["Frente amplio", "Acetato negro mate", "Lentes oscuros", "Protección UV400"],
    tags: ["Oversize", "Urbano", "Unisex"],
    isNew: true,
  },
  {
    id: "silueta",
    name: "Silueta",
    brandId: "nordvik",
    type: "recetados",
    style: "moderno",
    image: { src: "/images/products/silueta.jpg", alt: "Armazón metálico plateado y fino apoyado sobre una mesa blanca" },
    tagline: "Casi invisible, siempre presente",
    description:
      "Armazón metálico ultrafino de líneas geométricas. Tan liviano que se olvida que está puesto: ideal para uso prolongado.",
    features: ["Metal ultraliviano", "Plaquetas de silicona", "Apto para cristales recetados", "Varillas flexibles"],
    tags: ["Metal", "Minimal", "Liviano"],
  },
  {
    id: "onyx",
    name: "Onyx",
    brandId: "vento",
    type: "recetados",
    style: "moderno",
    image: { src: "/images/products/onyx.jpg", alt: "Armazón rectangular de acetato negro sobre fondo gris claro" },
    tagline: "Negro esencial",
    description:
      "Un rectangular de acetato negro con proporciones equilibradas. Aporta definición al rostro y funciona en cualquier contexto.",
    features: ["Acetato negro pulido", "Bisagras flex", "Apto para cristales recetados", "Calce cómodo"],
    tags: ["Rectangular", "Acetato", "Unisex"],
  },
  {
    id: "halo",
    name: "Halo",
    brandId: "nordvik",
    type: "recetados",
    style: "moderno",
    image: { src: "/images/products/halo.jpg", alt: "Armazón redondo de metal fino sobre fondo blanco" },
    tagline: "Líneas finas, mirada abierta",
    description:
      "Aros redondos de metal fino con un puente delicado. Un modelo luminoso que suaviza las facciones y aporta frescura.",
    features: ["Metal fino", "Forma redonda", "Apto para cristales recetados", "Plaquetas regulables"],
    tags: ["Redondo", "Metal", "Minimal"],
    isNew: true,
  },
  {
    id: "studio",
    name: "Studio",
    brandId: "maison-lumiere",
    type: "recetados",
    style: "clasico",
    image: { src: "/images/products/studio.jpg", alt: "Armazón browline con aros metálicos apoyado sobre un libro" },
    tagline: "Un ícono de escritorio",
    description:
      "El browline de siempre, con frente de acetato y aros metálicos. Transmite personalidad y es un aliado para largas jornadas de lectura.",
    features: ["Frente de acetato", "Aros metálicos", "Apto para cristales recetados", "Plaquetas regulables"],
    tags: ["Browline", "Retro", "Unisex"],
  },
  {
    id: "havana",
    name: "Havana",
    brandId: "maison-lumiere",
    type: "recetados",
    style: "clasico",
    image: { src: "/images/products/havana.jpg", alt: "Armazón redondo de acetato carey sobre fondo blanco" },
    tagline: "Carey de espíritu intelectual",
    description:
      "Redondo de acetato carey con un espesor medio que le da presencia. Un clásico cálido que nunca pasa de moda.",
    features: ["Acetato carey", "Forma panto", "Apto para cristales recetados", "Bisagras de cinco barriles"],
    tags: ["Panto", "Carey", "Unisex"],
  },
  {
    id: "cristal",
    name: "Cristal",
    brandId: "nordvik",
    type: "recetados",
    style: "moderno",
    image: { src: "/images/products/cristal.jpg", alt: "Armazón de acetato translúcido gris sobre fondo blanco" },
    tagline: "Transparencias contemporáneas",
    description:
      "Acetato translúcido en tono humo que aligera el rostro. Una opción actual y discreta para quienes buscan algo distinto.",
    features: ["Acetato translúcido", "Forma cuadrada suave", "Apto para cristales recetados", "Liviano"],
    tags: ["Translúcido", "Cuadrado", "Unisex"],
  },
];

function withBrand(item: Glasses): GlassesWithBrand {
  const { brandId, ...rest } = item;
  const brand = brandsById.get(brandId);
  if (!brand) throw new Error(`Marca desconocida "${brandId}" en el modelo "${item.id}"`);
  return { ...rest, brand };
}

/** Catálogo listo para renderizar, con la marca resuelta. */
export const catalog: GlassesWithBrand[] = glasses.map(withBrand);
