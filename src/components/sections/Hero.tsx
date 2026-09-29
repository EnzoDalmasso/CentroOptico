import Image from "next/image";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const highlights = ["Anteojos de sol", "Recetados", "Lentes de contacto"];

/**
 * Hero renderizado en el servidor: la imagen es el LCP y se precarga.
 * Las animaciones de entrada son CSS puro para no depender de JavaScript.
 */
export function Hero() {
  const { hero } = business;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 animate-hero-zoom">
        <Image
          src={hero.image.src}
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-center"
        />
        {hero.video && (
          <video
            className="absolute inset-0 size-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero.image.src}
          >
            {hero.video.webm && <source src={hero.video.webm} type="video/webm" />}
            {hero.video.mp4 && <source src={hero.video.mp4} type="video/mp4" />}
          </video>
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/10 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/35 lg:to-transparent"
      />

      <div className="container-site flex flex-col justify-end pt-32 pb-28 lg:justify-center lg:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow flex animate-hero-in items-center gap-3 text-white/80 [animation-delay:150ms]">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 animate-hero-in font-display text-[3.25rem] leading-[0.95] font-medium tracking-[-0.015em] [animation-delay:300ms] sm:text-7xl lg:text-[5.75rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md animate-hero-in text-[0.9375rem] leading-relaxed text-white/80 [animation-delay:450ms] sm:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex animate-hero-in flex-col gap-3 [animation-delay:600ms] sm:flex-row">
            <ButtonLink href="#anteojos" variant="light" withArrow>
              Ver anteojos
            </ButtonLink>
            <ButtonLink href={getWhatsAppUrl()} external variant="ghost-light" icon={<WhatsAppIcon size={17} />}>
              Consultar por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="container-site flex items-end justify-between pb-7">
          <a
            href="#coleccion"
            aria-label="Ir a la colección"
            className="pointer-events-auto flex animate-hero-in flex-col items-center gap-3 text-white/70 transition-colors [animation-delay:900ms] hover:text-white"
          >
            <span aria-hidden="true" className="eyebrow text-[0.625rem]">Scroll</span>
            <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-white/20 sm:h-12">
              <span className="absolute inset-0 animate-scroll-line bg-white" />
            </span>
          </a>
          <ul className="hidden animate-hero-in gap-6 text-xs tracking-[0.12em] text-white/60 uppercase [animation-delay:900ms] md:flex md:pr-20">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-6">
                <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
