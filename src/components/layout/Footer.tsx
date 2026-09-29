import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Logo } from "./Logo";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Anteojos", href: "#anteojos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-20 pb-28 text-ivory sm:pb-12 lg:pt-28">
      <div className="container-site">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Logo variant="full" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              {business.tagline} Anteojos de sol, recetados y lentes de contacto con atención personalizada.
            </p>
          </div>

          <nav aria-label="Pie de página" className="lg:col-span-3">
            <p className="eyebrow text-ivory/40">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={business.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-ivory/40">¿Tenés una consulta?</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              Escribinos y te ayudamos a elegir tus próximos anteojos.
            </p>
            <ButtonLink
              href={getWhatsAppUrl()}
              external
              variant="light"
              icon={<WhatsAppIcon size={16} />}
              className="mt-6"
            >
              Consultar por WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName}. Todos los derechos reservados.
          </p>
          <p className="sm:pr-20">Imágenes ilustrativas. Modelos y marcas de demostración.</p>
        </div>
      </div>
    </footer>
  );
}
