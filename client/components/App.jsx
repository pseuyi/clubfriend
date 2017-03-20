import React from 'react'

import Desc from './Desc'
import Forms from './Forms'
import List from './List'
import Footer from './Footer'

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="header flex">
          <div className="col half">
            <h1>clubfriend api</h1>
            <p className="divider">~</p>
          </div>
          <div className="col half">
            <img id="ttp-logo" src="ttp.png" />
            <img id="spotify-logo" src="spotify.png" />
          </div>
        </div>
        <Desc />
        <Forms />
        <Footer />
      </div>
    )
  }
}
