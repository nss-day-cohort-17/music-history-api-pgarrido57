'use strict'

// <require a song model>
const { bookshelf } = require('../db/database');
const song = require('../models/song');

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  song.getAll()
  .then( (songs) => {
    res.status(200).json(songs);
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getSong = ({params: {id}}, res, next) => {
  song.getSingleSong(id)
  .then( (song) => {
    res.status(200).json(song)
  })
  .catch( (error) => {
    next(error);
  });
};

// <stretch goal: methods for adding, deleting, editing a song>
