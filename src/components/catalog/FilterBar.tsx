"use client";

import type { CatalogFilter, CatalogFilterId } from "@/types/catalog";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  filters: CatalogFilter[];
  active: CatalogFilterId;
  counts: Record<CatalogFilterId, number>;
  onChange: (filter: CatalogFilterId) => void;
}

export function FilterBar({ filters, active, counts, onChange }: FilterBarProps) {
  return (
    <div role="group" aria-label="Filtrar anteojos" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {filters.map((filter) => {
        const isActive = filter.id === active;
        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              "flex h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-[0.8125rem] font-semibold tracking-[0.04em] transition-colors duration-300",
              isActive
                ? "border-ink bg-ink text-ivory"
                : "border-line text-charcoal hover:border-ink/40 hover:bg-paper",
            )}
          >
            {filter.label}
            <span className={cn("text-[0.6875rem] tabular-nums", isActive ? "text-ivory/60" : "text-muted")}>
              {counts[filter.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
