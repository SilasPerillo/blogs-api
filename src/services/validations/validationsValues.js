const { loginSchema, userSchema, categorySchema, blogPostSchema } = require('./schemas');

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

const validadeCategory = (body) => {
  const { error } = categorySchema.validate(body);
  if (error) return { type: error.details[0].type, message: error.message };

  return { type: null, message: '' };
};

const validadeBlogPost = (body) => {
  const { error } = blogPostSchema.validate(body);
  if (error) return { type: error.details[0].type, message: 'Some required fields are missing' };

  return { type: null, message: '' };
};

module.exports = {
  validadeLogin,
  validadeUser,
  validadeCategory,
  validadeBlogPost,
};