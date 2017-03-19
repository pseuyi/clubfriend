const _ = require('lodash')

let data = [
  {
    id: 1,
    name: 'Mia',
    favoriteCity: 'Shanghai'
  },
  {
    id: 2,
    name: 'Pseuyi',
    favoriteCity: 'New York'
  },
  {
    id: 3,
    name: 'Janus',
    favoriteCity: 'Berlin'
  },
  {
    id: 4,
    name: 'Loris',
    favoriteCity: 'London'
  }
]

let id = 5
function add (name, favoriteCity) {
  let newUser = { name: name, favoriteCity: favoriteCity, id: id++ }
  data.push(newUser)
  return newUser
}

function list () {
  return _.cloneDeep(data)
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties))
}

module.exports = { add: add, list: list, find: find }
