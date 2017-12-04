import React, { Component } from 'react'
import Select from '../controls/SelectField'
import Input from '../controls/Input'

import { updatePlayer } from '../../api/';

class GameResult extends Component {
  state = {
    player1Name: null,
    player2Name: null,
    player1Score: null,
    player2Score: null
  }

  sendResults (e) {
    e.preventDefault()
    const { player1Name, player1Score, player2Name, player2Score } = this.state
    if (player1Name && player2Name && !!player1Score && !!player2Score)

    if (player1Name === player2Name) {
        alert('Foosball matches must have differing opponents.')
      }

      if (player1Score === player2Score) {
        alert('Foosball matches must not end in a tie.')
      } else {
        if (player1Score < player2Score) {
          updatePlayer(player1Name, player1Score).then(() => {
            return updatePlayer(player2Name, player2Score, true)
          })
        }
      }
    else {
      alert('Please fill out the form completely.')
    }
  }

  handleNameChange(prop, player) {
    this.setState({ [prop]: player.target.value });
  }
  handleScoreChange(prop, e) {
    this.setState({ [prop]: Number(e.target.value) });
  }

  render () {
    <div className="game-result">
      
    </div>
  }

}