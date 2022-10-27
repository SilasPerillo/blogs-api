const express = require('express');
const userRouter = require('./user.routers');
const categoryRouter = require('./categories.routes');

const routes = express.Router();

routes.use(userRouter);
routes.use(categoryRouter);

module.exports = routes;
