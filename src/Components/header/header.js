import React from "react";
import "./header.scss";
import List from "./buttons/List";
function Header() {
  return (
    <div className="Header center">
      <span>RTabasca</span>
      <List/>
      <p> Prove</p>
    </div>
  );
}

export default Header;
