import React, { Component } from "react";
import { fire } from "../../lib/firebase";
import TextInput from "../controls/TextInput";

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
    this.submitNewPlayer(this.state);
    this.handleClearForm(e);
  }

  render() {
    return (
      <form className="new-game-result" onSubmit={this.handleFormSubmit}>
        <h3 className="upcase">New Player</h3>
        <div className="row">
          <div className="col-sm">
            <div className="input-group">
              <TextInput
                inputType={"text"}
                name={"playerName"}
                onChange={this.handleNameChange.bind(this, "playerName")}
                content={this.state.playerName}
                placeholder={"New player's name"}
              />
            </div>
          </div>
          <div className="col-sm">
            <input
              type="submit"
              className="btn btn-default"
              value="Add"
            />
            <button
              className="btn btn-link"
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
