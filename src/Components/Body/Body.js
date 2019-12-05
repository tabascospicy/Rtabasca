import React, { Component } from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Transition } from "react-spring/renderprops";
import Top from "./Top/Top";
import Blog from "./Blog/blog";
import "./Body.scss";
import Graphics from "./Graphics/Graphics";

class Body extends Component {
  render() {
    return (
     
      <Router >
        <Top/>
      <Route  render={({ location, ...rest }) => (
        <div className="Body center">
        <Transition
            items={location}
            keys={location.pathname.split('/')[1]}
            from={{ transform: 'translateX(50px)', opacity: 0 }}
            enter={{ transform: 'translateX(0px)', opacity: 1 }}
            leave={{ transform: 'translateX(-50px)', opacity: 0 }}
        >
          {(loc,state) => style => (
           <Switch location={state === 'update' ? location : loc}>
              <Route
                exact
                path="/Profile"
                render={props => <Blog {...props} style={style} />}
              />
              <Route
                path="/Graphics"
                render={props => <Graphics {...props} style={style} />}
              />
           </Switch>
          )}
        </Transition>
        </div>
         )}
      />
      </Router>
    );
  }
}

export default Body;
