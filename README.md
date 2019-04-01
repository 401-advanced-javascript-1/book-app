#JS401 - Project 2 - Book App
## Author: Cory Henderson
This project required modularization of an existing server and wiring it to both a Postgres and Mongo database.

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/book-app)

## Documentation

# Modules
- index.js
- pg-server.js
- mongo-server.js
- model-finder.js
- pg-model.js
- mongo-model.js
- 404.js, 500.js
- pg-routes.js
- route-handlers


# Setup
- .env requirements
    - MONGODB_URI=mongodb://localhost:27017/teams (for MongoDB NoSQL)
    - DATABASE_URL=postgres://localhost:5432/books (for postgres SQL)
    - PORT=3000 (for nodemon)
    - DB=postgres or mongo (initiates proper server files)

## Tests
- Testing for expected route endpoints is performed using jest.

## UML
