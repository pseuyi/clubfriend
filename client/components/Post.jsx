import React from 'react'

import axios from 'axios'

export default class Post extends React.Component {

  constructor() {
    super()
    this.onPost = this.onPost.bind(this)
  }

  onPost(event) {
      event.preventDefault()
      let userInfo = {
        name: event.target.name.value,
        favoriteCity: event.target.city.value
      }
      axios.post('/people', userInfo)
         .then(res => console.log('posted'))
         .catch(err => console.error('Signup unsuccessful', err))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onPost}>
          <div className="form-group">
            your name  <br />
            <input
              name="name"
              type="text"
              required
              defaultValue="Sean"
            />
          </div>
          <div className="form-group">
            where are your favorite clubs?  <br />
            <input
              name="city"
              type="text"
              required
              defaultValue="New York"
            />
          </div>
          <button type="submit" className="button">post</button>
        </form>
      </div>
    )
  }
}
