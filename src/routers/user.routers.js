const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const routes = express.Router();

routes.post('/login', controller.loginPost);
routes.post('/user', controller.createUser);
routes.get('/user', middleware.authToken, controller.searchUser);

module.exports = routes;