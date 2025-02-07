const routes = require('express').Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categories');

routes.get('/', getAllCategories)
  .get('/:id', getCategoryById)
  .post('/', createCategory)
  .put('/:id', updateCategory)
  .delete('/:id', deleteCategory);

module.exports = routes;