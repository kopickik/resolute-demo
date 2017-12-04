## Foosball Game Tracker

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Setup

1. Clone this repo to your local machine
2. `npm install`
3. Copy `.env.example` to `.env` in the root directory.
4. Set the values in `.env` to your specific API keys and URL - or the values you received from my email.
5. `npm start` will start the app on port 3000.

### Demo

There are three components in the app. The Rankings table shows players and their associated stats. The New Game Result form allows you to add a new result to the database, and update the players' stats. Finally, the Add New Player form, allows you to create a new player with initial stats of `{ wins: 0, losses: 0, totalPoints: 0 }`.  All application data can be viewed in the [firebase console](https://console.firebase.google.com/).

### Reasoning

I will be revisiting this demo in the future to recall how to use the firebase API.
