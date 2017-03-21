import React from 'react'

import Post from './Post'

export default class Forms extends React.Component {
  render () {
    const { open, toggle, users, onPost, onUpdate, onDelete } = this.props
    return (
      <div>
        {
          open?
          (
          <div>
            <div className="flex"><h2>api playground <span onClick={toggle}> -</span></h2></div>
            <div className="flex">
              <div className="col half">
                <h2>try now</h2>
                <h3>create a user</h3>

                <Post onPost={onPost} />

                <h3>update a user</h3>
                <form onSubmit={onUpdate}>
                  <div className="form-group">
                    id number<br />
                  <input className="input full"
                      name="id"
                      type="text"
                      required
                      defaultValue="1"
                    />
                  </div>
                  <div className="form-group">
                    new favorite city <br />
                  <input className="input full"
                      name="city"
                      type="text"
                      required
                      defaultValue="Brooklyn"
                      />
                  </div>
                  <button type="submit" className="button full">update</button>
                </form>

                <h3>delete a user</h3>
                <form onSubmit={onDelete}>
                  <div className="form-group">
                    id number<br />
                  <input className="input full"
                      name="id"
                      type="text"
                      required
                      defaultValue="1"
                    />
                  </div>
                  <button type="submit" className="button full">delete</button>
                </form>
              </div>

              <div className="col half">
                <h2>example /GET request to /people</h2>
                <h3>raw json output</h3>
                <p id="jsonstr">{`{"dataValues":${JSON.stringify(users)}}`}</p>
                <h3>a formatted example of all user data</h3>
                <ul>
                  {
                    users && users.map(user=>(
                      <li key={user.id} className="outline">user no. <span style={{color: 'grey'}}>{user.id}</span> ♥ <span style={{color: 'pink'}}>{user.name}</span>: my favorite clubs are in <span style={{color: 'purple'}}>{user.favoriteCity}</span>!</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          )
          : (<div className="flex"><h2>api playground <span onClick={toggle}> +</span></h2></div>)
        }

      </div>
    )
  }
}
