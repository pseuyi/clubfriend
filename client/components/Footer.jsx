import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="flex">
        <div className="col description">
          <h3>more information</h3>
          <p>note: for security and demo purposes post/put/delete are not persistent across sessions. view more via github below.</p>
          <h3>
            <a href="https://github.com/pseuyi/clubfriend">github</a><br />
            <a href="https://pseuyi.xyz">pseuyi.xyz</a>
          </h3>
        </div>
      </div>
    )
  }
}
