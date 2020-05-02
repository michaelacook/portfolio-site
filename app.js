/*
Instantiate the app, require dependencies, set up middleware and routes.
Entry point is bin/www.js
*/

require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

// require middleware
const projectsMiddleware = require('./middleware/projectsMiddleware.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');

app.set('view engine', 'pug');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));
app.use((req, res, next) => projectsMiddleware(req, res, next));
app.use(express.urlencoded());
app.use(routes);

// error handling middleware
app.use((err, req, res, next) => errorMiddleware(err, req, res, next));

// 404 handler
app.use((req, res, next) => notFoundMiddleware(req, res, next));

app.listen(3000, () => console.log("Server listening on port 3000."));

// module.exports = app;