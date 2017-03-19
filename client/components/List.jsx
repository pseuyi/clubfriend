import React from 'react'

import axios from 'axios'

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {data: {}}
  }
  componentWillMount () {
    axios.get('/people')
     .then(res => {
       this.setState({data: res.data})
     })
     .catch(err => console.error('unsuccessful', err))
  }
  render () {
    return (
      <div className="col half section">
        <h2>example /GET request to /people</h2>
        <h3>raw json output</h3>
        <p>{JSON.stringify(this.state.data)}</p>
        <h3>user data list</h3>
        <ul>
          {
            this.state.data.users && this.state.data.users.map(user=>(
              <li key={user.id}>user no.{user.id}) {user.name}: my favorite clubs are in {user.favoriteCity}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
