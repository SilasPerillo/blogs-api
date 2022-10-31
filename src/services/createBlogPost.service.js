const { validadeBlogPost } = require('./validations/validationsValues');
const validadeCategories = require('./utils/validadeCategories');
const createPost = require('./utils/createPost');

module.exports = async (body, user) => {
  const error = validadeBlogPost(body);
  if (error.type) return error;

  const validade = await validadeCategories(body);

  if (validade) {
    return { 
      type: 'NOT_FIND', message: 'one or more "categoryIds" not found' }; 
    }
    
    const result = await createPost(body, user); // utils

return { type: null, message: result };
};