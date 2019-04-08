'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const pg = require('pg');

if(process.env.DB==='mongo'){
  const mongooseOptions = {
    useNewUrlParser:true,
    useCreateIndex: true,
  };
  mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

  // require('./src/servers/mongo-server.js').start(process.env.PORT);
  require('./src/server.js').start(process.env.PORT);

} else {
  const client = new pg.Client(process.env.DATABASE_URL);
  client.connect();
  client.on('error', err => console.error(err));

  require('./src/servers/pg-server.js').start(process.env.PORT);

  module.exports = client;
}
