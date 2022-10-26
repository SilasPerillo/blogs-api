'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
    postId: {
      field: 'post_id',
      type: Sequelize.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      primaryKey: true,
    },
    categoryId: {
      field: 'category_id',
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      primaryKey: true,
    },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
