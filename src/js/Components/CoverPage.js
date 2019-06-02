import React, { Component } from 'react';
import Home from "./Home";

class CoverPage extends Component {
    render() {
        return (
            <div className="flex-cover wrapper">
                <div className="flex-image"></div>
              <Home/>
            </div>
        )
    }
}
export default CoverPage;