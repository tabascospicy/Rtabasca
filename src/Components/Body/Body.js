import React,{Fragment} from 'react';
import {Router,Route,Link} from 'react-router-dom';
import Top from './Top/Top';
import Blog from './Blog/blog';
import "./Body.scss";
function Body(props) {
  return (
       <Fragment>
         <Router>
           <Top/>
           <Blog/>
           </Router>
       </Fragment>
  );
}

export default Body;