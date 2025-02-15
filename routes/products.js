const routes = require('express').Router();
const {
  getAll,
  getSingle,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/products');
const { validateProducts } = require('../middlewares/validator');

routes
  .get('/', getAll)
  .get('/:id', getSingle)
  .post('/', validateProducts, createProduct)
  .put('/:id', validateProducts, updateProduct)
  .delete('/:id', deleteProduct);

module.exports = routes;
