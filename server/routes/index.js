var express = require('express')
var people = express.Router()
var path = require('path')
var users = require('../userlist')

people.route('/')
  .get((req, res, next)=>{
    let all = users.list()
    res.json(all)
    //res.send('got to GET /people/')
  })
  .post((req, res, next)=>{

  })
  .put((req, res, next)=>{

	})

people.route('/:id')
  .get((req, res, next)=>{
    let id = parseInt(req.params.id)
    let user = users.find( {id: id} )
    res.json(user)
  })
  .delete((req, res, next)=>{

  })

module.exports = people
