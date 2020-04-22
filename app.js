/* Entry point */

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const routes = require('./routes/routes.js');

app.set('view engine', 'pug');


// middleware
app.use('/static', express.static('public'));
app.use(express.urlencoded());
app.use(routes);
app.listen(port);