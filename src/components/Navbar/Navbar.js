import React from "react";

const Navbar = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      {cars.map((item) => (
        <strong style={{ margin: "10px", cursor: "pointer" }} key={item.id}>
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
