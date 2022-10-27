const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const routes = express.Router();

routes.post('/categories', middleware.authToken, controller.insertCategories);
routes.get('/categories', middleware.authToken, controller.findAllCategories);

module.exports = routes;