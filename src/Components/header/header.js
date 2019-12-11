import React from "react";
import "./header.scss";
import List from "./buttons/List";
function Header() {
  return (
    <div className="Header center">
      <span>RTabasca</span>
      <List/>
      <p>Curriculum</p>
    </div>
  );
}

export default Header;
