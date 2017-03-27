import React from 'react'

export default class User extends React.Component {
  render () {
    const { deleteOne, editOne, id, name, city, fetchPerson, edit, toggleEdit } = this.props
    return (
      <div className="half">
      {
        edit?
        (
          <li key={id} className="user" onClick={()=>fetchPerson(id)}>
            <form onSubmit={(e)=>{editOne(e, id); toggleEdit()}}>
              user no. <span style={{color:'white'}}>{id}</span> ♥ <span style={{color: 'pink'}}>{name}</span>: my favorite clubs are in <input name="city" type="text" required defaultValue={city} />!
            <p>
              <button type="submit" className="button">save</button>
            </p>
            </form>
          </li>
        )
        :
        (
          <li key={id} className="user" onClick={()=>fetchPerson(id)}>
              user no. <span style={{color:'white'}}>{id}</span> ♥ <span style={{color: 'pink'}}>{name}</span>: my favorite clubs are in <span style={{color: 'purple'}}>{city}</span>!
            <p>
              <button onClick={toggleEdit} className="button">edit</button>
              <button onClick={()=>deleteOne(id)} className="button">delete</button>
            </p>
          </li>
        )
      }
      </div>
    )
  }
}
