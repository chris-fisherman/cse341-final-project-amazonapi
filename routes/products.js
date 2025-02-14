const routes = require('express').Router();
const Auth = require('../helpers/auth');
const {
  getAll,
  getSingle,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/products');
const { getProductValidation } = require('../middlewares/validation');

routes
  .get('/', getAll)
  .get('/:id', getSingle)
  .post('/', Auth.login, getProductValidation(), createProduct)
  .put('/:id', Auth.login, getProductValidation(), updateProduct)
  .delete('/:id', Auth.login, deleteProduct);

module.exports = routes;
