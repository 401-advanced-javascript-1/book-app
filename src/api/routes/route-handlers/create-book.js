'use strict';

const db = process.env.DB;

module.exports = (request, response, next) => {
  if(db === 'pg'){
    request.model.createShelf(request.body.bookshelf)
      .then(id => {
        let { title, author, isbn, image_url, description } = request.body;
        let values = [title, author, isbn, image_url, description, id];

        request.model.post(values)
          .then(result => response.redirect(`/books/${result.rows[0].id}`))
          .catch(error => response.render('pages/error', { error: error }));
    })
  } else {
    request.model.post(request.body.bookshelf)
      .then(response.redirect('/'))
      .catch(error => response.render('pages/error', { error: error }));
  }
}