'use strict';

// <require the express Router>
const { Router } = require('express');
const router = Router();

// <require the songCtrl to get access to its methods>
const { getSongs, getSong, addSong, editSong, deleteSong } = require('../controllers/songCtrl');

// <define routes for getting all songs and a single song>
router.get('/songs', getSongs)
router.get('/songs/:SongId', getSong)

// <stretch: define routes for posting, deleting, editing a song>
router.post('/songs/new', addSong)
router.post('/songs/:SongId', editSong)
router.delete('/songs/:SongId', deleteSong)


module.exports = router;
