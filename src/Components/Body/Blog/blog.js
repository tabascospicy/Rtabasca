import React from 'react';
import About from './About/About';
import Skills from './Skills/skills';
import {animated} from 'react-spring/renderprops';
import "./blog.scss";
function Blog (props) {
    return (
       <animated.div style={{...props.style}} className="Blog">
           <About/>
           <Skills/>
       </animated.div>
  );
}

export default Blog;