import React from 'react';
import './App.css';
import Title from "./components/Title";
import Items from "./components/Items";
import Calculator from "./components/Calculator"


class App extends React.Component {
  
}

render (props) {
  return ( 
  <div className="App">
    <Title/>
    <Items/>
    <Calculator/>
  </div>)
 
}

export default App;
