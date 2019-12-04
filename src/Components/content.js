import React from 'react';
import Header from './header/header';
import Title from './title/title';
import Body from './Body/Body';
import "./content.scss";
function Content(props) {
  return (
        <div className="content">
            <Header/>
            <Title/>
            <Body {...props}/>
        </div>
  );
}

export default Content;