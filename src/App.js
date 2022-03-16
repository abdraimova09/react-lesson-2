import React, { useState } from "react";

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import AddCar from "./components/AddCar/AddCar";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedCarId, setSelectedCarId] = useState(1);

  let logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  let initCars = [
    {
      model: "Model S",
      image:
        "https://www.ixbt.com/img/n1/news/2021/5/3/maxresdefault_0_large.png",
      id: 1,
    },
    {
      model: "Model Y",
      image:
        "https://www.ixbt.com/img/n1/news/2021/9/0/tesla%20model%20y_large.jpg",
      id: 2,
    },
    {
      model: "Model X",
      image: "https://electrodrivemoscow.ru/img/b3s1.jpg",
      id: 3,
    },
    {
      model: "Model 3",
      image:
        "https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",
      id: 4,
    },
  ];
  const [cars, setCars] = useState(initCars);
  function addCar(newCar) {
    let newCars = [newCar, ...cars];
    setCars(newCars);
  }
  return (
    <div>
      <Header
        logo={logo}
        cars={cars}
        selectedCarId={selectedCarId}
        setSelectedCarId={setSelectedCarId}
      />
      <AddCar addCar={addCar} />
      <ProductsList
        cars={cars}
        selectedCarId={selectedCarId}
        setSelectedCarId={setSelectedCarId}
      />
    </div>
  );
};

export default App;
// rsc
