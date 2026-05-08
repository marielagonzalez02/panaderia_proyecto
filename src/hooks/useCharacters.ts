import { useState } from "react";
import { type Character } from "../types/character";

const products: Character[] = [
  { id: 1, name: "Pan Blanco", price: 5, image: "🍞" },
  { id: 2, name: "Cuernito", price: 8, image: "🥐" },
  { id: 3, name: "Donut", price: 10, image: "🍩" },
  { id: 4, name: "Muffin", price: 12, image: "🧁" },
  { id: 5, name: "Baguette", price: 15, image: "🥖" },
  { id: 6, name: "Pay de Manzana", price: 20, image: "🥧" },
];

export const useCharacters = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return { filtered, search, setSearch };
};