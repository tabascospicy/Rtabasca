import React from "react";
import "./Languajes.scss";
import Spanish from "./Spanish/Spanish";
import English from "./English/English"
function Languajes(props) {
  return (
    <div className="Blog-text">
      <h2>Languajes</h2>
      <div className="Languajes">
        <Spanish />
        <English />
      </div>
    </div>
  );
}

export default Languajes;
