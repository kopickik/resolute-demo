import React, { Component } from 'react'
import _ from 'lodash'
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
    const playerData = fetch(playersUrl);
    playerData
      .then(data => data.json())
      .then(players => {
        let playersNames = _.map(players, (player) => player)
        this.setState({ players: playersNames })
      })
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
