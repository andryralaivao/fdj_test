const League = require("../model/League");
const Team = require('../model/Team');

class TeamLib {

    getForLeague(leagueId, callback) {
        League.findById(leagueId, { teams: true }, { populate: 'teams' }, (error, league) => {

            if(error)
                return callback(error);

            if (!league)
                return callback({ code: 'notfound' });

            callback(null, league.teams);
        });
    }

    getDetails(id, callback){
        Team.findById(id, { name: true }, callback);
    }
}

module.exports = TeamLib;
