import { business } from "@/config/business";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /**
   * `compact`: sólo "Centro Óptico" (header).
   * `full`: "Centro Óptico" + nombre del negocio (footer).
   */
  variant?: "compact" | "full";
}

/** Wordmark tipográfico. Hereda el color del contenedor. */
export function Logo({ className, variant = "compact" }: LogoProps) {
  if (variant === "compact") {
    return (
      <span className={cn("font-display text-[1.625rem] leading-none font-medium tracking-[0.01em]", className)}>
        Centro Óptico
      </span>
    );
  }

  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="eyebrow text-xs opacity-70">Centro Óptico</span>
      <span className="mt-2 font-display text-5xl font-medium tracking-[0.01em] sm:text-6xl">{business.shortName}</span>
    </span>
  );
}
