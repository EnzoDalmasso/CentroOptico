"use client";

import { useRef } from "react";
import Image from "next/image";
import * as m from "motion/react-m";
import { Check, X } from "lucide-react";
import type { GlassesWithBrand } from "@/types/catalog";
import { styleLabels, typeLabels } from "@/data/filters";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import { easeOut } from "@/lib/motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

interface ProductModalProps {
  product: GlassesWithBrand;
  onClose: () => void;
}

/** Ficha del modelo: bottom sheet en mobile, modal centrado en desktop. */
export function ProductModal({ product, onClose }: ProductModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useDialogBehavior(true, panelRef, onClose);

  const titleId = `modelo-${product.id}-titulo`;
  const whatsappUrl = getWhatsAppUrl({
    kind: "product",
    productName: product.name,
    brandName: product.brand.name,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-8">
      <m.div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92svh] w-full flex-col overflow-hidden rounded-t-2xl bg-ivory shadow-2xl md:max-h-[min(88svh,46rem)] md:max-w-5xl md:flex-row md:rounded-md"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } }}
        exit={{ opacity: 0, y: 32, transition: { duration: 0.25, ease: "easeIn" } }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ficha del modelo"
          data-autofocus=""
          className="absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-full bg-ivory/90 text-ink backdrop-blur-sm transition-colors hover:bg-white"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="overflow-y-auto md:flex md:w-full md:overflow-hidden">
          <div className="relative aspect-[4/3] w-full shrink-0 bg-paper md:aspect-auto md:w-1/2">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 768px) 512px, 100vw"
              style={{ objectPosition: product.image.position }}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col px-6 pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:px-10 md:w-1/2 md:overflow-y-auto md:py-12">
            <p className="eyebrow text-accent-strong">{product.brand.name}</p>
            <h3 id={titleId} className="mt-3 font-display text-5xl leading-none font-medium">
              {product.name}
            </h3>
            <p className="mt-3 text-sm text-muted">{product.tagline}</p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Categoría">
              {[typeLabels[product.type], styleLabels[product.style]].map((label) => (
                <li key={label} className="rounded-full border border-line px-3 py-1 text-xs text-charcoal">
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[0.9375rem] leading-relaxed text-charcoal">{product.description}</p>

            <div className="mt-7 border-t border-line pt-6">
              <h4 className="eyebrow text-muted">Características</h4>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs text-muted">{product.tags.join(" · ")}</p>

            {/* En mobile el CTA queda fijo al pie del sheet para estar siempre a mano. */}
            <div className="sticky bottom-0 -mx-6 mt-8 flex flex-col gap-3 border-t border-line bg-ivory/95 px-6 pt-4 pb-1 backdrop-blur-sm sm:-mx-10 sm:px-10 md:static md:mx-0 md:mt-auto md:border-0 md:bg-transparent md:px-0 md:pt-8 md:pb-0 md:backdrop-blur-none">
              <ButtonLink href={whatsappUrl} external icon={<WhatsAppIcon size={18} />} className="w-full">
                Consultar por WhatsApp
              </ButtonLink>
              <p className="text-center text-xs leading-relaxed text-muted">
                Te contamos colores disponibles, opciones de cristales y cuándo podés venir a probártelos.
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
