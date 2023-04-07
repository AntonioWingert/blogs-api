const { BlogPost, PostCategory, Category, User } = require('../models');
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

const getAll = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }, 
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }, 
    ],
  });

  if (!post) throw errorListener(404, 'Post does not exist');

  return post;
};

const update = async (params) => {
  const { id, title, content, userId } = params;
  const post = await getById(id);

  if (post.dataValues.userId !== userId) throw errorListener(401, 'Unauthorized user');

  await BlogPost.update({
    title,
    content,
    updated: new Date(),
  }, { where: { id } });

  const updatedPost = await getById(id);

  return updatedPost;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};