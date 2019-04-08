'use strict';

const bookshelvesSchema = require('./bookshelf-schema.js');
const MongoModel = require('./mongo-model.js');

class Bookshelves extends MongoModel {}

module.exports = new Bookshelves(bookshelvesSchema);