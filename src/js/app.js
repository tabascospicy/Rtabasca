import React, { Component } from 'react';
import Navigation from "./Navigation";
import CoverPage from "./CoverPage";




class App extends Component {
    render(){
        return (
            <section id="main">
                <CoverPage/>
                  <Navigation/>
             </section>
        )
    }
}



export default App;
