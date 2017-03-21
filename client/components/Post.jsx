import React from 'react'

export default class Post extends React.Component {

  render () {
    const { onPost } = this.props
    return (
      <form onSubmit={onPost}>
        <div className="form-group">
          your name<br />
        <input className="input full"
            name="name"
            type="text"
            required
            defaultValue="Sean"
          />
        </div>
        <div className="form-group">
          where are your favorite clubs?<br />
        <input className="input full"
            name="city"
            type="text"
            required
            defaultValue="New York"
          />
        </div>
        <button type="submit" className="button full">create friend</button>
      </form>
    )
  }
}
