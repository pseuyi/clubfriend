'use strict'

const Sequelize = require('sequelize')

const db = require('./index')

const User = db.define('user', {
  name: Sequelize.STRING,
  favoriteCity: Sequelize.STRING,
})

module.exports = User
