
import React, { Component } from 'react';
import { animated } from 'react-spring/renderprops';
class Home extends Component {

    render() {
        return (
            <animated.div className="navigation navigation-content name wrapper" style={this.props.style}>
                <h1>Rafael Tabasca</h1>
            </animated.div>
        )
    }
}
export default Home;