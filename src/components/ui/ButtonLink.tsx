import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "ghost-light" | "accent";
type Size = "md" | "sm";

interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "children"> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en otra pestaña con `rel` seguro. */
  external?: boolean;
  /** Ícono a la izquierda del texto. */
  icon?: ReactNode;
  /** Flecha animada a la derecha. */
  withArrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-charcoal",
  accent: "bg-accent-strong text-ivory hover:bg-ink",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  light: "bg-ivory text-ink hover:bg-white",
  "ghost-light": "border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.8125rem] sm:h-[3.25rem] sm:px-7",
  sm: "h-10 px-5 text-xs",
};

/** Enlace con apariencia de botón. Todas las acciones del sitio navegan, por eso es un `<a>`. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  withArrow = false,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/btn inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.04em] whitespace-nowrap transition-colors duration-300 ease-out",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        />
      )}
    </a>
  );
}
