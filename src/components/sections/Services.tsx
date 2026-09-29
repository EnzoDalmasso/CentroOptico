import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-24 sm:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="servicios-title"
              eyebrow="Servicios"
              title={
                <>
                  Más que <em className="text-accent-strong">anteojos</em>
                </>
              }
              description="Te acompañamos antes, durante y después de elegir tus anteojos, con la misma dedicación en cada etapa."
            >
              <ButtonLink
                href={getWhatsAppUrl()}
                external
                variant="outline"
                icon={<WhatsAppIcon size={17} />}
                className="mt-3 self-start"
              >
                Hacer una consulta
              </ButtonLink>
            </SectionHeading>
          </div>
        </div>

        <RevealGroup as="ul" className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:col-span-8">
          {services.map(({ id, title, description, icon: Icon }, index) => (
            <RevealItem as="li" key={id} className="group relative bg-ivory p-7 transition-colors duration-500 hover:bg-paper sm:p-9">
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-full border border-line text-ink transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-ivory">
                  <Icon aria-hidden="true" strokeWidth={1.4} className="size-6" />
                </span>
                <span className="font-display text-lg text-muted tabular-nums">0{index + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-[1.75rem] leading-tight font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
