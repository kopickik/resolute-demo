import React, { Component } from 'react'
import Select from '../controls/SelectField'
import SingleInput from '../controls/SingleInput'

import { updatePlayer } from '../../api/'

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
    this.setState({ [prop]: player.target.value })
  }
  handleScoreChange(prop, e) {
    this.setState({ [prop]: Number(e.target.value) })
  }

  render () {
    return (
      <form className="form new-game-result" onSubmit={this.handleFormSubmit}>
        <h3>New Game Result</h3>
        <div className="form-row">
          <div className="col-sm form-group">
            <label className="form-label">Player 1</label>
            <Select
              name="Player1"
              onBlur={this.handleBlur("player1Name")}
              placeholder={"Player1.."}
              options={players}
              controlFunc={this.handleNameChange.bind(this, "player1Name")}
            />
            <label className="form-label">Score</label>
            <SingleInput
              inputType={"number"}
              min={0}
              max={10}
              name={"player1Score"}
              controlFunc={this.handleScoreChange.bind(this, "player1Score")}
              onBlur={this.handleBlur("player1Score")}
              content={this.state.player1Score}
              placeholder={"0"}
            />
          </div>
          <div className="col-sm form-group">
            <label className="form-label">Player 2</label>
            <Select
              name="Player2"
              options={players}
              controlFunc={this.handleNameChange.bind(this, "player2Name")}
              onBlur={this.handleBlur("player2Name")}
              placeholder="Player2.."
            />
            <label className="form-label">Score</label>
            <SingleInput
              inputType={"number"}
              name={"player2Score"}
              min={0}
              max={10}
              controlFunc={this.handleScoreChange.bind(this, "player2Score")}
              content={this.state.player2Score}
              onBlur={this.handleBlur("player2Score")}
              placeholder={"0"}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm">&nbsp;</div>
          <div className="col-sm">
            <input type="submit" className="btn btn-default" value="Submit" />
            <button className="btn btn-link" onClick={this.handleClearForm}>
              {" "}
              Clear form
            </button>
          </div>
        </div>
      </form>
    )
  }

}

export default GameResult