const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  loginSchema,
  userSchema,
};