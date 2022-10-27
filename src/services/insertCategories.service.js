const { Category } = require('../models');
const { validadeCategory } = require('./validations/validationsValues');

module.exports = async (body) => {
  const error = validadeCategory(body);
  if (error.type) return error;
  
  const payload = await Category.create(body);

  return { type: null, message: payload };
};