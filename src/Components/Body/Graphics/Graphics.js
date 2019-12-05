import React, {Component}from "react";
import { animated } from "react-spring/renderprops";
import "./Graphics.scss";
class Graphics extends Component {
  render() {
    return (
      <animated.div style={{ ...this.props.style }} className="Graphics center">
        <h1>Graphics</h1>
      </animated.div>
    );
  }
}

export default Graphics;
