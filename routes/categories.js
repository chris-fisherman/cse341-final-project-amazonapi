const routes = require('express').Router();
const { getAllCategories, getCategoryById, createCategory } = require('../controllers/categories');

routes.get('/', getAllCategories)
  .get('/:id', getCategoryById)
  .post('/', createCategory);

module.exports = routes;