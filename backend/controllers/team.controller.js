const TeamLib = require('../lib/team.lib');
const teamLib = new TeamLib();

async function getTeamDetails(req, res, next) {
    // #swagger.tags = ['Team']
    // #swagger.description = 'Endpoint for getting team details'
    // #swagger.parameters['teamId'] = { description: 'team id' }

    teamLib.getDetails(req.params.teamId, function (error, team) {

        if (error) {

            if (error.code == error.code == 404)
                return res.status(404).json({ code: 'notfound', error });

            return res.status(500).json({ code: 'internal', error });
        }

        /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/Team" },
          description: 'A team'
        } */
        res.status(200).json(team);
    });
}

async function getTeamsForLeague(req, res, next) {
    // #swagger.tags = ['Team']
    // #swagger.description = 'Endpoint for getting teams for a given league'
    // #swagger.parameters['leagueId'] = { description: 'League id' }

    teamLib.getForLeague(req.params.leagueId, function (error, teams) {

        if (error) {

            if (error.code == error.code == 404)
                return res.status(404).json({ code: 'notfound', error });

            return res.status(500).json({ code: 'internal', error });
        }

        /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/ArrayOfTeams" },
          description: 'List of teams'
        } */
        res.status(200).json(teams);
    });
}

module.exports = {
    getTeamsForLeague,
    getTeamDetails
}