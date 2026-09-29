import { Suspense } from "react";
import { catalog } from "@/data/glasses";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CatalogController } from "@/components/catalog/CatalogController";
import { CatalogExplorer } from "@/components/catalog/CatalogExplorer";

export function Catalog() {
  return (
    <section id="anteojos" aria-labelledby="anteojos-title" className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          id="anteojos-title"
          eyebrow="Catálogo"
          title="Nuestros anteojos"
          description="Una selección de modelos para inspirarte. Consultanos por disponibilidad, colores y opciones de cristales: te asesoramos para que elijas con tranquilidad."
          className="mb-12 lg:mb-14"
        />

        {/* El HTML estático muestra el catálogo completo; al hidratar se aplica el filtro de la URL. */}
        <Suspense fallback={<CatalogExplorer items={catalog} activeFilter="todos" />}>
          <CatalogController items={catalog} />
        </Suspense>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
          <p className="max-w-lg font-display text-2xl leading-snug sm:text-3xl">
            ¿Buscás algo en particular? En el local tenemos muchos más modelos.
          </p>
          <ButtonLink href={getWhatsAppUrl()} external variant="outline" icon={<WhatsAppIcon size={17} />}>
            Consultar por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
