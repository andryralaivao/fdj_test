const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({

    name: { type: String, required: true },
    thumbnail: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
