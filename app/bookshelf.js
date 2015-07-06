var dbconfig = require('./dbconfig');
var knex = require('knex')(dbconfig);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
