import dbconfig from './config';
let knex = require('knex')(dbconfig);
let bookshelf = require('bookshelf')(knex);

export default bookshelf;
