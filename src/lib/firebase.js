const firebase = require('firebase');

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

export const fire = firebase.initializeApp(config);
export const playersUrl = `${process.env.REACT_APP_FIREBASE_DB_URL}/players.json?print=pretty`
export const playerUrl = (playerId) => `${process.env.REACT_APP_FIREBASE_DB_URL}/players/${playerId}.json`
