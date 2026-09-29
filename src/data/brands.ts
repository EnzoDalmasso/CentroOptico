import type { Brand } from "@/types/catalog";

/**
 * Marcas DEMO (ficticias) para la presentación.
 * Reemplazar por las marcas reales que trabaja la óptica.
 */
export const brands: Brand[] = [
  {
    id: "atelier-solare",
    name: "Atelier Solare",
    origin: "Italia",
    description: "Anteojos de sol de inspiración mediterránea, con metales livianos y lentes de tonos cálidos.",
  },
  {
    id: "nordvik",
    name: "Nordvik",
    origin: "Dinamarca",
    description: "Diseño escandinavo de líneas limpias: armazones finos, livianos y atemporales.",
  },
  {
    id: "maison-lumiere",
    name: "Maison Lumière",
    origin: "Francia",
    description: "Acetatos con carácter y siluetas icónicas reinterpretadas con un toque contemporáneo.",
  },
  {
    id: "vento",
    name: "Vento",
    origin: "Argentina",
    description: "Anteojos pensados para el uso diario, resistentes y con una estética urbana.",
  },
];

export const brandsById: ReadonlyMap<string, Brand> = new Map(brands.map((brand) => [brand.id, brand]));
