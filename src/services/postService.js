const { BlogPost, PostCategory, Category } = require('../models');
const errorListener = require('../utils/errorListener');

const create = async (title, content, categoryIds, id) => {
  const validCategories = await Category.findAll({ where: { id: categoryIds } });

  if (validCategories.length !== categoryIds.length) {
    throw errorListener(400, 'one or more "categoryIds" not found');
  }

  const timestamp = new Date();

  const blogPost = await BlogPost.create({
    title, content, userId: id, published: timestamp, updated: timestamp,
  });

  const postCategories = categoryIds.map((categoryId) => ({
    postId: blogPost.id,
    categoryId,
  }));

  await PostCategory.bulkCreate(postCategories);

  return blogPost;
};

module.exports = {
  create,
};