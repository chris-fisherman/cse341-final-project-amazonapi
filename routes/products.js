const routes = require('express').Router();
const {
  getAll,
  getSingle,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/products');
const { validateProducts } = require('../middlewares/validator');
const { isAuthenticated } = require('../middlewares/authentication');

routes
  .get('/', getAll)
  .get('/:id', getSingle)
  .post('/', isAuthenticated, validateProducts, createProduct)
  .put('/:id', isAuthenticated, validateProducts, updateProduct)
  .delete('/:id', deleteProduct);

module.exports = routes;
