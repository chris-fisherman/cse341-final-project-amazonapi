/* eslint-disable no-unused-vars */
/*****************************/
/*** REQUIRE STATEMENTS ***/
/*****************************/
/* router */
const routes = require('express').Router();
const categories = require('./categories');
const users = require('./users');
const products = require('./products');
const passport = require('passport');

/*****************************/
/*** ROUTES ***/
/*****************************/
routes.use('/', require('./swagger'));
routes.use('/categories', categories);
routes.use('/users', users);
routes.use('/products', products);
routes.use('/orders', require('./orders'));
/*** login ***/
routes.get('/login', passport.authenticate('github'), (req, res) => {});
/*** logout ***/
routes.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

/*****************************/
/*** EXPORTS ***/
/*****************************/
module.exports = routes;
