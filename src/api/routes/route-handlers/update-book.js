'use strict';

const db = process.env.DB;

module.exports = (request, response) => {
    let { title, author, isbn, image_url, description, bookshelf_id } = request.body;
    let values = [title, author, isbn, image_url, description, bookshelf_id, request.params.id];

    if(db === 'pg'){
      request.model.put(values)
        .then(response.redirect(`/books/${request.params.id}`))
        .catch(error => response.render('pages/error', { error: error }));
    } else {
      request.model.put(request.params.id, request.body)
        .then(response.redirect(`books/${request.params.id}`))
        .catch(error => response.render('pages/error', { error: error }));
    }
}