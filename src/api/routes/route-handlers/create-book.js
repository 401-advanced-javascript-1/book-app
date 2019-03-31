'use strict';

module.exports = (request, response, next) => {
  request.model.createShelf(request.body.bookshelf)
    .then(id => {
      let { title, author, isbn, image_url, description } = request.body;
      let values = [title, author, isbn, image_url, description, id];

      request.model.post(values)
        .then(result => response.redirect(`/books/${result.rows[0].id}`))
        .catch(error => response.render('pages/error', { error: error }));
  })
}