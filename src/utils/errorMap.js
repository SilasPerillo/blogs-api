const errorMap = {
  INVALID_FIELDS: 400,
  USER_ALREADY_REGISTERED: 409,
  NOT_FOUND: 404,
  NOT_FIND: 400,
  'string.min': 400,
  'string.empty': 400,
  'string.email': 400,
  'any.required': 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
