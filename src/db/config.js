// Uses ES5 for compatibility with Knex Migrations CLI.
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: "./snipperino.sqlite"
  },
};
