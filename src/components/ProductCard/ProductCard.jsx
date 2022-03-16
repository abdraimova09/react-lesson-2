import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  let {
    car,
    selectedCarId,
    setSelectedCarId,
    deleteCar,
    setCarToEdit,
    setShow,
  } = props;
  return (
    <div
      className={selectedCarId === car.id ? "card-active" : "card"}
      onClick={() => setSelectedCarId(car.id)}
    >
      <h2>{car.model}</h2>
      <img src={car.image} alt="car" className="car-image" />
      <br />
      <div>
        <button onClick={() => deleteCar(car.id)} className="btn btn-danger">
          Delete
        </button>
        <button
          onClick={() => {
            setCarToEdit(car);
            setShow(true);
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
