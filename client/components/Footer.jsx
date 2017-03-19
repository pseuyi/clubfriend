import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="col description">
        <p>*NOTE: for security and demo purposes post/put/delete requests are currently not linked to a databse and therefore not persistent</p>
        <h3>
          <a href="https://github.com/pseuyi/clubfriend">github</a><br />
          <a href="https://pseuyi.xyz">pseuyi.xyz</a>
        </h3>
      </div>
    )
  }
}
