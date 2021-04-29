var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlListDisplay = require('../controllers/list-display');
const ctrlAbout = require('../controllers/about');
const ctrlMusic = require('../controllers/music');

/* GET home page. */
router.get('/',ctrlMain.index);
router.get('/list', ctrlListDisplay.listDisplay);
router.get('/about', ctrlAbout.about);
router.get('/create', ctrlMusic.addNewMusic);
router.get('/details/:musicid', ctrlMusic.musicInfo);
router.post('/create', ctrlMusic.doAddNewMusic);

module.exports = router;

