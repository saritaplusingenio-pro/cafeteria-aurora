export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Cafés",
    items: [
      {
        name: "Espresso",
        description: "Café de especialidad, tueste medio.",
        price: "[precio]",
      },
      {
        name: "Cortado",
        description: "Espresso con un toque de leche vaporizada.",
        price: "[precio]",
      },
      {
        name: "Café con leche",
        description: "Espresso con leche vaporizada al estilo clásico.",
        price: "[precio]",
      },
      {
        name: "Flat white",
        description: "Doble espresso con microespuma sedosa.",
        price: "[precio]",
      },
    ],
  },
  {
    category: "Repostería",
    items: [
      {
        name: "Tarta de queso",
        description: "Receta artesanal horneada a diario.",
        price: "[precio]",
      },
      {
        name: "Croissant",
        description: "Mantequilla y hojaldre recién horneado.",
        price: "[precio]",
      },
      {
        name: "Bizcocho de limón",
        description: "Suave y aromático, hecho en casa.",
        price: "[precio]",
      },
    ],
  },
  {
    category: "Bebidas frías",
    items: [
      {
        name: "Cold brew",
        description: "Extracción en frío durante 12 horas.",
        price: "[precio]",
      },
      {
        name: "Limonada natural",
        description: "Limón exprimido y un toque de menta.",
        price: "[precio]",
      },
    ],
  },
];
