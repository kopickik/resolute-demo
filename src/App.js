import React, { Component } from 'react'
import _ from 'lodash'
import './App.css'
import 'react-widgets/dist/css/react-widgets.css'
import Rankings from './components/rankings/Rankings'
import GameResult from './components/gameResult/GameResult'
import NewPlayerForm from './components/newPlayer/NewPlayerForm'
import { playersUrl } from './lib/firebase'

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
          <h1 className="App-title">Foosball Tracker</h1>
        </header>
        <div className="container">
          <h2>Player Rankings</h2>
          <Rankings players={players} />
          <hr/>
          <GameResult players={players} />
          <hr/>
          <NewPlayerForm />
        </div>
        <div className="footer">
          <small>
            This demo was created using
            &nbsp;<a 
              href="https://github.com/facebookincubator/create-react-app"
              target="_blank"
              rel="noopener noreferrer">create-react-app</a>
            &nbsp;and <a 
            href="https://firebase.google.com"
            target="_blank"
            rel="noopener noreferrer">firebase</a>.
          </small>
        </div>
      </div>
    );
  }
}

export default App;
