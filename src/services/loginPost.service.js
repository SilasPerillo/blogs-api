const { User } = require('../models');
const createToken = require('../utils/createToken');
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
  const token = await createToken({ email });

  return { type: null, message: token };
};