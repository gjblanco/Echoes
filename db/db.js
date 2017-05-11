var config      = require('../knexfile.js');
var env         = 'production'; //'development'
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);
