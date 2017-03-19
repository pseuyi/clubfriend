import React from 'react'

import axios from 'axios'

export default class Forms extends React.Component {

  constructor() {
    super()
    this.onPost = this.onPost.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onPost(event) {
    event.preventDefault()
    let userInfo = {
      name: event.target.name.value,
      favoriteCity: event.target.city.value
    }
    axios.post('/people', userInfo)
       .then(res => console.log('posted'))
       .catch(err => console.error('not posted', err))
  }
  onUpdate(event) {
    event.preventDefault()
    let userInfo = {
      id: event.target.id.value,
      favoriteCity: event.target.city.value
    }
    console.log('userinfo', userInfo)
    axios.put('/people', userInfo)
       .then(res => console.log('updated'))
       .catch(err => console.error('not updated', err))
  }
  onDelete(event) {
    event.preventDefault()
    let path = '/people/'+event.target.id.value
    axios.delete(path)
  }

  render () {
    return (
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
            update city <br />
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
    )
  }
}
