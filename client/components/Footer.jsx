import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="flex">
        <div className="col description">
          <h3>more information</h3>
          <p>please note: for security and demo purposes post/put/delete requests are currently not linked to a database. data entries are therefore not persistent across sessions. a persistent model can be viewed via github below.</p>
          <p>the clubfriend api currently uses <a href="https://lodash.com/">_lodash</a> for server-side queries.</p>
          <h3>
            <a href="https://github.com/pseuyi/clubfriend">github</a><br />
            <a href="https://pseuyi.xyz">pseuyi.xyz</a>
          </h3>
        </div>
      </div>
    )
  }
}
