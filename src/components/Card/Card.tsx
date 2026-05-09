import type { Character } from "../../types/character";
import "./Card.css";

type Props = Character & {
  onEliminar: (id: number) => void;
  onEditar: (p: Character) => void;
};

export const Card = ({ id, nombre, descripcion, precio, categoria, image, onEliminar, onEditar }: Props) => {
  return (
    <div className="card">
      <img src={image} alt={nombre} className="card-image" />
      <div className="card-body">
        <div className="card-top">
          <span className="card-cat">{categoria}</span>
          <span className="card-price">${precio}.00</span>
        </div>
        <h3>{nombre}</h3>
        <p className="card-desc">{descripcion}</p>
      </div>
      <div className="card-buttons">
        <button onClick={() => onEditar({ id, nombre, descripcion, precio, categoria, image })}>✏️ Editar</button>
        <button className="btn-delete" onClick={() => onEliminar(id)}>🗑️ Eliminar</button>
      </div>
    </div>
  );
};
