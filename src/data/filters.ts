import type { CatalogFilter, CatalogFilterId, GlassesWithBrand } from "@/types/catalog";

export const catalogFilters: CatalogFilter[] = [
  { id: "todos", label: "Todos" },
  { id: "sol", label: "Sol" },
  { id: "recetados", label: "Recetados" },
  { id: "clasico", label: "Clásicos" },
  { id: "moderno", label: "Modernos" },
];

const filterIds = new Set<string>(catalogFilters.map((filter) => filter.id));

export function isCatalogFilterId(value: string | null | undefined): value is CatalogFilterId {
  return value != null && filterIds.has(value);
}

export function filterCatalog(items: GlassesWithBrand[], filter: CatalogFilterId): GlassesWithBrand[] {
  if (filter === "todos") return items;
  return items.filter((item) => item.type === filter || item.style === filter);
}

export const typeLabels: Record<GlassesWithBrand["type"], string> = {
  sol: "Anteojos de sol",
  recetados: "Anteojos recetados",
};

export const typeShortLabels: Record<GlassesWithBrand["type"], string> = {
  sol: "Sol",
  recetados: "Recetado",
};

export const styleLabels: Record<GlassesWithBrand["style"], string> = {
  clasico: "Clásico",
  moderno: "Moderno",
};
