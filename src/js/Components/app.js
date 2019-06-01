import React, { Component } from 'react';
import CoverPage from "./CoverPage";
import Footer from "./Footer";
import Navigation from './Navigation';


class App extends Component {
    render(){
        return (
            <section id="main">
                <CoverPage/>
                <Navigation/>
                <Footer/>
                </section>
        )
    }
}



export default App;
