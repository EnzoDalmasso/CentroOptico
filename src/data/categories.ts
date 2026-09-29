import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    id: "sol",
    name: "Anteojos de sol",
    description: "Protección y estilo para cada día",
    image: { src: "/images/categories/sol.jpg", alt: "Mujer con anteojos de sol negros y traje oscuro", position: "50% 25%" },
    filter: "sol",
  },
  {
    id: "recetados",
    name: "Anteojos recetados",
    description: "Ver bien, verse mejor",
    image: { src: "/images/categories/recetados.jpg", alt: "Mujer sonriente con anteojos de armazón negro", position: "50% 30%" },
    filter: "recetados",
  },
  {
    id: "armazones",
    name: "Armazones",
    description: "Metal, acetato y materiales livianos",
    image: { src: "/images/categories/armazones.jpg", alt: "Armazón negro apoyado sobre una mesa de madera", position: "50% 70%" },
    filter: "todos",
  },
  {
    id: "clasicos",
    name: "Diseños clásicos",
    description: "Siluetas que no pasan de moda",
    image: { src: "/images/categories/clasicos.jpg", alt: "Hombre con anteojos y suéter tejido marrón", position: "50% 25%" },
    filter: "clasico",
  },
  {
    id: "modernos",
    name: "Diseños modernos",
    description: "Formas y colores con actitud",
    image: { src: "/images/categories/modernos.jpg", alt: "Mujer con anteojos de armazón blanco", position: "50% 25%" },
    filter: "moderno",
  },
];
