import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  let { car, selectedCarId, setSelectedCarId } = props;
  return (
    <div
      className={selectedCarId === car.id ? "card-active" : "card"}
      onClick={() => setSelectedCarId(car.id)}
    >
      <h2>{car.model}</h2>
      <img src={car.image} alt="car" className="car-image" />
    </div>
  );
};

export default ProductCard;
