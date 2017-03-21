import React from 'react'
import axios from 'axios'

import Header from './Header'
import Post from './Post'
import Users from './Users'
import Desc from './Desc'
import Forms from './Forms'
import List from './List'
import Footer from './Footer'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {users: [], documentation: false, forms: false}
    this.onPost = this.onPost.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.deleteOne = this.deleteOne.bind(this)
    this.editOne = this.editOne.bind(this)
    this.toggleDocumentation = this.toggleDocumentation.bind(this)
    this.toggleForms = this.toggleForms.bind(this)
  }
  componentWillMount () {
    this.fetchPeople()
  }
  fetchPeople () {
    axios.get('/people')
     .then(res => {
       this.setState({users: res.data})
     })
     .catch(err => console.error('unsuccessful', err))
  }
  onPost(event) {
    event.preventDefault()
    let userInfo = {
      name: event.target.name.value,
      favoriteCity: event.target.city.value
    }
    axios.post('/people', userInfo)
       .then(res => this.fetchPeople())
       .catch(err => console.error('not posted', err))
  }
  onUpdate(event) {
    event.preventDefault()
    let userInfo = {
      id: event.target.id.value,
      favoriteCity: event.target.city.value
    }
    axios.put('/people', userInfo)
       .then(res => this.fetchPeople())
       .catch(err => console.error('not updated', err))
  }
  onDelete(event) {
    event.preventDefault()
    let path = '/people/'+event.target.id.value
    axios.delete(path)
      .then(res => this.fetchPeople())
  }
  toggleDocumentation () {
    this.setState({documentation: !this.state.documentation})
  }
  toggleForms () {
    this.setState({forms: !this.state.forms})
  }
  deleteOne (id) {
    let path = `/people/${id}`
    axios.delete(path)
      .then(res => this.fetchPeople())
  }
  editOne (event, id) {
    event.preventDefault()
    let userInfo = {
      id: id,
      favoriteCity: event.target.city.value
    }
    axios.put('/people', userInfo)
       .then(res => this.fetchPeople())
       .catch(err => console.error('not updated', err))
  }

  render () {
    return (
      <div className="app">
        <Header />

        <div className="description section">
          <p>clubfriend is an easy way to geolocate friendly club-goers.</p>
          <br />
          <Post onPost={this.onPost} />
        </div>

        <Users
          users={this.state.users}
          deleteOne={this.deleteOne}
          editOne={this.editOne}
        />

        <Desc
          open={this.state.documentation}
          toggle={this.toggleDocumentation}
        />

        <Forms
          open={this.state.forms}
          toggle={this.toggleForms}
          users={this.state.users}
          onPost={this.onPost}
          onUpdate={this.onUpdate}
          onDelete={this.onDelete}
        />
        <Footer />
      </div>
    )
  }
}
