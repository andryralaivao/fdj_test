const mongoose = require('mongoose');

const LeagueSchema = mongoose.Schema({

    name: { type: String, required: true },
    sport: String,
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
});

const League = mongoose.model('League', LeagueSchema);

module.exports = League;