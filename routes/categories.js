const routes = require('express').Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory } = require('../controllers/categories');

routes.get('/', getAllCategories)
  .get('/:id', getCategoryById)
  .post('/', createCategory)
  .put('/:id', updateCategory);

module.exports = routes;