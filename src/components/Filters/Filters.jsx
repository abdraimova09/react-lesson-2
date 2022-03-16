import React from "react";
import "./Filters.css";

const Filters = (props) => {
  return (
    <div className="filters">
      <div>
        <button onClick={() => props.setFiltersVisibility(false)}>Close</button>
      </div>
    </div>
  );
};

export default Filters;
