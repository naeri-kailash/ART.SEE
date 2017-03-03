var fs = require('fs')

var artists = require('./artist.json')
var artwork = require('./artwork.json')

module.exports = {
  getArtist: getArtist,
  getArtwork: getArtwork
}

function getArtist (artistID, cb) {
  fs.readFile('data/artist.json', 'utf8', function (err, data) {
    if (err) {
      return cb(err)
    }
    var json = JSON.parse(data)
    var result = json.find(function (a) {
      return a.id === artistID
    })
    cb(null, result)
  })
}
