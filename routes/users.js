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
const { validateUsers } = require('../middlewares/validator');

routes
  .get('/', getAll)
  .get('/:id', Auth.login, getSingle)
  .post('/', validateUsers, createUser)
  .put('/:id', validateUsers, Auth.login, updateUser)
  .delete('/:id', Auth.login, deleteUser)
  .post('/login', loginUser);

module.exports = routes;
