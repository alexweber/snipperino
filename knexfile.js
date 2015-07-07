// var dbconfig = require('./dist/db/config');
var dbconfig = {
  client: 'sqlite3',
  connection: {
    filename: "./snipperino.sqlite"
  }
};

module.exports = {

  development: dbconfig

};
