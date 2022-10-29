const express = require('express');
const userRouter = require('./user.routers');
const categoryRouter = require('./categories.routes');
// const postRouter = require('./post.routes');

const routes = express.Router();

routes.use(userRouter);
routes.use(categoryRouter);
// routes.use(postRouter);

module.exports = routes;
