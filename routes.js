var fs = require('fs')

module.exports = {
  getHome: getHome
  // getgetArtID: getArtID,
  // getArtistID: getArtistID
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

function getArtID (req, res) {

}

function linkArtProfile (req, res) {
  // read name of image
  // use name of image to populate link
}

function renderArtProfile (req, res) {
  // take image name
  // read object in database based on image name
  // render page with information from db
}

function getArtistID (req, res) {

}

function linkArtistProfile (req, res) {
  // read name of artist
  // use name of artist to populate link
}

function renderArtistProfile (req, res) {
  // take artist name
  // read object in database based on artist name
  // render page with information from db
}
