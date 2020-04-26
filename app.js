
/*
Instantiate the app, require dependencies, set up middleware and routes.
Entry point is bin/www.js
*/

const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const projectsMiddleware = require('./middleware/projectsMiddleware.js');

app.set('view engine', 'pug');

// middleware
app.use('/static', express.static('public'));
app.use((req, res, next) => projectsMiddleware(req, res, next));
app.use(express.urlencoded());
app.use(routes);

module.exports = app;