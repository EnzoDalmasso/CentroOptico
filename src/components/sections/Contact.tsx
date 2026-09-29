import type { ReactNode } from "react";
import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";
import { business } from "@/config/business";
import { getDirectionsUrl } from "@/lib/maps";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

function PlaceholderBadge() {
  return (
    <span className="ml-2 inline-flex rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[0.625rem] font-semibold tracking-[0.12em] text-accent-strong uppercase">
      A confirmar
    </span>
  );
}

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="flex gap-5 border-t border-line py-6">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-accent-strong">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <dt className="eyebrow text-muted">{label}</dt>
        <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{children}</dd>
      </div>
    </div>
  );
}

export function Contact() {
  const { location, hours, whatsapp, instagram } = business;

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-line bg-ivory py-24 sm:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contacto"
            title={
              <>
                Te esperamos en <em className="text-accent-strong">{business.shortName}</em>
              </>
            }
            description="Acercate a probarte tus próximos anteojos o escribinos: te respondemos a la brevedad."
          />

          <Reveal>
            <dl className="mt-10 border-b border-line">
              <ContactItem icon={<MapPin aria-hidden="true" className="size-5" strokeWidth={1.5} />} label="Dirección">
                <span className="font-semibold">{business.name}</span>
                <br />
                {location.address}, {location.city}
                {location.isPlaceholder && <PlaceholderBadge />}
              </ContactItem>

              <ContactItem icon={<Clock aria-hidden="true" className="size-5" strokeWidth={1.5} />} label="Horarios">
                <ul className="space-y-1">
                  {hours.schedule.map((slot) => (
                    <li key={slot.days} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="font-semibold sm:w-36">{slot.days}</span>
                      <span className="text-charcoal">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
                {hours.isPlaceholder && (
                  <p className="mt-2 text-xs text-muted">
                    {hours.note}
                    <PlaceholderBadge />
                  </p>
                )}
              </ContactItem>

              <ContactItem icon={<WhatsAppIcon size={19} />} label="WhatsApp">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {whatsapp.displayNumber}
                </a>
              </ContactItem>

              <ContactItem icon={<InstagramIcon size={19} />} label="Instagram">
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {instagram.handle}
                </a>
              </ContactItem>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={getWhatsAppUrl()} external icon={<WhatsAppIcon size={17} />}>
                Consultar por WhatsApp
              </ButtonLink>
              <ButtonLink
                href={getDirectionsUrl()}
                external
                variant="outline"
                icon={<Navigation aria-hidden="true" className="size-4" strokeWidth={1.8} />}
              >
                Cómo llegar
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-sand"
            aria-label="Abrir la ubicación en Google Maps"
          >
            <Image
              src="/images/editorial/visita.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
              <span>
                <span className="eyebrow block text-white/70">Visitanos</span>
                <span className="mt-2 block font-display text-3xl leading-tight sm:text-4xl">Probate tus próximos anteojos</span>
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
                <MapPin aria-hidden="true" className="size-5" strokeWidth={1.6} />
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
