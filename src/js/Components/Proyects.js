import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
class Proyects extends Component {

    render() {
        return (
            <animated.div className="navigation-content" style={this.props.style}>
                <h1>Proyectos</h1>
            </animated.div>
        )
    }
}
export default Proyects;