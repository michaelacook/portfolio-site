/* Entry point */


// determine if dev environment and if so require dotenv 
const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
    require('dotenv').config();
}

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

// require middleware
const projectsMiddleware = require('./middleware/projectsMiddleware.js')();
const errorMiddleware = require('./middleware/errorMiddleware.js')();
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js')();

app.set('view engine', 'pug');

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('public'));
app.use(projectsMiddleware);
app.use(express.urlencoded());
app.use(routes);
app.use(errorMiddleware);
app.use(notFoundMiddleware);


// server
app.listen(port, () => console.log("Server listening on port 3000."));
