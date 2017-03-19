'use strict';

var express = require('express')
var app = express()
var path = require('path')
// var db = require('./db')

var compression = require('compression')
var bodyParser = require('body-parser')
var morgan = require('morgan')

// logging middleware
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

// body parsing
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

app.use('/people', require('./routes'))

// send all requests to index.html
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public'))
  //res.redirect('/people')
})

// production server, localhost:3000
var PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('production express server is running at localhost:' + PORT)
  // db.sync()
  // .then(() => {
  //   console.log('cool, the pg server is connected')
  // })
})

// error handling
app.use((err, req, res, next)=>{
  err? console.error(err.stack) : next()
})

module.exports = app
