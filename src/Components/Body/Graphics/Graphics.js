import React, {Component}from "react";
import { animated } from "react-spring/renderprops";
import Card from "./card/card"
import "./Graphics.scss";
class Graphics extends Component {
  render() {
    return (
      <animated.div style={{ ...this.props.style }} className="Graphics">
        <h2>Lenguajes</h2>
        <div className="collection">
        <Card percent={70} mastery={"CSS"}/>
       <Card percent={90} mastery={"JS"}/>
       <Card percent={85} mastery={"HTML"}/>
       <Card percent={80} mastery={"PHP"}/>
        </div>
     
      </animated.div>
    );
  }
}

export default Graphics;
