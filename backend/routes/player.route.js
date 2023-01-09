var express = require('express');
var router = express.Router();

const controller = require('../controllers/player.controller');

router.get('/forTeam/:teamId', controller.getPlayerForTeam);

module.exports = router;
