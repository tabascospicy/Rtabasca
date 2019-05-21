import React, { Component } from 'react';
import CoverPage from "./CoverPage";
import Footer from "./Footer";



class App extends Component {
    render(){
        return (
            <section id="main">
                <CoverPage/>
                <Footer/>
             </section>
        )
    }
}



export default App;
