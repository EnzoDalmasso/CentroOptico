import { Contact, Glasses, HeartHandshake, ScanEye, Sun, Wrench } from "lucide-react";
import type { Service } from "@/types/catalog";

export const services: Service[] = [
  {
    id: "recetados",
    title: "Anteojos recetados",
    description: "Armamos tus anteojos a partir de la receta de tu profesional, con cristales acordes a tu uso diario.",
    icon: Glasses,
  },
  {
    id: "sol",
    title: "Anteojos de sol",
    description: "Modelos con protección UV para disfrutar del sol con estilo, también con aumento.",
    icon: Sun,
  },
  {
    id: "contacto",
    title: "Lentes de contacto",
    description: "Te acompañamos a elegir y usar tus lentes de contacto según la indicación profesional.",
    icon: ScanEye,
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento personalizado",
    description: "Te ayudamos a encontrar el armazón que mejor acompaña tu rostro, tu estilo y tu rutina.",
    icon: HeartHandshake,
  },
  {
    id: "adaptacion",
    title: "Control y adaptación",
    description: "Verificamos el calce y te acompañamos en los primeros días con tus anteojos nuevos.",
    icon: Contact,
  },
  {
    id: "ajustes",
    title: "Reparaciones y ajustes",
    description: "Ajustes, cambio de plaquetas y tornillos para que tus anteojos sigan como el primer día.",
    icon: Wrench,
  },
];
