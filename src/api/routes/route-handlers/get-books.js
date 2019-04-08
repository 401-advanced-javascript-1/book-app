'use strict';

require('dotenv').config();
let db = process.env.DB;

module.exports = (request, response, next) => {
  console.log('in get');
  console.log(request.model[0]);
  
  request.model.get()
		.then(results => {
      console.log('in results');
      if(db === 'pg'){
        console.log('in pg getbooks');
        if (results.rows.rowCount === 0) {
          response.render('pages/searches/new');
        } else {
          response.render('pages/index', { books: results.rows })
        }
      } else {
        console.log('in mongo getbooks');
        if(results.length === 0){
          response.render('pages/searches/new');
        } else {
          response.render('pages/index', { books: results })
        }
      }
    })
		.catch(error => response.render('pages/error', { error: error }));
};