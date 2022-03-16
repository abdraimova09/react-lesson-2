import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  console.log(props);
  //   let { logo } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={props.logo} width="200px" alt="logo" />
      <Navbar
        cars={props.cars}
        selectedCarId={props.selectedCarId}
        setSelectedCarId={props.setSelectedCarId}
      />
    </div>
  );
};

export default Header;
// rsc
