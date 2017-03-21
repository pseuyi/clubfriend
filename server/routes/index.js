const express = require('express')
const people = express.Router()
const path = require('path')

const User = require('../db/user.model')

people.route('/')
  .get((req, res, next)=>{
    User.findAll()
    .then(people => {
      res.json(people)
    })
    .catch(next)
  })
  .post((req, res, next)=>{
    User.findOrCreate({
      where:{
        name: req.body.name,
        favoriteCity: req.body.favoriteCity
      }
    })
    .spread(person => {
      res.json(person)
    })
    .catch(next)
  })
  .put((req, res, next)=>{
    User.findById(req.body.id)
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
