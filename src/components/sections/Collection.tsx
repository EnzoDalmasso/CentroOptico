import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import type { Category } from "@/types/catalog";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

function categoryHref(category: Category): string {
  return category.filter === "todos" ? "/#anteojos" : `/?filtro=${category.filter}#anteojos`;
}

function CategoryCard({ category, featured }: { category: Category; featured: boolean }) {
  return (
    <Link
      href={categoryHref(category)}
      className="group relative block h-full overflow-hidden rounded-sm bg-sand"
    >
      <Image
        src={category.image.src}
        alt={category.image.alt}
        fill
        sizes={featured ? "(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 80vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"}
        style={{ objectPosition: category.image.position }}
        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-700 group-hover:opacity-90"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
        <div>
          <h3 className={cn("font-display leading-none font-medium", featured ? "text-4xl sm:text-5xl" : "text-3xl")}>
            {category.name}
          </h3>
          <p className="mt-2 text-sm text-white/75 transition-all duration-500 ease-out lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            {category.description}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 transition-all duration-500 ease-out group-hover:border-white group-hover:bg-white group-hover:text-ink"
        >
          <ArrowUpRight className="size-5 transition-transform duration-500 ease-out group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}

export function Collection() {
  return (
    <section id="coleccion" aria-labelledby="coleccion-title" className="py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="coleccion-title"
            eyebrow="Colección"
            title={
              <>
                Descubrí nuestra <em className="text-accent-strong">colección</em>
              </>
            }
          />
          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted lg:pb-2">
            Elegí una categoría para explorar modelos. Cada diseño se puede probar en el local con asesoramiento personalizado.
          </p>
        </div>
      </div>

      {/* Mobile: carrusel nativo con scroll-snap. Desktop: grilla editorial. */}
      <RevealGroup
        as="ul"
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 sm:scroll-px-8 sm:px-8 md:container-site md:grid md:auto-rows-[18rem] md:grid-cols-2 md:gap-4 md:overflow-visible lg:mt-16 lg:auto-rows-[20rem] lg:grid-cols-4"
      >
        {categories.map((category, index) => {
          const featured = index === 0;
          return (
            <RevealItem
              as="li"
              key={category.id}
              className={cn(
                "aspect-[3/4] w-[78vw] max-w-sm shrink-0 snap-start md:aspect-auto md:w-auto md:max-w-none",
                featured && "md:col-span-2 md:row-span-2",
              )}
            >
              <CategoryCard category={category} featured={featured} />
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
