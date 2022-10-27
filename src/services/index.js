const loginPost = require('./loginPost.service');
const createUser = require('./createUser.service');
const searchUser = require('./searchUser.service');
const searchUserById = require('./searchUserById.services');
const insertCategories = require('./insertCategories.service');

module.exports = {
  loginPost,
  createUser,
  searchUser,
  searchUserById,
  insertCategories,
};
