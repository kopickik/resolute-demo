import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Rankings extends Component {
  render () {
    const { players } = this.props

    const columns = [{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'Wins',
      accessor: 'stats.wins'
    },{
      Header: 'Losses',
      accessor: 'stats.losses'
    },{
      Header: 'Total Points',
      accessor: 'stats.totalPoints'
    }];

    return (
      <ReactTable
        defaultSorted={[
          {
            id: 'stats.wins',
            desc: true
          }
        ]}
        data={players}
        columns={columns}
        defaultPageSize={5}
      />
    )
  }
}

export default Rankings
