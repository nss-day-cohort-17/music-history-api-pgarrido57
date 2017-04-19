'use strict'

// <Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db>
const { bookshelf } = require('../db/database');

// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
const song = bookshelf.Model.extend({
  tableName: 'Song',
}, {
  getAll: () => {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  },
  getSingleSong: (id) => {
    return this.forge({id})
    .fetch()
    .then( (show) => {
      return show;
    })
    .catch( (error) => {
      return error;
    });
  }
});

module.exports = bookshelf.model('song', song);
