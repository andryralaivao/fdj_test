const Team = require('../model/Team');
const Player = require('../model/Player');

class PlayerLib {

    getForTeam(teamId, callback) {
        Team.findById(teamId, { teams: true }, { populate: 'players' }, (error, team) => {

            if(error)
                return callback(error);

            if (!team)
                return callback({ code: 'notfound' });

            callback(null, team.players);
        });
    }
}

module.exports = PlayerLib;
