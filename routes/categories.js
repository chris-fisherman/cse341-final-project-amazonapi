const routes = require('express').Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories');
const { validateCategories } = require('../middlewares/validator');

routes
  .get('/', getAllCategories)
  .get('/:id', getCategoryById)
  .post('/', validateCategories, createCategory)
  .put('/:id', validateCategories, updateCategory)
  .delete('/:id', deleteCategory);

module.exports = routes;
