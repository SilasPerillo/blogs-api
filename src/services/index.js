const loginPost = require('./loginPost.service');
const createUser = require('./createUser.service');
const searchUser = require('./searchUser.service');
const searchUserById = require('./searchUserById.services');

module.exports = {
  loginPost,
  createUser,
  searchUser,
  searchUserById,
};
