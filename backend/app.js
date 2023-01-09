var express = require('express');

const leagueRouter = require('./routes/league.route');
var teamRouter = require('./routes/team.route');
var playerRouter = require('./routes/player.route');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/api.json');

var app = express();

if(app.get('env') != 'production')
  app.use(require('cors')());

// swagger documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Connect to mongo
require('./db/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/league', leagueRouter);
app.use('/team', teamRouter);
app.use('/player', playerRouter);

module.exports = app;
