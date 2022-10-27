const { User } = require('../models');
const createToken = require('../utils/createToken');
const { validadeUser } = require('./validations/validationsValues');

module.exports = async (body) => {
  const error = validadeUser(body);
  if (error.type) return error;

  const { displayName, email, password, image } = body;

  const result = await User.findOne({
    where: { email },
  });
  if (result) return { type: 'USER_ALREADY_REGISTERED', message: 'User already registered' };
  
  await User.create({ displayName, email, password, image });

  const token = await createToken({ email, displayName, image });

  return { type: null, message: token };
};