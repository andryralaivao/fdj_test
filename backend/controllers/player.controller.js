const PlayerLib = require('../lib/player.lib');
const playerLib = new PlayerLib();

async function getPlayerForTeam(req, res, next) {

    playerLib.getForTeam(req.params.teamId, function (error, players) {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint getting players for a given team'
        // #swagger.parameters['teamId'] = { description: 'Team id' }

        if (error)
            return res.status(404).json({ code: 'notfound', error });

        /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/ArrayOfPlayers" },
          description: 'List of players'
        } */
        res.status(200).json(players);
    });
}

module.exports = {
    getPlayerForTeam
}