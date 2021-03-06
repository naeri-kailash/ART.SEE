// var fs = require('fs') redundant
var db = require('./data/db')

module.exports = {
  getHome: getHome,
  getArtwork: getArtwork,
  getArtist: getArtist
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
  var artworkId = Number(req.params.id)
  db.readArtwork(artworkId, function (err, artworkDets) {
    if (err) {
      return err
    }
    res.render('artwork', artworkDets)
  })
}
//
function getArtist (req, res) {
  var artistId = Number(req.params.id)
  db.readArtist(artistId, function (err, artistDets) {
    if (err) {
      return err
    }
    res.render('artist', artistDets)
  })
}
