import type { LucideIcon } from "lucide-react";

/** Tipo de producto: define para qué se usa el anteojo. */
export type GlassesType = "sol" | "recetados";

/** Línea estética del diseño. */
export type GlassesStyle = "clasico" | "moderno";

/** Identificadores de los filtros disponibles en el catálogo. */
export type CatalogFilterId = "todos" | GlassesType | GlassesStyle;

export interface Brand {
  id: string;
  name: string;
  origin: string;
  description: string;
}

export interface CatalogImage {
  src: string;
  alt: string;
  /** Posición de recorte para `object-position` (ej. "50% 40%"). */
  position?: string;
}

export interface Glasses {
  id: string;
  name: string;
  brandId: Brand["id"];
  type: GlassesType;
  style: GlassesStyle;
  image: CatalogImage;
  /** Frase corta que acompaña al nombre en la card. */
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  /** Destacado con un indicador sutil en la card. */
  isNew?: boolean;
}

/** Glasses con la marca ya resuelta, lista para renderizar. */
export interface GlassesWithBrand extends Omit<Glasses, "brandId"> {
  brand: Brand;
}

export interface CatalogFilter {
  id: CatalogFilterId;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: CatalogImage;
  /** Filtro que se aplica al catálogo al elegir la categoría. */
  filter: CatalogFilterId;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InstagramPost {
  id: string;
  image: CatalogImage;
  caption: string;
}
