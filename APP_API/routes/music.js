var express = require('express');
const { routes } = require('../../app');
var router = express.Router();

const ctrlMusic = require('../controllers/music');

router.get('/music', ctrlMusic.getMusic);
router.post('/music', ctrlMusic.createMusic);
router.get('/music/:musicid', ctrlMusic.getSingleMusic);
router.put('/music/:musicid', ctrlMusic.updateMusic);
router.delete('/music/:musicid', ctrlMusic.deleteMusic);

module.exports = router;
