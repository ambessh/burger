import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
       <BurgerBuilder></BurgerBuilder>
      </div>
    );
  }
}

export default App;
