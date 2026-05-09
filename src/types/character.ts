export type Character = {
    id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: "Pan" | "Pastel" | "Galletas" | "Bebida";
  image: string;
};