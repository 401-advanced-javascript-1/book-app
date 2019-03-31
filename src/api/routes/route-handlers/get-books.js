'use strict';

module.exports = (request, response, next) => {

	request.model.get()
		.then(results => {
			if (results.rows.rowCount === 0) {
				response.render('pages/searches/new');
			} else {
				response.render('pages/index', { books: results.rows })
			}
		})
		.catch(error => response.render('pages/error', { error: error }));
};