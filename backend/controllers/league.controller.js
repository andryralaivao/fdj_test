const LeagueLib = require('../lib/league.lib');
const leagueLib = new LeagueLib();

async function getLeagueDetails(req, res) {
    // #swagger.tags = ['League']
    // #swagger.description = 'Endpoint for getting league details'
    // #swagger.parameters['leagueId'] = { description: 'League id' }

    leagueLib.getDetails(req.params.leagueId, function (error, league) {

        if (error) {

            if (error.code == error.code == 404)
                return res.status(404).json({ code: 'notfound', error });

            return res.status(500).json({ code: 'internal', error });
        }

        /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/League" },
          description: 'A league'
        } */
        res.status(200).json(league)
    });
}

async function searchLeaguesByName(req, res) {
    // #swagger.tags = ['League']
    // #swagger.description = 'Endpoint for leagues searching by name'
    // #swagger.parameters['searchTerm'] = { description: 'String term for search' }

    leagueLib.searchByName(req.params.searchTerm, function (error, leagues) {

        if (error) {

            if (error.code == error.code == 404)
                return res.status(404).json({ code: 'notfound', error });

            return res.status(500).json({ code: 'internal', error });
        }

        /* #swagger.responses[200] = {
          schema: { $ref: "#/definitions/ArrayOfLeagues" },
          description: 'List of leagues'
        } */
        res.status(200).json(leagues);
    });
}

module.exports = {
    getLeagueDetails,
    searchLeaguesByName
}