const services = require('../services');
const errorMap = require('../utils/errorMap');

module.exports = async (req, res) => {
  const { body } = req;
  const { type, message } = await services.loginPost(body);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json({ token: message });
};