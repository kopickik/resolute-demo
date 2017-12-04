import _ from 'lodash'
import fetch from 'node-fetch'
import { playerUrl } from './firebase'

export const updatePlayer = (player, score, winner: false) => {
  if ( player && player._id ) {
    let updateData = {
      name: player.name,
      wins: winner ? player.wins + 1 : player.wins,
      totalPoints: Number(player.totalPoints || 0) + Number(score)
    }
    return fetch(playerUrl(player._id.$oid), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: _(updateData).toJSON()
    })
  } else {
    Promise.resolve();
  }
}
