var test = require('tape')
var cheerio = require('cheerio')
var request = require('supertest')
var server = require('../server')

test('homepage is visible', function (t) {
  var expected = 'ART.SEE'
  request(server)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'no error')
      var $ = cheerio.load(res.text)
      var actual = $('.header').text() // dot might be extra...
      t.equals(expected, actual, 'its a match!')
      t.end()
    })
})
