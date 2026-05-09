import { useState } from "react";
import  { type Character } from "../types/character";

const initialProducts: Character[] = [
  { id: 1, nombre: "Muffin de Blueberries", descripcion: "Esponjoso con arándanos frescos", precio: 40, categoria: "Pastel", image: "https://www.kingarthurbaking.com/sites/default/files/2022-12/KABC_Quick-Breads_Blueberry-Muffin_08304.jpg" },
  { id: 2, nombre: "Croissant", descripcion: "Hojaldrado y crujiente", precio: 45, categoria: "Pan", image: "https://comedera.com/wp-content/uploads/sites/9/2022/02/Croissant-medialunas-cachitos.jpg" },
  { id: 3, nombre: "Concha", descripcion: "Tradicional mexicana", precio: 30, categoria: "Pan", image: "https://www.shfb.org/wp-content/uploads/2023/05/Conchas.jpg" },
  { id: 4, nombre: "Dona", descripcion: "Con glaseado de vainilla", precio: 40, categoria: "Pastel", image: "https://www.accionalimenticia.com.mx/wp-content/uploads/2022/11/dona-pan-reposteria.jpg" },
  { id: 5, nombre: "Pay de Manzana", descripcion: "Pay de manzana tradicional", precio: 70, categoria: "Pastel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSlqmUN5WHulaSb9YFAD9CKamLbb3lNplOg&s" },
];

export const useCharacters = () => {
  const [products, setProducts] = useState<Character[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState<string>("Todas");

  const filtered = products.filter((p) => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoria === "Todas" || p.categoria === categoria;
    return matchSearch && matchCat;
  });

  const total = products.length;
  const promedio = (products.reduce((acc, p) => acc + p.precio, 0) / total).toFixed(2);

  const agregar = (p: Omit<Character, "id">) => {
    const newId = products.length ? Math.max(...products.map(x => x.id)) + 1 : 1;
    setProducts([...products, { ...p, id: newId }]);
  };

  const eliminar = (id: number) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const editar = (updated: Character) => {
    setProducts(products.map(p => p.id === updated.id ? updated : p));
  };

  return { filtered, search, setSearch, categoria, setCategoria, total, promedio, agregar, eliminar, editar };
};