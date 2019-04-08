'use strict';

const books = require('./book-model.js');
const mongoose = require('mongoose');

const bookshelves = mongoose.Schema({
  name: {type:String, required: true},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}} );

bookshelves.virtual('books', {
  ref: 'books',
  localField: '_id',
  foreignField: 'bookshelf',
  justOne: false,
});

module.exports = mongoose.model('bookshelves', bookshelves);