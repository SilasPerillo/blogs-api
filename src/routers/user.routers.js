const express = require('express');
const controller = require('../controllers');

const routes = express.Router();

routes.post('/login', controller.loginPost);
routes.post('/user', controller.createUser);

module.exports = routes;