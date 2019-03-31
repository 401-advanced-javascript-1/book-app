'use strict';

module.exports = (req,res,next) => {
    req.model = require(`../models/books/pg/pg-book-model.js`);
    next();
};