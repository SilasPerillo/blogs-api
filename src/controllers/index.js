const loginPost = require('./loginPost.controller');
const createUser = require('./createUser.controller');
const searchUser = require('./searchUser.controller');
const searchUserById = require('./searchUserById.controller');
const insertCategories = require('./insertCategories.controller');
const findAllCategories = require('./findAllCategories.controller');

module.exports = {
  loginPost,
  createUser,
  searchUser,
  searchUserById,
  insertCategories,
  findAllCategories,
};