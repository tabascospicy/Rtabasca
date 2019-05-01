import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Transition, animated } from 'react-spring/renderprops';

class Proyects extends Component {

    render() {
        return (
            <animated.div className="navigation-content"  style={this.props.style}>
                <h1>Proyectos</h1>
            </animated.div>
        )
    }
}
class About extends Component {

    render() {
        return (
            <animated.div className="navigation-content" style={this.props.style}>
                <img id="yo" src="/my_blog/yo.jpg" width="190vx" height="160vh" ></img>
                <p className="text">¿Qué es Lorem Ipsum?
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó
                    una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum.
                    </p>
            </animated.div>
        )
    }
}
class Curri extends Component {

    render() {
        return (
            <animated.div className="navigation-content" style={this.props.style}>
                <h1>Curriculum</h1>
            </animated.div>
        )
    }
}

class Navigation extends Component {

    render() {
        return (

            <Router>
                <Route render={({ location, ...rest }) => (
                    <section id="navigation">
                        <div className="navigation-center wrapper">
                            <Link to="/my_blog" className="boton">About me</Link>
                            <Link to="/my_blog/proyects/" className="" >Proyects</Link>
                            <Link to="/my_blog/Curriculum/" className="">Curriculum</Link>
                        </div>
                        <div className="wrapper W-content">
                            <Transition native
                                items={location}
                                keys={location.pathname.split('/')[1]}
                                from={{transform: 'translateX(200px)', opacity: 0}}
                                enter={{transform: 'translateX(0px)',pacity: 1}}
                                leave={{transform: 'translateX(-200px)', opacity: 0}}
                            >
                                {(loc, state) => style => (
                                    <Switch location={state === 'update' ? location : loc}>
                                        {console.log(state)}
                                        <Route exact path="/my_blog/" render={props => <About {...props} style={style} />} />
                                        <Route path="/my_blog/proyects/" render={props => <Proyects {...props} style={style} />} />
                                        <Route path="/my_blog/Curriculum/" render={props => <Curri {...props} style={style} />} />
                                    </Switch>
                                )}
                            </Transition>
                        </div>
                    </section>
                )}
                />

            </Router>

        )
    }
}



export default Navigation;