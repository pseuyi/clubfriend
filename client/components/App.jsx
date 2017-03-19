import React from 'react'

import Post from './Post'
import List from './List'

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <h1>clubfriend api</h1>
        <span className="divider">~</span>
        <Post />
        <List />
      </div>
    )
  }
}
