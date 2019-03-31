'use strict';

const superagent = require('superagent');
const Book = require('../../../models/books/pg/book-schema.js');

module.exports = (request, response) => {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=';
  
    if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
    if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }
  
    superagent.get(url)
      .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
      .then(results => response.render('pages/searches/show', { results: results }))
      .catch(error => response.render('pages/error', { error: error }));
  }