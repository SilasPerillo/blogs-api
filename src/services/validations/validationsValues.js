const { loginSchema, userSchema } = require('./schemas');

const validadeLogin = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return { type: error.details[0].type, message: 'Some required fields are missing' };

  return { type: null, message: '' };
};

const validadeUser = (body) => {
  const { error } = userSchema.validate(body);
  if (error) return { type: error.details[0].type, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validadeLogin,
  validadeUser,
};