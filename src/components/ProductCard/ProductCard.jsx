import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  let { car } = props;
  return (
    <div>
      <h2>{car.model}</h2>
      <img src={car.image} alt="car" className="car-image" />
    </div>
  );
};

export default ProductCard;
