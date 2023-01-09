const swaggerAutogen = require('swagger-autogen')();

const outputFile = './api.json';
const endpointsFiles = ['../app.js'];

const doc = {
    info: {
        version: "1.0.0",
        title: "FDJ API",
        description: "FDJ Api Documentation."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "League",
            "description": "League endpoints"
        },
        {
            "name": "Team",
            "description": "Team endpoints"
        },
        {
            "name": "Player",
            "description": "Player endpoints"
        }
    ],
    definitions: {
        League: {
            "_id": "5d2cdcf7da07b95bb8f16ed1",
            "name": "English Premier League"
        },
        Team: {
            "_id": "5d2d01fdda07b95bb8f16f0a",
            "name": "Arsenal",
            "thumbnail": "https://www.thesportsdb.com//images//media//team//badge//a1af2i1557005128.png"
        },
        Player: {
            "_id": "5d2d058cda07b95bb8f16f80",
            "name": "Pierre-Emerick Aubameyang",
            "position": "Forward",
            "thumbnail": "https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg",
            "signin": {
                "amount": 63750000,
                "currency": "eur"
            },
            "born": "1989-06-19T01:37:19.198Z"
        },
        ArrayOfLeagues: [
            {
                "_id": "5d2cdcf7da07b95bb8f16ed1",
                "name": "English Premier League"
            }
        ],
        ArrayOfTeams: [
            {
                "_id": "5d2d01fdda07b95bb8f16f0a",
                "name": "Arsenal",
                "thumbnail": "https://www.thesportsdb.com//images//media//team//badge//a1af2i1557005128.png"
            }
        ],
        ArrayOfPlayers: [
            {
                "_id": "5d2d058cda07b95bb8f16f80",
                "name": "Pierre-Emerick Aubameyang",
                "position": "Forward",
                "thumbnail": "https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg",
                "signin": {
                    "amount": 63750000,
                    "currency": "eur"
                },
                "born": "1989-06-19T01:37:19.198Z"
            }
        ]
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc)
