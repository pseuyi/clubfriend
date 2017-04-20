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
    this.state = {users: [], user: {}, documentation: false, forms: false, edit: false}
    this.fetchPeople = this.fetchPeople.bind(this)
    this.fetchPerson = this.fetchPerson.bind(this)
    this.onPost = this.onPost.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.deleteOne = this.deleteOne.bind(this)
    this.editOne = this.editOne.bind(this)
    this.toggleDocumentation = this.toggleDocumentation.bind(this)
    this.toggleForms = this.toggleForms.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  componentWillMount () {
    this.fetchPeople()
  }
  // takes single user view off state, fetches all people
  fetchPeople () {
    this.setState({user: {}})
    // console.log('fetch all people')
    axios.get('/people')
     .then(res => {
       this.setState({users: res.data})
       // console.log('fetchPeople state', this.state)
     })
     .catch(err => console.error('unsuccessful', err))
  }
  // puts single user view on state
  fetchPerson (id) {
    if(!this.state.edit) {
      let path = `/people/${id}`
      axios.get(path)
      .then(res => {
        this.setState({user: res.data})
      })
      .catch(err => console.error('unsuccessful', err))
    }
  }
  // toggle menu for documentation
  toggleDocumentation () {
    this.setState({documentation: !this.state.documentation})
  }
  // toggle menu for api playground
  toggleForms () {
    this.setState({forms: !this.state.forms})
  }
  toggleEdit () {
    this.setState({edit: !this.state.edit})
  }
  deleteOne (id) {
    let path = `/people/${id}`
    axios.delete(path)
      .then(res => this.fetchPeople())
  }
  // edit single user's city
  editOne (event, id) {
    event.preventDefault()
    let userInfo = {
      id: id,
      favoriteCity: event.target.city.value
    }
    axios.put('/people', userInfo)
       .then(res => {
         console.log('edit One state', this.state)
         this.fetchPeople()
       })
       .catch(err => console.error('not updated', err))
  }
  // TODO: refactor methods below for managing api playground
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

  render () {
    // TODO: refactor main subheading and post box to separate component
    return (
      <div className="app">
        <Header />

        <div className="description section">
          <p>clubfriend is an easy way to geolocate friendly club-goers.</p>
          <br />
          <Post onPost={this.onPost} />
        </div>

        <Users
          fetchPeople={this.fetchPeople}
          fetchPerson={this.fetchPerson}
          user={this.state.user}
          users={this.state.users}
          deleteOne={this.deleteOne}
          editOne={this.editOne}
          edit={this.state.edit}
          toggleEdit={this.toggleEdit}
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
