const jwt = require('jsonwebtoken');

module.exports = async (payload) => {
  const { JWT_SECRET } = process.env;

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15d',
  });

  return token;
};