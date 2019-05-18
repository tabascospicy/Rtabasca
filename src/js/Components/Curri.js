
import React, { Component } from 'react';
import { animated } from 'react-spring/renderprops';

class Curri extends Component {

    render() {
        return (
            <animated.div className="navigation-content" style={this.props.style}>
                <h1>Curriculum</h1>
            </animated.div>
        )
    }
}
export default Curri;