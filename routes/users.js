const routes = require('express').Router();
const Auth = require('../helpers/auth');
const {
  getAll,
  getSingle,
  createUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controllers/users');
const { getUserValidations } = require('../middlewares/validation');

routes
  .get('/', getAll)
  .get('/:id', Auth.login, getSingle)
  .post('/', getUserValidations(), createUser)
  .put('/:id', Auth.login, getUserValidations(), updateUser)
  .delete('/:id', Auth.login, deleteUser)
  .post('/login', loginUser);

module.exports = routes;
