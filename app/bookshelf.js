var config = {
  client: 'sqlite3',
  connection: {
    filename: "./snipperino.sqlite"
  },
};

var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
