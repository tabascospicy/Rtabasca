import React, { Component } from 'react';
import { animated } from 'react-spring/renderprops';

class About extends Component {

    render() {
        return (
            <animated.div className=" navigation navigation-content wrapper" style={this.props.style}>
                <div className="About">
                    <img className="yo" src="yo.jpg" width="300px" height="300px" ></img>
                </div>
                <div className="About text">
                    <p className="text">
                        Venezolano estudiante de ingieneria en sistemas
                        dedicado al desarrollo de paginas WEB con excelentes UX,UI,
                        dedicado a technologias Front End CSS,React,BootsTrap,Javascript
                        especializado en BackEnd PhP,mysql,laravel
                        Abierto a oportunidades para aumentar la experiencia y crecer profesionalmente
                    </p>
                </div>
            </animated.div>
        )
    }
}
export default About;