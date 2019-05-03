import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
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
class About extends Component {

    render() {
        return (
            <animated.div className="navigation-content" style={this.props.style}>
                <img id="yo" src="yo.jpg" width="190vx" height="160vh" ></img>
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
class BookMark extends Component{
    render(){
        return(
            <div className="bookmark">
            </div>
        )
    }
}
class Navigation extends Component {
    componentDidMount() {
      let botones =  document.getElementsByClassName("boton");
      console.log(botones[0]);
      
      /* botones[0].addEventListener("click", function(e){
        e.preventDefault();
    }) botones.forEach(element => {
            element.addEventListener("click", function(e){
                e.preventDefault();
            })
        });*/
    }
    render() {
        return (

            <Router>
                <Route render={({ location, ...rest }) => (
                    <section id="navigation">
                        <div className=" wrapper">
                            <div className="navigation-center">
                                <div className="navigation-links">
                                    <Link to="/my_blog" className="boton">About me</Link>
                                    <div className="index"> 
                                       <Route exact path="/my_blog" render={props => <BookMark  />} />
                                    </div>
                                </div>
                                <div className="navigation-links">
                                    <Link to="/my_blog/proyects" className="boton" >Proyects</Link>
                                    <div className="index">
                                          <Route path="/my_blog/proyects" render={props => <BookMark  />} />
                                     </div>
                                </div>
                                <div className="navigation-links">
                                    <Link to="/my_blog/Curriculum" className="boton">Curriculum</Link>
                                    <div className="index">
                                      <Route path="/my_blog/Curriculum" render={props => <BookMark />} />
                                     </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper W-content">
                            <Transition native
                                items={location}
                                keys={location.pathname.split('/')[2]}
                                from={{ transform: 'translateX(200px)', opacity: 0 }}
                                enter={{ transform: 'translateX(0px)', opacity: 1 }}
                                leave={{ transform: 'translateX(-200px)', opacity: 0 }}
                            >
                                {(loc, state) => style => (
                                    <Switch location={state === 'update' ? location : loc}>
                                        <Route exact path="/my_blog" render={props => <About {...props} style={style} />} />
                                        <Route path="/my_blog/proyects" render={props => <Proyects {...props} style={style} />} />
                                        <Route path="/my_blog/Curriculum" render={props => <Curri {...props} style={style} />} />
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



export default Navigation;//