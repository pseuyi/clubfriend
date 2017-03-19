const _ = require('lodash')

const data = [
  {
    id: 100,
    name: 'Mia',
    favoriteCity: 'Shanghai'
  },
  {
    id: 101,
    name: 'Pseuyi',
    favoriteCity: 'New York'
  },
  {
    id: 102,
    name: 'Janus',
    favoriteCity: 'Berlin'
  },
  {
    id: 103,
    name: 'Loris',
    favoriteCity: 'London'
  }
]

let id = 1
function add (name, favoriteCity) {
  let newUser = {id: id++, name: name, favoriteCity: favoriteCity}
  data.push(newUser)
  return newUser
}

function list () {
  return _.cloneDeep(data)
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties))
}

function update (properties, favoriteCity) {
  let user = find(properties)[0]
  let userIdx = data.findIndex(el=>el.id==user.id)
  data[userIdx] = Object.assign({}, user, {favoriteCity: favoriteCity})
}

function deleteUser (properties) {
  let user = find(properties)[0]
  console.log('user', user)
  let userIdx = data.findIndex(el=>el.id==user.id)
  console.log('useridx', userIdx)
  data.splice(userIdx, 1)
}

module.exports = { add: add, list: list, find: find, update: update, deleteUser: deleteUser}
