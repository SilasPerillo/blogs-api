const { User } = require('../models');

module.exports = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });

  return { message: result };
};