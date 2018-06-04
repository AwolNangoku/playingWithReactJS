import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greet = ({name, surname}) => (
  <div>
    Hello  {name} {surname}, it's great to know you my boy! 
  </div>
);

class App extends Component {
  render() {
    const dudeToGreet = {name: 'Ncedile', surname: 'Nkonyana'};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Playing with reactJS!</h1>
        </header>
        <p className="App-intro">
          <Greet {...dudeToGreet} />
        </p>
      </div>
    );
  }
}

export default App;
