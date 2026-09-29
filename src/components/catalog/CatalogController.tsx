"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import type { CatalogFilterId, GlassesWithBrand } from "@/types/catalog";
import { isCatalogFilterId } from "@/data/filters";
import { CatalogExplorer } from "./CatalogExplorer";

const FILTER_PARAM = "filtro";

/**
 * Sincroniza el filtro con la URL (`?filtro=sol`), así las categorías de la
 * colección pueden enlazar a un filtro y el estado se puede compartir.
 */
export function CatalogController({ items }: { items: GlassesWithBrand[] }) {
  const searchParams = useSearchParams();
  const param = searchParams.get(FILTER_PARAM);
  const activeFilter: CatalogFilterId = isCatalogFilterId(param) ? param : "todos";

  const handleFilterChange = useCallback(
    (filter: CatalogFilterId) => {
      const params = new URLSearchParams(searchParams.toString());
      if (filter === "todos") params.delete(FILTER_PARAM);
      else params.set(FILTER_PARAM, filter);

      const query = params.toString();
      const url = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
      // Next.js sincroniza `useSearchParams` con replaceState nativo (sin recargar ni scrollear).
      window.history.replaceState(null, "", url);
    },
    [searchParams],
  );

  return <CatalogExplorer items={items} activeFilter={activeFilter} onFilterChange={handleFilterChange} />;
}
