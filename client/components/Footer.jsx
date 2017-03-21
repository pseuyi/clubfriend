import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="flex">
        <div className="col description">
          <h3>more information</h3>
          <h3>
            <a href="https://github.com/pseuyi/clubfriend">github</a><br />
            <a href="https://pseuyi.xyz">pseuyi.xyz</a>
          </h3>
        </div>
      </div>
    )
  }
}
