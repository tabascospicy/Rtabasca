import React from 'react';
import {animated} from 'react-spring/renderprops';
import "./blog.scss";
function Blog (props) {
    return (
       <animated.div style={{...props.style}} className="Blog center">
           <h1>Blog</h1>
       </animated.div>
  );
}

export default Blog;