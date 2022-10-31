const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const { JWT_SECRET } = process.env;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const result = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({
      where: { email: result.email },
      attributes: { exclude: ['password'] },
    });
    req.user = user;

    return next();
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

// token valido
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiaWF0IjoxNjY2ODk1NjE3LCJleHAiOjE2NjgxOTE2MTd9.NhGR46ZH8rgWeeDBqVC-r8Ug_fEOSVbDz61X63b2RLM