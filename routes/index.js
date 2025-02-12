/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const routes = require('express').Router();

/*****************************/
/*** ROUTES ***/
/*****************************/
routes.use('/', require('./swagger'));
routes.use('/categories', require('./categories'));
routes.use('/orders', require('./orders'));
routes.use('/users', require('./users'));

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = routes;
