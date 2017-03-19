import React from 'react'

import axios from 'axios'

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {users: []}
  }
  componentDidMount () {
    axios.get('/people')
       .then(res => {
         console.log('res', res)
         this.setState({users: res.data})}
       )
       .catch(err => console.error('unsuccessful', err))
  }
  render () {
    return (
      <div>
        <h2>sample data</h2>
        <ul>
          {
            this.state.users && this.state.users.map(user=>(
              <li key={user.id}>{user.id}) {user.name}: my favorite place to dance is in {user.favoriteCity}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
