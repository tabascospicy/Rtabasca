import React, { useState } from "react";
import Button from "./button";
import "./List.scss";
function List() {
  const [background, setBackground] = useState("Light");
  return (
    <div className="center List-container">
      <Button name={background} isSelected={background} setBackground={setBackground}/>
    </div>
  );
}

export default List;
