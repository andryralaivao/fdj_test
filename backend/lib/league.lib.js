const League = require('../model/League');

class LeagueLib{

    searchByName(searchTerm, callback){
        League.find({ name: { $regex: searchTerm, $options: 'i' } }, callback)
    }

    getDetails(id, callback){
        League.findById(id, {name: true}, callback);
    }
}

module.exports = LeagueLib;
