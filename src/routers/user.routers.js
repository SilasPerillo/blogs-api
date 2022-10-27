const express = require('express');
const controller = require('../controllers');

const routes = express.Router();

routes.post('/login', controller.loginPost);

module.exports = routes;