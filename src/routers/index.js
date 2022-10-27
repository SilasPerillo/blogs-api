const express = require('express');
const userRouter = require('./user.routers');

const routes = express.Router();

routes.use(userRouter);

module.exports = routes;
