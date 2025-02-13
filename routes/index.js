/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const routes = require('express').Router();
const categories = require('./categories');
const users = require('./users');
const products = require('./products');

/*****************************/
/*** ROUTES ***/
/*****************************/
routes.use('/', require('./swagger'));
routes.use('/categories', categories);
routes.use('/users', users);
routes.use('/products', products);
routes.use('/orders', require('./orders'));

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = routes;
