import _ from 'lodash'
import { fire } from './firebase'

export const updatePlayer = (playersCollection, player, score, winner) => {
  let playerToUpdate = _.find(playersCollection, { name: player }) || {}
  let playerKey = _.findKey(playersCollection, { name: player }) || {}
  let updateData = {
    name: player,
    stats: {
      wins: winner ? playerToUpdate.stats.wins + 1 : playerToUpdate.stats.wins,
      losses: winner ? playerToUpdate.stats.losses : playerToUpdate.stats.losses + 1,
      totalPoints: Number(playerToUpdate.stats.totalPoints || 0) + Number(score)
    }
  }

  fire
  .database()
  .ref("players")
  .child(playerKey)
  .update(updateData)
  .catch(err => {
    console.log(err)
  })
  .then((response) => {
    console.log("Game result inserted into db successfully.", response);
  });
}
