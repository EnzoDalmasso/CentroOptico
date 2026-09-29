import { BadgeCheck, Gem, Layers, UserRoundCheck } from "lucide-react";
import type { Benefit } from "@/types/catalog";

export const benefits: Benefit[] = [
  {
    id: "atencion",
    title: "Atención personalizada",
    description: "Te escuchamos y te dedicamos el tiempo que necesitás, sin apuros.",
    icon: UserRoundCheck,
  },
  {
    id: "variedad",
    title: "Variedad de estilos",
    description: "Clásicos, modernos, de sol y recetados: opciones para cada rostro y personalidad.",
    icon: Layers,
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento profesional",
    description: "Te orientamos en la elección del armazón y los cristales más adecuados para vos.",
    icon: BadgeCheck,
  },
  {
    id: "calidad",
    title: "Calidad y confianza",
    description: "Trabajamos con materiales seleccionados y un seguimiento cercano de cada trabajo.",
    icon: Gem,
  },
];
