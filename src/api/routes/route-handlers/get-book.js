'use strict';

const db = process.env.DB;

module.exports = (request, response, next) => {
  request.model.getBookshelves()
    .then(shelves => {

      let id = [request.params.id];
      request.model.get(id)
        .then(result => {
          if(db === 'pg'){
          console.log(shelves.rows)
          response.render('pages/books/show', { book: result.rows[0], bookshelves: shelves.rows })
          } else {
            response.render('pages/books/show', { books: result[0], bookshelves: result })
          }
        })
        .catch(error => response.render('pages/error', { error: error }));
    })
}