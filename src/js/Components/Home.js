
import React, { Component } from 'react';
import { animated } from 'react-spring/renderprops';
class Home extends Component {
    componentDidMount() {
        window.addEventListener("load",()=>{
            var letters = document.getElementsByClassName("letra");
        for(let i=0;i<Object(letters).length;i++){
            console.log(i);
            letters[i].style.width="100%";
        }
        })
        
    }
    render() {
        return (
            <div className="name wrapper">
                <div className="part wrapper">
                    <div className="letter"><h1 className="letra letra-1">R</h1></div>
                    <div className="letter"><h1 className="letra letra-2">a</h1></div>
                    <div className="letter"><h1 className="letra letra-3">f</h1></div>
                    <div className="letter"><h1 className="letra letra-4">a</h1></div>
                    <div className="letter"><h1 className="letra letra-5">e</h1></div>
                    <div className="letter"><h1 className="letra letra-6">l</h1></div>
                </div>
                <div className="part wrapper">
                    <div className="letter"><h1 className="letra letra-7">T</h1></div>
                    <div className="letter"><h1 className="letra letra-8">a</h1></div>
                    <div className="letter"><h1 className="letra letra-9">b</h1></div>
                    <div className="letter"><h1 className="letra letra-10">a</h1></div>
                    <div className="letter"><h1 className="letra letra-11">s</h1></div>
                    <div className="letter"><h1 className="letra letra-12">c</h1></div>
                    <div className="letter"><h1 className="letra letra-13">a</h1></div>
                </div>
            </div>
        )
    }
}
export default Home;