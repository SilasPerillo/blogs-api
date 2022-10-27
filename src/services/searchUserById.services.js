const { User } = require('../models');

module.exports = async (id) => {
  const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!result) return { type: 'NOT_FOUND', message: 'User does not exist' };

  return { type: null, message: result };
};