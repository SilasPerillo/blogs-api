const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { validadeLogin } = require('./validations/validationsValues');

module.exports = async (body) => {
  const error = validadeLogin(body);
  if (error.type) return error;

  const { email, password } = body;
  
  const result = await User.findOne({
    where: { email },
  });

  if (!result || password !== result.dataValues.password) {
 return {
    type: 'INVALID_FIELDS', message: 'Invalid fields',
  }; 
}

  const { JWT_SECRET } = process.env;

  const token = jwt.sign({ email }, JWT_SECRET, {
    expiresIn: '15d',
  });

  return { type: null, message: token };
};