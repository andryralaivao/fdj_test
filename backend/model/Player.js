const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({

    name: { type: String, required: true },
    position: String,
    thumbnail: String,
    signin: {
        amont: Number,
        currency: String
    },
    born: Date
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;