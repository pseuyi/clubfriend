const _ = require('lodash')

let data = [
  {
    id: 1,
    name: 'Sean',
    favoriteCity: 'New York'
  }
]

let id = 2
function add (name, favoriteCity) {
  let newUser = { name: name, content: favoriteCity, id: id++ }
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
