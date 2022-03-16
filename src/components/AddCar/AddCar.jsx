import React, { useState } from "react";

const AddCar = (props) => {
  let { addCar } = props;
  //   console.log(addCar);
  //   console.log(props);
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  function save() {
    let newCar = {
      model,
      image,
      id: Date.now(),
    };
    addCar(newCar);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        type="text"
        placeholder="Model"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image"
      />
      <button onClick={save} className="btn btn-dark">
        Add car
      </button>
    </div>
  );
};

export default AddCar;
