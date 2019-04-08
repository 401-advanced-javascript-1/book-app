'use strict';

const db = process.env.DB;

module.exports = (request, response, next) => {
    let id = [request.params.id];

    request.model.delete(id)
      .then(response.redirect('/'))
      .catch(error => response.render('pages/error', { error: error }));
  }