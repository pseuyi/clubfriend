import React from 'react'

import User from './User'

export default class Users extends React.Component {

  render () {
    const { users, deleteOne, editOne } = this.props
    return (
      <ul className="section flex">
        {
          users && users.map(user=>(
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              city={user.favoriteCity}
              deleteOne={deleteOne}
              editOne={editOne}
            />
          ))
        }
      </ul>
    )
  }
}
