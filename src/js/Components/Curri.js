
import React, { Component } from 'react';
import { animated } from 'react-spring/renderprops';

class Curri extends Component {

    render() {
        return (
            <animated.div className="navigation navigation-contact wrapper" style={this.props.style}>
                <h1>Contact</h1>
                <div className="contact">
                <a href="https://www.facebook.com/rafael.tabascarodriguez "><i className="fab fa-facebook-square fa-3x"></i></a>
              <a href="https://www.instagram.com/tabasco_spicy/"><i className="fab fa-instagram fa-3x"></i></a>
              <a href="https://github.com/tabascospicy"><i className="fab fa-github fa-3x"></i></a>
              </div>
            </animated.div>
        )
    }
}
export default Curri;