const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const routes = express.Router();

routes.post('/post', middleware.authToken, controller.createBlogPost);

module.exports = routes;