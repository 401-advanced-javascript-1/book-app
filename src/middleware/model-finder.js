'use strict';

require('dotenv').config();

module.exports = (req,res,next) => {
    let modelName = process.env.DB;
    req.model = require(`../models/books/${modelName}/${modelName}-model.js`);
    next();
};