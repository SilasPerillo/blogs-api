const { Category } = require('../models');
// findAllCategories
module.exports = async () => {
  const result = await Category.findAll({ attributes: { exclude: ['password'] } });

  return { message: result };
};
