import React from 'react'

import axios from 'axios'

export default class Forms extends React.Component {

  constructor() {
    super()
    this.state = {data: {}}
    this.onPost = this.onPost.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  componentWillMount () {
    this.fetchPeople()
  }

  fetchPeople () {
    axios.get('/people')
     .then(res => {
       this.setState({data: res.data})
     })
     .catch(err => console.error('unsuccessful', err))
  }
  onPost(event) {
    event.preventDefault()
    let userInfo = {
      name: event.target.name.value,
      favoriteCity: event.target.city.value
    }
    axios.post('/people', userInfo)
       .then(res => this.fetchPeople())
       .catch(err => console.error('not posted', err))
  }
  onUpdate(event) {
    event.preventDefault()
    let userInfo = {
      id: event.target.id.value,
      favoriteCity: event.target.city.value
    }
    axios.put('/people', userInfo)
       .then(res => this.fetchPeople())
       .catch(err => console.error('not updated', err))
  }
  onDelete(event) {
    event.preventDefault()
    let path = '/people/'+event.target.id.value
    axios.delete(path)
      .then(res => this.fetchPeople())
  }

  render () {
    return (
      <div className="flex">
        <div className="col half section">
          <h2>try now</h2>
          <h3>create a user</h3>
          <form onSubmit={this.onPost}>
            <div className="form-group">
              your name<br />
              <input
                name="name"
                type="text"
                required
                defaultValue="Sean"
              />
            </div>
            <div className="form-group">
              where are your favorite clubs?<br />
              <input
                name="city"
                type="text"
                required
                defaultValue="New York"
              />
            </div>
            <button type="submit" className="button">post</button>
          </form>

          <h3>update a user</h3>
          <form onSubmit={this.onUpdate}>
            <div className="form-group">
              id number<br />
              <input
                name="id"
                type="text"
                required
                defaultValue="1"
              />
            </div>
            <div className="form-group">
              new favorite city <br />
              <input
                name="city"
                type="text"
                required
                defaultValue="Brooklyn"
                />
            </div>
            <button type="submit" className="button">update</button>
          </form>

          <h3>delete a user</h3>
          <form onSubmit={this.onDelete}>
            <div className="form-group">
              id number<br />
              <input
                name="id"
                type="text"
                required
                defaultValue="1"
              />
            </div>
            <button type="submit" className="button">delete</button>
          </form>
        </div>

        <div className="col half section">
          <h2>example /GET request to /people</h2>
          <h3>raw json output</h3>
          <p id="jsonstr">{JSON.stringify(this.state.data)}</p>
          <h3>a formatted example of all user data</h3>
          <ul>
            {
              this.state.data.users && this.state.data.users.map(user=>(
                <li key={user.id}>user no. <span style={{color: 'grey'}}>{user.id}</span> ♥ <span style={{color: 'pink'}}>{user.name}</span>: my favorite clubs are in <span style={{color: 'purple'}}>{user.favoriteCity}</span>!</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
