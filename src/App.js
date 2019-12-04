import React from 'react';
import Content from './Components/content'
import './App.scss';

function App(props) {
  return (
    <div className="App center">
      <Content {...props}/>
    </div>
  );
}

export default App;
