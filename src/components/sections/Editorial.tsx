import Image from "next/image";
import { business } from "@/config/business";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Sección "Nosotros": bloque editorial asimétrico. */
export function Editorial() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="overflow-hidden bg-sand/60 py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="relative lg:col-span-6 lg:col-start-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:w-[85%] lg:w-full">
            <Image
              src="/images/editorial/mirada.jpg"
              alt="Mujer con anteojos de armazón negro en un retrato de estudio"
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="absolute right-0 -bottom-10 hidden aspect-[4/3] w-[45%] overflow-hidden rounded-sm border-8 border-sand sm:block lg:-right-16 lg:w-[48%]">
            <Image
              src="/images/editorial/local.jpg"
              alt="Exhibidor de anteojos iluminado en una óptica"
              fill
              sizes="(min-width: 1024px) 22vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent-strong">
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
              Nosotros
            </p>
            <h2
              id="nosotros-title"
              className="mt-6 font-display text-[2.75rem] leading-[0.98] font-medium tracking-[-0.01em] sm:text-6xl lg:text-7xl"
            >
              Tu mirada también <em className="text-accent-strong">habla de vos.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-charcoal sm:text-base">
              <p>
                Elegir anteojos es elegir cómo te ves y cómo te sentís todos los días. Por eso nos tomamos el tiempo de
                conocerte: tu rutina, tu estilo y lo que buscás.
              </p>
              <p>
                Te ayudamos a encontrar armazones que acompañen tu rostro, se sientan cómodos desde el primer momento y
                reflejen tu personalidad.
              </p>
            </div>
            <blockquote className="mt-10 border-l border-accent pl-6">
              <p className="font-display text-2xl leading-snug italic sm:text-[1.75rem]">“{business.tagline}”</p>
              <footer className="eyebrow mt-4 text-muted">{business.name}</footer>
            </blockquote>
            <ButtonLink href="#contacto" variant="primary" withArrow className="mt-10">
              Visitanos
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
