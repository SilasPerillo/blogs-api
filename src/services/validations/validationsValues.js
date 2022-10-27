const { loginSchema } = require('./schemas');

const validadeLogin = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return { type: error.details[0].type, message: 'Some required fields are missing' };

  return { type: null, message: '' };
};

module.exports = {
  validadeLogin,
};