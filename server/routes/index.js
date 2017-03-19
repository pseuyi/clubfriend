var express = require('express')
var people = express.Router()
var path = require('path')
var users = require('../userlist')

people.route('/')
  .get((req, res, next)=>{
    let all = users.list()
    res.json({users: all})
  })
  .post((req, res, next)=>{
    let name = req.body.name
	  let favoriteCity = req.body.favoriteCity
	  let newUser = users.add(name, favoriteCity)
    res.json(newUser)
  })
  .put((req, res, next)=>{
    let id = parseInt(req.body.id)
    let favoriteCity = req.body.favoriteCity
    users.update( {id: id}, favoriteCity)
	})

people.route('/:id')
  .get((req, res, next)=>{
    let id = parseInt(req.params.id)
    let user = users.find( {id: id} )
    res.json(user[0])
  })
  .delete((req, res, next)=>{
    let id = parseInt(req.params.id)
    users.deleteUser( {id: id} )
  })

module.exports = people
