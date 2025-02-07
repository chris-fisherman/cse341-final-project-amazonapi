/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const routes = require('express').Router();
const categories = require('./categories');

/*****************************/
/*** ROUTES ***/
/*****************************/
routes.use('/category', categories);

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = routes;
