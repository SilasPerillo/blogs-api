const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = async (payload) => {
  const { JWT_SECRET } = process.env;

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15d',
  });

  return token;
};