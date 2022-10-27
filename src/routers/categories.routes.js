const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const routes = express.Router();

routes.post('/categories', middleware.authToken, controller.insertCategories);

module.exports = routes;