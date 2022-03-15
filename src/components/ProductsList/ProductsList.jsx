import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = (props) => {
  const state = useState();
  console.log(state);
  // const state = React.useState()
  let { cars } = props;
  console.log("This is props from productsList", cars);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px 30px",
        }}
      >
        <strong>Filters</strong>
        <input style={{ width: "290px" }} type="text" placeholder="Search..." />
      </div>

      <div className="cars-list">
        {cars.map((item) => (
          <ProductCard car={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
// rsc
