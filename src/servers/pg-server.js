'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const notFound = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const router = require('../api/routes/pg-routes.js');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

//Routes
app.use(router);

//Error middleware
app.use(notFound);
app.use(errorHandler);

let start = (PORT=process.env.PORT) => app.listen(PORT, () => console.log(`Postgres server listening on port: ${PORT}`));

module.exports = {start, app};