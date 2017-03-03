var fs = require('fs')

var artist = require('./artist.json')
var artwork = require('./artwork.json')

module.exports = {
  readArtist: readArtist,
  readArtwork: readArtwork
}

function readArtist (artistId, cb) {
    var result = artist.find(function (a) {
      return a.id === artistId
    })
    cb(null, result)
}

function readArtwork (artworkId, cb) {
    var result = artwork.find(function (art) {
      return art.artworkId === artworkId
    })
    cb(null, result)
  // })
}
