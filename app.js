/*
Instantiate the app, require dependencies, set up middleware and routes.
Entry point is bin/www.js
*/

const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

// require middleware
const projectsMiddleware = require('./middleware/projectsMiddleware.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');

app.set('view engine', 'pug');

// middleware
app.use('/static', express.static('public'));
app.use((req, res, next) => projectsMiddleware(req, res, next));
app.use(express.urlencoded());
app.use(routes);

// error handling middleware
app.use((err, req, res, next) => errorMiddleware(err, req, res, next));

// 404 handler
app.use((req, res, next) => notFoundMiddleware(req, res, next));

module.exports = app;