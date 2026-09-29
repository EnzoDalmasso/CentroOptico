"use client";

import type { MouseEvent } from "react";
import * as m from "motion/react-m";
import { business, navigation } from "@/config/business";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

interface MobileMenuProps {
  activeId: string | null;
  onNavigate: (href: string) => void;
}

export function MobileMenu({ activeId, onNavigate }: MobileMenuProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <m.div
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      className="fixed inset-0 flex flex-col overflow-y-auto bg-ivory pt-[var(--header-height)] text-ink lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
    >
      <nav aria-label="Menú móvil" className="container-site flex flex-1 flex-col justify-center py-10">
        <m.ul
          className="flex flex-col"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
          }}
        >
          {navigation.map((item, index) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <m.li
                key={item.href}
                className="border-b border-line/80"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
                }}
              >
                <a
                  href={item.href}
                  onClick={(event) => handleClick(event, item.href)}
                  aria-current={isActive ? "location" : undefined}
                  data-autofocus={index === 0 ? "" : undefined}
                  className="group flex items-baseline gap-5 py-4"
                >
                  <span className="w-6 text-xs font-medium text-muted tabular-nums">0{index + 1}</span>
                  <span
                    className={cn(
                      "font-display text-[2.5rem] leading-none font-medium transition-colors duration-300",
                      isActive ? "text-accent-strong" : "group-hover:text-accent-strong",
                    )}
                  >
                    {item.label}
                  </span>
                </a>
              </m.li>
            );
          })}
        </m.ul>
      </nav>

      <m.div
        className="container-site flex flex-col gap-5 pb-[max(2rem,env(safe-area-inset-bottom))]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease: easeOut } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        <ButtonLink href={getWhatsAppUrl()} external icon={<WhatsAppIcon size={18} />} className="w-full">
          Consultar por WhatsApp
        </ButtonLink>
        <div className="flex items-center justify-between text-sm text-muted">
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 transition-colors hover:text-ink"
          >
            <InstagramIcon size={18} />
            {business.instagram.handle}
          </a>
        </div>
      </m.div>
    </m.div>
  );
}
