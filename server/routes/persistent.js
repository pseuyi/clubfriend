var express = require('express')
var people = express.Router()
var path = require('path')

var User = require('../db/user.model')

people.route('/')
  .get((req, res, next)=>{
    console.log('hello route')
    res.send('got to GET /people/')
  })
  .post((req, res, next)=>{
    // res.send('got to POST /people/')
    // res.json(req.body)
    User.findOrCreate({
      where:{
        name: req.body.name,
        favoriteCity: req.body.favoriteCity
      }
    })
    .catch(next)
  })
  .put((req, res, next)=>{
		User.findOne({
			where: {
        name: req.body.name,
        favoriteCity: req.body.favoriteCity
			}
		})
		.then(user => {
			if(!user) res.sendStatus(404)
			else return user.update(req.body)
		})
		.then(updatedUser => res.json(updatedUser))
		.catch(next)
	})

people.route('/:id')
  .get((req, res, next)=>{
    User.findById(req.params.id)
    .then(user=>{
      // res.send('got to GET /people/')
      res.json(user)
    })
    .catch(next)
  })
  .delete((req, res, next)=>{
		User.findById(req.params.id)
		.then(user => {
			if(!user) res.sendStatus(404)
			else return user.destroy()
		})
		.then(deletedUser => {
			if(deletedUser) res.sendStatus(204)
		})
		.catch(next)
  })

module.exports = people
