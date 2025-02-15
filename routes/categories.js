const routes = require('express').Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories');
const { validateCategories } = require('../middlewares/validator');
const { isAuthenticated } = require('../middlewares/authentication');

routes
  .get('/', getAllCategories)
  .get('/:id', getCategoryById)
  .post('/', isAuthenticated, validateCategories, createCategory)
  .put('/:id', isAuthenticated, validateCategories, updateCategory)
  .delete('/:id', deleteCategory);

module.exports = routes;
