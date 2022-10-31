const { BlogPost, PostCategory } = require('../../models');

module.exports = async (body, user) => {
  const { title, content, categoryIds } = body;

  const { dataValues } = await BlogPost.create({
    title,
    content,
    userId: user.dataValues.id,
    published: new Date(),
    updated: new Date(),
  });

  const { id } = dataValues;

  await PostCategory.bulkCreate(categoryIds.map((ids) => ({
    postId: id,
    categoryId: ids,
  })));

    return dataValues;
};