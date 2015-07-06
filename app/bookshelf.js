var dbConfig = {
  client: 'sqlite3',
  connection: {
    filename: "./snipperino.sqlite"
  },
};

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
