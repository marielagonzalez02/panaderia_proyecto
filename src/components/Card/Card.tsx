import type { Character } from "../../types/character";
import "./Card.css";

export const Card = ({ name, price, image }: Character) => {
  return (
    <div className="card">
      <div className="card-image">{image}</div>
      <h3>{name}</h3>
      <p>${price} MXN</p>
    </div>
  );
};