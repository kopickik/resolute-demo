import React, { Component } from 'react'
import _ from 'lodash';
import Select from '../controls/SelectField'
import SingleInput from '../controls/SingleInput'

import { updatePlayer } from '../../lib/players'

function validate(state) {
  return {
    player1Name:
      state.player1Name.length === 0 || state.player1Name === state.player2Name,
    player1Score: Number(state.player1Score) < 0,
    player2Name:
      state.player2Name.length === 0 || state.player2Name === state.player1Name,
    player2Score: Number(state.player2Score) < 0
  };
}

let validationMessages = {
  equalNames: 'Foosball games must have differing opponents.',
  equalScores: 'Foosball games cannot end in a tie.',
  empty: 'You must provide a value.',
  default: 'There was a problem submitting the form.'
}

class GameResult extends Component {
  state = {
    player1Name: null,
    player2Name: null,
    player1Score: null,
    player2Score: null
  }

  sendResults (e) {
    const { player1Name, player1Score, player2Name, player2Score } = this.state
    console.log(this.state);
    if (!this.canBeSubmitted()) {
      alert(validationMessages.default)
      e.preventDefault(); return;
    }
    e.preventDefault();
    if (player1Score < player2Score) {
      updatePlayer(player1Name, player1Score, false).then(() => {
        return updatePlayer(player2Name, player2Score, true)
      })
    }
    if (player2Score < player1Score) {
      updatePlayer(player2Name, player2Score, false).then(() => {
        return updatePlayer(player1Name, player1Score, true)
      })
    }
  }

  handleNameChange(prop, player) {
    this.setState({ [prop]: player.name })
  }
  handleScoreChange(prop, e) {
    this.setState({ [prop]: Number(e.target.value) })
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      player1Name: "",
      player2Name: "",
      player1Score: 0,
      player2Score: 0
    });
  }

  canBeSubmitted() {
    const errors = validate(this.state);
    const isDisabled = _.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render () {
    const { players } = this.props;
    return (
      <form className="form new-game-result" onSubmit={this.sendResults.bind(this)}>
        <h3>New Game Result</h3>
        <div className="form-row">
          <div className="col-sm form-group">
            <label className="form-label">Player 1</label>
            <Select
              name="Player1"
              placeholder={"Player1.."}
              data={players}
              textField="name"
              onChange={this.handleNameChange.bind(this, "player1Name")}
            />
            <label className="form-label">Score</label>
            <SingleInput
              inputType={"number"}
              min={0}
              max={10}
              name={"player1Score"}
              onChange={this.handleScoreChange.bind(this, "player1Score")}
              content={this.state.player1Score}
              placeholder={"0"}
            />
          </div>
          <div className="col-sm form-group">
            <label className="form-label">Player 2</label>
            <Select
              name="Player2"
              data={players}
              textField="name"
              onChange={this.handleNameChange.bind(this, "player2Name")}
              placeholder="Player2.."
            />
            <label className="form-label">Score</label>
            <SingleInput
              inputType={"number"}
              name={"player2Score"}
              min={0}
              max={10}
              onChange={this.handleScoreChange.bind(this, "player2Score")}
              content={this.state.player2Score}
              placeholder={"0"}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm">&nbsp;</div>
          <div className="col-sm">
            <input type="submit" className="btn btn-default" value="Submit" />
            <button className="btn btn-link" onClick={this.handleClearForm.bind(this)}>
              Clear form
            </button>
          </div>
        </div>
      </form>
    )
  }

}

export default GameResult