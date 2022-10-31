const { Category } = require('../../models');

module.exports = async (body) => {
  const findCategories = (await Promise.all(body.categoryIds.map((id) => Category.findByPk(id))));

  const validadeCategories = findCategories.some((value) => value === null);

  return validadeCategories;
};
