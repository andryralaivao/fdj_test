var express = require('express');
var router = express.Router();

const controller = require('../controllers/league.controller');

router.get('/searchByName/:searchTerm', controller.searchLeaguesByName);
router.get('/:leagueId', controller.getLeagueDetails);

module.exports = router;