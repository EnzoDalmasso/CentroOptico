import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "dark",
  className,
  children,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p className={cn("eyebrow flex items-center gap-3", isLight ? "text-accent-soft" : "text-accent-strong")}>
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-display text-[2.5rem] leading-[1.02] font-medium tracking-[-0.01em] sm:text-5xl lg:text-6xl",
          isLight ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-[0.9375rem] leading-relaxed sm:text-base",
            isLight ? "text-ivory/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}
