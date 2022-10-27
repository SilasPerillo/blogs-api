const services = require('../services');
const errorMap = require('../utils/errorMap');

module.exports = async (req, res) => {
  const { body } = req;
  const { type, message } = await services.createUser(body);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(201).json({ token: message });
};