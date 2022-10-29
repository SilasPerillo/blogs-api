const services = require('../services');

module.exports = async (req, res) => {
  const { message } = await services.findAllCategories();

  return res.status(200).json(message);
};