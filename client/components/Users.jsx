import React from 'react'

import User from './User'

export default class Users extends React.Component {

  render () {
    const { user, users, deleteOne, editOne, fetchPerson, fetchPeople } = this.props
    return (
      <div>

        <div className="id-list">
          {
            users.length? (<span style={{color: "#b1b5b4", "fontWeight": "bolder"}}>filter by user no. :  </span>): null
          }
          {
            users && users.map(user=>(
              <span className="id-filter" key={user.id} onClick={()=>fetchPerson(user.id)}>{user.id} </span>
            ))
          }
          {
            users.length? <span className="id-filter" style={{color: "#b1b5b4", "fontWeight": "bolder"}} onClick={fetchPeople}>all</span> : null
          }
        </div>
        <ul className="flex section">
          {
            user.id?
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              city={user.favoriteCity}
              deleteOne={deleteOne}
              editOne={editOne}
              fetchPerson={fetchPerson}
            />
            : users.map(user=>(
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                city={user.favoriteCity}
                deleteOne={deleteOne}
                editOne={editOne}
                fetchPerson={fetchPerson}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}
