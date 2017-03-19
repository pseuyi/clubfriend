'use strict'

var Sequelize = require('sequelize')

var db = require('./index')

var User = db.define('user', {
  name: Sequelize.STRING,
  favoriteCity: Sequelize.STRING,
})

module.exports = User
