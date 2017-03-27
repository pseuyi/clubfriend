const supertest = require('supertest-as-promised')(require('../server'))
const expect = require('chai').expect
const db = require('../server/db')
const User = require('../server/db/user.model')

describe('api endpoints', function() {

  before(function () {
    return db.sync({force: true})
  })

  describe('`/people` URI', function() {
    it('GET responds initially with empty array', function() {
      return supertest
        .get('/people')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).to.eql([])
        })
    })

    it('GET responds with all users', function() {
      const user = User.create({
        name: 'Sean',
        favoriteCity: 'New York'
      })
      .then(function () {
        return supertest
        .get('/people')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body[0].name).to.eql('Sean')
          expect(res.body[0].id).to.eql(1)
        })
      })
    })

    it('POST creates a new user', function() {
      const user = {name: "Freda", favoriteCity: "New York"}
      return supertest
      .post('/people')
      .send(user)
      .expect({"id":2, "name": "Freda", "favoriteCity": "New York"})
    })

    it('PUT updates a single user', function() {
      const user = {id: 1, favoriteCity: "Brooklyn"}
      return supertest
      .put('/people')
      .send(user)
      .expect({"id":1, "name": "Sean", "favoriteCity": "Brooklyn"})
    })

  })

  describe('`/people/:id` URI', function() {

    it('GET responds with single user', function() {
      return supertest
      .get('/people/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body.name).to.eql('Sean')
        expect(res.body.id).to.eql(1)
      })
    })

    it('DELETE destroys a single user', function() {
      return supertest
      .delete('/people/1')
      .expect(204)
    })

  })
})
