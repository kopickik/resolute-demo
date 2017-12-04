import React, { Component } from "react";
import _ from "lodash";
import { fire } from "../../lib/firebase";
import SingleInput from "../controls/SingleInput";
import Select from "../controls/SelectField";

class NewPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ playerName: e.target.value });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      playerName: ""
    });
  }

  submitNewPlayer (payload) {
    fire
      .database()
      .ref('players')
      .push({
        name: payload.playerName,
        stats: {
          wins: 0,
          losses: 0,
          totalPoints: 0
        }
      })
      .catch((err) => console.log('Could not save the player.', err))
      .then(() => console.log('Successfully saved new player to the db.'))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { playerName } = this.state;
    this.submitNewPlayer(this.state);
    this.handleClearForm(e);
  }

  render() {
    return (
      <form className="new-game-result" onSubmit={this.handleFormSubmit}>
        <h3 className="upcase">New Player</h3>
        <div className="row">
          <div className="col-sm">
            <label className="form-label">Player Name</label>
            <SingleInput
              inputType={"text"}
              name={"playerName"}
              controlFunc={this.handleNameChange}
              content={this.state.playerName}
              placeholder={"The new guy.."}
            />
          </div>
          <div className="col-sm">
            <input
              type="submit"
              className="btn btn-default float-right"
              value="Add"
            />
            <button
              className="btn btn-link float-left"
              onClick={this.handleClearForm}
            >
              Clear form
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewPlayerForm;
