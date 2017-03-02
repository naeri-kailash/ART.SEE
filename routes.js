var fs = require('fs')

module.exports = {
  getHome: getHome,
  getArtProfile: getArtProfile,
  getArtistProfile: getArtistProfile
}

// functions...

function getHome (req, res) {
  res.render('home')
}

function getArtProfile (req, res) {

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

function getArtistProfile (req, res) {

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
