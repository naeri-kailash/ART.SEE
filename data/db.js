var fs = require('fs')

var artists = require('./artist.json')
var artwork = require('./artwork.json')

module.exports = {
  getArtist: getArtist,
  getArtwork: getArtwork
}

function readArtist (artistID, cb) {
  fs.readFile('data/artist.json', 'utf8', function (err, data) {
    if (err) {
      return cb(err)
    }
    var json = JSON.parse(data)
    var result = json.find(function (a) {
      return a.id === artistId
    })
    cb(null, result)
  })
}

function readArtwork (id, cb) {
  fs.readFile('data/artwork.json', 'utf8', function (err, data) {
    if (err) {
      return cb(err)
    }
    var json = JSON.parse(data)
    var result = json.find(function (a) {
      return a.id === id
    })
    cb(null, result)
  })
}
