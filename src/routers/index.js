const express = require('express');
const userRouter = require('./user.routers');
const categoryRouter = require('./categories.routes');
const blogPostRouter = require('./blogPost.routes');

const routes = express.Router();

routes.use(userRouter);
routes.use(categoryRouter);
routes.use(blogPostRouter);

module.exports = routes;
