"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import type { CatalogFilterId, GlassesWithBrand } from "@/types/catalog";
import { catalogFilters, filterCatalog } from "@/data/filters";
import { fadeUp, stagger } from "@/lib/motion";
import { FilterBar } from "./FilterBar";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

interface CatalogExplorerProps {
  items: GlassesWithBrand[];
  activeFilter: CatalogFilterId;
  onFilterChange?: (filter: CatalogFilterId) => void;
}

export function CatalogExplorer({ items, activeFilter, onFilterChange }: CatalogExplorerProps) {
  const [selected, setSelected] = useState<GlassesWithBrand | null>(null);

  const visibleItems = useMemo(() => filterCatalog(items, activeFilter), [items, activeFilter]);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        catalogFilters.map((filter) => [filter.id, filterCatalog(items, filter.id).length]),
      ) as Record<CatalogFilterId, number>,
    [items],
  );

  const handleClose = useCallback(() => setSelected(null), []);
  const activeLabel = catalogFilters.find((filter) => filter.id === activeFilter)?.label ?? "Todos";

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterBar
          filters={catalogFilters}
          active={activeFilter}
          counts={counts}
          onChange={(filter) => onFilterChange?.(filter)}
        />
        <p className="text-xs text-muted" aria-live="polite">
          {visibleItems.length} modelos · {activeLabel}
        </p>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <m.ul
          key={activeFilter}
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 xl:grid-cols-4"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          variants={stagger(0.05)}
        >
          {visibleItems.map((product) => (
            <m.li key={product.id} variants={fadeUp}>
              <ProductCard product={product} onSelect={setSelected} />
            </m.li>
          ))}
        </m.ul>
      </AnimatePresence>

      <AnimatePresence>
        {selected && <ProductModal key={selected.id} product={selected} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}
