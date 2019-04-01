'use strict';

module.exports = (request, response) => {
    let { title, author, isbn, image_url, description, bookshelf_id } = request.body;
    let values = [title, author, isbn, image_url, description, bookshelf_id, request.params.id];
  
    request.model.put(values)
      .then(response.redirect(`/books/${request.params.id}`))
      .catch(error => response.render('pages/error', { error: error }));
}