var express = require('express');
var router = express.Router();

const controller = require('../controllers/team.controller');

router.get('/forLeague/:leagueId', controller.getTeamsForLeague);
router.get('/:teamId', controller.getTeamDetails);

module.exports = router;
