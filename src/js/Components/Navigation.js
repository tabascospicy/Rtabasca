import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import BookMark from "./BookMark";
import Proyects from "./Proyects";
import Curri from "./Curri";
import About from "./About";


class Navigation extends Component {
    render() {
        return (
            <Router onUpdate={() => {document.getElementById('navigation').focus(); console.log("actualiza")}}>
                <Route  render={({ location, ...rest }) => (
                    <section className="content wrapper">
                       
                            <div className="navigation-center wrapper">
                                 <div className="adorno"></div>
                                    <div className="adorno"></div>
                                    <div className="adorno"></div>
                                <div className="navigation-links wrapper">
                                    <Link to="/my_blog" className="boton">About me</Link>
                                    <div className="index wrapper">
                                        <Route exact path="/my_blog" render={props => <BookMark />} />
                                    </div>
                                </div>
                                <div className="navigation-links wrapper">
                                    <Link to="/my_blog/proyects" className="boton" >Proyects</Link>
                                    <div className="index wrapper">
                                        <Route path="/my_blog/proyects" render={props => <BookMark />} />
                                    </div>
                                </div>
                                <div className="navigation-links wrapper">
                                    <Link to="/my_blog/Curriculum" className="boton">Contact</Link>
                                    <div className="index  wrapper">
                                        <Route path="/my_blog/Curriculum" render={props => <BookMark />} />
                                    </div>
                                </div>
                                <div className="adorno"></div>
                                    <div className="adorno"></div>
                                    <div className="adorno"></div>
                            </div>
                        <div id="navigation"className="wrapper W-content">
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