import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import logo from './logo.svg'
import './App.css'
import 'react-widgets/dist/css/react-widgets.css'
import Rankings from './components/rankings/Rankings'
import GameResult from './components/gameResult/GameResult'
import { playersUrl } from './lib/firebase';

class App extends Component {

  state = {
    players: []
  }

  componentDidMount () {
    fetch(playersUrl)
      .catch((err) => alert('A problem was encountered while trying to fetch foosball players.'))
      .then((response) => response.json())
      .then((data) => this.setState({ players: data }))
      // .then((players) => this.setState({ players }))
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Foosball Tracker</h1>
        </header>
        <div className="container">
          <Rankings players={players} />
          <hr/>
          <GameResult players={players} />
        </div>
      </div>
    );
  }
}

export default App;
