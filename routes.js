const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route
  .get('/', homeController.index)

// Rotas de login
route
  .get('/login/index', loginController.index)
  .post('/login/register', loginController.register)
  .post('/login/login', loginController.login)
  .get('/login/logout', loginController.logout)

// Rotas de contato
route
  .get('/contato/index', loginRequired, contatoController.index)
  .post('/contato/register', loginRequired, contatoController.register)
  .get('/contato/index/:id', loginRequired, contatoController.editIndex)
  .post('/contato/edit/:id', loginRequired, contatoController.edit)
  .get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;