const routes = require('express').Router();
const Auth = require("../helpers/auth");
const { getAll, getSingle, createUser, loginUser, updateUser, deleteUser } = require('../controllers/users');

routes.get('/', getAll)
  .get('/:id', Auth.login, getSingle)
  .post('/',  createUser)
  .put('/:id', Auth.login, updateUser)
  .delete('/:id', Auth.login, deleteUser)
  .post('/login', loginUser);

module.exports = routes;