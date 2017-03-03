var fs = require('fs')
var db = require('./data/db')

module.exports = {
  getHome: getHome
  // getArtwork: getArtwork,
  // getArtist: getArtist
}

// functions...
function getImageID () {
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
  var data = getImageID()
  res.render('home', data)
}

function getArtwork (req, res) {

}

function getArtist (req, res) {

}
