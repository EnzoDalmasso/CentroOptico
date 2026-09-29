"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { GlassesWithBrand } from "@/types/catalog";
import { styleLabels, typeShortLabels } from "@/data/filters";

interface ProductCardProps {
  product: GlassesWithBrand;
  onSelect: (product: GlassesWithBrand) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      aria-haspopup="dialog"
      aria-label={`Ver modelo ${product.name} de ${product.brand.name}`}
      className="group flex w-full flex-col text-left"
    >
      <span className="relative block aspect-[4/5] w-full overflow-hidden rounded-sm bg-paper">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw"
          style={{ objectPosition: product.image.position }}
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.18em] text-ink uppercase backdrop-blur-sm">
            Nuevo
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute inset-x-3 bottom-3 hidden translate-y-2 items-center justify-between rounded-full bg-ivory/95 px-4 py-2.5 text-xs font-semibold tracking-[0.04em] text-ink opacity-0 backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:flex"
        >
          Ver modelo
          <ArrowRight className="size-4" />
        </span>
      </span>

      <span className="mt-4 flex flex-col gap-1">
        <span className="eyebrow text-[0.625rem] text-muted">{product.brand.name}</span>
        <span className="font-display text-2xl leading-tight font-medium text-ink sm:text-[1.75rem]">{product.name}</span>
        <span className="text-[0.8125rem] leading-snug text-muted">{product.tagline}</span>
        <span className="mt-2 flex items-center justify-between gap-2 border-t border-line pt-3 text-xs">
          <span className="hidden text-muted sm:inline">{typeShortLabels[product.type]} · {styleLabels[product.style]}</span>
          <span className="flex items-center gap-1 font-semibold text-ink lg:hidden">
            Ver modelo <ArrowRight aria-hidden="true" className="size-3.5" />
          </span>
        </span>
      </span>
    </button>
  );
}
