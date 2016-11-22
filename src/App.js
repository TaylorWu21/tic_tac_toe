import React, { Component } from 'react';
import logo from './nhi_face.gif';
import './App.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nhi VS Randy Tic-Tac-Toe</h2>
        </div>
        <div>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
