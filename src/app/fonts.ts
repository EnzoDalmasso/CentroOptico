import { Cormorant_Garamond, Manrope } from "next/font/google";

/** Tipografía editorial para títulos. */
export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-brand-serif",
});

/** Tipografía de lectura para textos y navegación. */
export const fontSans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brand-sans",
});
