const services = require('../services');

module.exports = async (req, res) => {
  const { message } = await services.searchUser();

  return res.status(200).json(message);
};