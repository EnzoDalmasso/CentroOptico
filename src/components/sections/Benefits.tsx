import { benefits } from "@/data/benefits";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Benefits() {
  return (
    <section aria-labelledby="beneficios-title" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="container-site">
        <SectionHeading
          id="beneficios-title"
          eyebrow="Por qué elegirnos"
          title="Una experiencia pensada para vos"
          tone="light"
          className="max-w-3xl"
        />

        <RevealGroup as="ul" className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map(({ id, title, description, icon: Icon }) => (
            <RevealItem as="li" key={id} className="group border-t border-white/15 pt-8">
              <Icon
                aria-hidden="true"
                strokeWidth={1.2}
                className="size-9 text-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1"
              />
              <h3 className="mt-8 font-display text-[1.75rem] leading-tight font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
