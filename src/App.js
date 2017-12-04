import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Foosball Tracker</h1>
        </header>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;
