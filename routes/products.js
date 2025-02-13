const routes = require('express').Router();
const Auth = require('../helpers/auth');
const {
  getAll,
  getSingle,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/products');

routes
  .get('/', getAll)
  .get('/:id', Auth.login, getSingle)
  .post('/', createProduct)
  .put('/:id', Auth.login, updateProduct)
  .delete('/:id', Auth.login, deleteProduct);

module.exports = routes;
