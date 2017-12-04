import _ from 'lodash'

import { playerUrl, playersUrl } from './firebase'

const playerData = fetch(playersUrl);

let struct = [];
playerData
  .then(data => data.json())
  .then(players => struct.push(players))

export const updatePlayer = (player, score, winner) => {
  let playerKey = _.find(struct[0], { name: player })
  if ( playerKey ) {
    let updateData = {
      name: player.name,
      wins: winner ? player.wins + 1 : player.wins,
      losses: winner ? player.losses : player.losses + 1,
      totalPoints: Number(player.totalPoints || 0) + Number(score)
    }
     fetch(playerUrl(playerKey), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: _(updateData).toJSON()
    })
  } else {
    Promise.resolve();
  }
}
