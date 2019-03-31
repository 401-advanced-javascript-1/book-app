'use strict';

module.exports = (request, response, next) => {
  request.model.getBookshelves()
    .then(shelves => {

      let id = [request.params.id];
      request.model.get(id)
        .then(result => {
          console.log(shelves.rows)
          response.render('pages/books/show', { book: result.rows[0], bookshelves: shelves.rows })
        })
        .catch(error => response.render('pages/error', { error: error }));
    })
}