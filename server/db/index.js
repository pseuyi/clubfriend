'use strict'
const Sequelize = require('sequelize')
const url = process.env.DATABASE_URL || 'postgres://localhost:5432/clubfriend'

const db = new Sequelize(url, {
    define: {
        timestamps: false,
        underscored: true
    },
    logging: false
})

module.exports = db
