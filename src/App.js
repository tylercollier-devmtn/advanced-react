import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Elephants from './Elephants';
import Gods from './Gods';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Elephants count={7} />
        <Gods />
      </div>
    );
  }
}

export default App;
