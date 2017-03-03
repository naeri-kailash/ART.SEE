var fs = require('fs')
var db = require('./data/db')

module.exports = {
  getHome: getHome,
  getArtwork: getArtwork
  // getArtist: getArtist
}

// functions...
function getImageId () {
  return {
    ID: [
      '1001',
      '1002',
      '1003',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '3001',
      '3002',
      '3003',
      '4001',
      '5001'
    ]
  }
}

function getHome (req, res) {
  var data = getImageId()
  res.render('home', data)
}

function getArtwork (req, res) {
  var artworkId = req.params.id
  var data = readArtwork(artworkId)
  res.render('artwork', data)
}

function getArtist (req, res) {

}
