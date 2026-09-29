"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { business, navigation } from "@/config/business";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import { scrollToAnchor } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const sectionIds = navigation.map((item) => item.href.slice(1));

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setIsMenuOpen(false);
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useDialogBehavior(isMenuOpen, headerRef, closeMenu);

  const handleMobileNavigate = useCallback((href: string) => {
    setIsMenuOpen(false);
    // Espera a que se libere el bloqueo de scroll antes de desplazarse.
    window.setTimeout(() => scrollToAnchor(href), 60);
  }, []);

  const isSolid = isScrolled || isMenuOpen;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        isSolid ? "text-ink" : "text-white",
      )}
    >
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-sm text-ivory focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu activeId={activeId} onNavigate={handleMobileNavigate} />}
      </AnimatePresence>

      <div className="relative">
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 border-b bg-ivory/85 backdrop-blur-xl transition-[opacity,border-color] duration-500",
            isSolid ? "border-line/70 opacity-100" : "border-transparent opacity-0",
            isMenuOpen && "bg-ivory",
          )}
        />
        {!isSolid && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent"
          />
        )}

        <div className="container-site relative flex h-[var(--header-height)] items-center justify-between gap-6">
          <a href="#inicio" aria-label={`${business.name}, ir al inicio`} className="rounded-sm">
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => {
                const isActive = activeId === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative py-2 text-[0.8125rem] font-medium tracking-[0.06em] transition-opacity duration-300",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)]",
                        isActive ? "after:scale-x-100" : "opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <ButtonLink
                href={whatsappUrl}
                external
                size="sm"
                variant={isSolid ? "primary" : "light"}
                icon={<WhatsAppIcon size={15} />}
              >
                Consultar por WhatsApp
              </ButtonLink>
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp"
              className={cn(
                "flex size-11 items-center justify-center rounded-full transition-colors duration-300 sm:hidden",
                isSolid ? "bg-ink text-ivory" : "bg-white/15 text-white backdrop-blur-sm",
              )}
            >
              <WhatsAppIcon size={18} />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="relative flex size-11 items-center justify-center rounded-full lg:hidden"
            >
              <span aria-hidden="true" className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)]",
                    isMenuOpen ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px bg-current transition-all duration-500 ease-[var(--ease-out-expo)]",
                    isMenuOpen ? "top-1.5 w-6 -rotate-45" : "top-3 w-4",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
