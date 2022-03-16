import React, { useState } from "react";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = (props) => {
  // useState() - hook, который возвращает массив, в котором есть состояние и функция, которая меняет это состояние
  // state - состояние
  // setState - функция, которая может изменить это состояние
  // const [state, setState] = useState(1000);
  // console.log("use state", state);
  // const state = React.useState()
  const [filtersVisibility, setFiltersVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // console.log(filtersVisibility);
  let { cars, selectedCarId, setSelectedCarId } = props;
  // console.log("This is props from productsList", cars);
  // console.log(searchValue);
  // console.log(selectedCarId);
  // поиск на фронтенде
  let carsList = cars.filter((item) =>
    item.model.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      {filtersVisibility ? (
        <Filters setFiltersVisibility={setFiltersVisibility} />
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px 30px",
        }}
      >
        <strong onClick={() => setFiltersVisibility(true)}>Filters</strong>
        <input
          value={searchValue}
          style={{ width: "290px" }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="cars-list">
        {carsList.map((item) => (
          <ProductCard
            car={item}
            key={item.id}
            selectedCarId={selectedCarId}
            setSelectedCarId={setSelectedCarId}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
// rsc
