import React from 'react'

export default class Desc extends React.Component {

  render () {
    return (
      <div className="flex">
        <div className="col description">
          <h2>documentation</h2>
          <p>clubfriend is an easy way to geolocate friendly club-goers.</p>
          <p>this api supports http requests to retrieve user objects containing:
            id (int), name (string), and favorite city (string).<br />
          the following calls are supported and return a JSON object containing a "users" array:</p>
        <p>
          /GET request to <a href={"http://clubfriend.herokuapp.com/people"}>/people</a> returns all user objects<br />
        /POST request to /people creates a new user object<br />
        /PUT request to /people updates a user's info<br />
        /GET request to <a href={"http://clubfriend.herokuapp.com/people/100"}>/people/:id</a> returns a specific user's info<br />
        /DELETE request to /people/:id deletes a specific user
        </p>
        </div>        
      </div>
    )
  }
}
