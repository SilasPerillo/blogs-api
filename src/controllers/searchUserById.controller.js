const services = require('../services');
const errorMap = require('../utils/errorMap');

module.exports = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await services.searchUserById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};
