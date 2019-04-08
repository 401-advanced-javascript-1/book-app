'use strict';

const bookshelves = require('./bookshelf-schema.js');

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const books = mongoose.Schema({
  title: {type:String, required: true},
  author: { type:String, required: true},
  isbn: {type:String, required: true},
  image_url: {type:String, required: false},
  description: {type: String, required: false},
},{toObject:{virtuals: true}, toJSON: {virtuals:true}}
);

books.virtual('bookshelves', {
  ref: 'bookshelves',
  localField: 'bookshelf',
  foreignField: 'name',
  justOne: false,
});

books.pre('find', function() {
  try{
    this.populate('bookshelves');
  }
  catch(e) {console.error('find error', e); }
});

module.exports = mongoose.model('books', books);
