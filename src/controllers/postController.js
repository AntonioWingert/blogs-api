const postService = require('../services/postService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const post = await postService.create(title, content, categoryIds, id);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};