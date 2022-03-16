import React from "react";

const Navbar = ({ cars, selectedCarId, setSelectedCarId }) => {
  console.log(cars);
  return (
    <div>
      {cars.map((item) => (
        <strong
          onClick={() => setSelectedCarId(item.id)}
          style={
            selectedCarId === item.id
              ? { margin: "10px", cursor: "pointer", color: "black" }
              : { margin: "10px", cursor: "pointer", color: "grey" }
          }
          key={item.id}
        >
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
