import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Acceso permanente a WhatsApp. Sin JavaScript: la entrada se anima con CSS. */
export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex animate-float-in items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ivory px-4 py-2 text-xs font-semibold tracking-[0.04em] text-ink opacity-0 shadow-[0_8px_30px_-12px_rgba(22,21,20,0.35)] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        ¿Te ayudamos a elegir?
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-ink text-ivory shadow-[0_12px_32px_-12px_rgba(22,21,20,0.55)] ring-1 ring-ivory/20 transition-transform duration-300 ease-out group-hover:scale-105">
        <WhatsAppIcon size={24} />
        <span aria-hidden="true" className="absolute top-0.5 right-0.5 flex size-3.5 items-center justify-center rounded-full bg-ivory">
          <span className="size-2 rounded-full bg-[#25d366]" />
        </span>
      </span>
    </a>
  );
}
