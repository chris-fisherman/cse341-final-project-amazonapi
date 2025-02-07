/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const routes = require('express').Router();
const categories = require('./categories');
const users = require('./users');

/*****************************/
/*** ROUTES ***/
/*****************************/
routes.use('/', require('./swagger'));
routes.use('/categories', categories);
routes.use('/users', users);

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = routes;
